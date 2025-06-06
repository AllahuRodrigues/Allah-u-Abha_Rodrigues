'use client';

import { useLanguage } from '@/lib/language-context';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <div className="flex bg-white/10 rounded-lg p-1 border border-white/20">
        <motion.button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
            language === 'en' 
              ? 'bg-white text-black font-medium' 
              : 'text-gray-400 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          EN
        </motion.button>
        <motion.button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
            language === 'pt' 
              ? 'bg-white text-black font-medium' 
              : 'text-gray-400 hover:text-white'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          PT
        </motion.button>
      </div>
    </div>
  );
} 