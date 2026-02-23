"use client";

import { createContext, useState, useContext } from "react";
import { translations } from "../lib/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const t = translations[lang] || translations.en;
  const toggleLang = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
