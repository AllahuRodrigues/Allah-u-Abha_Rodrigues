'use client';

import { motion } from 'framer-motion';
import DynamicNewsletter from '@/components/newsletter/DynamicNewsletter';

export default function NewsletterSection() {
  return (
    <section id="newsletter" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(120,119,198,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, rgba(120,119,198,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl" />
          
          {/* Newsletter Component */}
          <div className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-purple-500/5 rounded-3xl" />
            
            <div className="relative z-10">
              <DynamicNewsletter />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 