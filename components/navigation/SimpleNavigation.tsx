'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '@/lib/constants';
import { smoothScrollTo } from '@/lib/utils';

export const SimpleNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-black/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'py-4 bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
            <span className="text-black font-bold text-xl">AR</span>
          </div>
        </motion.div>

        {/* Available for Opportunities Badge + Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-6 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Navigation Items */}
          <div className="flex items-center gap-1 px-3 py-1.5 bg-white/[0.04] backdrop-blur-md rounded-lg border border-white/[0.08] relative z-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => smoothScrollTo(item.href.slice(1))}
                className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white transition-colors duration-200 font-medium rounded-md hover:bg-white/5"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-20 p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </motion.div>
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 mt-2 mx-4 p-6 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 md:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <div className="flex flex-col gap-1 relative z-10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      smoothScrollTo(item.href.slice(1));
                      setIsOpen(false);
                    }}
                    className="text-left text-zinc-400 hover:text-white transition-colors text-sm p-2.5 rounded-lg hover:bg-white/5"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}; 