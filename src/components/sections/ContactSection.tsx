'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import {
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function MediumIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

// Social links configured in one place for easy replacement
export const SOCIAL_LINKS = {
  email: 'srivenkatesh17.k@gmail.com',
  emailUrl: 'mailto:srivenkatesh17.k@gmail.com',
  linkedin: 'https://linkedin.com/in/kedarisrivenkatesh',
  github: 'https://github.com/kedarisrivenkatesh',
  medium: 'https://medium.com/@kedarisrivenkatesh',
};

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { t } = useLanguage();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState('sending');
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormState('idle'), 6000);
    }, 1200);
  };

  const quickContactButtons = [
    {
      label: 'Email',
      icon: Mail,
      href: SOCIAL_LINKS.emailUrl,
      color: 'text-[#9FD8FF]',
    },
    {
      label: 'LinkedIn',
      icon: LinkedinIcon,
      href: SOCIAL_LINKS.linkedin,
      color: 'text-[#9FD8FF]',
    },
    {
      label: 'GitHub',
      icon: GithubIcon,
      href: SOCIAL_LINKS.github,
      color: 'text-[#D8D2C4]',
    },
    {
      label: 'Medium',
      icon: MediumIcon,
      href: SOCIAL_LINKS.medium,
      color: 'text-[#94A17C]',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full pt-32 pb-16 bg-[#0A0A08] border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Large Headline: LET'S BUILD THE FUTURE */}
        <motion.div
          className="text-center space-y-4 mb-20"
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono tracking-[0.3em] text-[#94A17C] uppercase">
            {t.contact.tag}
          </div>
          <h2 className="font-bebas text-6xl sm:text-8xl lg:text-[130px] leading-none tracking-tight text-[#D8D2C4]">
            {t.contact.titleMain} <br />
            <span className="italic font-momento font-light text-[#9FD8FF]">
              {t.contact.titleAccent}
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-[#9D988B] text-base sm:text-lg font-light pt-2">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Form & Right Side Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-24 items-stretch">
          {/* Left: Interactive Contact Form */}
          <motion.div
            className="lg:col-span-7 glass-card p-8 sm:p-12 rounded-3xl border border-white/10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-momento text-2xl sm:text-3xl text-[#D8D2C4]">
                  {t.contact.formTitle}
                </h3>
                <span className="text-[11px] font-mono text-[#94A17C] uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Direct Transmission
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#9D988B] uppercase tracking-wider">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#D8D2C4] placeholder-[#9D988B]/40 text-sm focus:outline-none focus:border-[#9FD8FF]/60 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#9D988B] uppercase tracking-wider">
                      {t.contact.emailLabel}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#D8D2C4] placeholder-[#9D988B]/40 text-sm focus:outline-none focus:border-[#9FD8FF]/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-[#9D988B] uppercase tracking-wider">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 text-[#D8D2C4] placeholder-[#9D988B]/40 text-sm focus:outline-none focus:border-[#9FD8FF]/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState !== 'idle'}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D8D2C4] text-[#0A0A08] font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 hover:bg-[#9FD8FF] hover:shadow-[0_0_25px_rgba(159,216,255,0.4)] hover:scale-105 active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {formState === 'sending' ? (
                    <span>{t.contact.sending}</span>
                  ) : formState === 'success' ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#0A0A08]" />
                      <span>{t.contact.successMsg}</span>
                    </>
                  ) : (
                    <>
                      <span>{t.contact.sendButton}</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Side: Contact Card with Quick Contact Buttons */}
          <motion.div
            className="lg:col-span-5 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-momento text-3xl text-[#D8D2C4] mb-3">
                  {t.contact.directChannels}
                </h3>
                <p className="text-[#9D988B] text-sm leading-relaxed font-light">
                  {t.contact.directDesc}
                </p>
              </div>

              {/* Direct Email Address Block */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                <span className="block text-[10px] font-mono text-[#9D988B] uppercase tracking-wider">
                  Direct Founder Email:
                </span>
                <a
                  href={SOCIAL_LINKS.emailUrl}
                  className="text-base sm:text-lg font-mono text-[#D8D2C4] hover:text-[#9FD8FF] transition-colors flex items-center gap-2 break-all"
                >
                  <Mail className="w-4 h-4 text-[#94A17C] shrink-0" />
                  <span>{SOCIAL_LINKS.email}</span>
                </a>
              </div>

              {/* Quick Contact Buttons (Icons Only with Elegant Hover Animation) */}
              <div className="space-y-3">
                <span className="block text-[11px] font-mono text-[#9D988B] uppercase tracking-wider">
                  Quick Channels (Email · LinkedIn · GitHub · Medium):
                </span>
                <div className="flex items-center gap-3">
                  {quickContactButtons.map((btn) => {
                    const Icon = btn.icon;
                    return (
                      <a
                        key={btn.label}
                        href={btn.href}
                        target={btn.label === 'Email' ? undefined : '_blank'}
                        rel="noopener noreferrer"
                        aria-label={btn.label}
                        className="w-13 h-13 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#D8D2C4] hover:text-[#0A0A08] hover:bg-gradient-to-tr hover:from-[#94A17C] hover:to-[#9FD8FF] hover:border-[#9FD8FF] hover:scale-110 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(159,216,255,0.3)] transition-all duration-300 group cursor-pointer"
                      >
                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Timezone & Availability */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-xs font-mono text-[#9D988B]">
              <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#94A17C]">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="text-[#D8D2C4] font-medium block">IST (UTC+5:30)</span>
                <span className="text-[11px] text-[#94A17C]">● Accepting Select Q2/Q3 Collaborations</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOOTER */}
        <footer className="pt-16 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-momento text-xl sm:text-2xl text-[#D8D2C4] font-medium">
              KEDARI SRI VENKATESH
            </h4>
            <p className="text-xs font-mono text-[#9D988B] tracking-wider uppercase">
              {t.footer.role}
            </p>
          </div>

          <div className="text-center">
            <a
              href={SOCIAL_LINKS.emailUrl}
              className="text-xs sm:text-sm font-mono text-[#9D988B] hover:text-[#9FD8FF] transition-colors"
            >
              {SOCIAL_LINKS.email}
            </a>
          </div>

          {/* Social Icons in Footer */}
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[#9D988B] hover:text-[#D8D2C4] hover:bg-white/10 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[#9D988B] hover:text-[#9FD8FF] hover:bg-white/10 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.medium}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium"
              className="p-2.5 rounded-full bg-white/[0.03] border border-white/10 text-[#9D988B] hover:text-[#94A17C] hover:bg-white/10 transition-colors"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-xs font-mono text-[#9D988B]/60 text-center md:text-right">
            {t.footer.copyright}
          </div>
        </footer>
      </div>
    </section>
  );
}
