'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Github, ExternalLink, TrendingUp, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ScalableCICDPipelinesPage() {
  const articleData = {
    title: "Building Scalable CI/CD Pipelines: From 2 Days to 45 Minutes",
    subtitle: "How we transformed deployment cycles at HapSTR using Docker, AWS ECS, and modern DevOps practices",
    date: "March 15, 2025",
    readingTime: "8 min read",
    author: "Allah-u-Abha Rodrigues",
    tags: ["DevOps", "Docker", "AWS", "CI/CD", "Performance"],
    metrics: {
      timeReduction: "97%",
      testCoverage: "88%",
      deployment: "45 min"
    }
  };

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
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {articleData.title}
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                {articleData.subtitle}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articleData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{articleData.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {articleData.author}</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(articleData.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-accent-400 mb-1">{value}</div>
                    <div className="text-xs text-neutral-400 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {articleData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-accent-500/20 text-accent-300 rounded-full border border-accent-500/30"
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
                <h2 className="text-3xl font-bold text-white mb-4">The Challenge</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  When I joined HapSTR as a Software Engineer Intern, the development team was facing a critical bottleneck: 
                  deployment cycles that took up to 2 days to complete. This lengthy process was not only frustrating for 
                  developers but also hindered our ability to respond quickly to user feedback and deploy critical bug fixes.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  The existing deployment process involved manual steps, inconsistent environments, and a lack of automated 
                  testing, which led to frequent deployment failures and rollbacks. Something had to change.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Solution: Docker-First CI/CD</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  I proposed and implemented a complete transformation of our deployment pipeline using a Docker-first 
                  approach combined with GitHub Actions and AWS ECS. The key innovations included:
                </p>
                
                <div className="grid gap-4 my-6">
                  {[
                    "Containerized applications for consistent environments",
                    "Automated testing with 88% code coverage",
                    "Blue-green deployment for zero-downtime releases",
                    "Infrastructure as Code using Terraform",
                    "Comprehensive monitoring and alerting"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Implementation Details</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3">Docker Containerization</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The first step was containerizing our applications using Docker. This ensured that our applications 
                  would run consistently across development, staging, and production environments. We created optimized 
                  Dockerfiles that reduced image sizes by 60% compared to our initial attempts.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">GitHub Actions Pipeline</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  We implemented a sophisticated GitHub Actions pipeline that automatically triggered on pull requests 
                  and merges to the main branch. The pipeline included:
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                  <li>Automated code linting and formatting</li>
                  <li>Unit and integration testing</li>
                  <li>Security vulnerability scanning</li>
                  <li>Docker image building and optimization</li>
                  <li>Deployment to staging and production environments</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">Blue-Green Deployment</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  To achieve zero-downtime deployments, we implemented a blue-green deployment strategy using AWS ECS. 
                  This allowed us to deploy new versions alongside the current version, test them thoroughly, and then 
                  switch traffic seamlessly.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Results & Impact</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The transformation was remarkable. We achieved:
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-400 mb-2">97%</div>
                    <div className="text-sm text-neutral-300">Time Reduction</div>
                    <div className="text-xs text-neutral-400 mt-1">From 2 days to 45 minutes</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                    <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-400 mb-2">88%</div>
                    <div className="text-sm text-neutral-300">Test Coverage</div>
                    <div className="text-xs text-neutral-400 mt-1">Comprehensive testing</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                    <CheckCircle className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                    <div className="text-sm text-neutral-300">Uptime</div>
                    <div className="text-xs text-neutral-400 mt-1">Zero-downtime deployments</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Lessons Learned</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  This project taught me several valuable lessons about DevOps and software engineering:
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                  <li>The importance of measuring everything - you can't improve what you don't measure</li>
                  <li>Incremental improvements often lead to dramatic results</li>
                  <li>Automation is not just about efficiency, but also about reliability and consistency</li>
                  <li>Team buy-in is crucial for successful DevOps transformations</li>
                  <li>Documentation and knowledge sharing are essential for sustainable improvements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">What's Next?</h2>
                <p className="text-neutral-300 leading-relaxed">
                  Building on this success, I'm now exploring how machine learning can further optimize our deployment 
                  pipelines. Areas of interest include predictive scaling, intelligent testing strategies, and 
                  automated incident response. The goal is to make our systems not just fast, but also intelligent 
                  and self-healing.
                </p>
              </section>
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Interested in the Implementation?</h3>
                  <p className="text-neutral-300">
                    Check out the code and detailed documentation for this CI/CD transformation.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/hapstr/devops-pipeline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                  <a
                    href="https://hapstr.com/blog/ci-cd-optimization"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-500 rounded-lg text-white hover:bg-accent-600 transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Case Study
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 