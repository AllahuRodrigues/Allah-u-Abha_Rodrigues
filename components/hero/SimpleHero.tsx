'use client';

import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform } from 'framer-motion';
import { profile, typewriterTexts } from '@/lib/constants';
import { Typewriter } from '@/components/ui/typewriter';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowUpRight } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), { ssr: false });

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/Allah-u-Abha-Rodrigues-CV.pdf';
  link.download = 'Allah-u-Abha-Rodrigues-CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export function SimpleHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, -120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Three.js background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.04),transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container text-center pt-20"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-zinc-400 font-medium tracking-wide">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none">
            <span className="block text-white">{profile.name.split(' ')[0]}</span>
            <span className="block text-zinc-500">{profile.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="h-10 flex items-center justify-center mb-8"
        >
          <Typewriter
            texts={typewriterTexts}
            delay={1200}
            className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="max-w-xl mx-auto text-zinc-500 text-base leading-relaxed mb-10"
        >
          Founder of Regilon · GRP Fellow at UNDP · Senior at Yale, CS & Statistics.
          Building at the intersection of ML, document intelligence, and global development.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          <button
            onClick={() => smoothScrollTo('contact')}
            className="group flex items-center gap-2 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors duration-200"
          >
            <Mail className="w-4 h-4" />
            Let&apos;s Connect
          </button>
          <button
            onClick={handleDownloadCV}
            className="group flex items-center gap-2 px-6 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex items-center justify-center gap-3"
        >
          {[
            { icon: Github, href: profile.links.github, label: 'GitHub' },
            { icon: Linkedin, href: profile.links.linkedIn, label: 'LinkedIn' },
            { icon: ArrowUpRight, href: profile.links.portfolio, label: 'Portfolio' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => smoothScrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-zinc-600 hover:text-zinc-400 transition-colors group"
      >
        <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
}
