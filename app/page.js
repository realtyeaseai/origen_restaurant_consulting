"use client";

import { useTranslation } from "../context/LanguageContext";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-center text-center pt-24 px-6 bg-white">
      <div className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-black">
          {t.landing.tagline}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          {t.landing.missionIntro}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
        >
          {t.nav.contact}
        </Link>
      </div>
    </section>
  );
}
