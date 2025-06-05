'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, Download, Calendar, BookOpen } from 'lucide-react';
import type { Research } from '@/lib/types';

interface ResearchAccordionProps {
  papers: Research[];
}

export const ResearchAccordion = ({ papers }: ResearchAccordionProps) => {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {papers.map((paper, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="glass-effect rounded-lg overflow-hidden border border-white/10 hover:bg-white/5 transition-all duration-300"
        >
          <Accordion.Trigger className="w-full p-6 text-left group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                  {paper.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} />
                    {paper.journal}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    {paper.period}
                  </div>
                </div>
              </div>
              <ChevronDown
                size={20}
                className="text-gray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </div>
          </Accordion.Trigger>
          
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
            <div className="px-6 pb-6">
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-sm font-medium text-gray-300 mb-3">Abstract</h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {paper.abstract}
                </p>
                
                <motion.a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={16} />
                  Download PDF
                </motion.a>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}; 