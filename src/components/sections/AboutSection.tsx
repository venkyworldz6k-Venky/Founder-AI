'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Activity, ShieldCheck, Cpu, Code2 } from 'lucide-react';

function StatCounter({ target, suffix = '', isInView }: { target: number; suffix?: string; isInView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (target === 0) {
      setCount(0);
      return;
    }

    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    function update(time: number) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * target));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(update);
  }, [isInView, target]);

  return (
    <span>
      {isInView ? count : 0}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const stats = [
    { value: 0, suffix: '', label: t.about.stats.projectsDelivered, icon: Code2 },
    { value: 1, suffix: '', label: t.about.stats.ongoingProject, icon: Activity },
    { value: 2, suffix: '', label: t.about.stats.upcomingProjects, icon: Cpu },
    { value: 100, suffix: '%', label: t.about.stats.builtFromScratch, icon: ShieldCheck },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#94A17C]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#94A17C]">
              {t.about.tag}
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-[84px] tracking-tight text-[#D8D2C4] leading-none">
            {t.about.title}
          </h2>
        </motion.div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-momento text-2xl sm:text-3xl text-[#D8D2C4] leading-relaxed font-light">
              &quot;{t.about.bio}&quot;
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex flex-col justify-center space-y-4 text-[#9D988B] text-sm sm:text-base leading-relaxed font-light border-l border-white/10 pl-6 lg:pl-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p>
              Operating at the intersection of quantitative analysis and production AI, I architect foundational systems engineered for fault tolerance, privacy, and clinical-grade reliability.
            </p>
            <div className="flex items-center gap-3 pt-2 font-mono text-xs text-[#94A17C] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#94A17C] animate-pulse" />
              Direct Founder Engineering
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                className="glass-card p-8 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-[#94A17C]/40 transition-all duration-500 group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.35 + idx * 0.1 }}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#9FD8FF] group-hover:text-[#94A17C] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-[#9D988B]/60 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="font-bebas text-6xl sm:text-7xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors duration-300 leading-none">
                    <StatCounter target={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>
                  <div className="mt-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#9D988B] group-hover:text-[#D8D2C4] transition-colors">
                    {stat.label}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-radial-gradient from-[#94A17C]/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
