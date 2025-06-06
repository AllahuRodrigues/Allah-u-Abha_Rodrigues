'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar, Code, TrendingUp, ChevronRight, Users, Target, Globe } from 'lucide-react';
import { profile } from '@/lib/constants';

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Machine Learning', 'DevOps', 'Social Impact', 'Web Development'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? profile.projects 
    : profile.projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const getMetricIcon = (key: string) => {
    switch (key) {
      case 'users':
      case 'beneficiaries':
        return Users;
      case 'accuracy':
      case 'improvement':
      case 'timeReduction':
      case 'testCoverage':
      case 'satisfaction':
        return TrendingUp;
      default:
        return Target;
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-background via-black/50 to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(59,130,246,0.3) 1px, transparent 0)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            >
              <Code className="w-4 h-4 text-accent-400" />
              <span className="text-accent-400 text-sm font-medium">Featured Work</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Projects That Make an
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-purple-400 to-blue-400">
                Impact
              </span>
            </h2>
            
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              From full-stack web applications to machine learning models, here&apos;s a showcase of my most impactful 
              projects. Each project represents a unique challenge solved through innovative thinking, cutting-edge 
              technology, and a commitment to creating meaningful solutions that make a real difference.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-500 border-accent-500 text-white shadow-lg shadow-accent-500/25'
                    : 'bg-white/5 border-white/20 text-neutral-300 hover:bg-white/10 hover:border-accent-500/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-accent-500/30 transition-all duration-500 group-hover:scale-[1.02]">
                    {/* Project Image/Preview */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 via-purple-500/20 to-blue-500/20" />
                      
                      {/* Placeholder for project images */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">
                          {project.category === 'Machine Learning' && '🤖'}
                          {project.category === 'DevOps' && '⚙️'}
                          {project.category === 'Social Impact' && '🌍'}
                          {project.category === 'Web Development' && '🚀'}
                        </div>
                      </div>

                      {/* Hover Overlay */}
                      <AnimatePresence>
                        {hoveredProject === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 flex items-center justify-center"
                          >
                            <div className="flex gap-4">
                              {project.liveUrl && (
                                <motion.a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.1 }}
                                  className="p-4 bg-accent-500 rounded-full text-white hover:bg-accent-600 transition-colors"
                                >
                                  <Globe className="w-6 h-6" />
                                </motion.a>
                              )}
                              <motion.a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="p-4 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
                              >
                                <Github className="w-6 h-6" />
                              </motion.a>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-8">
                      {/* Project Header */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 text-neutral-400 text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{project.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-neutral-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="mb-6">
                          <h4 className="text-white font-semibold mb-3 text-sm">Key Metrics</h4>
                          <div className="grid grid-cols-3 gap-3">
                            {Object.entries(project.metrics).map(([key, value]) => {
                              const Icon = getMetricIcon(key);
                              return (
                                <div
                                  key={key}
                                  className="text-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                                >
                                  <Icon className="w-4 h-4 text-accent-400 mx-auto mb-1" />
                                  <div className="text-white font-bold text-sm">{value}</div>
                                  <div className="text-neutral-400 text-xs capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3 text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 6).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 text-xs bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 6 && (
                            <span className="px-3 py-1 text-xs bg-white/10 text-neutral-400 rounded-full border border-white/20">
                              +{project.tech.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </a>
                          )}
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-sm font-medium"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          className="text-accent-400 cursor-pointer"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-accent-500/10 to-purple-500/10 backdrop-blur-sm border border-accent-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-gray-300 mb-6">
                Let us discuss your next project and explore how we can bring your vision to life with innovative 
                technology solutions.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300"
              >
                <span>Let&apos;s Work Together</span>
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 