'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Globe, Code, Package, Settings, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function WebDevStackPage() {
  const stackComponents = [
    {
      category: "Frontend Framework",
      items: [
        {
          name: "Next.js 14",
          description: "React framework with server-side rendering, static generation, and excellent developer experience.",
          features: ["App Router", "Server Components", "Built-in Optimization", "TypeScript Support"],
          whyUse: "Perfect for building fast, scalable web applications with great SEO."
        },
        {
          name: "React 18",
          description: "Component-based library for building user interfaces with modern features.",
          features: ["Hooks", "Concurrent Features", "Suspense", "Error Boundaries"],
          whyUse: "Industry standard with excellent ecosystem and performance."
        }
      ]
    },
    {
      category: "Styling & UI",
      items: [
        {
          name: "Tailwind CSS",
          description: "Utility-first CSS framework for rapid UI development.",
          features: ["Responsive Design", "Dark Mode", "JIT Compiler", "Custom Components"],
          whyUse: "Highly customizable, consistent design system, great developer experience."
        },
        {
          name: "Framer Motion",
          description: "Production-ready motion library for React with declarative animations.",
          features: ["Gesture Animations", "Layout Animations", "SVG Support", "Drag & Drop"],
          whyUse: "Creates smooth, professional animations with minimal code."
        }
      ]
    },
    {
      category: "Language & Type Safety",
      items: [
        {
          name: "TypeScript",
          description: "Strongly typed programming language that builds on JavaScript.",
          features: ["Static Type Checking", "IntelliSense", "Refactoring", "Interface Definitions"],
          whyUse: "Catches errors early, improves code maintainability and developer productivity."
        }
      ]
    },
    {
      category: "Development Tools",
      items: [
        {
          name: "ESLint & Prettier",
          description: "Code linting and formatting tools for consistent code quality.",
          features: ["Code Linting", "Auto Formatting", "Import Sorting", "Custom Rules"],
          whyUse: "Maintains code quality and consistency across team members."
        },
        {
          name: "Lucide React",
          description: "Beautiful & consistent icon library with 1000+ icons.",
          features: ["Tree Shaking", "TypeScript Support", "Customizable", "Consistent Design"],
          whyUse: "High-quality icons that integrate seamlessly with React applications."
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
                Modern Web Development Stack
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                A comprehensive guide to the tools, frameworks, and technologies I use to build 
                scalable, maintainable, and performant web applications.
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Last Updated: January 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Complete Guide</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Web Development'].map((tag) => (
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

          {/* Introduction */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-8 h-8 text-blue-400" />
                Why This Stack?
              </h2>
              <p className="text-neutral-300 leading-relaxed mb-4">
                After building numerous web applications, I&apos;ve refined my development stack to prioritize 
                developer experience, performance, and maintainability. This combination of tools provides 
                the perfect balance of productivity and power.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Developer Experience</h4>
                  <p className="text-sm text-neutral-300">
                    Fast development cycles with hot reload, TypeScript integration, and excellent tooling.
                  </p>
                </div>
                <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h4 className="font-semibold text-blue-300 mb-2">Performance</h4>
                  <p className="text-sm text-neutral-300">
                    Optimized builds, automatic code splitting, and server-side rendering capabilities.
                  </p>
                </div>
                <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">Scalability</h4>
                  <p className="text-sm text-neutral-300">
                    Component-based architecture that scales from small projects to enterprise applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stack Components */}
          <motion.div variants={itemVariants} className="space-y-8 mb-12">
            {stackComponents.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-400" />
                  {category.category}
                </h2>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-6 bg-white/5 rounded-xl border border-white/10">
                      <h3 className="text-xl font-semibold text-white mb-3">{item.name}</h3>
                      <p className="text-neutral-300 leading-relaxed mb-4">{item.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-white mb-3">Key Features</h4>
                          <ul className="space-y-2">
                            {item.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-300">
                                <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-white mb-3">Why I Use It</h4>
                          <p className="text-sm text-neutral-300 leading-relaxed">{item.whyUse}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Setup Guide */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Settings className="w-8 h-8 text-purple-400" />
                Quick Setup Guide
              </h2>
              
              <div className="space-y-6">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">1. Create Next.js Project</h4>
                  <code className="text-sm text-green-400 font-mono">
                    npx create-next-app@latest my-app --typescript --tailwind --eslint --app
                  </code>
                </div>
                
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">2. Install Additional Dependencies</h4>
                  <code className="text-sm text-green-400 font-mono">
                    npm install framer-motion lucide-react @types/node
                  </code>
                </div>
                
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">3. Configure Development Tools</h4>
                  <code className="text-sm text-green-400 font-mono">
                    npm install -D prettier eslint-config-prettier prettier-plugin-tailwindcss
                  </code>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-sm text-blue-300">
                  <strong>Pro Tip:</strong> Check out my GitHub repositories for complete project templates 
                  with this stack already configured and ready to use.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Best Practices */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Best Practices</h2>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Component Organization",
                    description: "Use a consistent folder structure with components, hooks, and utilities clearly separated."
                  },
                  {
                    title: "TypeScript Configuration",
                    description: "Enable strict mode and use proper type definitions for better code quality and IDE support."
                  },
                  {
                    title: "Performance Optimization",
                    description: "Leverage Next.js Image component, dynamic imports, and React.memo for optimal performance."
                  },
                  {
                    title: "Tailwind Customization",
                    description: "Extend the default theme with your design system colors, fonts, and spacing values."
                  }
                ].map((practice, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{practice.title}</h4>
                    <p className="text-sm text-neutral-300">{practice.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Build?</h3>
              <p className="text-neutral-300 mb-6">
                Start building with this modern web development stack and see the difference 
                in development speed and application performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/allahurodrigues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors font-medium"
                >
                  <Package className="w-4 h-4" />
                  View Templates
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
                >
                  Get Help
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 