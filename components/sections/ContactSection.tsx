'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';
import { profile } from '@/lib/constants';

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setResponseMessage(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(result.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setResponseMessage('Network error. Please try again.');
    }
    setTimeout(() => { setStatus('idle'); setResponseMessage(''); }, 5000);
  };

  const inputCls = 'w-full bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 focus:bg-white/[0.05] transition-all duration-200';

  return (
    <section id="contact" className="py-16 section-divider">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Header */}
          <motion.div variants={item} className="mb-10">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-2 font-mono">/contact</p>
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-zinc-500 mt-1 text-sm">
              Open to collaborations, opportunities, and interesting conversations.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <motion.div variants={item} className="lg:col-span-3">
              {status !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-start gap-2 p-3 rounded-lg border mb-4 text-sm ${
                    status === 'success'
                      ? 'bg-green-500/5 border-green-500/20 text-green-400'
                      : 'bg-red-500/5 border-red-500/20 text-red-400'
                  }`}
                >
                  {status === 'success' ? <Check className="w-4 h-4 mt-0.5 shrink-0" /> : <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
                  {responseMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5">Name</label>
                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs text-zinc-500 mb-1.5">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5">Subject</label>
                  <input name="subject" value={formData.subject} onChange={handleChange} placeholder="What&apos;s this about?" required className={inputCls} />
                </div>
                <div>
                  <label className="block text-xs text-zinc-500 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    required
                    rows={5}
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div variants={item} className="lg:col-span-2 space-y-4">
              {/* Contact */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8 space-y-3">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono">Contact</p>
                {[
                  { icon: Mail, label: 'Email', value: profile.email, href: profile.links.email },
                  { icon: MapPin, label: 'Location', value: profile.location, href: null },
                ].map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <div className="flex items-start gap-3 group">
                      <div className="p-1.5 rounded-md bg-white/5 border border-white/8">
                        <Icon className="w-3.5 h-3.5 text-zinc-500" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-600">{label}</p>
                        <p className="text-sm text-zinc-300 group-hover:text-white transition-colors">{value}</p>
                      </div>
                    </div>
                  );
                  return href ? (
                    <a key={label} href={href} className="block">{content}</a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>

              {/* Work auth */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono mb-3">Authorization</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-zinc-600 mb-1">Work Authorization</p>
                    <div className="flex gap-2">
                      {['Portugal (EU)', 'United States'].map(auth => (
                        <span key={auth} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/8">{auth}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-600 mb-1">Languages</p>
                    <div className="flex gap-2">
                      {profile.languages.map(lang => (
                        <span key={lang} className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 border border-white/8">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/8">
                <p className="text-xs text-zinc-600 uppercase tracking-widest font-mono mb-3">Connect</p>
                <div className="flex gap-2">
                  {[
                    { icon: Github, href: profile.links.github, label: 'GitHub' },
                    { icon: Linkedin, href: profile.links.linkedIn, label: 'LinkedIn' },
                    { icon: Mail, href: profile.links.email, label: 'Email' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 border border-white/8 text-zinc-500 hover:text-white hover:bg-white/10 transition-all text-xs"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer note */}
          <motion.div variants={item} className="mt-12 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-zinc-700 font-mono">
              allah-u-abha.rodrigues@yale.edu · New Haven, CT
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
