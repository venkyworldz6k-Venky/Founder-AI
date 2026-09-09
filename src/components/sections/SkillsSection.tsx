'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  BarChart3,
  Bot,
  BrainCircuit,
  Eye,
  Layers,
  HeartPulse,
  ArrowUpRight,
  LucideIcon,
} from 'lucide-react';

interface TiltCardProps {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon;
  index: number;
  isInView: boolean;
}

function SkillCard({ id, title, desc, tags, icon: Icon, index, isInView }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Subtle magnetic tilt
    setRotateX(-y * 0.04);
    setRotateY(x * 0.04);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
          isHovered ? 'translateY(-10px)' : 'translateY(0px)'
        }`,
        transition: isHovered
          ? 'transform 0.1s ease-out, box-shadow 0.3s ease'
          : 'transform 0.5s ease-out, box-shadow 0.5s ease',
      }}
      className={`relative glass-card p-8 sm:p-9 rounded-3xl overflow-hidden flex flex-col justify-between border transition-all duration-300 ${
        isHovered
          ? 'border-[#94A17C]/60 shadow-[0_20px_50px_rgba(159,216,255,0.08)]'
          : 'border-white/[0.08]'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
    >
      {/* Dynamic Soft Glow Spotlight */}
      <div
        className={`absolute -inset-px rounded-3xl bg-radial-gradient from-[#94A17C]/25 via-[#9FD8FF]/10 to-transparent blur-xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
        {/* Top bar with ID and Icon */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-[#94A17C] tracking-widest uppercase">
            // {id}
          </span>
          <div
            className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
              isHovered
                ? 'bg-[#9FD8FF]/10 border-[#9FD8FF]/50 text-[#9FD8FF] scale-110 shadow-[0_0_20px_rgba(159,216,255,0.3)]'
                : 'bg-white/[0.04] border-white/10 text-[#9D988B]'
            }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h3 className="font-momento text-2xl sm:text-3xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-[#9D988B] text-xs sm:text-sm leading-relaxed font-light">
            {desc}
          </p>
        </div>

        {/* Tags and Arrow */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[10px] font-mono text-[#D8D2C4]/70"
              >
                {tag}
              </span>
            ))}
          </div>
          <ArrowUpRight
            className={`w-4 h-4 text-[#9D988B] shrink-0 transition-transform duration-300 ${
              isHovered ? 'text-[#9FD8FF] translate-x-1 -translate-y-1' : ''
            }`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const skillCards = [
    {
      id: '01',
      title: t.skills.items.dataAnalytics.title,
      desc: t.skills.items.dataAnalytics.desc,
      tags: t.skills.items.dataAnalytics.tags,
      icon: BarChart3,
    },
    {
      id: '02',
      title: t.skills.items.ai.title,
      desc: t.skills.items.ai.desc,
      tags: t.skills.items.ai.tags,
      icon: Bot,
    },
    {
      id: '03',
      title: t.skills.items.machineLearning.title,
      desc: t.skills.items.machineLearning.desc,
      tags: t.skills.items.machineLearning.tags,
      icon: BrainCircuit,
    },
    {
      id: '04',
      title: t.skills.items.computerVision.title,
      desc: t.skills.items.computerVision.desc,
      tags: t.skills.items.computerVision.tags,
      icon: Eye,
    },
    {
      id: '05',
      title: t.skills.items.fullstack.title,
      desc: t.skills.items.fullstack.desc,
      tags: t.skills.items.fullstack.tags,
      icon: Layers,
    },
    {
      id: '06',
      title: t.skills.items.healthcareAutomation.title,
      desc: t.skills.items.healthcareAutomation.desc,
      tags: t.skills.items.healthcareAutomation.tags,
      icon: HeartPulse,
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.08]"
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
              {t.skills.tag}
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-[84px] tracking-tight text-[#D8D2C4] leading-none">
            {t.skills.title}
          </h2>
          <p className="text-[#9D988B] text-base sm:text-lg max-w-2xl font-light">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* 6 Premium Glass Cards Grid with Magnetic 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCards.map((skill, idx) => (
            <SkillCard
              key={skill.id}
              id={skill.id}
              title={skill.title}
              desc={skill.desc}
              tags={skill.tags}
              icon={skill.icon}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
