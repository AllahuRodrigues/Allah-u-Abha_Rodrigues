'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Sparkles, Bell, Users, TrendingUp, BookOpen } from 'lucide-react';

interface NewsletterStats {
  subscribers: number;
  updates: number;
  engagement: string;
}

export default function DynamicNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [stats, setStats] = useState<NewsletterStats>({
    subscribers: 1247,
    updates: 24,
    engagement: '94%'
  });

  // Simulate dynamic stats updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        subscribers: prev.subscribers + Math.floor(Math.random() * 3),
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 255;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call with dynamic feedback
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
      
      // Update stats to show new subscriber
      setStats(prev => ({
        ...prev,
        subscribers: prev.subscribers + 1
      }));
    }, 2000);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'AI Research Insights',
      description: 'Latest findings from Yale University research',
      color: 'text-blue-400'
    },
    {
      icon: BookOpen,
      title: 'Technical Deep-Dives',
      description: 'In-depth tutorials and implementation guides',
      color: 'text-green-400'
    },
    {
      icon: Sparkles,
      title: 'Project Launches',
      description: 'First access to new tools and applications',
      color: 'text-purple-400'
    }
  ];

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full mb-4 relative">
            <CheckCircle className="w-12 h-12 text-green-400" />
            <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping" />
          </div>
        </motion.div>
        
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl font-bold text-white mb-3"
        >
          Welcome Aboard! 🚀
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-neutral-300 mb-6 max-w-md mx-auto text-lg"
        >
          You&apos;re now part of an exclusive community of {stats.subscribers.toLocaleString()} innovators! 
          Expect your first update soon.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 mb-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-400">{stats.updates}</div>
            <div className="text-sm text-neutral-400">Updates Sent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{stats.engagement}</div>
            <div className="text-sm text-neutral-400">Open Rate</div>
          </div>
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="text-accent-400 hover:text-accent-300 transition-colors text-sm underline"
        >
          Add another email →
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-6 py-3 rounded-full text-sm font-medium mb-6"
        >
          <Bell className="w-4 h-4" />
          Join {stats.subscribers.toLocaleString()}+ Innovators
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Stay Ahead of the{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-purple-400">
            AI Revolution
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto"
        >
          Get exclusive insights from my AI research at Yale, early access to new projects, 
          and practical guides that actually matter. No fluff, just the cutting-edge content 
          you need to stay at the forefront of technology.
        </motion.p>
      </div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid md:grid-cols-3 gap-6 mb-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="glass-effect rounded-xl p-6 text-center group cursor-pointer"
          >
            <div className="w-16 h-16 bg-neutral-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neutral-700/50 transition-colors">
              <feature.icon className={`w-8 h-8 ${feature.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-neutral-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Newsletter Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className={`w-full pl-14 pr-6 py-5 bg-neutral-800/50 border-2 rounded-2xl text-white text-lg
                           placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all
                           ${error 
                             ? 'border-red-500 focus:ring-red-500/50' 
                             : 'border-neutral-600 focus:ring-accent-500/50 focus:border-accent-500'
                           }`}
                placeholder="your.email@example.com"
                disabled={isSubmitting}
              />
            </div>
            
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-red-400 text-sm flex items-center gap-2 mt-3"
                >
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            className={`px-10 py-5 rounded-2xl font-bold text-white text-lg
                       transition-all duration-300 flex items-center justify-center gap-3 min-w-[200px]
                       ${isSubmitting 
                         ? 'bg-neutral-600 cursor-not-allowed' 
                         : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 shadow-xl hover:shadow-accent-500/25'
                       }`}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
                Joining...
              </>
            ) : (
              <>
                <Send className="w-6 h-6" />
                Join the Movement
              </>
            )}
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400 pt-6"
        >
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-accent-400" />
            <span>{stats.subscribers.toLocaleString()} subscribers</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span>{stats.engagement} open rate</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>Weekly updates</span>
          </div>
        </motion.div>

        {/* Privacy Notice */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xs text-neutral-500 text-center max-w-2xl mx-auto"
        >
          🔒 Your email is completely safe. No spam, ever. Unsubscribe with one click anytime. 
          I respect your inbox as much as I respect good code.
        </motion.p>
      </motion.form>
    </div>
  );
} 