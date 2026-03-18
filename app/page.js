"use client";

import { useTranslation } from "../context/LanguageContext";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  const openCalendly = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || "", "_blank");
  };

  return (
    <>
      {/* Hero: serene full-width with headline, subheading, CTAs (Linden-style) */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20 overflow-hidden">
        {/* <div
          className="absolute inset-0 bg-linear-to-br from-stone-400 from-20% via-slate-300 via-50% to-stone-500 to-80%"
          aria-hidden
        /> */}
        <Image
          src="/assets/hero2.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" aria-hidden />
        <div className="relative z-10 w-full mx-auto backdrop-blur-xxs bg-black/25 rounded-2xl px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-5 text-white drop-shadow-sm">
            {t.landing.tagline}
          </h1>
          <p className="text-base sm:text-lg text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
            {t.landing.missionIntro}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openCalendly}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#5c6b4b] text-white font-medium px-8 py-3.5 rounded-xl hover:bg-[#4a5840] transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-neutral-800 text-white font-medium px-8 py-3.5 rounded-xl border-2 border-white hover:bg-neutral-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Message from Jennypher – light section (like "I'm Maya" block) */}
      <section className="bg-stone-50 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Image
            src="/assets/jen.jpg"
            alt="Jennypher - Founder"
            width={220}
            height={220}
            className="rounded-full mb-6 object-cover ring-2 ring-stone-300 shadow-lg"
          />
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#5c6b4b]">
            {t.about.messageHeading}
          </h2>
          <p className="italic text-lg sm:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed">
            {t.about.messageText}
          </p>
        </div>
      </section>
    </>
  );
}
