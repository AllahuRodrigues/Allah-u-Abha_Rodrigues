'use client';

import { motion } from 'framer-motion';
import { BookOpen, Github, Globe, Newspaper, Twitter } from 'lucide-react';
import { profile } from '@/lib/constants';

export const InternetPresenceSection = () => {
  return (
    <section id="internet-presence" className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading mb-4">Internet Presence</h2>
          <p className="subheading max-w-2xl mx-auto">
            Documenting my journey, sharing knowledge, and contributing to the tech community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Blog Posts */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="text-accent" />
              <h3 className="text-xl font-semibold">Latest Blog Posts</h3>
            </div>
            <div className="space-y-4">
              {profile.blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <h4 className="font-medium mb-2">{post.title}</h4>
                  <p className="text-sm text-gray-400">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Documentation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-effect rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Newspaper className="text-accent" />
              <h3 className="text-xl font-semibold">Project Documentation</h3>
            </div>
            <div className="space-y-4">
              {profile.documentation.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <h4 className="font-medium mb-2">{doc.title}</h4>
                  <p className="text-sm text-gray-400">{doc.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    {doc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Online Presence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <Github className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-medium mb-2">GitHub</h4>
            <p className="text-sm text-gray-400">Check out my open-source contributions and projects.</p>
          </a>

          <a
            href={profile.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <Twitter className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-medium mb-2">Twitter</h4>
            <p className="text-sm text-gray-400">Follow my tech journey and insights.</p>
          </a>

          <a
            href={profile.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <Globe className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-medium mb-2">Personal Blog</h4>
            <p className="text-sm text-gray-400">Deep dives into ML, software engineering, and research.</p>
          </a>

          <a
            href={profile.links.newsletter}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect rounded-xl p-6 hover:scale-105 transition-transform"
          >
            <BookOpen className="w-8 h-8 text-accent mb-4" />
            <h4 className="font-medium mb-2">Newsletter</h4>
            <p className="text-sm text-gray-400">Subscribe to my weekly tech insights and updates.</p>
          </a>
        </motion.div>
      </div>
    </section>
  );
}; 