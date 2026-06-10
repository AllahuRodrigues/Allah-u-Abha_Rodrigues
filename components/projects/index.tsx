'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { profile } from '@/lib/constants';

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const categories = ['All', 'PropTech', 'Machine Learning', 'Social Impact'];

export const ProjectsSection = () => {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All'
    ? profile.projects
    : profile.projects.filter(p => p.category === selected);

  return (
    <section id="portfolio" className="py-16 section-divider">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-8">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-mono">/projects</p>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="text-zinc-500 mt-1 text-sm">Selected work and open source</p>
          </motion.div>

          {/* Filter */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 text-xs rounded-md border transition-all duration-200 ${
                  selected === cat
                    ? 'bg-white text-black border-white font-medium'
                    : 'bg-transparent text-zinc-500 border-white/10 hover:border-white/20 hover:text-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white/[0.03] border border-white/8 rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
                >
                  {/* Top */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-600 border border-white/8">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/5 text-zinc-600 border border-white/8">
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-white font-semibold text-sm group-hover:text-zinc-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-white/5 text-zinc-500 hover:text-white hover:bg-white/10 transition-all"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-1 text-xs text-zinc-600 mb-2">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Object.entries(project.metrics).slice(0, 3).map(([k, v]) => (
                        <div key={k} className="px-2 py-1 rounded-md bg-white/[0.04] border border-white/8 text-center">
                          <div className="text-white text-xs font-semibold">{v}</div>
                          <div className="text-zinc-600 text-[10px] capitalize">
                            {k.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 5).map((t) => (
                      <span key={t} className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.04] text-zinc-600 border border-white/8">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-1.5 py-0.5 text-[10px] rounded bg-white/[0.04] text-zinc-700 border border-white/8">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
