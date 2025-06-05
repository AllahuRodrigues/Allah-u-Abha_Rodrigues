'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { profile, typewriterTexts } from '@/lib/constants';
import { Typewriter } from '@/components/ui/typewriter';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Code, Cpu, Zap } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

// Tech Stack Floating Icons
function TechIcon({ icon: Icon, label, delay = 0 }: { icon: any; label: string; delay?: number }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
        {label}
      </span>
    </motion.div>
  );
}

export function SimpleHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleDownloadCV = () => {
    // Create a download link for CV
    const link = document.createElement('a');
    link.href = '/cv/Allah-u-Abha-Rodrigues-CV.pdf';
    link.download = 'Allah-u-Abha-Rodrigues-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const techStack = [
    { icon: Code, label: 'Full-Stack' },
    { icon: Cpu, label: 'Machine Learning' },
    { icon: Zap, label: 'DevOps' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-black to-background">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container relative z-10 text-center space-y-8"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-purple-400 text-sm font-medium">Available for opportunities</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              {profile.name.split(' ')[0]}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400"
            >
              {profile.name.split(' ').slice(1).join(' ')}
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-2xl md:text-3xl lg:text-4xl text-neutral-300 font-light h-16 flex items-center justify-center"
          >
            <Typewriter
              texts={typewriterTexts}
              delay={1000}
              className="font-medium"
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-xl md:text-2xl text-neutral-400 max-w-4xl mx-auto leading-relaxed"
        >
          Building the future through innovative software engineering, machine learning research, 
          and scalable DevOps solutions. Passionate about creating technology that makes a difference.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex justify-center gap-6 mt-12"
        >
          {techStack.map((tech, index) => (
            <TechIcon
              key={tech.label}
              icon={tech.icon}
              label={tech.label}
              delay={1.3 + index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <motion.button
            onClick={() => smoothScrollTo('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Let's Connect
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>

          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex justify-center gap-4 pt-8"
        >
          {[
            { icon: Github, href: profile.links.github, label: 'GitHub' },
            { icon: Linkedin, href: profile.links.linkedIn, label: 'LinkedIn' },
            { icon: ExternalLink, href: profile.links.portfolio, label: 'Portfolio' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-neutral-400 hover:text-white hover:bg-white/20 transition-all duration-300"
              title={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => smoothScrollTo('about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Scroll to explore
            </span>
            <div className="p-2 rounded-full border border-white/20 group-hover:border-white/40 transition-colors">
              <ChevronDown className="w-5 h-5" />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
} 