'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        {/* Soft Glowing Interactive Follower Cursor */}
        <CustomCursor />

        <main className="relative min-h-screen bg-[#0A0A08] text-[#D8D2C4] overflow-x-hidden selection:bg-[#94A17C] selection:text-[#0A0A08]">
          {/* Glass Navbar with Logo KSV., Menu, 9-Language Switcher, and Start Project CTA */}
          <Navbar />

          {/* 1. Hero Section with 3D GPU Particle Galaxy & Large Editorial Typography */}
          <HeroSection />

          {/* 2. About Section with Animated Statistics (0, 1, 2, 100%) */}
          <AboutSection />

          {/* 3. Services Section with 4 Core Services & Solutions */}
          <ServicesSection />

          {/* 4. Skills Section with 6 Premium Glass Tilt Cards */}
          <SkillsSection />

          {/* 4. Selected Work with 3 Editorial Project Cards & Sticky Flyover Animation */}
          <ProjectsSection />

          {/* 5. Process Section with 5-Stage Editorial Timeline & Animated Scroll Line */}
          <ProcessSection />

          {/* 6. Contact Section with LET'S BUILD THE FUTURE, Quick Channels & Complete Footer */}
          <ContactSection />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
