"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";
import { Briefcase, MapPin, Calendar, ArrowRight, Clock, AlertCircle, CheckCircle2, Mail } from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const { data } = useWebData();
  const careers = data.careers || {
    bannerTitle: "Tuyển Dụng Nhân Tài",
    title: "Cơ hội nghề nghiệp tại XTÉCO",
    description:
      "Chúng tôi luôn chào đón những ứng viên tài năng, sáng tạo, giàu nhiệt huyết và mong muốn thử thách bản thân trong môi trường chuyên nghiệp chuẩn quốc tế của XTÉCO.",
    isHiring: false,
    notice:
      "Tất cả các vị trí tuyển dụng hiện tại đã hết hạn nhận hồ sơ. Quý ứng viên vẫn có thể gửi CV vào email nhân sự info@xteco.vn để lưu vào ngân hàng hồ sơ tài năng của chúng tôi cho các đợt tuyển dụng tiếp theo.",
    jobs: [],
  };

  const jobs = careers.jobs || [];

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Banner with Premium Bright Navy Gradient & Micro-dot grid */}
        <section className="relative py-24 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white text-center overflow-hidden">
          {/* Subtle lighting glow elements */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider animate-banner-text">
              {careers.bannerTitle || "Tuyển Dụng Nhân Tài"}
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              Careers &amp; Opportunities
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[960px] mx-auto px-4">
          <div className="flex flex-col gap-6 mb-10 text-center">
            <h2 className="text-2xl font-extrabold text-[#2f5597] uppercase">
              {careers.title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-justify md:text-center">
              {careers.description}
            </p>
          </div>

          {/* Status Notice Banner if Not Currently Hiring */}
          {(!careers.isHiring || careers.notice) && (
            <div className="mb-10 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-950 flex items-start gap-4 shadow-sm">
              <div className="p-2 rounded-xl bg-amber-500/20 text-amber-700 flex-shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="inline-block px-2.5 py-0.5 bg-amber-600 text-white text-[10px] font-black uppercase tracking-wider rounded-full">
                    Thông báo tuyển dụng
                  </span>
                  <span className="text-xs font-bold text-amber-800">
                    Trạng thái: {careers.isHiring ? "Đang tiếp nhận hồ sơ" : "Tạm dừng / Đã hết hạn"}
                  </span>
                </div>
                <p className="text-xs md:text-sm text-gray-700 leading-relaxed mt-1">
                  {careers.notice}
                </p>
              </div>
            </div>
          )}

          {/* Job Positions List */}
          <div className="flex flex-col gap-6">
            {jobs.length === 0 ? (
              <div className="py-16 text-center bg-gray-50 rounded-2xl border border-gray-150">
                <Clock className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                <p className="text-sm font-semibold text-gray-600">Hiện tại chưa có vị trí tuyển dụng mới.</p>
              </div>
            ) : (
              jobs.map((job) => {
                const isExpired = job.status === "expired";
                return (
                  <div
                    key={job.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                      isExpired
                        ? "bg-gray-50/80 border-gray-200 opacity-90"
                        : "bg-[#f8f9fc] border-gray-100 shadow-sm hover:shadow-md hover:border-[#2f5597]/30"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-[#ba3434] uppercase tracking-wider">
                          {job.department}
                        </span>
                        <span className="text-gray-300">•</span>
                        {isExpired ? (
                          <span className="px-2 py-0.5 bg-rose-100 text-rose-700 border border-rose-200 text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Đã hết hạn
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 border border-emerald-200 text-[10px] font-bold uppercase rounded-md flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Đang tuyển
                          </span>
                        )}
                      </div>

                      <h3 className={`text-base md:text-lg font-extrabold ${isExpired ? "text-gray-700" : "text-[#2f5597]"}`}>
                        {job.title}
                      </h3>

                      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-gray-400" /> Thu nhập: {job.salary}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" /> Ngày đăng: {job.date}
                        </span>
                        {job.deadline && (
                          <span className="flex items-center gap-1 text-rose-600 font-medium">
                            Hạn nộp: {job.deadline}
                          </span>
                        )}
                      </div>
                    </div>

                    {isExpired ? (
                      <div className="flex items-center gap-3 self-start md:self-auto">
                        <span className="px-4 py-2 bg-gray-200 text-gray-500 text-xs font-bold uppercase tracking-wider rounded-lg cursor-not-allowed">
                          Đã hết hạn
                        </span>
                        <a
                          href={`mailto:${data.general.email}?subject=Ứng tuyển dự phòng: ${job.title}`}
                          className="px-4 py-2 border border-gray-300 hover:border-[#2f5597] text-gray-700 hover:text-[#2f5597] text-xs font-semibold rounded-lg transition-colors"
                          title="Gửi CV để lưu vào ngân hàng ứng viên"
                        >
                          Gửi CV dự phòng
                        </a>
                      </div>
                    ) : (
                      <a
                        href={`mailto:${data.general.email}?subject=Ứng tuyển vị trí: ${job.title}`}
                        className="px-6 py-2.5 bg-[#2f5597] hover:bg-[#ba3434] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 flex items-center gap-1.5 self-start md:self-auto shadow-md"
                      >
                        Ứng tuyển ngay <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Talented Candidate Talent Bank Box */}
          <div className="mt-14 p-8 bg-gradient-to-r from-[#2f5597]/5 to-[#1c3561]/10 border border-[#2f5597]/20 rounded-3xl text-center flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#2f5597] text-white flex items-center justify-center shadow-md">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#2f5597] uppercase">Gia nhập Ngân hàng Tài năng XTÉCO</h3>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl leading-relaxed">
              Bạn chưa tìm thấy vị trí phù hợp hoặc các đợt tuyển dụng đã kết thúc? Đừng ngần ngại gửi CV và Portfolio của bạn tới hòm thư nhân sự của chúng tôi.
            </p>
            <a
              href={`mailto:${data.general.email}?subject=Ứng tuyển tự do vào Ngân hàng Tài năng XTÉCO`}
              className="mt-2 px-8 py-3 bg-[#2f5597] hover:bg-[#ba3434] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Gửi CV về hòm thư: {data.general.email}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
