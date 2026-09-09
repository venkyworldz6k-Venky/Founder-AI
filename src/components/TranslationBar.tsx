'use client';

import React, { useEffect, useState } from 'react';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
];

export default function TranslationBar() {
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    // 1. Inject hidden anchor element for Google Translate if not present
    let hiddenAnchor = document.getElementById('google_translate_element_hidden');
    if (!hiddenAnchor) {
      hiddenAnchor = document.createElement('div');
      hiddenAnchor.id = 'google_translate_element_hidden';
      hiddenAnchor.style.display = 'none';
      document.body.appendChild(hiddenAnchor);
    }

    // 2. Inject CSS to hide Google Translate native headers, banners, tooltips, and top margins
    const styleId = 'google_translate_custom_css';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .goog-te-banner-frame,
        .skiptranslate,
        .goog-logo-link,
        #goog-gt-tt,
        .goog-te-spinner-pos,
        .goog-te-gadget {
          display: none !important;
        }
        body {
          top: 0px !important;
          position: static !important;
        }
      `;
      document.head.appendChild(style);
    }

    // 3. Define global init callback
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
          },
          'google_translate_element_hidden'
        );
      }
    };

    // 4. Inject Google Translate script if not loaded
    const scriptId = 'google_translate_script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setActiveLang(langCode);

    // Find hidden Google combo select element and trigger change event
    const selectElem = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = langCode;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    } else {
      setTimeout(() => {
        const retrySelect = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
        if (retrySelect) {
          retrySelect.value = langCode;
          retrySelect.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }, 300);
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-2xl overflow-x-auto max-w-[92vw] sm:max-w-max no-scrollbar">
        {languages.map((lang) => {
          const isActive = activeLang === lang.code;

          return (
            <button
              key={lang.code}
              suppressHydrationWarning
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-white text-black font-semibold shadow-md scale-105'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
              }`}
            >
              <span className="text-sm">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// TypeScript declarations to prevent compiler errors
declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}
