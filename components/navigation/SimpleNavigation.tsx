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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 bg-black/80 backdrop-blur-xl border-b border-white/10' 
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
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">AR</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex items-center gap-8 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-6 px-6 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 relative z-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => smoothScrollTo(item.href.slice(1))}
                className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 font-medium group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg -z-10"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative z-20 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
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
              <div className="flex flex-col gap-4 relative z-10">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      smoothScrollTo(item.href.slice(1));
                      setIsOpen(false);
                    }}
                    className="text-left text-white hover:text-purple-400 transition-colors font-medium p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
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