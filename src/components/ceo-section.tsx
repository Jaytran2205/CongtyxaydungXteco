"use client";

import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { Quote } from "lucide-react";

export default function CeoSection() {
  const { data } = useWebData();

  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden text-gray-800">
      {/* Background design accents */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#2f5597]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-[1000px] w-full mx-auto px-4 z-10">
        {/* The single large card container */}
        <div className="w-full bg-[#f8f9fc] border border-gray-100/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          
          {/* Left Side: Large vertical portrait image */}
          <div className="w-full md:w-[380px] relative min-h-[380px] md:min-h-[480px] flex-shrink-0 bg-gray-100">
            <Image
              src={data.ceo.imageUrl}
              alt={`${data.ceo.title} – ${data.ceo.name}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 380px"
              priority
            />
            {/* Subtle dark overlay gradient from left edge on mobile / bottom edge */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Side: Text & Quote details */}
          <div className="flex-grow p-8 md:p-12 flex flex-col justify-between items-start text-left gap-8">
            
            {/* Top part: Quote Icon and Quote Text */}
            <div className="flex flex-col gap-4 w-full">
              <div className="text-[#ba3434] opacity-80">
                <Quote className="w-8 h-8" />
              </div>
              <h2 className="text-lg md:text-xl font-light leading-relaxed text-[#2f5597] italic text-justify">
                &ldquo;{data.ceo.quote}&rdquo;
              </h2>
            </div>

            {/* Middle part: Divider & Name / Title */}
            <div className="flex flex-col gap-3 w-full">
              <div className="w-12 h-[2px] bg-[#ba3434]" />
              <div>
                <h5 className="font-extrabold text-base md:text-lg text-[#2f5597] tracking-wide uppercase">
                  {data.ceo.name}
                </h5>
                <span className="text-xs font-bold text-[#ba3434] tracking-widest uppercase mt-0.5 block">
                  {data.ceo.title}
                </span>
              </div>
            </div>

            {/* Bottom part: CTA Button */}
            <div>
              <Link
                href={data.ceo.buttonLink}
                className="inline-block px-8 py-3 text-xs font-bold tracking-wider uppercase bg-[#2f5597] hover:bg-[#20376c] text-white transition-all duration-300 rounded-lg shadow-md"
              >
                {data.ceo.buttonText}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
