"use client";

import Link from "next/link";
import Image from "next/image";
import { useWebData } from "@/context/web-data-context";
import { PhoneIcon, EnvelopeIcon, LocationIcon, FacebookIcon, YoutubeIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  const { data, language, setLanguage, t } = useWebData();

  const menuItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/ve-chung-toi" },
    { name: t.nav.services, href: "/linh-vuc" },
    { name: t.nav.projects, href: "/du-an" },
    { name: t.nav.news, href: "/tin-tuc" },
    { name: t.nav.partnership, href: "/lien-he" },
    { name: t.nav.careers, href: "/tuyen-dung" },
    { name: t.nav.contact, href: "/lien-he" },
  ];

  return (
    <footer
      className="relative w-full text-gray-800 text-sm border-t border-[#c2cfc5] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: 'url("/images/footer-mist-bg.png")',
        backgroundColor: '#dbe2da',
      }}
    >
      <div className="relative max-w-[1200px] mx-auto px-4 pt-16 z-10 flex flex-col items-center">
        {/* Centered Logo with original brand colors (Red X & Navy TÉCO) */}
        <div className="relative h-20 w-56 mb-6">
          <Image
            src="/images/logo_new.png"
            alt={data.general.brandName}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Centered Horizontal Menu */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs md:text-sm font-bold text-[#2f5597] uppercase tracking-wider mb-8 text-center">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-[#ba3434] transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Legal Title */}
        <h4 className="text-center font-bold text-[#2f5597] text-sm md:text-base max-w-2xl px-4 leading-relaxed mb-6 uppercase tracking-wide">
          {language === "en" && data.general.englishName ? data.general.englishName : data.general.legalName}
        </h4>

        {/* Social Icons (Circles) */}
        <div className="flex justify-center gap-3 mb-12">
          <a
            href={data.general.facebookUrl || "https://www.facebook.com/profile.php?id=61589586812415"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#2f5597]/15 hover:bg-[#2f5597] text-[#2f5597] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#2f5597]/15 hover:bg-[#2f5597] text-[#2f5597] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <YoutubeIcon className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#2f5597]/15 hover:bg-[#2f5597] text-[#2f5597] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>

        {/* 3-Column Info Segments */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 border-t border-[#bdcdc1] items-stretch text-center text-xs md:text-sm text-gray-800 mt-4">
          
          {/* Segment 1: Phone */}
          <div className="py-8 px-6 flex flex-col items-center gap-3 border-b md:border-b-0 md:border-r border-[#bdcdc1]">
            <div className="text-[#2f5597]">
              <PhoneIcon className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2f5597] tracking-wide text-xs uppercase">{t.footer.hotline}</span>
            <p className="font-semibold text-[#1f3a68]">{data.general.hotline}</p>
          </div>

          {/* Segment 2: Address */}
          <div className="py-8 px-6 flex flex-col items-center gap-3 border-b md:border-b-0 md:border-r border-[#bdcdc1]">
            <div className="text-[#2f5597]">
              <LocationIcon className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2f5597] tracking-wide text-xs uppercase">{t.footer.address}</span>
            <p className="text-[#1f3a68] font-medium max-w-xs">{data.general.address}</p>
          </div>

          {/* Segment 3: Email */}
          <div className="py-8 px-6 flex flex-col items-center gap-3">
            <div className="text-[#2f5597]">
              <EnvelopeIcon className="w-6 h-6" />
            </div>
            <span className="font-bold text-[#2f5597] tracking-wide text-xs uppercase">{t.footer.email}</span>
            <p className="font-semibold text-[#1f3a68]">{data.general.email}</p>
          </div>

        </div>

        {/* Bottom Copyright & Lang switch */}
        <div className="w-full border-t border-[#bdcdc1] py-6 text-center text-xs text-gray-700 bg-black/[0.04]">
          <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3">
            <span>&copy; {new Date().getFullYear()} {data.general.brandName}. {t.footer.copyright}</span>
            <div className="flex items-center gap-4">
              <Link href="/chinh-sach-bao-mat" className="hover:text-[#ba3434] transition-colors font-medium">
                {t.footer.privacy}
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/dieu-khoan-su-dung" className="hover:text-[#ba3434] transition-colors font-medium">
                {t.footer.terms}
              </Link>
              <span className="text-gray-400">|</span>
              <div className="inline-flex items-center gap-1.5 font-bold">
                <button
                  onClick={() => setLanguage("vi")}
                  className={`hover:text-[#ba3434] transition-colors ${language === "vi" ? "text-[#ba3434] underline" : "text-gray-600"}`}
                >
                  Tiếng Việt
                </button>
                <span>/</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`hover:text-[#ba3434] transition-colors ${language === "en" ? "text-[#ba3434] underline" : "text-gray-600"}`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
