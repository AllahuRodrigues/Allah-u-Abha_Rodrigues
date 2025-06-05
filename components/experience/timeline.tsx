'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

interface TimelineItem {
  title?: string;
  degree?: string;
  company?: string;
  school?: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  type: 'education' | 'experience';
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500" />
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                {item.type === 'education' ? (
                  <GraduationCap size={16} className="text-white" />
                ) : (
                  <Briefcase size={16} className="text-white" />
                )}
              </div>
            </div>

            {/* Content */}
            <div 
              className={`w-full md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              } ml-16 md:ml-0`}
            >
              <motion.div
                className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title || item.degree}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {item.company || item.school}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                
                <div className="flex items-center gap-1 mb-3 text-gray-400 text-sm">
                  <MapPin size={14} />
                  {item.location}
                </div>
                
                <p className="text-gray-300 mb-4">
                  {item.description}
                </p>
                
                <ul className="space-y-2">
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 