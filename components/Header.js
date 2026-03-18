"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslation } from "../context/LanguageContext";

export default function Header() {
  const { t, toggleLang, lang } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const openCalendly = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || "", "_blank");
  };

  const navLinkClass = (path) =>
    `text-base lg:text-lg flex items-center h-10 whitespace-nowrap text-stone-600 hover:text-[#5c6b4b] transition-colors ${
      pathname === path ? "underline underline-offset-4 decoration-2 decoration-[#5c6b4b]" : ""
    }`;

  return (
    <header className="w-full bg-stone-100/95 backdrop-blur sticky top-0 z-20 border-b border-stone-200 font-sans">
      <div className="w-full flex items-center justify-between gap-4 px-4 py-3 min-w-0">
        <Link href="/" className="flex items-center gap-2 shrink-0 overflow-hidden min-w-0">
          <Image
            src="/assets/origen.png"
            alt="Origen Restaurant Consulting logo"
            width={140}
            height={36}
            className="object-contain shrink-0"
          />
          <span className="hidden lg:inline text-xl font-semibold text-stone-600 truncate uppercase tracking-wide" title={t.siteName}>
            {t.siteName}
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 justify-center items-center gap-8 lg:gap-10 text-sm font-medium">
          <Link href="/" className={navLinkClass("/")}>
            {t.nav.home}
          </Link>
          <Link href="/services" className={navLinkClass("/services")}>
            {t.nav.services}
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About Us
          </Link>
          <Link href="/contact" className={navLinkClass("/contact")}>
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center shrink-0 gap-3">
          <button
            onClick={openCalendly}
            className="hidden md:inline-flex items-center justify-center min-h-10 h-10 rounded-xl bg-[#5c6b4b] text-white font-medium px-5 hover:bg-[#4a5840] transition-colors cursor-pointer"
          >
            Book Us
          </button>
          <button
            onClick={toggleLang}
            className="text-sm font-medium px-2.5 py-1.5 rounded border border-stone-400 text-stone-600 hover:border-[#5c6b4b] hover:text-[#5c6b4b] cursor-pointer transition-colors"
            aria-label="toggle language"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-stone-50 border-t border-stone-200">
          <ul className="flex flex-col p-4 space-y-1 text-stone-700">
            <li>
              <Link href="/" className="block py-2 hover:text-[#5c6b4b]" onClick={() => setMenuOpen(false)}>
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 hover:text-[#5c6b4b]" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="block py-2 hover:text-[#5c6b4b]" onClick={() => setMenuOpen(false)}>
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block py-2 hover:text-[#5c6b4b]" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="pt-2">
              <button
                onClick={() => { setMenuOpen(false); openCalendly(); }}
                className="w-full text-left rounded-xl bg-[#5c6b4b] text-white font-medium px-4 py-2.5 hover:bg-[#4a5840] cursor-pointer"
              >
                Book Us
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
