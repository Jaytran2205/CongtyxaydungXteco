"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { ArrowRight, Compass, HardHat, Cpu, Briefcase, ClipboardCheck, Maximize2, X } from "lucide-react";

export default function ServicesSection() {
  const { data, language, t } = useWebData();
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Helper to map index to custom icon
  const icons = [Compass, HardHat, Cpu, Briefcase, ClipboardCheck];

  const titlesEn = [
    "Consulting & Design",
    "Turnkey Construction",
    "Interior & Smart Tech",
    "General Contractor Design & Build",
    "Project Management & Supervision",
  ];

  const pointsVi = [
    [
      "Kiến trúc & nội thất đồng bộ – tối ưu công năng, thẩm mỹ và trải nghiệm.",
      "Thiết kế khác biệt, mang dấu ấn riêng cho từng công trình.",
    ],
    [
      "Chuẩn kỹ thuật – chuẩn tiến độ – chuẩn hoàn thiện.",
      "Kiểm soát chất lượng nghiêm ngặt trong từng hạng mục thi công.",
    ],
    [
      "Thi công nội thất cao cấp, đồng bộ từ thiết kế đến hoàn thiện.",
      "Tích hợp Smart Home & thiết bị thông minh cho không gian sống hiện đại.",
    ],
    [
      "Một đầu mối – Một quy trình – Một cam kết từ ý tưởng đến bàn giao.",
      "Tối ưu chi phí, tiến độ và chất lượng trên toàn bộ dự án.",
    ],
    [
      "Kiểm soát tiến độ – chi phí – chất lượng xuyên suốt dự án.",
      "Giám sát độc lập, nghiệm thu chặt chẽ, bảo vệ lợi ích chủ đầu tư.",
    ],
  ];

  const pointsEn = [
    [
      "Synchronized architecture & interior – optimizing functionality, aesthetics, and experience.",
      "Distinctive design, creating a unique signature for each project.",
    ],
    [
      "Standard engineering – on-time schedule – premium finishing.",
      "Strict quality control across every construction phase.",
    ],
    [
      "High-end interior execution, seamless from design to completion.",
      "Smart Home & intelligent device integration for modern living spaces.",
    ],
    [
      "Single point of contact – Single workflow – Single commitment from concept to handover.",
      "Optimizing cost, schedule, and quality across the entire project.",
    ],
    [
      "Continuous control of schedule – cost – quality throughout the project.",
      "Independent supervision, strict acceptance testing, safeguarding investor interests.",
    ],
  ];

  const renderServiceCard = (item: { title: string; points?: string[] }, realIndex: number) => {
    const Icon = icons[realIndex] || Compass;
    const rawTitle = language === "en" ? titlesEn[realIndex] : (item?.title || "");
    const cleanTitle = rawTitle.replace(/^0\d\s*[-—]\s*/, "");
    const points = language === "en"
      ? pointsEn[realIndex]
      : (item?.points && item.points.length > 0 ? item.points : pointsVi[realIndex]);

    return (
      <div
        key={realIndex}
        className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-lg hover:border-[#ba3434]/25 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between h-full"
      >
        <div>
          {/* Card Header */}
          <div className="flex justify-between items-start mb-5">
            <div className="p-3.5 rounded-xl bg-[#2f5597]/5 text-[#2f5597] group-hover:bg-[#ba3434]/10 group-hover:text-[#ba3434] transition-colors duration-300">
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-4xl font-black text-gray-200 group-hover:text-[#ba3434]/20 transition-colors duration-300 select-none">
              0{realIndex + 1}
            </span>
          </div>

          <h3 className="text-base md:text-lg font-extrabold text-[#2f5597] mb-3.5 group-hover:text-[#ba3434] transition-colors duration-200 uppercase tracking-tight flex items-baseline">
            <span className="text-[#ba3434] mr-1.5 shrink-0">0{realIndex + 1} —</span>
            <span>{cleanTitle}</span>
          </h3>

          {/* Bullet points */}
          <ul className="space-y-2.5 text-xs md:text-sm text-gray-600">
            {points?.map((pt, pIdx) => (
              <li key={pIdx} className="flex items-start gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ba3434] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#f8f9fc] overflow-hidden text-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left animate-fadeIn">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-[2px] w-6 bg-[#ba3434]" />
              <h6 className="text-xs uppercase tracking-widest font-bold text-[#ba3434]">
                {t.services.subtitle}
              </h6>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5597] uppercase">
              {t.services.title}
            </h2>
          </div>
          <Link
            href="/linh-vuc"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold tracking-wider uppercase bg-[#ba3434] hover:bg-[#a02c2c] text-white transition-all duration-300 rounded-lg shadow-md self-start"
          >
            {t.services.viewAll} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Balanced Grid Layout */}
        <div className="flex flex-col gap-6 mb-16">
          {/* Row 1: 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.services.items.slice(0, 3).map((item, index) => renderServiceCard(item, index))}
          </div>

          {/* Row 2: 2 Columns Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[840px] mx-auto w-full">
            {data.services.items.slice(3, 5).map((item, index) => renderServiceCard(item, index + 3))}
          </div>
        </div>

        {/* Lower Banner Visual Showcase - Full Ratio & Lightbox */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.services.showcaseImages.map((imgUrl, imgIdx) => (
            <div
              key={imgIdx}
              onClick={() => setPreviewImage(imgUrl)}
              className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden group shadow-lg cursor-pointer border border-gray-100 hover:shadow-2xl transition-all duration-500"
              title="Nhấp để xem kích thước đầy đủ"
            >
              <Image
                src={imgUrl}
                alt={`Lĩnh vực XTÉCO ${imgIdx + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2f5597]/5 group-hover:bg-transparent transition-colors duration-300" />
              
              {/* Expand / Full indicator badge */}
              <div className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg pointer-events-none">
                <Maximize2 className="w-3.5 h-3.5 text-[#ba3434]" />
                <span>Xem ảnh lớn</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full View */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors duration-200 z-10"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh] aspect-[3/2] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImage}
              alt="XTÉCO Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
