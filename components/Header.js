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
    const url =
      process.env.NEXT_PUBLIC_CAL_URL ||
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      "";
    if (!url) return;

    const popupWidth = 980;
    const popupHeight = 760;
    const left = Math.max(
      0,
      Math.round((window.screen.width - popupWidth) / 2),
    );
    const top = Math.max(
      0,
      Math.round((window.screen.height - popupHeight) / 2),
    );

    const popup = window.open(
      url,
      "calendlyPopup",
      `width=${popupWidth},height=${popupHeight},left=${left},top=${top},resizable=yes,scrollbars=yes`,
    );

    if (!popup) window.open(url, "_blank");
  };

  const navLinkClass = (path) =>
    `text-base lg:text-lg flex items-center h-10 whitespace-nowrap text-[#FFA800] hover:text-amber-600 transition-colors ${
      pathname === path
        ? "underline underline-offset-4 decoration-2 decoration-[#FFA800]"
        : ""
    }`;

  return (
    // <header className="w-full bg-stone-100/95 backdrop-blur sticky top-0 z-20 border-b border-stone-200 font-sans">
    <header className="w-full sticky top-0 z-20 border-b border-white/25 bg-white/15 backdrop-blur-xl shadow-[0_1px_0_rgba(255,255,255,0.35)_inset] supports-backdrop-filter:bg-white/10 font-sans">
      <div className="w-full flex items-center justify-between gap-4 px-4 py-3 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 overflow-hidden min-w-0"
        >
          <Image
            src="/assets/origen1.png"
            alt="Origen Restaurant Consulting logo"
            width={200}
            height={36}
            className="object-cover object-top rounded-xl"
          />
          {/* <span className="hidden lg:inline text-xl font-semibold text-stone-600 truncate uppercase tracking-wide" title={t.siteName}>
            {t.siteName}
          </span> */}
        </Link>
        {/* nav links #EFBF04. and use #FFA800 for hover effect. and use text-stone-600 for the text color.*/}
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
        {/* book us button #EFBF04. and use #FFA800 for hover effect. and use text-white for the text color.*/}
        <div className="flex items-center shrink-0 gap-3">
          <button
            onClick={openCalendly}
            className="hidden md:inline-flex items-center justify-center min-h-10 h-10 rounded-xl bg-[#FFA800] text-white text-md font-medium px-5 hover:bg-amber-600 transition-colors cursor-pointer"
          >
            Book Us
          </button>
          <button
            onClick={toggleLang}
            className="text-sm font-medium px-2.5 py-1.5 rounded border border-[#FFA800] text-[#FFA800] hover:border-amber-600 hover:text-amber-600 cursor-pointer transition-colors"
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
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-stone-50 border-t border-stone-200">
          <ul className="flex flex-col p-4 space-y-1 text-stone-700">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-[#FFA800]"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 hover:text-[#FFA800]"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block py-2 hover:text-[#FFA800]"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 hover:text-[#FFA800]"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li className="pt-2">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openCalendly();
                }}
                className="w-full text-left rounded-xl bg-[#EFBF04] text-white font-medium px-4 py-2.5 hover:bg-[#FFA800] cursor-pointer"
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
