'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="group cursor-pointer h-full"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      onClick={onClick}
    >
      <div className="relative h-full glass-effect rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-500 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.liveUrl && (
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.liveUrl!, '_blank');
                  }}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="View live demo"
                >
                  <ExternalLink size={16} />
                </motion.button>
              )}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.repoUrl, '_blank');
                }}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View source code"
              >
                <Github size={16} />
              </motion.button>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Calendar size={14} />
            {project.period}
          </div>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 rounded-full text-white"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-400">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Click Indicator */}
        <div className="absolute bottom-4 right-4 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Click to view details
        </div>
      </div>
    </motion.div>
  );
}; 