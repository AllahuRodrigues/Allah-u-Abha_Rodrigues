'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, Github, TrendingUp, Users, Target, Award } from 'lucide-react';
import { profile } from '@/lib/constants';

export const ExperienceSection = () => {
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

  const getAchievementIcon = (achievement: string) => {
    if (achievement.includes('%') || achievement.includes('reduced') || achievement.includes('improved')) {
      return TrendingUp;
    }
    if (achievement.includes('students') || achievement.includes('mentored')) {
      return Users;
    }
    if (achievement.includes('built') || achievement.includes('implemented') || achievement.includes('designed')) {
      return Target;
    }
    return Award;
  };

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-background to-black/50">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-neutral-300">
              Building scalable solutions and mentoring the next generation
            </p>
          </motion.div>

          {/* Experience Items */}
          <div className="space-y-8">
            {profile.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Timeline Connector */}
                {index < profile.experience.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-accent-500/50 to-transparent hidden md:block" />
                )}
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-accent-500/30 transition-all duration-500 group-hover:scale-[1.02]">
                  {/* Company Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0">
                        {exp.company.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-accent-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-accent-400 font-semibold mb-2">
                          <span>{exp.company}</span>
                          {exp.links?.company && (
                            <a
                              href={exp.links.company}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-accent-300 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-neutral-400 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <span className="hidden sm:block">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                      {exp.links?.github && (
                        <a
                          href={exp.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-accent-400 transition-all duration-300"
                          title="View Code"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {exp.links?.achievement && (
                        <a
                          href={exp.links.achievement}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-accent-500/20 hover:bg-accent-500/30 text-accent-400 hover:text-accent-300 transition-all duration-300"
                          title="Read More"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-lg leading-relaxed mb-6 font-medium">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-accent-400" />
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achievementIndex) => {
                        const Icon = getAchievementIcon(achievement);
                        return (
                          <div
                            key={achievementIndex}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/achievement"
                          >
                            <Icon className="w-5 h-5 text-accent-400 mt-0.5 shrink-0 group-hover/achievement:scale-110 transition-transform" />
                            <span className="text-neutral-300 leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-sm bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30 hover:bg-accent-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 