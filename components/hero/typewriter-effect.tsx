'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { typewriterTexts } from '@/lib/constants';

export const TypewriterEffect = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingDelay = 100; // Delay between each character
    const deletingDelay = 50; // Delay when deleting characters
    const pauseDelay = 2000; // Pause before starting to delete

    const currentText = typewriterTexts[textIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        if (currentIndex > 0) {
          setDisplayText(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? deletingDelay : typingDelay);

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-2xl sm:text-3xl font-medium text-gray-400"
    >
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-6 ml-1 bg-accent"
      />
    </motion.div>
  );
}; 