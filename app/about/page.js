"use client";

import { useTranslation } from "../../context/LanguageContext";
import Image from "next/image";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Left: About Origen – theme-aligned dark panel */}
      <div className="flex-1 min-h-[50vh] md:min-h-0 bg-stone-700 text-white p-8 md:p-10 flex flex-col items-center justify-center text-center">
        <Image
          src="/assets/origen.png"
          alt="Origen"
          width={224}
          height={56}
          className="mb-6 w-56 object-contain"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#c4d4a8]">
          About Origen
        </h2>
        <p className="mb-4 text-white/95 leading-relaxed max-w-lg mx-auto">
          {t.about.businessDescription}
        </p>
        <p className="mb-4 text-white/90 leading-relaxed max-w-lg mx-auto">
          {t.about.specialization}
        </p>
        <p className="mb-6 text-white/90 leading-relaxed max-w-lg mx-auto">
          {t.about.philosophy}
        </p>
      </div>

      {/* Right: Founder & Principal – light panel */}
      <div className="flex-1 min-h-[50vh] md:min-h-0 bg-stone-50 p-8 md:p-10 flex flex-col items-center justify-center text-center border-t md:border-t-0 md:border-l border-stone-200">
        <Image
          src="/assets/jen1.png"
          alt="Founder"
          width={172}
          height={224}
          className="mb-6 w-44 h-56 object-cover object-top rounded-xl ring-2 ring-stone-200 shadow-lg"
        />
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[#5c6b4b]">
          Founder & Principal – {t.about.founderName}
        </h3>
        <p className="mb-4 text-stone-700 leading-relaxed max-w-lg mx-auto">
          {t.about.founderBio}
        </p>
        <p className="mb-4 text-stone-700 leading-relaxed max-w-lg mx-auto">
          {t.about.missionParagraph}
        </p>
      </div>
    </section>
  );
}
