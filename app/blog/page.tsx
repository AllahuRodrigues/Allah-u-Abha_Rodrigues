import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { profile } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog | Allah-u-Abha Rodrigues',
  description: 'Insights on software engineering, machine learning, and technology innovation.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 grid-pattern opacity-30" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" />
      
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

        {/* Header */}
        <header className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Sharing my journey in software engineering, machine learning research, and building 
              innovative solutions that make a difference.
            </p>
          </div>
        </header>

        {/* Blog Posts Grid */}
        <main className="container mx-auto px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {profile.blogPosts.map((post, index) => (
                <article 
                  key={post.title}
                  className="group glass-dark rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 card-hover"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                        <Link href={post.link} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readingTime} min read</span>
                          </div>
                        </div>
                        
                        <Link
                          href={post.link}
                          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium group"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="lg:w-48 flex-shrink-0">
                      <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-white/10 flex items-center justify-center">
                        <div className="text-4xl font-bold text-white/20">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="mt-16 text-center glass-dark rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get notified when I publish new articles about software engineering, 
                machine learning, and technology insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 