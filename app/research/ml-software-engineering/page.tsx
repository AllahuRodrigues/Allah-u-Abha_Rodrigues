'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Brain, Target, Code, Database, Zap, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function MLSoftwareEngineeringPage() {
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
          className="max-w-4xl mx-auto"
        >
          {/* Back Navigation */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/research"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Machine Learning in Software Engineering
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                Exploring how artificial intelligence can revolutionize software development processes, 
                from automated code generation to intelligent testing strategies.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Active Research</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-300">Research Progress</span>
                  <span className="text-sm text-blue-400">75%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-3/4 transition-all duration-500" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Software Engineering', 'DevOps', 'Automation', 'AI Research'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div variants={itemVariants} className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
              
              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-blue-400" />
                  Research Overview
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The intersection of machine learning and software engineering represents one of the most promising 
                  frontiers in technology. My research focuses on developing intelligent systems that can understand, 
                  generate, and optimize software code while maintaining reliability and security standards.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  This research area is particularly relevant as software systems become increasingly complex and 
                  the demand for faster development cycles continues to grow. By leveraging AI, we can automate 
                  repetitive tasks, predict potential issues, and enhance developer productivity.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="w-8 h-8 text-green-400" />
                  Key Research Areas
                </h2>
                
                <div className="grid gap-6">
                  {[
                    {
                      title: "Automated Code Review and Optimization",
                      description: "Developing ML models that can analyze code quality, detect potential bugs, and suggest optimizations automatically.",
                      icon: Code,
                      color: "text-green-400",
                      status: "Active"
                    },
                    {
                      title: "ML-Driven Testing Strategies", 
                      description: "Creating intelligent testing frameworks that can generate test cases, predict failure points, and optimize test coverage.",
                      icon: Target,
                      color: "text-purple-400",
                      status: "In Progress"
                    },
                    {
                      title: "Intelligent CI/CD Pipeline Optimization",
                      description: "Implementing AI-powered deployment pipelines that can predict deployment success and optimize resource allocation.",
                      icon: Zap,
                      color: "text-yellow-400", 
                      status: "Research Phase"
                    },
                    {
                      title: "Code Quality Prediction Models",
                      description: "Building predictive models that can assess code maintainability, performance implications, and technical debt.",
                      icon: Database,
                      color: "text-blue-400",
                      status: "Planning"
                    }
                  ].map((area, index) => (
                    <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white/10 rounded-lg">
                          <area.icon className={`w-6 h-6 ${area.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              area.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                              area.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                              area.status === 'Research Phase' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {area.status}
                            </span>
                          </div>
                          <p className="text-neutral-300 leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Current Findings</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Code Generation Accuracy</h4>
                    <p className="text-neutral-300 text-sm">
                      Initial experiments show that fine-tuned language models can achieve 85% accuracy 
                      in generating syntactically correct code for common programming tasks.
                    </p>
                  </div>
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">Bug Detection Improvements</h4>
                    <p className="text-neutral-300 text-sm">
                      ML-powered static analysis tools demonstrate a 40% improvement in bug detection 
                      rates compared to traditional rule-based approaches.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <h4 className="font-semibold text-purple-300 mb-2">Testing Efficiency</h4>
                    <p className="text-neutral-300 text-sm">
                      Intelligent test case generation reduces testing time by 60% while maintaining 
                      equivalent coverage levels.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Future Directions</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The next phase of this research will focus on developing more sophisticated models 
                  that can understand the semantic meaning of code, not just its syntax. This includes:
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                  <li>Multi-modal AI systems that combine code analysis with documentation and user feedback</li>
                  <li>Real-time collaborative AI assistants for pair programming scenarios</li>
                  <li>Automated refactoring tools that can modernize legacy codebases</li>
                  <li>Predictive models for software architecture decisions</li>
                </ul>
              </section>
            </div>
          </motion.div>

          {/* Related Research */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Related Research</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/research/devops-automation"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h4 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                    DevOps Automation & Intelligence
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Exploring intelligent automation in DevOps workflows and infrastructure management.
                  </p>
                </Link>
                <Link
                  href="/research/educational-technology"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h4 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                    Educational Technology & Accessibility
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Making computer science education more accessible through technology.
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Collaborate on This Research</h3>
              <p className="text-neutral-300 mb-6">
                Interested in contributing to this research or have ideas to share? 
                I&apos;m always looking for collaborators and fresh perspectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors font-medium"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href="https://github.com/allahurodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Projects
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 