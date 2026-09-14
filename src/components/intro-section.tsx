"use client";

import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { Star } from "lucide-react";

export default function IntroSection() {
  const { data, language, t } = useWebData();

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden text-gray-800">
      {/* Light subtle abstract grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#2f5597 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Typography & Corporate Mission */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-left">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#ba3434]" />
              <h6 className="text-xs uppercase tracking-widest font-bold text-[#ba3434]">
                {t.intro.subtitle}
              </h6>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#2f5597] uppercase">
              {language === "en" && data.general.englishName ? data.general.englishName : data.general.legalName}
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
              {t.intro.description}
            </p>
            <div className="mt-4">
              <Link
                href="/ve-chung-toi"
                className="inline-block px-8 py-3 text-xs font-semibold tracking-wider uppercase bg-[#2f5597] hover:bg-[#20376c] text-white transition-all duration-300 rounded-lg shadow-md"
              >
                {t.intro.button}
              </Link>
            </div>
          </div>

          {/* Right Column: Overlapping Image & Stats card */}
          <div className="lg:col-span-6 relative w-full flex items-center justify-center p-6">
            {/* Background design border element */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 border-2 border-dashed border-[#2f5597]/15 rounded-2xl pointer-events-none transform translate-x-2 translate-y-2" />

            {/* Main Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl z-10 group">
              <Image
                src={data.intro.imageUrl}
                alt="Về XTÉCO"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-[#2f5597]/5 group-hover:bg-[#2f5597]/0 transition-colors duration-300" />
            </div>

            <div className="absolute -bottom-4 -left-2 md:left-4 bg-white border border-gray-100 rounded-xl p-5 shadow-2xl z-20 flex gap-6 items-center animate-slideIn">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-[#2f5597]">500+</span>
                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">
                  {language === "vi" ? "Công trình" : "Projects"}
                </span>
              </div>
              <div className="w-[1px] h-8 bg-gray-200" />
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-[#2f5597] flex items-center gap-1">
                  5<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                </span>
                <span className="text-[9px] text-gray-500 uppercase font-bold tracking-wider">
                  {language === "vi" ? "Chất lượng" : "Star Quality"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
