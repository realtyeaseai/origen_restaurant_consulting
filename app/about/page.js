"use client";

import { useTranslation } from "../../context/LanguageContext";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-screen">
      {/* Left Side: About Origen */}
      <div className="flex-1 bg-[linear-gradient(180deg,#997300,#ffc000)] text-white p-6 flex flex-col items-center justify-center text-center">
        <img
          src="/assets/origen.png"
          alt="Origen"
          className="mb-6 w-56 object-contain border-2 border-white p-0.5 rounded-lg shadow-lg"
        />
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          About Origen
        </h2>
        <p className="mb-4">{t.about.businessDescription}</p>
        <p className="mb-4">{t.about.specialization}</p>
        <p className="mb-6">{t.about.philosophy}</p>
      </div>

      {/* Right Side: Founder & Principal */}
      <div className="flex-1 bg-white text-black p-6 flex flex-col items-center justify-center text-center">
        <img
          src="/assets/jen1.png"
          alt="Founder"
          className="mb-6 w-43 h-56 object-cover object-top border-2 border-amber-400 p-0.5 rounded-lg shadow-lg"
        />
        <h3 className="text-xl sm:text-2xl font-semibold mb-3">
          Founder & Principal – {t.about.founderName}
        </h3>
        <p className="mb-4">{t.about.founderBio}</p>
        <p className="mb-4">{t.about.missionParagraph}</p>
      </div>
    </section>
  );
}
