'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SupportedLanguage,
  TranslationSchema,
  translations,
  LANGUAGES,
  LanguageOption,
} from '@/messages/translations';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: TranslationSchema;
  languages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
  languages: LANGUAGES,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>('en');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('ksv_preferred_language') as SupportedLanguage | null;
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang);
      }
    } catch {
      // localStorage may be disabled or restricted
    }
  }, []);

  const setLanguage = (lang: SupportedLanguage) => {
    if (translations[lang]) {
      setLanguageState(lang);
      try {
        localStorage.setItem('ksv_preferred_language', lang);
      } catch {
        // ignore
      }
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language] || translations.en,
    languages: LANGUAGES,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
