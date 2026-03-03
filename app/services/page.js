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
        // image: "/images/services/oath.jpg",  // optional: left-side image
      },
      {
        title: t.services.audit.title,
        description: t.services.audit.description,
        designation: t.services.badge.oneTime,
      },
      {
        title: t.services.improvement.title,
        description: t.services.improvement.description,
        designation: t.services.badge.annual,
      },
      {
        title: t.services.assurance.title,
        description: t.services.assurance.description,
        designation: t.services.badge.annual,
      },
    ],
    [t],
  );

  return (
    <section className="max-w-5xl mx-auto py-12 px-6 bg-white">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-black">
        {t.services.heading}
      </h2>
      <p className="text-center text-neutral-600 mb-10 max-w-xl mx-auto">
        {t.services.landingCopy}
      </p>
      <AnimatedServices services={services} />
    </section>
  );
}
