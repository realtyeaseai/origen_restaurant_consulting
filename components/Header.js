"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "../context/LanguageContext";

export default function Header() {
  const { t, toggleLang, lang } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 backdrop-blur sticky top-0 z-20 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4 text-black">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.svg"
            alt="Origen Restaurant Consulting logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold">{t.siteName}</span>
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link
            href="/"
            className="flex items-center h-10 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {t.nav.home}
          </Link>
          <Link
            href="/about"
            className="flex items-center h-10 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/services"
            className="flex items-center h-10 hover:text-gray-600 dark:hover:text-gray-300"
          >
            {t.nav.services}
          </Link>
          <Link
            href="/contact"
            className="flex items-center h-10 rounded-full border border-black px-3 hover:bg-black/5"
          >
            {t.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleLang}
            className="text-sm px-2 py-1 border rounded"
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
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden bg-white">
          <ul className="flex flex-col p-4 space-y-2 text-black">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)}>
                {t.nav.home}
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                {t.nav.services}
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="rounded-full border border-black px-3 py-1"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav.contact}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
