'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Server, Zap, Shield, CheckCircle, GitBranch, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CICDBestPracticesPage() {
  const practiceCategories = [
    {
      title: "Pipeline Architecture",
      practices: [
        {
          name: "Multi-Stage Pipelines",
          description: "Structure pipelines with clear stages: build, test, security scan, deploy.",
          benefits: ["Clear separation of concerns", "Parallel execution", "Easy debugging"]
        },
        {
          name: "Environment Promotion",
          description: "Promote artifacts through dev → staging → production environments.",
          benefits: ["Consistent deployments", "Risk reduction", "Testing at scale"]
        }
      ]
    },
    {
      title: "Testing Strategy",
      practices: [
        {
          name: "Comprehensive Test Coverage",
          description: "Implement unit, integration, and end-to-end tests with minimum 80% coverage.",
          benefits: ["Early bug detection", "Confidence in deployments", "Regression prevention"]
        },
        {
          name: "Parallel Test Execution",
          description: "Run tests in parallel to reduce pipeline execution time.",
          benefits: ["Faster feedback", "Improved developer experience", "Resource efficiency"]
        }
      ]
    },
    {
      title: "Security & Quality",
      practices: [
        {
          name: "Automated Security Scanning",
          description: "Integrate SAST, DAST, and dependency scanning into every pipeline.",
          benefits: ["Early vulnerability detection", "Compliance assurance", "Automated remediation"]
        },
        {
          name: "Code Quality Gates",
          description: "Enforce code quality standards with linting, formatting, and complexity analysis.",
          benefits: ["Maintainable codebase", "Consistent standards", "Technical debt prevention"]
        }
      ]
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
          className="max-w-4xl mx-auto"
        >
          {/* Back Navigation */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Documentation
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                CI/CD Best Practices
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                Proven strategies for building reliable, fast, and secure deployment pipelines 
                that scale with your team and reduce time to market.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Complete Guide</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['CI/CD', 'DevOps', 'GitHub Actions', 'Docker', 'Automation'].map((tag) => (
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

          {/* Success Story */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-green-400" />
                Real-World Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">97%</div>
                  <div className="text-sm text-neutral-300">Time Reduction</div>
                  <div className="text-xs text-neutral-400">2 days → 45 minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">88%</div>
                  <div className="text-sm text-neutral-300">Test Coverage</div>
                  <div className="text-xs text-neutral-400">Automated testing</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <div className="text-sm text-neutral-300">Uptime</div>
                  <div className="text-xs text-neutral-400">Zero-downtime deploys</div>
                </div>
              </div>
              <p className="text-neutral-300 leading-relaxed">
                At HapSTR, implementing these CI/CD best practices transformed our deployment process, 
                reducing deployment time from 2 days to 45 minutes while achieving 100% uptime.
              </p>
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div variants={itemVariants} className="space-y-8 mb-12">
            {practiceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Server className="w-6 h-6 text-purple-400" />
                  {category.title}
                </h2>
                
                <div className="space-y-6">
                  {category.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="p-6 bg-white/5 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">{practice.name}</h3>
                      <p className="text-neutral-300 leading-relaxed mb-4">{practice.description}</p>
                      
                      <div>
                        <h4 className="font-medium text-white mb-3">Key Benefits</h4>
                        <ul className="space-y-2">
                          {practice.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center gap-2 text-sm text-neutral-300">
                              <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* GitHub Actions Example */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <GitBranch className="w-8 h-8 text-blue-400" />
                Example: GitHub Actions Pipeline
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-4">Complete CI/CD Workflow</h4>
                  <pre className="text-sm text-green-400 font-mono overflow-x-auto">
{`name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm ci
      - run: npm run lint
      - run: npm run test:coverage
      - run: npm run build
      
      - name: Security Scan
        run: npm audit --audit-level=high

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to Production
        run: |
          docker build -t app:latest .
          docker push registry/app:latest
          kubectl apply -f k8s/`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Implementation Checklist */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-green-400" />
                Implementation Checklist
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Essential Steps</h3>
                  <div className="space-y-3">
                    {[
                      "Set up version control with proper branching strategy",
                      "Configure automated testing with coverage reporting",
                      "Implement security scanning and dependency checks",
                      "Create staging environment for testing",
                      "Set up monitoring and alerting",
                      "Document deployment procedures"
                    ].map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-neutral-300">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Advanced Features</h3>
                  <div className="space-y-3">
                    {[
                      "Blue-green or canary deployment strategies",
                      "Automated rollback on failure detection",
                      "Performance testing in pipeline",
                      "Infrastructure as Code (IaC)",
                      "Multi-environment promotion",
                      "Compliance and audit logging"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Common Pitfalls */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Common Pitfalls to Avoid</h2>
              
              <div className="space-y-4">
                {[
                  {
                    problem: "Skipping Testing in CI/CD",
                    solution: "Always include comprehensive testing at every stage"
                  },
                  {
                    problem: "Long-Running Pipelines",
                    solution: "Optimize with parallel execution and caching strategies"
                  },
                  {
                    problem: "No Rollback Strategy",
                    solution: "Implement automated rollback and health checks"
                  },
                  {
                    problem: "Ignoring Security Scans",
                    solution: "Integrate security scanning as a mandatory pipeline step"
                  },
                  {
                    problem: "Manual Configuration Management",
                    solution: "Use Infrastructure as Code for all environments"
                  }
                ].map((pitfall, index) => (
                  <div key={index} className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <h4 className="font-semibold text-red-300 mb-2">❌ {pitfall.problem}</h4>
                    <p className="text-sm text-neutral-300">✅ {pitfall.solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Optimize Your Pipeline?</h3>
              <p className="text-neutral-300 mb-6">
                Implement these CI/CD best practices to improve your deployment speed, reliability, 
                and team productivity. Need help getting started?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/allahurodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors font-medium"
                >
                  <GitBranch className="w-4 h-4" />
                  View Examples
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
                >
                  Get Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 