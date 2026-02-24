"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../context/LanguageContext";

// Calendly URL - update with your Calendly link
const CALENDLY_URL = "https://calendly.com/origen-consulting";

export default function Header() {
  const { t, toggleLang, lang } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur sticky top-0 z-20 shadow-sm">
      <div className="w-full flex items-center justify-between p-4 text-black">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/assets/origen.png"
            alt="Origen Restaurant Consulting logo"
            width={150}
            height={40}
            className="object-contain rounded-xl"
          />
          <span className="text-2xl font-bold">{t.siteName}</span>
        </Link>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
            <Link
              href="/"
              className="flex items-center h-10 hover:text-[#ffc000] dark:hover:text-[#ffc000]"
            >
              {t.nav.home}
            </Link>
            <Link
              href="/services"
              className="flex items-center h-10 hover:text-[#ffc000] dark:hover:text-[#ffc000]"
            >
              {t.nav.services}
            </Link>
            <Link
              href="/about"
              className="flex items-center h-10 hover:text-[#ffc000] dark:hover:text-[#ffc000]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="flex items-center h-10 hover:text-[#ffc000] dark:hover:text-[#ffc000]"
            >
              Contact Us
            </Link>
            <button
              onClick={openCalendly}
              className="flex items-center h-10 rounded-full border border-black px-3 hover:bg-black/5 hover:text-[#ffc000] hover:border-[#ffc000] dark:hover:text-[#ffc000] dark:hover:border-[#ffc000] cursor-pointer"
            >
              Book Us
            </button>
          </nav>
          <div className="w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLang}
              className="text-sm font-semibold px-2 py-1 border rounded"
              aria-label="toggle language"
            >
              {lang === "en" ? "ES" : "EN"}
            </button>
            <button
              className="md:hidden p-2"
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
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col p-4 space-y-2 text-black">
            <li>
              <Link
                href="/"
                className="hover:text-[#ffc000]"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#ffc000]"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-[#ffc000]"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#ffc000]"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  openCalendly();
                }}
                className="rounded-full border border-black px-3 py-1 hover:text-[#ffc000] hover:border-[#ffc000] dark:hover:border-[#ffc000] cursor-pointer"
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
