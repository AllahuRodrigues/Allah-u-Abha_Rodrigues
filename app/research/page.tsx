'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Brain, Zap, Microscope, ExternalLink, Target, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Machine Learning in Software Engineering",
      description: "Exploring how AI can automate and optimize software development processes, from code generation to bug detection and performance optimization.",
      interests: [
        "Automated code review and optimization",
        "ML-driven testing strategies", 
        "Intelligent CI/CD pipeline optimization",
        "Code quality prediction models"
      ],
      status: "Active Research",
      readingTime: "8 min read",
      link: "/research/ml-software-engineering",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      progress: "75%"
    },
    {
      title: "DevOps Automation & Intelligence",
      description: "Investigating intelligent automation in DevOps workflows, focusing on predictive infrastructure management and automated incident response.",
      interests: [
        "Predictive infrastructure scaling",
        "Automated incident detection and response",
        "ML-powered deployment strategies",
        "Intelligent monitoring and alerting"
      ],
      status: "Ongoing Study",
      readingTime: "6 min read", 
      link: "/research/devops-automation",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      progress: "60%"
    },
    {
      title: "Educational Technology & Accessibility",
      description: "Researching how technology can make computer science education more accessible and effective for diverse learning styles and abilities.",
      interests: [
        "Adaptive learning platforms",
        "Accessibility in coding environments",
        "Personalized programming education",
        "Inclusive design in tech education"
      ],
      status: "Exploratory",
      readingTime: "5 min read",
      link: "/research/educational-technology", 
      icon: Microscope,
      color: "from-green-500 to-emerald-500",
      progress: "40%"
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black">
      <div className="container py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Back Navigation */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/#research"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Brain className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Research Portfolio</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Exploring the Future of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Technology & Learning
              </span>
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              My research focuses on the intersection of artificial intelligence, software engineering, and education. 
              I investigate how emerging technologies can solve real-world problems, improve developer experiences, 
              and make technology more accessible to everyone.
            </p>
          </motion.div>

          {/* Research Areas */}
          <div className="space-y-8 mb-16">
            {researchAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 group-hover:scale-[1.01]">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="flex items-start gap-4 mb-4 lg:mb-0">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${area.color} bg-opacity-20`}>
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                              {area.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-neutral-400 mb-3">
                              <div className="flex items-center gap-1">
                                <Target className="w-4 h-4" />
                                <span>{area.status}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{area.readingTime}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs">Progress:</span>
                                <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full bg-gradient-to-r ${area.color} transition-all duration-500`}
                                    style={{ width: area.progress }}
                                  />
                                </div>
                                <span className="text-xs">{area.progress}</span>
                              </div>
                            </div>
                            <p className="text-neutral-300 leading-relaxed max-w-3xl">
                              {area.description}
                            </p>
                          </div>
                        </div>
                        
                        <Link
                          href={area.link}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-lg text-purple-300 hover:text-white hover:bg-purple-500/30 transition-all duration-300 text-sm font-medium shrink-0"
                        >
                          <FileText className="w-4 h-4" />
                          Read More
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>

                      {/* Research Interests */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-400" />
                          Key Research Areas
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {area.interests.map((interest, interestIndex) => (
                            <div
                              key={interestIndex}
                              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/interest"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 group-hover/interest:scale-125 transition-transform" />
                              <span className="text-neutral-300 leading-relaxed text-sm">
                                {interest}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Research Collaboration?
              </h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                I&apos;m actively seeking collaborators for impactful research that bridges technology 
                and education. Let&apos;s advance the field together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <span>Discuss Research</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  View Documentation
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 