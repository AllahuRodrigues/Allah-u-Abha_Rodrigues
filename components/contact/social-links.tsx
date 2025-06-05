'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/lib/constants';

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: profile.links.linkedIn,
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      url: profile.links.github,
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Email',
      url: `mailto:${profile.email}`,
      icon: Mail,
      color: 'hover:text-green-400'
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-4">Find me online</h3>
      <div className="flex gap-4">
        {socialLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 glass-effect rounded-lg text-gray-400 transition-all duration-300 ${link.color} hover:scale-110`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Visit my ${link.name} profile`}
            >
              <IconComponent size={24} />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}; 