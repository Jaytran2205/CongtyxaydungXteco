"use client";

import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { Clock, ArrowRight } from "lucide-react";

export default function NewsSection() {
  const { data, language, t } = useWebData();

  // Combine featured and others, and take the first 3 items for a balanced 3-column row
  const newsList = [
    data.news.featured,
    ...data.news.others.slice(0, 2),
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden text-gray-800">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-6 bg-[#ba3434]" />
            <h6 className="text-xs uppercase tracking-widest font-bold text-[#ba3434]">
              {t.news.subtitle}
            </h6>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2f5597] uppercase">
            {t.news.title}
          </h2>
        </div>

        {/* 3-Column News Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsList.map((news, index) => (
            <Link
              key={index}
              href={news.href}
              className="flex flex-col gap-5 group block bg-white border border-gray-100/50 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-[#2f5597]/10 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-[#2f5597]/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#ba3434] mb-2 font-bold">
                    <Clock className="w-4 h-4 text-[#ba3434]" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#2f5597] group-hover:text-[#ba3434] transition-colors duration-300 leading-snug line-clamp-3">
                    {news.title}
                  </h3>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2f5597] group-hover:text-[#ba3434] transition-colors duration-200 mt-2">
                  <span>{language === "vi" ? "Chi tiết" : "Read More"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5 duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
