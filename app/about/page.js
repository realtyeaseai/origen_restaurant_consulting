"use client";

import { useTranslation } from "../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-1 flex-col min-h-screen items-center text-center pt-12 px-6 bg-[linear-gradient(180deg,#997300,#ffc000)]">
      <div className="max-w-5xl">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">
          {t.about.heading}
        </h2>
        <p className="mb-4 text-white">{t.about.businessDescription}</p>
        <p className="mb-4 text-white">{t.about.specialization}</p>
        <p className="mb-6 text-white">{t.about.philosophy}</p>

        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-white">
          {t.about.founderHeading} – {t.about.founderName}
        </h3>
        <p className="mb-4 text-white">{t.about.founderBio}</p>
        <p className="mb-4 text-white">{t.about.missionParagraph}</p>
      </div>
    </section>
  );
}
