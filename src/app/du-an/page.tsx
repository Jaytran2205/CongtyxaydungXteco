"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useWebData } from "@/context/web-data-context";
import { Plus } from "lucide-react";

export default function ProjectsPage() {
  const { data } = useWebData();
  const [activeTab, setActiveTab] = useState("Tất cả");

  // Category filter list
  const categories = ["Tất cả", "Biệt thự - Villa", "Biệt thự - Nghỉ dưỡng", "Nhà phố", "Nhà phố kết hợp kinh doanh", "Văn phòng"];

  // Filter projects based on activeTab
  const filteredProjects = activeTab === "Tất cả"
    ? data.projects.items
    : data.projects.items.filter(project => project.model === activeTab);

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
              Dự Án Tiêu Biểu
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              Featured Projects
            </p>
          </div>
        </section>

        {/* Content Area */}
        <section className="py-16 max-w-[1200px] mx-auto px-4">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center md:justify-start mb-12 border-b border-gray-150 pb-6">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-[#2f5597] text-white shadow-md"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#2f5597] hover:text-[#2f5597]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Dynamic Grid Layout */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
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
                      Chủ đầu tư: <span className="font-semibold">{project.client}</span>
                    </p>
                    <p className="text-[11px] text-white/80">
                      Mô hình: <span className="font-semibold">{project.model}</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <p className="text-gray-500 text-sm">Chưa có dự án nào thuộc lĩnh vực này.</p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
