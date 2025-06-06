'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, FileText, Code, Globe, Server, ExternalLink, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export default function DocsPage() {
  const docCategories = [
    {
      title: "Web Development Stack",
      description: "Comprehensive documentation of modern web development tools, frameworks, and best practices I use for building scalable applications.",
      articles: [
        {
          title: "Modern Web Development Stack Guide",
          description: "Complete setup and configuration guide for React, Next.js, TypeScript, and Tailwind CSS.",
          link: "/docs/web-dev-stack",
          readingTime: "12 min read",
          lastUpdated: "January 2025",
          status: "Complete"
        }
      ],
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "DevOps & Infrastructure",
      description: "Documentation covering CI/CD pipelines, cloud infrastructure, containerization, and deployment strategies.",
      articles: [
        {
          title: "CI/CD Best Practices",
          description: "Proven strategies for building reliable, fast, and secure deployment pipelines.",
          link: "/docs/cicd-best-practices",
          readingTime: "15 min read",
          lastUpdated: "January 2025",
          status: "Complete"
        }
      ],
      icon: Server,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Machine Learning Workflows",
      description: "Step-by-step guides for implementing machine learning pipelines, from data preprocessing to model deployment.",
      articles: [
        {
          title: "ML Model Development Workflow",
          description: "End-to-end process for developing, training, and deploying machine learning models.",
          link: "/docs/ml-workflow",
          readingTime: "18 min read",
          lastUpdated: "December 2024",
          status: "Complete"
        }
      ],
      icon: Code,
      color: "from-green-500 to-emerald-500"
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
              href="/#portfolio"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Technical Documentation</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Documentation &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Technical Guides
              </span>
            </h1>
            
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive documentation of tools, frameworks, and methodologies I use in my projects. 
              These guides are designed to help developers understand implementation details, best practices, 
              and lessons learned from real-world applications.
            </p>
          </motion.div>

          {/* Documentation Categories */}
          <div className="space-y-8 mb-16">
            {docCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500 group-hover:scale-[1.01]">
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`} />
                    
                    <div className="relative p-8">
                      {/* Category Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {category.title}
                          </h2>
                          <p className="text-neutral-300 leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Articles */}
                      <div className="space-y-4">
                        {category.articles.map((article, articleIndex) => (
                          <Link
                            key={articleIndex}
                            href={article.link}
                            className="block p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group/article"
                          >
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <h3 className="text-xl font-semibold text-white group-hover/article:text-blue-400 transition-colors">
                                {article.title}
                              </h3>
                              <div className="flex items-center gap-2">
                                <span className={`px-2 py-1 text-xs rounded-full ${
                                  article.status === 'Complete' ? 'bg-green-500/20 text-green-400' :
                                  article.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                                  'bg-yellow-500/20 text-yellow-400'
                                }`}>
                                  {article.status}
                                </span>
                                <ExternalLink className="w-4 h-4 text-neutral-400 group-hover/article:text-blue-400 transition-colors" />
                              </div>
                            </div>
                            
                            <p className="text-neutral-300 leading-relaxed mb-4">
                              {article.description}
                            </p>
                            
                            <div className="flex items-center gap-4 text-sm text-neutral-400">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{article.readingTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{article.lastUpdated}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Quick Links</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <a
                  href="https://github.com/allahurodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors mb-2">
                    GitHub Repositories
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Browse source code and implementation examples
                  </p>
                </a>
                <Link
                  href="/research"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors mb-2">
                    Research Papers
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Academic research and experimental findings
                  </p>
                </Link>
                <Link
                  href="/blog"
                  className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                    Blog Posts
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Detailed project breakdowns and tutorials
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Need Help with Implementation?
              </h3>
              <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
                Have questions about any of these guides or need assistance with your own projects? 
                I&apos;m always happy to help fellow developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                >
                  <span>Get in Touch</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <a
                  href="https://github.com/allahurodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold hover:bg-white/20 transition-all duration-300"
                >
                  <FileText className="w-5 h-5" />
                  View Code Examples
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 