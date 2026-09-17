"use client";

import Image from "next/image";
import Link from "next/link";
import { useWebData } from "@/context/web-data-context";

export default function HeroSection() {
  const { data, t, setConsultationModalOpen } = useWebData();

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#ffffff] via-[#f7f8fc] to-[#f0f3fa] pt-20 overflow-hidden text-gray-800">
      {/* Background delicate micro-dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,85,151,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      {/* Subtle pearlescent lighting accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2f5597]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#ba3434]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto px-4 z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Branding text & CTA */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left animate-fadeIn">
            <div className="flex items-center gap-3">
              <span className="h-[3px] w-10 bg-[#ba3434]" />
              <span className="text-sm md:text-base lg:text-lg font-extrabold tracking-wider text-[#ba3434] uppercase">
                {t.hero.badge}
              </span>
            </div>
            <div className="relative h-24 md:h-28 lg:h-32 w-72 md:w-96 lg:w-[400px] my-1">
              <Image
                src="/images/logo_hero_clean.png"
                alt="XTÉCO - Build beyond standards"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg font-normal">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => setConsultationModalOpen(true)}
                className="px-8 py-3.5 bg-[#ba3434] hover:bg-[#a02c2c] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-900/20 transition-all duration-300 cursor-pointer text-left"
              >
                {t.hero.bookConsultation}
              </button>
              <Link
                href="/du-an"
                className="px-8 py-3.5 border border-[#2f5597]/30 hover:border-[#2f5597] text-[#2f5597] hover:bg-[#2f5597]/5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm"
              >
                {t.hero.viewProjects}
              </Link>
            </div>
          </div>

          {/* Right Column: Premium Hero Showcase Image */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-200/80 shadow-[0_20px_50px_rgba(47,85,151,0.12)] group hover:border-[#ba3434]/40 transition-all duration-500 bg-gray-100">
              {/* Decorative light reflection bar */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              <Image
                src={data.hero.posterUrl || "/images/hero-engineers-villa.jpg"}
                alt="Dự án biệt thự liền kề XTÉCO"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none animate-bounce">
        <span className="text-[9px] text-gray-400 uppercase tracking-widest font-semibold">Cuộn xuống</span>
        <div className="w-[1px] h-6 bg-gray-300" />
      </div>
    </section>
  );
}
