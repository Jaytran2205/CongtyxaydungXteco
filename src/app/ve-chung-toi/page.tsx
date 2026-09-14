"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import HighlightsSection from "@/components/highlights-section";
import { useWebData } from "@/context/web-data-context";
import Image from "next/image";

export default function AboutPage() {
  const { data } = useWebData();

  return (
    <>
      <Header />
      <main className="flex-grow pt-24 bg-white text-gray-800">
        {/* Banner with Premium Bright Navy Gradient */}
        <section className="relative py-24 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white text-center overflow-hidden">
          {/* Subtle lighting glow elements */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-wider animate-banner-text">
              Về Chúng Tôi
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              About Us
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 text-justify">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-[#3b60a3]" />
                <h6 className="text-xs uppercase tracking-widest font-bold text-[#3b60a3]">
                  XTÉCO chúng tôi là ai?
                </h6>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5597] uppercase leading-tight">
                {data.general.legalName}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                XTÉCO là doanh nghiệp hoạt động trong lĩnh vực xây dựng, kiến trúc và phát triển hạ tầng, chuyên cung cấp các giải pháp thiết kế – thi công toàn diện cho nhà phố, biệt thự, lâu đài, khu nghỉ dưỡng, văn phòng, chung cư cao cấp và các dự án quy mô lớn.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Với định hướng phát triển theo tiêu chuẩn quốc tế, XTÉCO không ngừng theo đuổi những giá trị bền vững thông qua chất lượng công trình, tư duy thiết kế hiện đại và năng lực quản lý chuyên nghiệp cùng đội ngũ kỹ sư, kiến trúc sư được đào tạo tại Châu Âu và các chuyên gia giàu kinh nghiệm.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={data.intro.imageUrl || "/images/img-workers-sunset.png"}
                alt="XTÉCO Construction Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <HighlightsSection />
      </main>
      <Footer />
    </>
  );
}
