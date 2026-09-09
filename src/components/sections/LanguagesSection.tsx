'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Database, Brain, Globe2, Cpu, CheckCircle2 } from 'lucide-react';

interface LanguageCategory {
  title: string;
  subtitle: string;
  icon: any;
  iconColor?: string;
  items: {
    name: string;
    level: string;
    description: string;
    proficiency: number; // 0 - 100
  }[];
}

const languageCategories: LanguageCategory[] = [
  {
    title: 'Programming Languages',
    subtitle: 'Core Computational Logic',
    icon: Code2,
    items: [
      { name: 'Python', level: 'Expert', description: 'Data Science, PyTorch, FastAPI, Automation', proficiency: 96 },
      { name: 'TypeScript / JavaScript', level: 'Expert', description: 'Next.js 15, React 19, Node.js, WebSockets', proficiency: 94 },
      { name: 'SQL & Data Querying', level: 'Expert', description: 'PostgreSQL, ClickHouse, Complex Aggregations', proficiency: 92 },
      { name: 'GLSL Shaders & C++', level: 'Advanced', description: 'GPU BufferGeometry, ShaderMaterial, Edge AI', proficiency: 85 },
      { name: 'HTML5 & CSS3', level: 'Master', description: 'Tailwind CSS, Glassmorphism, Swiss Layouts', proficiency: 98 },
    ],
  },
  {
    title: 'AI & Data Science Ecosystem',
    subtitle: 'Machine Learning & Analytics',
    icon: Brain,
    iconColor: '#9FD8FF',
    items: [
      { name: 'PyTorch & TensorFlow', level: 'Advanced', description: 'Neural Networks, Vision Models, LLM Fine-Tuning', proficiency: 90 },
      { name: 'Pandas & NumPy', level: 'Expert', description: 'Data Manipulation, Predictive Analytics, EDA', proficiency: 95 },
      { name: 'OpenCV & Computer Vision', level: 'Advanced', description: 'Image Segmentation, Motion Tracking, Edge QA', proficiency: 88 },
      { name: 'Vector Databases (RAG)', level: 'Advanced', description: 'ChromaDB, Pinecone, RAG Retrieval Systems', proficiency: 87 },
      { name: 'Scikit-Learn & Stats', level: 'Expert', description: 'Regression, Classification, Statistical Testing', proficiency: 92 },
    ],
  },
  {
    title: 'Spoken & Human Languages',
    subtitle: 'Global Communication',
    icon: Globe2,
    items: [
      { name: 'English', level: 'Fluent / Professional', description: 'Technical Documentation & Global Enterprise Pitching', proficiency: 100 },
      { name: 'Telugu', level: 'Native / Primary', description: 'Native Fluency & Regional Leadership', proficiency: 100 },
      { name: 'Hindi', level: 'Professional Working', description: 'National Business & Client Relations', proficiency: 90 },
    ],
  },
];

export default function LanguagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="languages"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.06] overflow-hidden"
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
              04 // TECHNICAL & HUMAN FLUENCY
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#D8D2C4]">
            LANGUAGES & TECH STACK
          </h2>
        </motion.div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/[0.08] pb-6">
          {languageCategories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeTab === idx;

            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 rounded-full text-xs font-mono tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D8D2C4] text-[#0A0A08] font-semibold shadow-[0_0_20px_rgba(216,210,196,0.3)]'
                    : 'bg-white/[0.03] text-[#9D988B] border border-white/10 hover:border-white/20 hover:text-[#D8D2C4]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languageCategories[activeTab].items.map((item, idx) => (
            <motion.div
              key={item.name}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-[#94A17C]/50 transition-all duration-500 flex flex-col justify-between space-y-6 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-garamond text-2xl sm:text-3xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors">
                    {item.name}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#94A17C] uppercase tracking-wider">
                    {item.level}
                  </span>
                </div>
                <p className="text-[#9D988B] text-xs sm:text-sm leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Animated Skill Progress Bar */}
              <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#9D988B] uppercase">
                  <span>Proficiency Standard</span>
                  <span>{item.proficiency}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#94A17C] via-[#9FD8FF] to-[#D8D2C4]"
                    initial={{ width: '0%' }}
                    animate={{ width: `${item.proficiency}%` }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
