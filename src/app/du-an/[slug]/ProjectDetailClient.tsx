"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Landmark, User, MapPin, Sparkles } from "lucide-react";

export default function ProjectDetailClient({ slug }: { slug: string }) {
  const { data, setConsultationModalOpen } = useWebData();

  // Find corresponding project from context
  const project = data.projects.items.find((item) => item.href.endsWith(`/${slug}`));

  // State for active gallery image
  const [activeImage, setActiveImage] = useState(
    project && project.gallery && project.gallery.length > 0
      ? project.gallery[0]
      : project?.image || ""
  );

  if (!project) {
    return (
      <>
        <Header />
        <main className="flex-grow pt-32 pb-20 text-center bg-white">
          <div className="max-w-md mx-auto px-4 flex flex-col items-center gap-4">
            <h2 className="text-2xl font-bold text-[#2f5597]">Không tìm thấy dự án!</h2>
            <p className="text-gray-500 text-sm">Dự án này không tồn tại hoặc đã được gỡ bỏ khỏi hệ thống.</p>
            <Link href="/du-an" className="mt-4 px-6 py-2.5 bg-[#ba3434] text-white rounded-lg text-xs font-bold uppercase">
              Quay lại danh sách dự án
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Breadcrumbs and Back */}
        <div className="bg-[#f8f9fc] border-b border-gray-100 py-3.5">
          <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center text-xs">
            <Link href="/du-an" className="flex items-center gap-1.5 text-gray-500 hover:text-[#ba3434] font-semibold transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Danh sách dự án
            </Link>
            <div className="text-gray-400">
              <Link href="/" className="hover:underline">Trang chủ</Link> / <Link href="/du-an" className="hover:underline">Dự án</Link> / <span className="text-gray-600 font-bold">{project.title}</span>
            </div>
          </div>
        </div>

        {/* Project Layout Container */}
        <section className="py-12 md:py-20 max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Visual Showcase & Detailed Description */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#2f5597] uppercase leading-tight">
                {project.title}
              </h1>

              {/* Main Image */}
              <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src={activeImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Thumbnail Gallery Row */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                    Phối cảnh góc nhìn &amp; thiết kế nội thất bên trong (Click để phóng to)
                  </span>
                  <div className="grid grid-cols-3 gap-4">
                    {project.gallery.map((imgUrl, imgIdx) => {
                      const labels = [
                        "Mặt tiền chính (Góc 1)",
                        "Góc nhìn nghiêng (Góc 2)",
                        "Phối cảnh nội thất",
                      ];
                      const label = labels[imgIdx] || `Phối cảnh ${imgIdx + 1}`;

                      return (
                        <button
                          key={imgIdx}
                          onClick={() => setActiveImage(imgUrl)}
                          className={`relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm border-2 transition-all duration-300 flex flex-col text-left group cursor-pointer ${
                            activeImage === imgUrl
                              ? "border-[#ba3434] ring-2 ring-[#ba3434]/15"
                              : "border-gray-200 hover:border-gray-400"
                          }`}
                        >
                          <Image
                            src={imgUrl}
                            alt={`${project.title} - ${label}`}
                            fill
                            className="object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center">
                            <span className="text-[9px] font-bold text-white uppercase tracking-wide leading-tight">
                              {label}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Description */}
              <div className="flex flex-col gap-5 text-gray-600 text-justify text-sm md:text-base leading-relaxed">
                <h4 className="text-base font-extrabold text-[#2f5597] uppercase tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ba3434]" /> Tổng quan thiết kế & thi công
                </h4>
                <p>
                  Dự án <strong>{project.title}</strong> được thực hiện trọn gói bởi tổng thầu thiết kế và thi công XTÉCO. Công trình mang đậm hơi thở kiến trúc đương đại, hướng tới việc tối ưu hóa công năng sử dụng, lưu thông luồng khí tự nhiên và đón trọn vẹn ánh sáng mặt trời thông qua các mảng kính lớn chịu lực nhập khẩu.
                </p>
                <p>
                  Quy trình thi công được XTÉCO giám sát chặt chẽ theo tiêu chuẩn 5 sao quốc tế từ khâu làm sạch mặt bằng, đào móng, lắp dựng cốt thép thô, đến hoàn thiện hệ thống cơ điện thông minh (M&E) và nội thất liền tường. Sự kết hợp hoàn hảo giữa vật liệu bê tông trần, lam gỗ tự nhiên chống chịu thời tiết và khung thép tạo nên một diện mạo bề thế, tinh tế, khẳng định phong cách sống đẳng cấp của gia chủ.
                </p>
                <p>
                  Đại diện chủ đầu tư <strong>{project.client}</strong> chia sẻ sự hài lòng tuyệt đối về tiến độ bàn giao đúng hạn, sự minh bạch trong sử dụng vật tư của XTÉCO, và đặc biệt là sự tỉ mỉ trong xử lý các chi tiết góc cạnh hoàn thiện của ngôi nhà.
                </p>
              </div>
            </div>

            {/* Right Column: Metadata Sidebar Card */}
            <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-28">
              
              {/* Specs Card */}
              <div className="bg-[#f8f9fc] border border-gray-100 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-sm">
                <h3 className="text-base font-extrabold text-[#2f5597] uppercase tracking-wider border-b border-gray-200/80 pb-3">
                  Thông số dự án
                </h3>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-[#ba3434] mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Chủ đầu tư</span>
                      <strong className="text-sm text-[#2f5597]">{project.client}</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Landmark className="w-4 h-4 text-[#ba3434] mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Loại hình</span>
                      <strong className="text-sm text-gray-700">{project.model}</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#ba3434] mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Địa điểm</span>
                      <strong className="text-sm text-gray-700">Hà Nội / Vùng đô thị lân cận</strong>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="w-4 h-4 text-[#ba3434] mt-0.5" />
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Đơn vị phụ trách</span>
                      <strong className="text-sm text-[#2f5597] uppercase">XTÉCO Construction</strong>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-gray-200 my-2" />

                {/* Consultation trigger inside the card */}
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="w-full py-3 bg-[#2f5597] hover:bg-[#ba3434] text-white font-extrabold text-xs tracking-wider uppercase rounded-lg shadow transition-colors duration-300 cursor-pointer"
                >
                  Nhận báo giá & Tư vấn
                </button>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
