'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

export function Typewriter({ texts, delay = 1000, className = '' }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];

      if (!isDeleting) {
        // Typing
        if (charIndex < fullText.length) {
          setCurrentText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setCurrentText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex, texts, delay]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse text-purple-400">|</span>
    </span>
  );
} 