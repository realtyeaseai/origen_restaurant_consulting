"use client";

import { useMemo } from "react";
import { useTranslation } from "../../context/LanguageContext";
import AnimatedServices from "../../components/AnimatedServices";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = useMemo(
    () => [
      {
        title: t.services.oath.title,
        description: t.services.oath.description,
        designation: t.services.badge.oneTime,
        image: "/assets/services/Registered_Representative_for_OATH.png",
      },
      {
        title: t.services.audit.title,
        description: t.services.audit.description,
        designation: t.services.badge.oneTime,
        image: "/assets/services/Health_Safety_Audit.png",
      },
      {
        title: t.services.improvement.title,
        description: t.services.improvement.description,
        designation: t.services.badge.annual,
        image: "/assets/services/Health_Safety_Improvement_Program.png",
      },
      {
        title: t.services.assurance.title,
        description: t.services.assurance.description,
        designation: t.services.badge.annual,
        image: "/assets/services/A_Grade_Assurance_Program.png",
      },
    ],
    [t],
  );

  return (
    <section className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto bg-stone-50 p-8 md:p-10 rounded-xl border border-stone-200">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-[#5c6b4b]">
          {t.services.heading}
        </h2>
        <p className="text-center text-stone-600 mb-10 max-w-xl mx-auto">
          {t.services.landingCopy}
        </p>
        <AnimatedServices services={services} />
      </div>
    </section>
  );
}
