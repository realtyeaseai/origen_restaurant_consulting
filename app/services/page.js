"use client";

import { useMemo } from "react";
import Image from "next/image";
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
    <section className="relative min-h-screen py-8 px-4 sm:px-6 overflow-hidden">
      <Image
        src="/assets/services.PNG"
        alt="Services background"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto bg-stone-50/95 p-8 rounded-xl border border-stone-200 backdrop-blur-xs">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-4 text-center text-amber-500">
          {t.services.heading}
        </h2>
        <p className="text-center text-stone-600 mb-12 max-w-xl mx-auto leading-relaxed">
          {t.services.landingCopy}
        </p>
        <AnimatedServices services={services} />
      </div>
    </section>
  );
}
