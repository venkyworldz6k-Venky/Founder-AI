'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  Layers,
  Terminal,
  Play,
  FileText,
  Activity,
  LucideIcon,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  badgeType: 'ongoing' | 'upcoming';
  badgeText: string;
  status: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  gradient: string;
  icon: LucideIcon;
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: '01',
      badgeType: 'ongoing',
      badgeText: t.projects.ongoingBadge,
      status: t.projects.items.hospitalAdGen.status,
      title: t.projects.items.hospitalAdGen.title,
      category: t.projects.items.hospitalAdGen.category,
      desc: t.projects.items.hospitalAdGen.desc,
      tags: t.projects.items.hospitalAdGen.tags,
      gradient: 'from-[#0E241B] via-[#0A0A08] to-[#12222E]',
      icon: Play,
    },
    {
      id: '02',
      badgeType: 'upcoming',
      badgeText: t.projects.upcomingBadge,
      status: t.projects.items.medicalReportAi.status,
      title: t.projects.items.medicalReportAi.title,
      category: t.projects.items.medicalReportAi.category,
      desc: t.projects.items.medicalReportAi.desc,
      tags: t.projects.items.medicalReportAi.tags,
      gradient: 'from-[#1E122A] via-[#0A0A08] to-[#0F2228]',
      icon: FileText,
    },
    {
      id: '03',
      badgeType: 'upcoming',
      badgeText: t.projects.upcomingBadge,
      status: t.projects.items.smartClinicCrm.status,
      title: t.projects.items.smartClinicCrm.title,
      category: t.projects.items.smartClinicCrm.category,
      desc: t.projects.items.smartClinicCrm.desc,
      tags: t.projects.items.smartClinicCrm.tags,
      gradient: 'from-[#2A1D12] via-[#0A0A08] to-[#122822]',
      icon: Activity,
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative w-full py-32 bg-[#0A0A08] border-t border-white/[0.08]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col space-y-4 mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-[1px] bg-[#94A17C]" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#94A17C]">
              {t.projects.tag}
            </span>
          </div>
          <h2 className="font-bebas text-6xl sm:text-7xl lg:text-[84px] tracking-tight text-[#D8D2C4] leading-none">
            {t.projects.title}
          </h2>
        </motion.div>

        {/* NDA & Confidentiality Notice */}
        <motion.div
          className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-4 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="p-2.5 rounded-xl bg-[#94A17C]/10 text-[#94A17C] shrink-0 mt-0.5">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-[#9D988B] leading-relaxed font-light">
            {t.projects.confidentialityNotice}
          </p>
        </motion.div>

        {/* 3 Editorial Cards - Sticky Stacked / Flyover Interaction */}
        <div className="relative flex flex-col space-y-12 sm:space-y-16 pb-16">
          {projects.map((project, idx) => {
            const stickyTop = 110 + idx * 32;
            const Icon = project.icon;

            return (
              <div
                key={project.id}
                style={{ top: `${stickyTop}px` }}
                className="sticky z-20 group"
              >
                <motion.div
                  onClick={() => setSelectedProject(project)}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-[#94A17C]/50 transition-all duration-500 cursor-pointer shadow-[0_30px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-[#0A0A08]/90 group-hover:shadow-[0_0_35px_rgba(159,216,255,0.12)]"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    {/* Large Cinematic Preview with Tech Pattern & Graphic Icon */}
                    <div
                      className={`lg:col-span-6 min-h-[300px] sm:min-h-[360px] bg-gradient-to-br ${project.gradient} p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-700`}
                    >
                      {/* Background grid mesh */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#94A17C_1px,transparent_1px)] [background-size:20px_20px]" />

                      {/* Header Badges */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-xs text-[#94A17C] tracking-widest px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                          // PROJECT {project.id}
                        </span>

                        <div className="flex items-center gap-2">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              project.badgeType === 'ongoing'
                                ? 'bg-[#94A17C] animate-ping'
                                : 'bg-[#9FD8FF]'
                            }`}
                          />
                          <span
                            className={`px-3 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase border backdrop-blur-md ${
                              project.badgeType === 'ongoing'
                                ? 'bg-[#94A17C]/15 border-[#94A17C]/40 text-[#94A17C]'
                                : 'bg-[#9FD8FF]/15 border-[#9FD8FF]/40 text-[#9FD8FF]'
                            }`}
                          >
                            {project.badgeText}
                          </span>
                        </div>
                      </div>

                      {/* Center Cinematic Graphic Display */}
                      <div className="relative z-10 my-auto py-6 flex items-center gap-4">
                        <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center justify-center text-[#D8D2C4] group-hover:text-[#9FD8FF] group-hover:scale-110 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                          <Icon className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-mono tracking-widest uppercase text-[#9D988B]">
                            {project.status}
                          </span>
                          <div className="text-sm font-mono text-[#D8D2C4]/80 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#94A17C]" />
                            Automated AI Engine
                          </div>
                        </div>
                      </div>

                      {/* Category Label */}
                      <div className="relative z-10">
                        <span className="text-xs font-mono text-[#9D988B] tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Right: Editorial Information, Description & Tags */}
                    <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-black/20">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-[#94A17C] tracking-widest uppercase">
                            Architecture & Scope
                          </span>
                          <div className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#9D988B] group-hover:text-[#9FD8FF] group-hover:bg-[#9FD8FF]/10 group-hover:scale-110 transition-all duration-300">
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </div>
                        </div>

                        <h3 className="font-momento text-3xl sm:text-4xl text-[#D8D2C4] group-hover:text-[#9FD8FF] transition-colors leading-tight">
                          {project.title}
                        </h3>

                        <p className="text-sm sm:text-base text-[#9D988B] leading-relaxed font-light">
                          {project.desc}
                        </p>
                      </div>

                      {/* Tech Chips */}
                      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                        <span className="text-[11px] font-mono tracking-widest uppercase text-[#9D988B]/60">
                          Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#D8D2C4]/80 group-hover:border-[#94A17C]/30 transition-colors"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Project Detail Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            <motion.div
              className="relative w-full max-w-2xl bg-[#12130F] border border-white/15 rounded-3xl p-8 sm:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-[#9D988B] hover:text-[#D8D2C4] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#94A17C] uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#94A17C] animate-ping" />
                  {selectedProject.badgeText} · {selectedProject.status}
                </div>

                <h3 className="font-momento text-3xl sm:text-4xl text-[#D8D2C4]">
                  {selectedProject.title}
                </h3>

                <p className="text-sm font-mono text-[#9D988B] uppercase tracking-wider">
                  {selectedProject.category}
                </p>

                <p className="text-sm sm:text-base text-[#D8D2C4]/90 leading-relaxed font-light">
                  {selectedProject.desc}
                </p>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9FD8FF] uppercase tracking-wider">
                    <Terminal className="w-4 h-4" />
                    Key Architecture Capabilities
                  </div>
                  <ul className="text-xs sm:text-sm text-[#9D988B] space-y-1.5 font-light">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#94A17C]" />
                      Modular microservice architecture built for clinical scalability
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#94A17C]" />
                      Real-time telemetry and automated compliance checks
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#94A17C]" />
                      Low latency inference endpoints with fallback safeguards
                    </li>
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-mono text-[#9D988B] uppercase tracking-wider block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#D8D2C4]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
