'use client';

import { useLanguage } from '@/context/LanguageContext';

export function useTranslation() {
  const { language, setLanguage, t, languages } = useLanguage();
  return {
    language,
    setLanguage,
    t,
    languages,
  };
}

export default useTranslation;
