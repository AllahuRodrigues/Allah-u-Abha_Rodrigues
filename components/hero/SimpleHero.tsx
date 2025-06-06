'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { profile, typewriterTexts } from '@/lib/constants';
import { Typewriter } from '@/components/ui/typewriter';
import { ChevronDown, Github, Linkedin, Mail, Download, ExternalLink, Code, Cpu, Zap } from 'lucide-react';
import { smoothScrollTo } from '@/lib/utils';

// Enhanced 3D Interactive Cube Component
function Interactive3DCube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 15, y: 15 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotation when not being interacted with
  useEffect(() => {
    if (!isDragging && !isHovered && !isMoving) {
      const interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + 0.5
        }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isDragging, isHovered, isMoving]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      
      if (isDragging) {
        // Left-click drag: Rotate the cube
        const deltaX = e.clientX - lastMouse.x;
        const deltaY = e.clientY - lastMouse.y;
        
        setRotation(prev => ({
          x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.5)),
          y: prev.y + deltaX * 0.5
        }));
        
        setLastMouse({ x: e.clientX, y: e.clientY });
      } else if (isMoving) {
        // Right-click drag: Move the cube position
        const deltaX = e.clientX - lastMouse.x;
        const deltaY = e.clientY - lastMouse.y;
        
        setPosition(prev => ({
          x: prev.x + deltaX,
          y: prev.y + deltaY
        }));
        
        setLastMouse({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsMoving(false);
    };

    if (isDragging || isMoving) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isMoving, lastMouse]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (e.button === 0) {
      // Left click - rotation
      setIsDragging(true);
      setLastMouse({ x: e.clientX, y: e.clientY });
    } else if (e.button === 2) {
      // Right click - movement
      setIsMoving(true);
      setLastMouse({ x: e.clientX, y: e.clientY });
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent right-click context menu
  };

  const cubeSize = 80; // Larger cube size

  return (
    <div 
      className="absolute top-1/4 right-1/4 w-40 h-40 cursor-grab active:cursor-grabbing"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: isDragging || isMoving ? 'none' : 'transform 0.2s ease-out'
      }}
    >
      <motion.div
        ref={cubeRef}
        className="w-full h-full transform-gpu transition-transform duration-75 relative"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transformStyle: 'preserve-3d'
        }}
        onMouseDown={handleMouseDown}
        onContextMenu={handleContextMenu}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Enhanced Cube faces with different content */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Code className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 border border-white/25 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `rotateY(90deg) translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Cpu className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `rotateY(180deg) translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Zap className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 border border-white/25 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `rotateY(-90deg) translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Github className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 border border-white/30 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `rotateX(90deg) translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Linkedin className="w-8 h-8 text-white" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm flex items-center justify-center" 
          style={{ transform: `rotateX(-90deg) translateZ(${cubeSize}px)` }}
          whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
        >
          <Mail className="w-8 h-8 text-white" />
        </motion.div>

        {/* Glow effect when hovered */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-lg blur-md"
            style={{ transform: `translateZ(-${cubeSize/2}px)` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>

      {/* Interaction hint */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 text-center whitespace-nowrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.6 }}
        transition={{ duration: 0.3 }}
      >
      </motion.div>
    </div>
  );
}

// Tech Stack Floating Icons
function TechIcon({ icon: Icon, label, delay = 0, index }: { icon: any; label: string; delay?: number; index: number }) {
  return (
    <motion.div
      className="group flex flex-col items-center gap-2 p-4 glass-dark rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 card-hover interactive-element"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
        <Icon className="w-6 h-6 text-white group-hover:text-gray-200 transition-colors" />
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-medium">
        {label}
      </span>
    </motion.div>
  );
}

// Floating Geometric Elements
function FloatingElement({ delay, className, children }: { delay: number; className: string; children: React.ReactNode }) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Enhanced Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Dynamic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Animated Gradient Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Enhanced Interactive 3D Cube */}
      <Interactive3DCube />

      {/* Floating Geometric Elements */}
      <FloatingElement delay={0} className="top-20 left-20">
        <div className="w-8 h-8 border border-white/30 rotate-45 bg-white/5" />
      </FloatingElement>
      
      <FloatingElement delay={1} className="top-40 right-32">
        <div className="w-6 h-6 rounded-full border border-white/30 bg-white/5" />
      </FloatingElement>
      
      <FloatingElement delay={2} className="bottom-32 left-40">
        <div className="w-10 h-10 border border-white/30 bg-white/5" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      </FloatingElement>
      
      <FloatingElement delay={3} className="top-60 right-20">
        <div className="w-4 h-12 border border-white/30 bg-white/5" />
      </FloatingElement>

      {/* Enhanced Floating Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-2xl"
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
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-r from-gray-400/10 to-white/10 rounded-full blur-xl"
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
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-lg"
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
        className="container relative z-10 text-center space-y-8 px-6"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 mt-16"
        >
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
              className="block bg-gradient-to-r from-gray-200 via-white to-gray-300 bg-clip-text text-transparent"
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
              className="font-medium bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent"
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-neutral-400 leading-relaxed mb-6">
            Building the future through innovative software engineering, machine learning research, 
            and scalable DevOps solutions.
          </p>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Passionate about creating technology that makes a difference and mentoring the next generation of developers.
          </p>
        </motion.div>

        {/* Enhanced Tech Stack Icons */}
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
              index={index}
            />
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
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
            className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-white/25 interactive-element"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Let's Connect
            </span>
            <div className="absolute inset-0 bg-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </motion.button>

          <motion.button
            onClick={handleDownloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-2 px-8 py-4 glass-dark rounded-xl font-semibold border border-white/20 hover:border-white/30 transition-all duration-300 interactive-element"
          >
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </motion.button>
        </motion.div>

        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex justify-center gap-4 pt-8"
        >
          {[
            { icon: Github, href: profile.links.github, label: 'GitHub', color: 'hover:text-gray-300' },
            { icon: Linkedin, href: profile.links.linkedIn, label: 'LinkedIn', color: 'hover:text-blue-400' },
            { icon: ExternalLink, href: profile.links.portfolio, label: 'Portfolio', color: 'hover:text-white' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`p-3 glass-dark rounded-lg border border-white/20 text-neutral-400 hover:border-white/30 transition-all duration-300 interactive-element ${social.color}`}
              title={social.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.9 + index * 0.1 }}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
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
            <div className="p-2 rounded-full border border-white/20 group-hover:border-white/40 transition-colors glass-dark">
              <ChevronDown className="w-5 h-5" />
            </div>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
} 