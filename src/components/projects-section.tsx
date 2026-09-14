"use client";

import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { Plus } from "lucide-react";

export default function ProjectsSection() {
  const { data, language, t } = useWebData();

  return (
    <section className="relative py-20 lg:py-28 bg-[#f8f9fc] overflow-hidden text-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12 text-center animate-fadeIn">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2f5597] uppercase tracking-wide">
            {t.projects.title}
          </h2>
          <div className="h-[3px] w-12 bg-[#ba3434] mx-auto mt-4" />
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 mb-12">
          {data.projects.items.slice(0, 5).map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden group shadow-md block bg-black border border-gray-100/10 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={index === 0}
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10 flex flex-col justify-between p-6 text-white" />

              {/* Hover Center Plus Icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 delay-75 z-20">
                <Plus className="w-5 h-5 text-white stroke-[1px]" />
              </div>

              {/* Hover Bottom Text Details */}
              <div className="absolute bottom-6 left-6 right-6 text-center flex flex-col gap-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-20">
                <h3 className="text-sm md:text-base font-bold text-white uppercase tracking-wide leading-snug">
                  {project.title}
                </h3>
                <div className="w-8 h-[1px] bg-white/40 mx-auto my-1.5" />
                <p className="text-[11px] text-white/80">
                  {language === "vi" ? "Chủ đầu tư" : "Client"}: <span className="font-semibold">{project.client}</span>
                </p>
                <p className="text-[11px] text-white/80">
                  {language === "vi" ? "Mô hình" : "Scale"}: <span className="font-semibold">{project.model}</span>
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Bottom View All Button */}
        <div className="text-center animate-fadeIn">
          <Link
            href="/du-an"
            className="inline-flex items-center justify-center px-8 py-3 text-xs font-bold tracking-wider uppercase bg-[#ba3434] hover:bg-[#a02c2c] text-white transition-all duration-300 rounded-lg shadow-md"
          >
            {t.projects.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
