import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ExternalLink, Github } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Building FlowLens: From Idea to SaaS MVP | Allah-u-Abha Rodrigues',
  description: 'The journey of creating FlowLens, an analytics and UI feedback tool that helps businesses understand user friction points and boost conversions.',
};

export default function BuildingFlowLensSaasPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-xl bg-black/50">
          <div className="container mx-auto px-6 py-4">
            <Link 
              href="/#internet-presence" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </nav>

        {/* Article Header */}
        <header className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {['SaaS', 'Entrepreneurship', 'Product Development', 'Analytics'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Building FlowLens: From Idea to SaaS MVP
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The journey of creating FlowLens, an analytics and UI feedback tool that helps businesses 
              understand user friction points and boost conversions.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 20, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min read
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white">The Problem</h2>
              <p className="text-gray-300 leading-relaxed">
                Every e-commerce business faces the same challenge: understanding why users abandon their carts, 
                where they get confused, and what friction points prevent conversions. Traditional analytics tools 
                tell you <em>what</em> happened, but they don't show you <em>why</em> it happened or <em>how</em> to fix it.
              </p>
            </div>

            {/* The Vision */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">The Vision: FlowLens</h2>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                FlowLens emerged from a simple insight: <strong>businesses need to see exactly how and why users 
                struggle—and what to do about it.</strong> The name itself captures this perfectly:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-3">Flow</h3>
                  <p className="text-gray-300">Evokes user "flow" and the ease of capturing user paths through your application.</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">Lens</h3>
                  <p className="text-gray-300">Suggests observing, focusing, and gaining deep insight into user behavior.</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-cyan-500 pl-6 my-8 text-cyan-100 text-lg italic">
                "FlowLens is the fastest way to see exactly how and why users struggle in your online store 
                or web app—and what to do about it."
              </blockquote>
            </section>

            {/* Technical Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Technical Architecture</h2>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Tech Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Next.js', 'TypeScript', 'React', 'Node.js', 
                    'PostgreSQL', 'Shopify API', 'AI/ML', 'Real-time Data'
                  ].map((tech) => (
                    <div key={tech} className="bg-gray-800/50 rounded-lg p-3 text-center text-sm font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The MVP focuses on three core pillars that make FlowLens the best analytics & UI feedback tool:
              </p>

              <div className="space-y-6">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">1. One-Click Shopify Integration</h4>
                  <p className="text-gray-300">
                    Effortless setup with our Shopify plugin. Install once, start capturing insights immediately. 
                    No complex configuration or developer resources required.
                  </p>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">2. Real-Time AI Suggestions</h4>
                  <p className="text-gray-300">
                    Our AI analyzes user behavior patterns in real-time and provides actionable recommendations 
                    to reduce friction and boost conversions immediately.
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">3. Human-Friendly Visual Dashboards</h4>
                  <p className="text-gray-300">
                    Intuitive dashboards that business owners can actually understand and act upon. 
                    No data science degree required.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Early Results</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                  <div className="text-gray-300">Avg. Conversion Boost</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">89%</div>
                  <div className="text-gray-300">User Retention</div>
                </div>
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Key Lessons Learned</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Start with the Problem, Not the Solution</h4>
                  <p className="text-gray-300">
                    I spent weeks talking to e-commerce business owners before writing a single line of code. 
                    Understanding their pain points shaped every feature decision.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">MVP Means Minimum <em>Viable</em> Product</h4>
                  <p className="text-gray-300">
                    Focus on solving one problem exceptionally well rather than many problems poorly. 
                    FlowLens excels at showing user friction—that's it.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Integration is Everything</h4>
                  <p className="text-gray-300">
                    The one-click Shopify integration was our biggest differentiator. 
                    Reducing setup friction was as important as reducing user friction.
                  </p>
                </div>
              </div>
            </section>

            {/* Next Steps */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">What's Next</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                FlowLens is just getting started. We're expanding beyond Shopify to support WooCommerce, 
                Magento, and custom e-commerce platforms. The vision remains the same: make it impossibly 
                easy for businesses to understand and optimize their user experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://flowlens.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Try FlowLens
                </a>
                <a 
                  href="https://github.com/AllahuRodrigues/flowlens" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
} 