'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check, AlertCircle, Loader2 } from 'lucide-react';
import { profile } from '@/lib/constants';

// ShadCN-inspired UI components
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl ${className}`}>
    {children}
  </div>
);

const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`flex h-12 w-full rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={`flex min-h-[120px] w-full rounded-lg border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none ${className}`}
    {...props}
  />
);

const Button = ({ 
  children, 
  className = "", 
  variant = "default",
  disabled = false,
  ...props 
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "outline";
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    default: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl hover:shadow-purple-500/25",
    outline: "border border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const Alert = ({ 
  children, 
  variant = "default" 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "success" | "error" 
}) => {
  const variants = {
    default: "bg-blue-500/10 border-blue-500/20 text-blue-400",
    success: "bg-green-500/10 border-green-500/20 text-green-400",
    error: "bg-red-500/10 border-red-500/20 text-red-400"
  };

  const icons = {
    default: AlertCircle,
    success: Check,
    error: AlertCircle
  };

  const Icon = icons[variant];

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm ${variants[variant]}`}>
      <Icon className="w-5 h-5 mt-0.5 shrink-0" />
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setResponseMessage(result.message);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setResponseMessage('Network error. Please check your connection and try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setResponseMessage('');
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: profile.links.email
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: null
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
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-black to-black">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Get In Touch</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Amazing Together
              </span>
            </h2>
            
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project, explore collaboration opportunities, or just say hello? 
              I'd love to hear from you and explore how we can create something exceptional.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <Alert variant={status === 'success' ? 'success' : 'error'}>
                      {responseMessage}
                    </Alert>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Discussion"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, ideas, or how we can work together..."
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    const content = (
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
                        <div className="p-2 bg-purple-500/20 rounded-lg shrink-0">
                          <IconComponent className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-1">{item.label}</h4>
                          <p className="text-gray-300 text-sm">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <motion.a
                        key={index}
                        href={item.href}
                        className="block"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {content}
                      </motion.a>
                    ) : (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                      >
                        {content}
                      </motion.div>
                    );
                  })}
                </div>
              </Card>

              {/* Quick Response Note */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-500/20 rounded-lg shrink-0">
                    <Check className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Quick Response</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                      feel free to reach out directly via email.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h4 className="text-white font-medium mb-4">Connect Elsewhere</h4>
                <div className="flex gap-3">
                  {[
                    { name: 'LinkedIn', href: profile.links.linkedIn },
                    { name: 'GitHub', href: profile.links.github },
                    { name: 'Portfolio', href: profile.links.portfolio }
                  ].map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 