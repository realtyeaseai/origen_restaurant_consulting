"use client";

import { useTranslation } from "../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 bg-white">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-black">
        {t.about.heading}
      </h2>
      <p className="mb-4 text-gray-700">{t.about.businessDescription}</p>
      <p className="mb-4 text-gray-700">{t.about.specialization}</p>
      <p className="mb-6 text-gray-700">{t.about.philosophy}</p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-black">
        {t.about.founderHeading} – {t.about.founderName}
      </h3>
      <p className="mb-4 text-gray-700">{t.about.founderBio}</p>
      <p className="mb-4 text-gray-700">{t.about.missionParagraph}</p>
    </section>
  );
}
