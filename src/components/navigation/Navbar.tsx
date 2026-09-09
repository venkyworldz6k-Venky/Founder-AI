'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Globe, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { SupportedLanguage } from '@/messages/translations';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t, languages } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 40);
  });

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.about, id: 'about' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.contact, id: 'contact' },
  ];

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 sm:py-4 bg-[#0A0A08]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 sm:py-8 bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* LOGO: KSV. */}
        <button
          suppressHydrationWarning
          onClick={() => scrollToSection('hero')}
          className="text-left group cursor-pointer flex items-baseline gap-2"
        >
          <span className="font-momento text-2xl sm:text-3xl font-bold tracking-tight text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors">
            {t.nav.logo}
          </span>
          <span className="hidden sm:inline-block text-[10px] tracking-[0.25em] text-[#9D988B] font-mono uppercase">
            AI FOUNDER
          </span>
        </button>

        {/* DESKTOP NAV MENU */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-xs sm:text-sm tracking-wider uppercase font-mono text-[#9D988B]">
          {navItems.map((item) => (
            <button
              key={item.id}
              suppressHydrationWarning
              onClick={() => scrollToSection(item.id)}
              className="hover:text-[#D8D2C4] transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#94A17C] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* TOP-RIGHT CONTROLS: Language Switcher + Start Project */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-[#D8D2C4] transition-all duration-200 cursor-pointer"
              aria-label="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#94A17C]" />
              <span className="font-medium">{currentLang.nativeName}</span>
              <ChevronDown
                className={`w-3 h-3 text-[#9D988B] transition-transform duration-200 ${
                  isLangOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 mt-2 w-52 py-2 rounded-2xl bg-[#12130F]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 overflow-hidden max-h-[380px] overflow-y-auto"
                >
                  <div className="px-3 py-1.5 border-b border-white/[0.06] mb-1">
                    <span className="text-[10px] font-mono tracking-widest text-[#9D988B] uppercase">
                      Select Language
                    </span>
                  </div>
                  {languages.map((item) => (
                    <button
                      key={item.code}
                      type="button"
                      suppressHydrationWarning
                      onClick={() => {
                        setLanguage(item.code as SupportedLanguage);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left flex items-center justify-between text-xs transition-colors cursor-pointer ${
                        language === item.code
                          ? 'bg-[#94A17C]/15 text-[#9FD8FF] font-medium'
                          : 'text-[#D8D2C4] hover:bg-white/[0.05]'
                      }`}
                    >
                      <span className="font-sans">{item.name}</span>
                      <span className="text-[11px] font-mono opacity-60">{item.nativeName}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Start Project CTA Button */}
          <button
            suppressHydrationWarning
            onClick={() => scrollToSection('contact')}
            className="relative group px-4 sm:px-6 py-2 sm:py-2.5 rounded-full overflow-hidden border border-[#94A17C]/40 text-xs tracking-wider uppercase font-mono text-[#D8D2C4] cursor-pointer transition-all duration-300 hover:border-[#9FD8FF] hover:shadow-[0_0_20px_rgba(159,216,255,0.25)] flex items-center gap-1.5"
          >
            <span className="relative z-10 group-hover:text-[#0A0A08] transition-colors duration-300 font-medium">
              {t.nav.startProject}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:text-[#0A0A08] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#94A17C] to-[#9FD8FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/[0.04] border border-white/10 text-[#D8D2C4] cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 py-6 bg-[#0A0A08]/95 backdrop-blur-2xl border-b border-white/10"
          >
            <div className="flex flex-col gap-4 font-mono text-sm uppercase tracking-wider">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  suppressHydrationWarning
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-[#D8D2C4] hover:text-[#9FD8FF] py-2 border-b border-white/[0.04]"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
