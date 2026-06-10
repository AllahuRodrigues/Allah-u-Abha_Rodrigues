'use client';

import { motion } from 'framer-motion';
import { profile } from '@/lib/constants';

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const AboutSection = () => (
  <section id="about" className="py-16 section-divider">
    <div className="container max-w-3xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Header */}
        <motion.div variants={item} className="mb-10">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-mono">/about</p>
          <h2 className="text-3xl font-bold text-white">About</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Bio */}
          <motion.div variants={item} className="lg:col-span-3 space-y-3">
            {profile.longBio.split('\n\n').map((para, i) => (
              <p key={i} className="text-zinc-400 text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div variants={item} className="lg:col-span-2 space-y-6">
            {/* Education */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3 font-mono">Education</p>
              <div className="space-y-2">
                {profile.education.map((edu, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/8">
                    <p className="text-white text-sm font-medium">{edu.institution}</p>
                    <p className="text-zinc-500 text-xs mt-0.5">
                      {edu.degree} · {edu.field}
                    </p>
                    <p className="text-zinc-600 text-xs mt-0.5">{edu.period}</p>
                    {'gpa' in edu && (
                      <p className="text-zinc-500 text-xs mt-1">GPA {(edu.gpa as number).toFixed(2)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements / Leadership */}
            <div>
              <p className="text-xs text-zinc-600 uppercase tracking-widest mb-3 font-mono">Recognition</p>
              <div className="space-y-2">
                {profile.achievements.map((a, i) => (
                  <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/8">
                    <p className="text-white text-xs font-medium leading-snug">{a.title}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{a.organization} · {a.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div variants={item} className="mt-10">
          <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 font-mono">Technical Skills</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.skills.map((cat, i) => (
              <div key={i} className="p-3 rounded-lg bg-white/[0.03] border border-white/8">
                <p className="text-xs text-zinc-500 font-medium mb-2">{cat.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-1.5 py-0.5 text-[11px] rounded bg-white/5 text-zinc-500 border border-white/8 hover:text-zinc-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);
