"use client";

import { useTranslation } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-gray-100 py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-sm text-gray-600">
        © {new Date().getFullYear()} {t.siteName}. All rights reserved.
      </div>
    </footer>
  );
}
