'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BarChart3, Brain, Eye, Layers, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Data Analytics',
    icon: BarChart3,
    description: 'Business intelligence, SQL, dashboards, predictive insights',
    features: ['Business Intelligence', 'Advanced SQL', 'Interactive Dashboards', 'Predictive Insights'],
  },
  {
    id: '02',
    title: 'Artificial Intelligence',
    icon: Brain,
    description: 'LLMs, automation, AI workflows, intelligent assistants',
    features: ['Large Language Models', 'AI Workflows', 'Intelligent Assistants', 'Autonomous Agents'],
  },
  {
    id: '03',
    title: 'Computer Vision',
    icon: Eye,
    description: 'Image analysis, OpenCV, object detection, healthcare vision',
    features: ['Image Analysis', 'OpenCV & YOLO', 'Object Detection', 'Healthcare Vision'],
  },
  {
    id: '04',
    title: 'Full Stack Development',
    icon: Layers,
    description: 'Next.js, FastAPI, PostgreSQL, scalable SaaS products',
    features: ['Next.js & React', 'FastAPI & Python', 'PostgreSQL', 'Scalable SaaS'],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.06]"
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
              02 // CORE SERVICES & SOLUTIONS
            </span>
          </div>
          <h2 className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight text-[#D8D2C4]">
            SERVICES & EXPERTISE
          </h2>
        </motion.div>

        {/* 4 Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative glass-card p-8 sm:p-10 rounded-3xl overflow-hidden group cursor-pointer transition-all duration-500 hover:-translate-y-2"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
              >
                {/* Radial Glow Effect on Hover */}
                <div
                  className={`absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#94A17C]/20 via-[#9FD8FF]/20 to-transparent blur-xl transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full space-y-8">
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#94A17C] tracking-widest">
                      // {service.id}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-[#9FD8FF] group-hover:border-[#9FD8FF]/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-4">
                    <h3 className="font-garamond text-3xl sm:text-4xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#9D988B] text-sm sm:text-base leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Capability Tags & Arrow */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-mono text-[#D8D2C4]/70"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-[#9D988B] group-hover:text-[#9FD8FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
