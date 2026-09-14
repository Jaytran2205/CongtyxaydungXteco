"use client";

import { useWebData } from "@/context/web-data-context";
import { Eye, Target, ShieldCheck } from "lucide-react";

export default function HighlightsSection() {
  const { data, language, t } = useWebData();

  const coreValuesEn = [
    { title: "Standard Quality", description: "Strict technical standards, durable through generations." },
    { title: "Innovation", description: "Continuous integration of advanced technologies and design thinking." },
    { title: "Sustainability", description: "Harmonizing economic value, social responsibility, and eco-friendliness." }
  ];

  const coreValues = language === "en" ? coreValuesEn : data.highlights.coreValues;

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-r from-[#2f5597] to-[#1c3561] text-white overflow-hidden">
      {/* Background delicate micro-dot grid pattern matching Hero header */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#ba3434]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12 max-w-4xl text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-[2px] w-6 bg-[#ba3434]" />
            <h6 className="text-xs uppercase tracking-widest font-bold text-[#ba3434]">
              {t.highlights.badge}
            </h6>
          </div>
          <h2
            className="text-[23.04px] font-light leading-[1.65] text-gray-200/95 text-justify"
            style={{ fontFamily: "'SVN-Acherus', sans-serif" }}
          >
            {t.highlights.description}
          </h2>
        </div>

        {/* 3-Column Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Column 1: Vision */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ba3434]/30 transition-all duration-300">
            <div>
              <div className="p-3.5 rounded-xl bg-white/5 text-[#ba3434] inline-block mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 text-white">
                {t.highlights.visionTitle}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed text-justify">
                {t.highlights.visionText}
              </p>
            </div>
          </div>

          {/* Column 2: Mission */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ba3434]/30 transition-all duration-300">
            <div>
              <div className="p-3.5 rounded-xl bg-white/5 text-[#ba3434] inline-block mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 text-white">
                {t.highlights.missionTitle}
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-gray-300">
                {t.highlights.missionPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-justify">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ba3434] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Core Values */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-[#ba3434]/30 transition-all duration-300">
            <div>
              <div className="p-3.5 rounded-xl bg-white/5 text-[#ba3434] inline-block mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wider mb-4 text-white">
                {t.highlights.valuesTitle}
              </h3>
              <div className="flex flex-col gap-4">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="text-justify text-sm">
                    <strong className="text-white block mb-0.5">{val.title}</strong>
                    <span className="text-gray-300 text-xs leading-relaxed">{val.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
