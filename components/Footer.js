"use client";

import { useTranslation } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-stone-100 border-t border-stone-200 py-6">
      <div className="max-w-5xl mx-auto text-center text-sm text-stone-600">
        © {new Date().getFullYear()} {t.siteName}. All rights reserved.
      </div>
    </footer>
  );
}
