"use client";

import { usePathname } from "next/navigation";
import { useWebData } from "@/context/web-data-context";
import { MessageSquare, Phone } from "lucide-react";

export default function QuickContact() {
  const pathname = usePathname();
  const { data, t, setConsultationModalOpen } = useWebData();

  // Hide floating buttons on admin page
  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  // Fallback defaults
  const zaloUrl = data.quickContact?.zaloUrl || "https://zalo.me/0836289589";
  const rawHotline = data.quickContact?.hotline || "0836289589";
  const cleanHotline = rawHotline.replace(/[^\d]/g, "") || "0836289589";
  const hotlineLabel = data.quickContact?.hotlineLabel || "0836.289.589";

  return (
    <div className="fixed bottom-8 left-6 flex flex-col gap-3.5 z-50 items-start pointer-events-auto">
      {/* 1. Đăng ký tư vấn */}
      <button
        onClick={() => setConsultationModalOpen(true)}
        className="flex items-center bg-[#0084FF] text-white rounded-full shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:scale-103 group overflow-hidden h-11 w-11 hover:w-[185px] cursor-pointer"
      >
        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 fill-white text-[#0084FF]" />
        </div>
        <span className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:pr-5 transition-all duration-300 whitespace-nowrap text-[10px] md:text-xs font-extrabold uppercase tracking-wide">
          {t.quickContact.consultation}
        </span>
      </button>

      {/* 2. Chat Zalo */}
      <a
        href={zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-[#0068FF] text-white rounded-full shadow-lg hover:shadow-blue-600/20 transition-all duration-300 hover:scale-103 group overflow-hidden h-11 w-11 hover:w-[155px] cursor-pointer"
      >
        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center">
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center font-black text-[#0068FF] text-[8px] tracking-tighter italic">
            Zalo
          </div>
        </div>
        <span className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:pr-5 transition-all duration-300 whitespace-nowrap text-[10px] md:text-xs font-extrabold uppercase tracking-wide">
          {t.quickContact.zaloChat}
        </span>
      </a>

      {/* 3. Phone Hotline Capsule */}
      <a
        href={`tel:${cleanHotline}`}
        className="flex items-center bg-[#ba3434] text-white rounded-full shadow-lg hover:shadow-red-950/20 transition-all duration-300 hover:scale-103 group overflow-hidden h-11 w-11 hover:w-[185px] cursor-pointer relative"
      >
        {/* Pulse effect overlay circle */}
        <span className="absolute inset-0 bg-[#ba3434]/20 rounded-full blur-sm pointer-events-none group-hover:opacity-0 transition-opacity duration-300 animate-pulse" />
        
        {/* Circular Phone Icon wrapper */}
        <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center bg-[#ba3434] rounded-full z-10">
          <Phone className="w-5 h-5 fill-white text-[#ba3434] animate-wiggle" />
        </div>
        
        {/* Text */}
        <span className="w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:pr-5 transition-all duration-300 whitespace-nowrap text-[10px] md:text-xs font-extrabold tracking-widest text-white">
          {hotlineLabel}
        </span>
      </a>
    </div>
  );
}
