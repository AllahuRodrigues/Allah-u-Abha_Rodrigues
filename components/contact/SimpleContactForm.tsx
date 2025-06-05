'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle, Copy } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function SimpleContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        break;

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        break;

      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.length < 5) return 'Subject must be at least 5 characters';
        break;

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        break;
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof FormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('allah-u-abha.rodrigues@yale.edu');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission and create mailto link
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Hi Allah-u-Abha,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`
      );
      const mailtoLink = `mailto:allah-u-abha.rodrigues@yale.edu?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsSuccess(true);
      setIsSubmitting(false);
    }, 1000);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-effect rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        </motion.div>
        
        <h3 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h3>
        <p className="text-neutral-300 mb-6">
          Your email client should have opened with your message. If not, you can copy my email address below.
        </p>
        
        <div className="flex items-center justify-center gap-3 mb-6">
          <code className="bg-neutral-800 px-4 py-2 rounded-lg text-accent-400">
            allah-u-abha.rodrigues@yale.edu
          </code>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmailToClipboard}
            className="p-2 bg-accent-500/20 text-accent-400 rounded-lg hover:bg-accent-500/30 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </motion.button>
        </div>

        {emailCopied && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm mb-4"
          >
            ✓ Email copied to clipboard!
          </motion.p>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          className="text-accent-400 hover:text-accent-300 transition-colors text-sm"
        >
          Send Another Message
        </motion.button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-effect rounded-2xl p-8 space-y-6"
    >
      {/* Name Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          <User className="w-4 h-4 inline mr-2" />
          Full Name *
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-lg text-white
                     placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all
                     ${errors.name 
                       ? 'border-red-500 focus:ring-red-500/50' 
                       : 'border-neutral-600 focus:ring-accent-500/50'
                     }`}
          placeholder="Enter your full name"
          disabled={isSubmitting}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-400 text-sm flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.name}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          <Mail className="w-4 h-4 inline mr-2" />
          Email Address *
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-lg text-white
                     placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all
                     ${errors.email 
                       ? 'border-red-500 focus:ring-red-500/50' 
                       : 'border-neutral-600 focus:ring-accent-500/50'
                     }`}
          placeholder="your.email@example.com"
          disabled={isSubmitting}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-400 text-sm flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.email}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Subject Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-lg text-white
                     placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all
                     ${errors.subject 
                       ? 'border-red-500 focus:ring-red-500/50' 
                       : 'border-neutral-600 focus:ring-accent-500/50'
                     }`}
          placeholder="What would you like to discuss?"
          disabled={isSubmitting}
        />
        <AnimatePresence>
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-400 text-sm flex items-center gap-1"
            >
              <AlertCircle className="w-3 h-3" />
              {errors.subject}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          className={`w-full px-4 py-3 bg-neutral-800/50 border rounded-lg text-white
                     placeholder-neutral-400 focus:outline-none focus:ring-2 transition-all
                     resize-vertical
                     ${errors.message 
                       ? 'border-red-500 focus:ring-red-500/50' 
                       : 'border-neutral-600 focus:ring-accent-500/50'
                     }`}
          placeholder="Tell me about your project, idea, or question..."
          disabled={isSubmitting}
        />
        <div className="flex justify-between items-center">
          <AnimatePresence>
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-red-400 text-sm flex items-center gap-1"
              >
                <AlertCircle className="w-3 h-3" />
                {errors.message}
              </motion.p>
            )}
          </AnimatePresence>
          <span className={`text-sm ${
            formData.message.length > 1800 ? 'text-red-400' : 'text-neutral-400'
          }`}>
            {formData.message.length}/2000
          </span>
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-white
                   transition-all duration-300 flex items-center justify-center gap-2
                   ${isSubmitting 
                     ? 'bg-neutral-600 cursor-not-allowed' 
                     : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700'
                   }`}
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
            />
            Preparing Email...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </motion.button>

      {/* Info Notice */}
      <p className="text-xs text-neutral-400 text-center">
        This will open your email client with the message pre-filled. 
        I typically respond within 24-48 hours.
      </p>
    </motion.form>
  );
} 