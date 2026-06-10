'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Github, ChevronRight } from 'lucide-react';
import { profile } from '@/lib/constants';

type ExpLinks = { company?: string; github?: string; achievement?: string };

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const ExperienceSection = () => (
  <section id="experience" className="py-16 section-divider">
    <div className="container max-w-3xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.12 }}
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-mono">
            /experience
          </p>
          <h2 className="text-3xl font-bold text-white">
            Work & Fellowships
          </h2>
          <p className="text-zinc-500 mt-1.5 text-sm">
            From founding Regilon to UNDP GRP Fellow, HapSTR, Unlock Labs, and Yale
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/8 hidden sm:block" />

          <div className="space-y-4">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={item}
                className="relative sm:pl-8"
              >
                {/* Dot */}
                <div className="absolute left-0 top-5 w-[23px] h-[23px] rounded-full border border-white/15 bg-black flex items-center justify-center hidden sm:flex">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                </div>

                <div className="group bg-white/[0.03] border border-white/8 rounded-xl p-5 hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      {/* Company initial */}
                      <div className="w-8 h-8 rounded-md bg-white/8 border border-white/10 flex items-center justify-center text-xs font-bold text-zinc-300 shrink-0 mt-0.5">
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold leading-snug group-hover:text-zinc-200 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-zinc-400 text-sm">{exp.company}</span>
                          {(exp.links as ExpLinks)?.company && (
                            <a
                              href={(exp.links as ExpLinks).company}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-600 hover:text-zinc-300 transition-colors"
                            >
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                          {(exp.links as ExpLinks)?.github && (
                            <a
                              href={(exp.links as ExpLinks).github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-zinc-600 hover:text-zinc-300 transition-colors"
                            >
                              <Github className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1 text-xs text-zinc-500">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-zinc-600">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-3">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-1.5 mb-3">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
                        <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-zinc-600" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] rounded-md bg-white/5 text-zinc-500 border border-white/8"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
