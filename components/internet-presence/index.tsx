'use client';

import { motion } from 'framer-motion';
import { BookOpen, Github, Globe, Newspaper, ExternalLink, Calendar, Clock, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/constants';
import Link from 'next/link';

export const InternetPresenceSection = () => {
  return (
    <section id="internet-presence" className="relative py-24 bg-black overflow-hidden">
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" />
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 right-20 w-6 h-6 border border-purple-500/20 rotate-45 bg-purple-500/5 floating" />
      <div className="absolute bottom-32 left-20 w-8 h-8 rounded-full border border-blue-500/20 bg-blue-500/5 floating" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/3 w-4 h-10 border border-cyan-500/20 bg-cyan-500/5 floating" style={{ animationDelay: '2s' }} />

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Internet Presence
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Documenting my journey, sharing knowledge, and contributing to the global tech community 
            through insightful content and open source contributions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Enhanced Blog Posts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-dark rounded-2xl p-8 border border-white/10 card-hover"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Latest Blog Posts</h3>
            </div>
            
            <div className="space-y-6">
              {profile.blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link
                    href={post.link}
                    className="group block p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 interactive-element"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors leading-tight">
                        {post.title}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                View All Posts
              </Link>
            </div>
          </motion.div>

          {/* Enhanced Project Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-dark rounded-2xl p-8 border border-white/10 card-hover"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Newspaper className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Documentation</h3>
            </div>
            
            <div className="space-y-6">
              {profile.documentation.map((doc, index) => (
                <motion.div
                  key={doc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <a
                    href={doc.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300 interactive-element"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors leading-tight">
                        {doc.title}
                      </h4>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                    </div>
                    
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-4 leading-relaxed">
                      {doc.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {doc.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Online Presence Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">Connect With Me</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Github,
                title: 'GitHub',
                description: 'Open-source contributions and project repositories',
                href: profile.links.github,
                color: 'hover:border-gray-500/30 hover:bg-gray-500/5',
                iconColor: 'text-gray-400',
                projects: '12+ repositories'
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                description: 'Professional network and career updates',
                href: profile.links.linkedIn,
                color: 'hover:border-blue-500/30 hover:bg-blue-500/5',
                iconColor: 'text-blue-400',
                projects: '500+ connections'
              },
              {
                icon: Globe,
                title: 'Portfolio',
                description: 'Complete showcase of projects and achievements',
                href: profile.links.portfolio,
                color: 'hover:border-purple-500/30 hover:bg-purple-500/5',
                iconColor: 'text-purple-400',
                projects: 'Live projects'
              },
              {
                icon: Mail,
                title: 'Email',
                description: 'Direct communication for collaborations',
                href: profile.links.email,
                color: 'hover:border-green-500/30 hover:bg-green-500/5',
                iconColor: 'text-green-400',
                projects: 'Quick response'
              }
            ].map((platform, index) => (
              <motion.a
                key={platform.title}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`group glass-dark rounded-xl p-6 border border-white/10 transition-all duration-300 interactive-element ${platform.color}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <platform.icon className={`w-8 h-8 ${platform.iconColor} group-hover:scale-110 transition-transform`} />
                  <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                
                <h4 className="font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {platform.title}
                </h4>
                
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors mb-3 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                  {platform.projects}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center glass-dark rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Let&apos;s Build Something Amazing Together
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you are interested in collaboration, have a question about my work, 
            or want to discuss the latest in tech, I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </Link>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 glass-dark border border-white/20 text-white rounded-lg font-semibold hover:border-white/40 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 