"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import NewsSection from "@/components/news-section";
import Image from "next/image";

export default function NewsPage() {
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
              Tin Tức - Sự Kiện
            </h1>
            <p className="text-xs md:text-sm text-white/80 font-bold uppercase tracking-[0.25em] mt-2 animate-banner-text [animation-delay:0.15s]">
              News &amp; Events
            </p>
          </div>
        </section>

        <NewsSection />
      </main>
      <Footer />
    </>
  );
}
