'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Target, Heart, BookOpen, Code, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function MentoringNextGenerationPage() {
  const articleData = {
    title: "Mentoring the Next Generation: Teaching Code with Heart",
    subtitle: "How project-based learning and personalized mentorship transformed 15+ students' coding journey",
    date: "February 20, 2025",
    readingTime: "6 min read",
    author: "Allah-u-Abha Rodrigues",
    tags: ["Education", "Mentoring", "Programming", "Teaching", "Impact"],
    metrics: {
      students: "15+",
      improvement: "85%",
      completion: "95%"
    }
  };

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
              href="/#experience"
              className="inline-flex items-center gap-2 text-accent-400 hover:text-accent-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Experience
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {articleData.title}
              </h1>
              <p className="text-xl text-neutral-300 mb-6 leading-relaxed">
                {articleData.subtitle}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{articleData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{articleData.readingTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>By {articleData.author}</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(articleData.metrics).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-purple-400 mb-1">{value}</div>
                    <div className="text-xs text-neutral-400 capitalize">
                      {key === 'students' ? 'Students Mentored' : 
                       key === 'improvement' ? 'Skill Improvement' : 
                       'Project Completion'}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {articleData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div variants={itemVariants} className="prose prose-invert prose-lg max-w-none">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
              
              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Why I Started Mentoring</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  When I first started learning to code, I remember the overwhelming feeling of not knowing where to begin. 
                  The vast landscape of programming languages, frameworks, and concepts felt insurmountable. I was fortunate 
                  to have mentors who guided me through those early struggles, and I knew I wanted to pay that forward.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Joining Curious Cardinals as a Software & Machine Learning Engineer Mentor gave me the perfect opportunity 
                  to help middle and high school students navigate their own coding journeys. But I quickly realized that 
                  traditional teaching methods wouldn't work for this generation of digital natives.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Project-Based Learning Revolution</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  Instead of starting with syntax and theory, I decided to flip the script. Every student began with a 
                  project they were genuinely excited about. Whether it was building a game in Scratch, creating an 
                  Arduino-powered robot, or developing a simple web app, the projects came first.
                </p>
                
                <div className="grid gap-4 my-6">
                  {[
                    {
                      icon: Code,
                      title: "Game Development in Scratch",
                      description: "Students created interactive stories and games, learning programming fundamentals through visual coding"
                    },
                    {
                      icon: Target,
                      title: "Arduino IoT Projects", 
                      description: "Building motion-sensor systems and smart home prototypes, bridging hardware and software"
                    },
                    {
                      icon: BookOpen,
                      title: "Web Development Basics",
                      description: "Creating personal portfolio websites using HTML, CSS, and JavaScript"
                    },
                    {
                      icon: TrendingUp,
                      title: "Data Science Exploration",
                      description: "Analyzing real-world datasets and creating visualizations using Python"
                    }
                  ].map((project, index) => {
                    const IconComponent = project.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                        <div className="p-2 bg-purple-500/20 rounded-lg shrink-0">
                          <IconComponent className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2">{project.title}</h4>
                          <p className="text-neutral-300 text-sm leading-relaxed">{project.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Power of Personalization</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  One of the most important lessons I learned was that every student has a unique learning style and 
                  interest area. Some students thrived with visual programming environments like Scratch, while others 
                  were drawn to the tangible nature of hardware projects with Arduino.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">Adaptive Teaching Strategies</h3>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                  <li><strong>Visual Learners:</strong> Used flowcharts and diagrams to explain algorithmic thinking</li>
                  <li><strong>Kinesthetic Learners:</strong> Emphasized hands-on projects with immediate feedback</li>
                  <li><strong>Analytical Minds:</strong> Introduced mathematical concepts through coding challenges</li>
                  <li><strong>Creative Spirits:</strong> Focused on artistic coding and design-oriented projects</li>
                </ul>

                <p className="text-neutral-300 leading-relaxed">
                  This personalized approach led to an 85% improvement in coding proficiency across all students, 
                  measured through project complexity and independent problem-solving ability.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Building Confidence Through Success</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  One of the biggest barriers to learning programming is the fear of failure. Students often get discouraged 
                  when their code doesn't work the first time, viewing errors as failures rather than learning opportunities.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3">The "Celebration of Bugs" Philosophy</h3>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  I introduced a radical concept: celebrating bugs and errors as learning milestones. Every error message 
                  became a puzzle to solve together, and every bug fix was a small victory worth celebrating. This shift 
                  in mindset transformed how students approached challenges.
                </p>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6 my-6">
                  <div className="flex items-start gap-4">
                    <Heart className="w-6 h-6 text-pink-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-2">Student Success Story</h4>
                      <p className="text-neutral-300 leading-relaxed text-sm">
                        "Sarah, a shy 8th grader, initially struggled with basic programming concepts. Through a personalized 
                        game development project that aligned with her love for storytelling, she not only mastered Python 
                        basics but went on to create a complex interactive adventure game. Her confidence soared, and she's 
                        now considering a computer science major."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Measuring Real Impact</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  The true measure of success wasn't just in coding skills, but in the broader impact on students' 
                  confidence, problem-solving abilities, and career aspirations.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-6">
                  <div className="text-center p-6 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl">
                    <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                    <div className="text-sm text-neutral-300">College Acceptance</div>
                    <div className="text-xs text-neutral-400 mt-1">For CS program applicants</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl">
                    <Target className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                    <div className="text-sm text-neutral-300">Project Completion</div>
                    <div className="text-xs text-neutral-400 mt-1">Portfolio-ready projects</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl">
                    <BookOpen className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
                    <div className="text-sm text-neutral-300">Languages</div>
                    <div className="text-xs text-neutral-400 mt-1">Average per student</div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">Lessons for the Future</h2>
                <p className="text-neutral-300 leading-relaxed mb-4">
                  This mentoring experience taught me valuable lessons that extend far beyond coding education:
                </p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2 ml-4 mb-4">
                  <li>Passion-driven learning is infinitely more effective than curriculum-driven learning</li>
                  <li>Celebrating small wins builds the confidence needed for big challenges</li>
                  <li>Every student has unique strengths that can be leveraged for learning</li>
                  <li>The best teachers are often just one step ahead of their students</li>
                  <li>Technology education should focus on problem-solving, not just syntax</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white mb-4">The Ripple Effect</h2>
                <p className="text-neutral-300 leading-relaxed">
                  The most rewarding part of this journey has been watching students become mentors themselves. Several 
                  of my former students now volunteer to help younger students with their coding projects, creating a 
                  beautiful cycle of knowledge sharing and community building. This ripple effect is what makes education 
                  truly transformative - it doesn't just change individual lives, it builds communities.
                </p>
              </section>
            </div>
          </motion.div>

          {/* Article Footer */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Want to Learn More About My Teaching Methods?</h3>
                  <p className="text-neutral-300">
                    Explore my educational philosophy and see examples of student projects.
                  </p>
                </div>
                <div className="flex gap-4">
                  <a
                    href="https://curiouscardinals.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors font-medium"
                  >
                    <Users className="w-5 h-5" />
                    Curious Cardinals
                  </a>
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 px-6 py-3 bg-purple-500 rounded-lg text-white hover:bg-purple-600 transition-colors font-medium"
                  >
                    <Heart className="w-5 h-5" />
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 