"use client";

import { useTranslation } from "../../context/LanguageContext";
import Link from "next/link";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <section className="max-w-3xl mx-auto py-16 px-6 text-center bg-white text-black">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-black">
        {t.contact.heading}
      </h2>
      <p className="mb-6 text-gray-700">{t.contact.bookText}</p>
      <Link
        href={t.contact.calendarLink}
        target="_blank"
        className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
      >
        {t.nav.contact}
      </Link>
    </section>
  );
}
