'use client';

import React from 'react';
import { motion } from 'framer-motion';
import GalaxyScene from '@/components/canvas/GalaxyScene';
import { useScroll } from '@/components/providers/SmoothScrollProvider';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDownRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { scrollProgress } = useScroll();
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* 160px Hero Display Editorial Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <span className="font-display text-[100px] sm:text-[130px] lg:text-[150px] tracking-tight text-white/[0.025] leading-none whitespace-nowrap block">
          DATA • AI • FOUNDER
        </span>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* LEFT COLUMN: Luxury Editorial Typography */}
        <motion.div
          className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:space-y-8"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Small Label */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-8 h-[1px] bg-[#94A17C]" />
            <span className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#94A17C] flex items-center gap-2">
              {t.hero.label}
              <Sparkles className="w-3 h-3 text-[#9FD8FF] animate-pulse" />
            </span>
          </motion.div>

          {/* Large Serif Name (72px / massive editorial proportion) */}
          <motion.h1
            className="font-luxury text-4xl sm:text-6xl lg:text-[72px] font-medium leading-[1.04] tracking-[0.03em] text-[#D8D2C4]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t.hero.namePrefix} <br />
            <span className="font-luxury italic font-light text-[#9FD8FF]">
              {t.hero.nameSuffix}
            </span>
          </motion.h1>

          {/* Role Pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A17C]" />
            <span className="text-xs sm:text-sm font-mono text-[#D8D2C4] tracking-wider">
              {t.hero.role}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-[#9D988B] leading-relaxed max-w-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t.hero.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4 pt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 rounded-full bg-[#D8D2C4] text-[#0A0A08] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-[#9FD8FF] hover:shadow-[0_0_30px_rgba(159,216,255,0.45)] hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{t.hero.viewPortfolio}</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              suppressHydrationWarning
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 rounded-full border border-white/20 text-[#D8D2C4] font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#94A17C] hover:text-[#94A17C] hover:bg-white/[0.04] hover:shadow-[0_0_20px_rgba(148,161,124,0.25)] active:scale-95 cursor-pointer"
            >
              {t.hero.contactMe}
            </button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="pt-2 flex items-center gap-3 text-xs font-mono text-[#9D988B]/60 uppercase tracking-widest"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#94A17C]" />
            {t.hero.scrollHint}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: 3D GPU Particle Galaxy Scene */}
        <motion.div
          className="lg:col-span-6 h-[480px] sm:h-[580px] lg:h-[660px] w-full relative rounded-3xl overflow-hidden glass-card border border-white/10"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <GalaxyScene scrollProgress={scrollProgress} />

          {/* Subtle GPU Badge */}
          <div className="absolute bottom-5 right-5 px-3.5 py-1.5 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#9D988B] tracking-wider pointer-events-none hidden sm:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9FD8FF] animate-ping" />
            GPU PARALLAX SHADER · 14,000 STARS
          </div>
        </motion.div>
      </div>
    </section>
  );
}
