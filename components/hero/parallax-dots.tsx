'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const ParallaxDots = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 z-10" />
      
      {/* Dot Pattern */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 dot-pattern opacity-30"
      />

      {/* Animated Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}; 