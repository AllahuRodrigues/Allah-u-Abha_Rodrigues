'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle, Loader2, Clock, User, MessageSquare } from 'lucide-react';
import { profile } from '@/lib/constants';

export const ContactSection = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [newsletter, setNewsletter] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [messages, setMessages] = useState({ contact: '', newsletter: '' });

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

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        setContactStatus('success');
        setMessages({ ...messages, contact: 'Message sent successfully! I\'ll get back to you soon.' });
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setContactStatus('error');
        setMessages({ ...messages, contact: 'Failed to send message. Please try again.' });
      }
    } catch {
      setContactStatus('error');
      setMessages({ ...messages, contact: 'An error occurred. Please try again.' });
    }

    setTimeout(() => setContactStatus('idle'), 5000);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletter }),
      });

      if (response.ok) {
        setNewsletterStatus('success');
        setMessages({ ...messages, newsletter: 'Successfully subscribed to newsletter!' });
        setNewsletter('');
      } else {
        setNewsletterStatus('error');
        setMessages({ ...messages, newsletter: 'Failed to subscribe. Please try again.' });
      }
    } catch {
      setNewsletterStatus('error');
      setMessages({ ...messages, newsletter: 'An error occurred. Please try again.' });
    }

    setTimeout(() => setNewsletterStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-black to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-purple-500/5 to-blue-500/5" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6"
            >
              <Clock className="w-4 h-4 text-accent-400" />
              <span className="text-accent-400 text-sm font-medium">Let&apos;s Connect</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-purple-400 to-blue-400">
                Amazing Together?
              </span>
            </h2>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project? I&apos;d love to hear from you! Whether it&apos;s about web development, 
              machine learning, research collaboration, or just a friendly chat about technology and education.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-accent-400" />
                  Send a Message
                </h3>

                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">Name</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-500/50 focus:bg-white/10 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-neutral-300">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-500/50 focus:bg-white/10 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Subject</label>
                    <input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-500/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-neutral-300">Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-neutral-400" />
                      <textarea
                        required
                        rows={5}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-accent-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={contactStatus === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-accent-500 to-purple-500 rounded-lg text-white font-semibold hover:shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactStatus === 'loading' ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    {contactStatus === 'loading' ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {/* Status Messages */}
                  {contactStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        contactStatus === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {contactStatus === 'success' ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <AlertCircle className="w-5 h-5" />
                      )}
                      <span className="text-sm">{messages.contact}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Newsletter & Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Newsletter Subscription */}
              <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-purple-400" />
                  Stay Updated
                </h3>
                <p className="text-neutral-300 mb-6">
                  Get insights on software engineering, machine learning, and the latest tech trends.
                  No spam, just valuable content.
                </p>

                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <div className="flex gap-3">
                    <input
                      type="email"
                      required
                      value={newsletter}
                      onChange={(e) => setNewsletter(e.target.value)}
                      className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                    <motion.button
                      type="submit"
                      disabled={newsletterStatus === 'loading'}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50"
                    >
                      {newsletterStatus === 'loading' ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        'Subscribe'
                      )}
                    </motion.button>
                  </div>

                  {newsletterStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 p-3 rounded-lg ${
                        newsletterStatus === 'success' 
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-red-500/20 border border-red-500/30 text-red-400'
                      }`}
                    >
                      {newsletterStatus === 'success' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <AlertCircle className="w-4 h-4" />
                      )}
                      <span className="text-sm">{messages.newsletter}</span>
                    </motion.div>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Let&apos;s Connect</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-neutral-300">
                    <Mail className="w-5 h-5 text-accent-400" />
                    <a 
                      href={profile.links.email}
                      className="hover:text-accent-400 transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </div>
                    <span>Available for Summer 2025 Opportunities</span>
                  </div>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                    <span>Open to Remote & On-site Roles</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Response time: Usually within 24 hours. For urgent matters, 
                    feel free to mention it in your message subject line.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 