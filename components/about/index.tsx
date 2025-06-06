'use client';

import { motion } from 'framer-motion';
import { Code, Heart, Award, Target, Users, Zap } from 'lucide-react';
import { profile } from '@/lib/constants';

export const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in Python, TypeScript, R, and modern frameworks like React and PyTorch"
    },
    {
      icon: Award,
      title: "Academic Achievement",
      description: "3.8 GPA at Yale University studying Computer Science & Statistics"
    },
    {
      icon: Users,
      title: "Leadership & Community",
      description: "Secretary of Zeta Psi Fraternity and active mentor for young developers"
    },
    {
      icon: Target,
      title: "Financial Innovation",
      description: "Focused on applying ML and data science to finance and investment strategies"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Reduced deployment cycles from 2 days to 45 minutes at HapSTR"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Volunteer work helping displaced families through technology solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            {profile.longBio.split('\n\n')[0]}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="prose prose-lg prose-invert max-w-none">
              {profile.longBio.split('\n\n').slice(1).map((paragraph, index) => (
                <p key={index} className="text-neutral-300 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-4">Current Focus</h3>
              <div className="grid grid-cols-2 gap-4">
                {profile.interests.slice(0, 4).map((interest, index) => (
                  <div key={index} className="p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-sm text-accent-400 font-medium">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">What I Bring</h3>
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent-500/20 text-accent-400 group-hover:bg-accent-500/30 transition-colors">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                      <p className="text-sm text-neutral-400">{highlight.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-12">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.skills.map((skillCategory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <h4 className="font-semibold text-accent-400 mb-4">{skillCategory.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 text-neutral-300 hover:bg-accent-500/20 hover:text-accent-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-2 gap-12"
        >
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-1">{edu.institution}</h4>
                  <p className="text-accent-400 mb-2">{edu.degree} in {edu.field}</p>
                  <p className="text-sm text-neutral-400 mb-3">{edu.period}</p>
                  {'gpa' in edu && (
                    <p className="text-sm text-neutral-300 mb-3">GPA: {(edu.gpa as number).toFixed(2)}</p>
                  )}
                  {'activities' in edu && edu.activities && (
                    <div className="flex flex-wrap gap-2">
                      {edu.activities.slice(0, 3).map((activity, actIndex) => (
                        <span key={actIndex} className="px-2 py-1 text-xs rounded bg-accent-500/20 text-accent-300">
                          {activity}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Leadership & Recognition</h3>
            <div className="space-y-6">
              {profile.achievements.map((achievement, index) => (
                <div key={index} className="p-6 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                  <p className="text-accent-400 mb-2">{achievement.organization}</p>
                  <p className="text-sm text-neutral-400 mb-3">{achievement.period}</p>
                  <p className="text-sm text-neutral-300">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 