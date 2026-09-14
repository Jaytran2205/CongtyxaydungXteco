"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useWebData } from "@/context/web-data-context";
import { usePathname } from "next/navigation";
import { SearchIcon, MenuIcon, AngleDownIcon, CloseIcon } from "@/components/icons";

const menuItems: Array<{
  name: string;
  href: string;
  dropdown?: Array<{ name: string; href: string }>;
}> = [
  { name: "Trang chủ", href: "/" },
  { name: "Về chúng tôi", href: "/ve-chung-toi" },
  { name: "Lĩnh vực", href: "/linh-vuc" },
  { name: "Dự án", href: "/du-an" },
  { name: "Tin tức", href: "/tin-tuc" },
  { name: "Hợp tác", href: "/lien-he" },
  { name: "Tuyển dụng", href: "/tuyen-dung" },
];

export default function Header() {
  const { data, language, setLanguage, t } = useWebData();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const menuItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/ve-chung-toi" },
    { name: t.nav.services, href: "/linh-vuc" },
    { name: t.nav.projects, href: "/du-an" },
    { name: t.nav.news, href: "/tin-tuc" },
    { name: t.nav.partnership, href: "/lien-he" },
    { name: t.nav.careers, href: "/tuyen-dung" },
  ];

  useEffect(() => {
    if (!isHomepage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPos =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setIsScrolled(scrollPos > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [isHomepage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2 text-gray-800"
            : "bg-[#ffffff]/80 backdrop-blur-md border-b border-gray-200/60 py-3 text-gray-800"
        }`}
      >
        {/* Top bar */}
        {!isScrolled && (
          <div className="hidden lg:block border-b border-gray-200/60 pb-2 mb-2 text-xs md:text-sm text-gray-600">
            <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
              <div className="font-bold text-[#2f5597] tracking-wide">{language === "vi" ? "Tổng thầu Thiết kế và Thi công trọn gói" : "General Contractor for Design & Construction"}</div>
              <div className="flex gap-4 font-medium text-gray-500">
                <span>Hotline: {data.general.hotline}</span>
                <span>Email: {data.general.email}</span>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <Link href="/" className="relative h-14 flex items-center font-bold text-lg uppercase tracking-wider transition-all duration-300">
            <div className="relative h-14 w-44 mr-2">
              <Image
                src="/images/logo_new.png"
                alt={data.general.brandName}
                fill
                className="object-contain transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 flex-shrink-0">
            <ul className="flex items-center gap-3 xl:gap-5 font-medium text-sm flex-shrink-0">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-[#ba3434] transition-colors py-2 block whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="w-[1px] h-4 bg-gray-300 flex-shrink-0"></div>

            {/* Language Switcher Pill */}
            <div className="flex items-center rounded-full p-0.5 border border-gray-200 bg-gray-100 text-gray-700 text-xs font-bold transition-all flex-shrink-0">
              <button
                onClick={() => setLanguage("vi")}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "vi"
                    ? "bg-[#ba3434] text-white shadow-sm font-extrabold"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="Tiếng Việt"
              >
                VI
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-[#ba3434] text-white shadow-sm font-extrabold"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="English"
              >
                EN
              </button>
            </div>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-[#ba3434] transition-colors p-1 flex-shrink-0 cursor-pointer"
              aria-label="Tìm kiếm"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              href="/lien-he"
              className="px-6 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg border border-[#2f5597] text-[#2f5597] hover:bg-[#2f5597] hover:text-white transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-sm"
            >
              {t.nav.contact}
            </Link>

            {/* Admin Link (Utility Link) */}
            <Link
              href="/admin"
              className="text-[10px] uppercase font-bold text-gray-400 hover:text-[#2f5597] whitespace-nowrap flex-shrink-0"
            >
              Admin
            </Link>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-gray-600 hover:text-[#ba3434] transition-colors p-1"
              aria-label="Tìm kiếm"
            >
              <SearchIcon className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-700 hover:text-[#ba3434] transition-colors p-1"
              aria-label="Mở menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-[#001854]/95 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <div className="relative h-14 w-44">
            <Image
              src="/images/logo_new.png"
              alt="XTÉCO Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-secondary p-1"
            aria-label="Đóng menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6">
          <ul className="flex flex-col gap-6 text-white text-lg font-medium">
            {menuItems.map((item) => (
              <li key={item.name} className="border-b border-white/10 pb-4">
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-secondary block"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/lien-he"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-[#ba3434] hover:bg-[#a02c2c] text-white font-semibold py-3 rounded-lg uppercase tracking-wider text-sm transition-colors"
              >
                {t.nav.contact}
              </Link>
            </li>
            <li className="pt-2 flex items-center justify-center gap-2">
              <span className="text-xs text-white/60">Language:</span>
              <button
                onClick={() => setLanguage("vi")}
                className={`px-3 py-1 text-xs font-bold rounded-lg ${
                  language === "vi" ? "bg-[#ba3434] text-white" : "bg-white/10 text-white/70"
                }`}
              >
                Tiếng Việt
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 text-xs font-bold rounded-lg ${
                  language === "en" ? "bg-[#ba3434] text-white" : "bg-white/10 text-white/70"
                }`}
              >
                English
              </button>
            </li>
            <li className="mt-2 text-center">
              <Link
                href="/admin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-white/50 hover:text-white text-xs uppercase tracking-wider py-2"
              >
                Trang Quản Trị (Admin)
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Search Lightbox Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 w-full max-w-2xl rounded-xl shadow-2xl p-6 relative">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Đóng tìm kiếm"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Tìm kiếm bài viết, dịch vụ...</h3>
            <form className="flex gap-2">
              <input
                type="search"
                placeholder="Nhập từ khóa tìm kiếm..."
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 bg-transparent text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-white px-6 rounded-lg font-medium transition-colors"
              >
                Tìm
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
