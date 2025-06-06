'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Zap, Target, Server, Shield, TrendingUp, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function DevOpsAutomationPage() {
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
                DevOps Automation & Intelligence
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                Investigating intelligent automation in DevOps workflows, focusing on predictive 
                infrastructure management and automated incident response systems.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  <span>Ongoing Study</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-300">Research Progress</span>
                  <span className="text-sm text-purple-400">60%</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-3/5 transition-all duration-500" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['DevOps', 'Infrastructure', 'Automation', 'Cloud Computing', 'Monitoring'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
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
                  <Zap className="w-8 h-8 text-purple-400" />
                  Research Overview
                </h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Modern DevOps practices are evolving beyond simple automation to incorporate artificial 
                  intelligence and machine learning capabilities. My research explores how intelligent 
                  systems can predict, prevent, and automatically resolve infrastructure issues before 
                  they impact users.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  This research is driven by the increasing complexity of cloud-native applications and 
                  the need for self-healing systems that can operate reliably at scale. By combining 
                  traditional DevOps practices with AI-powered insights, we can create more resilient 
                  and efficient infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Server className="w-8 h-8 text-blue-400" />
                  Key Research Areas
                </h2>
                
                <div className="grid gap-6">
                  {[
                    {
                      title: "Predictive Infrastructure Scaling",
                      description: "Developing ML models that can predict resource needs and automatically scale infrastructure before demand spikes occur.",
                      icon: TrendingUp,
                      color: "text-green-400",
                      status: "Active"
                    },
                    {
                      title: "Automated Incident Detection and Response", 
                      description: "Creating intelligent monitoring systems that can detect anomalies, diagnose issues, and implement fixes automatically.",
                      icon: Shield,
                      color: "text-red-400",
                      status: "In Progress"
                    },
                    {
                      title: "ML-Powered Deployment Strategies",
                      description: "Implementing deployment pipelines that use machine learning to optimize rollout strategies and minimize risk.",
                      icon: Zap,
                      color: "text-yellow-400", 
                      status: "Research Phase"
                    },
                    {
                      title: "Intelligent Monitoring and Alerting",
                      description: "Building smart alerting systems that reduce noise and focus on actionable insights using natural language processing.",
                      icon: Target,
                      color: "text-purple-400",
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
                  <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                    <h4 className="font-semibold text-green-300 mb-2">Scaling Accuracy</h4>
                    <p className="text-neutral-300 text-sm">
                      Predictive scaling models show 90% accuracy in forecasting resource needs 
                      up to 2 hours in advance, reducing over-provisioning by 35%.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <h4 className="font-semibold text-blue-300 mb-2">Incident Response Time</h4>
                    <p className="text-neutral-300 text-sm">
                      Automated incident response systems reduce mean time to resolution (MTTR) 
                      by 70% compared to manual processes.
                    </p>
                  </div>
                  <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                    <h4 className="font-semibold text-purple-300 mb-2">Alert Noise Reduction</h4>
                    <p className="text-neutral-300 text-sm">
                      ML-powered alerting reduces false positives by 80% while maintaining 
                      99.9% detection rate for critical issues.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Implementation Case Study</h2>
                <div className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-3">HapSTR Deployment Pipeline Optimization</h3>
                  <p className="text-neutral-300 leading-relaxed mb-4">
                    During my internship at HapSTR, I implemented an intelligent CI/CD pipeline that reduced 
                    deployment time from 2 days to 45 minutes (97% reduction) while improving reliability. 
                    The system incorporated:
                  </p>
                  <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                    <li>Automated testing with 88% code coverage</li>
                    <li>Blue-green deployment for zero-downtime releases</li>
                    <li>Predictive failure detection using historical deployment data</li>
                    <li>Real-time monitoring and automated rollback capabilities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Future Directions</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The next phase of this research will focus on developing more sophisticated AI models 
                  that can understand complex system interactions and make autonomous decisions. Key areas include:
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4">
                  <li>Self-healing infrastructure that can automatically fix common issues</li>
                  <li>Cross-cloud optimization strategies for multi-region deployments</li>
                  <li>AI-powered capacity planning for long-term resource allocation</li>
                  <li>Intelligent cost optimization algorithms for cloud spending</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Tools & Technologies</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-2">Infrastructure</h4>
                    <div className="flex flex-wrap gap-2">
                      {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-2">AI/ML Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'TensorFlow', 'Scikit-learn', 'MLflow', 'Grafana'].map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Related Research */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Related Research</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/research/ml-software-engineering"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    Machine Learning in Software Engineering
                  </h4>
                  <p className="text-sm text-neutral-400">
                    Exploring how AI can automate and optimize software development processes.
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
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Collaborate on This Research</h3>
              <p className="text-neutral-300 mb-6">
                Working on DevOps automation or infrastructure challenges? 
                I&apos;d love to discuss potential collaborations and share insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors font-medium"
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