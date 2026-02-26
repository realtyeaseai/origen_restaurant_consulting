"use client";

import { useTranslation } from "../../context/LanguageContext";

export default function ServicesPage() {
  const { t } = useTranslation();

  return (
    <section className="max-w-5xl mx-auto py-12 px-6 bg-white">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-black">
        {t.services.heading}
      </h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-bold mb-2 text-black">
            {t.services.audit.title}
          </h3>
          <p className="text-gray-700">{t.services.audit.description}</p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
            {t.services.improvement.title}
          </h3>
          <p className="text-gray-700">{t.services.improvement.description}</p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
            {t.services.assurance.title}
          </h3>
          <p className="text-gray-700">{t.services.assurance.description}</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 text-black">
            {t.services.oath.title}
          </h3>
          <p className="text-gray-700">{t.services.oath.description}</p>
        </div>
      </div>
    </section>
  );
}
