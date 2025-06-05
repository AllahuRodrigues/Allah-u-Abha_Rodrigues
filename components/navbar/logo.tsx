'use client';

import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/lib/utils';

export const Logo = () => {
  return (
    <motion.button
      onClick={() => smoothScrollTo('home')}
      className="flex items-center space-x-2 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Go to top"
    >
      {/* Glyph */}
      <motion.div
        className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        AR
      </motion.div>
      
      {/* Text */}
      <div className="flex flex-col items-start">
        <motion.span
          className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300"
        >
          allahu rodrigues
        </motion.span>
        <motion.span
          className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          portfolio
        </motion.span>
      </div>
    </motion.button>
  );
}; 