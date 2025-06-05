'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function SimpleNewsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

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

    // Simulate submission with success
    setTimeout(() => {
      setIsSuccess(true);
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-3">You&apos;re In! 🚀</h3>
        <p className="text-neutral-300 mb-6 max-w-md mx-auto">
          Thanks for joining! I&apos;ll share updates about my latest projects, research insights, and what I&apos;m building at Yale.
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="text-accent-400 hover:text-accent-300 transition-colors text-sm"
        >
          Add another email →
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className={`w-full pl-12 pr-4 py-4 bg-neutral-800/50 border rounded-xl text-white
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
                  className="text-red-400 text-sm flex items-center gap-1 mt-2"
                >
                  <AlertCircle className="w-3 h-3" />
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
            className={`px-8 py-4 rounded-xl font-semibold text-white
                       transition-all duration-300 flex items-center justify-center gap-2 min-w-[140px]
                       ${isSubmitting 
                         ? 'bg-neutral-600 cursor-not-allowed' 
                         : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 shadow-lg hover:shadow-accent-500/25'
                       }`}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                />
                Joining...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Join
              </>
            )}
          </motion.button>
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-neutral-500 text-center pt-2">
          Your email is safe with me. Unsubscribe anytime. No spam, ever.
        </p>
      </motion.form>
    </div>
  );
} 