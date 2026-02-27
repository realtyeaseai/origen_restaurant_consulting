"use client";

import { useTranslation } from "../context/LanguageContext";
import Image from "next/image";

export default function Home() {
  const { t } = useTranslation();

  const openCalendly = () => {
    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || "", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center text-center pt-12 px-6 bg-[linear-gradient(180deg,#997300,#ffc000)]">
      <div className="max-w-5xl">
        <div className="mb-10 w-full flex flex-col items-center rounded-lg p-6">
          <Image
            src="/assets/jen.jpg"
            alt="Jennypher - Founder"
            width={250}
            height={250}
            className="rounded-full mb-4 object-cover border-2 border-[#ffc000] p-2"
          />
          <h3 className="text-2xl sm:text-4xl font-bold mb-3 text-white">
            {t.about.messageHeading}
          </h3>
          <p className="italic text-lg sm:text-xl text-white max-w-3xl mx-auto">
            {t.about.messageText}
          </p>
        </div>
        <hr className="w-full my-6 border-t border-white dark:border-white" />
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
          {t.landing.tagline}
        </h1>
        <p className="text-base sm:text-lg text-white mb-8">
          {t.landing.missionIntro}
        </p>
        <button
          onClick={openCalendly}
          className="inline-block bg-white text-black mb-12 px-6 py-3 rounded-full hover:bg-gray-800 hover:text-[#ffc000] dark:hover:text-[#ffc000] cursor-pointer"
        >
          {t.nav.contact}
        </button>
      </div>
    </section>
  );
}
