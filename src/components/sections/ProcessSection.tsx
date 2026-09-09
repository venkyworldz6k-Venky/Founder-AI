'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const steps = [
    {
      num: t.process.steps.research.num,
      title: t.process.steps.research.title,
      desc: t.process.steps.research.desc,
    },
    {
      num: t.process.steps.analyze.num,
      title: t.process.steps.analyze.title,
      desc: t.process.steps.analyze.desc,
    },
    {
      num: t.process.steps.design.num,
      title: t.process.steps.design.title,
      desc: t.process.steps.design.desc,
    },
    {
      num: t.process.steps.develop.num,
      title: t.process.steps.develop.title,
      desc: t.process.steps.develop.desc,
    },
    {
      num: t.process.steps.launch.num,
      title: t.process.steps.launch.title,
      desc: t.process.steps.launch.desc,
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col space-y-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#94A17C]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#94A17C]">
              {t.process.tag}
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-[84px] tracking-tight text-[#D8D2C4] leading-none">
            {t.process.title}
          </h2>
        </motion.div>

        {/* Horizontal Editorial Timeline */}
        <div className="relative">
          {/* Animated Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-[1px] bg-white/10 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#94A17C] via-[#9FD8FF] to-[#D8D2C4]"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                className="glass-card p-7 rounded-3xl border border-white/10 hover:border-[#9FD8FF]/40 transition-all duration-500 flex flex-col justify-between space-y-6 group hover:-translate-y-2"
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
              >
                {/* Step Circle & Phase */}
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/15 flex items-center justify-center font-mono text-sm text-[#9FD8FF] group-hover:bg-[#9FD8FF] group-hover:text-[#0A0A08] transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(159,216,255,0.2)]">
                    {step.num}
                  </div>
                  <span className="text-[10px] font-mono text-[#94A17C] uppercase tracking-widest">
                    STAGE 0{idx + 1}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="font-momento text-2xl sm:text-3xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9D988B] leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line indicator */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#94A17C]" />
                  <span className="text-[10px] font-mono text-[#9D988B]/70 tracking-widest uppercase">
                    Milestone Verified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
