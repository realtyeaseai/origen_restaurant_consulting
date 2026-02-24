"use client";

import { useTranslation } from "../context/LanguageContext";
import Image from "next/image";

// Calendly URL - update with your Calendly link
const CALENDLY_URL = "https://calendly.com/origen-consulting";

export default function Home() {
  const { t } = useTranslation();

  const openCalendly = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center text-center pt-24 px-6 bg-white">
      <div className="max-w-5xl">
        <div className="mb-10 w-full flex flex-col items-center">
          <Image
            src="/assets/jen.jpg"
            alt="Jennypher - Founder"
            width={200}
            height={200}
            className="rounded-full mb-4 object-cover"
          />
          <h3 className="text-2xl sm:text-4xl font-bold mb-3 text-black">
            {t.about.messageHeading}
          </h3>
          <p className="italic text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            {t.about.messageText}
          </p>
        </div>
        <hr className="w-full my-6 border-t border-gray-200 dark:border-gray-700" />
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-black">
          {t.landing.tagline}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          {t.landing.missionIntro}
        </p>
        <button
          onClick={openCalendly}
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 hover:text-[#ffc000] dark:hover:text-[#ffc000] cursor-pointer"
        >
          {t.nav.contact}
        </button>
      </div>
    </section>
  );
}
