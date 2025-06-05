'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Github, Calendar } from 'lucide-react';
import type { Project } from '@/lib/types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 50, opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-900 rounded-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-6 z-10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {project.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                {project.period}
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About this project</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Screenshots Placeholder */}
          {project.images && project.images.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Screenshots</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-800 rounded-lg border border-white/10 flex items-center justify-center"
                  >
                    <span className="text-gray-500">Screenshot {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 rounded-full text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}; 