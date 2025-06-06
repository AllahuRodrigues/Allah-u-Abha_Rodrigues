import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Users, Target, Heart, BookOpen, Code, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mentoring the Next Generation: Teaching Code with Heart | Allah-u-Abha Rodrigues',
  description: 'My experience mentoring 15+ students at Curious Cardinals and how project-based learning transforms coding education.',
};

export default function MentoringNextGenerationPage() {
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
              {['Education', 'Mentoring', 'Programming', 'Teaching'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Mentoring the Next Generation: Teaching Code with Heart
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              My experience mentoring 15+ students at Curious Cardinals and how project-based learning 
              transforms coding education.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                February 28, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min read
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
            
            {/* Introduction */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Heart className="w-6 h-6 text-red-400" />
                Why I Started Mentoring
              </h2>
              <p className="text-gray-300 leading-relaxed">
                When I first started learning to code, I remember the overwhelming feeling of not knowing where to begin. 
                The vast landscape of programming languages, frameworks, and concepts felt insurmountable. I was fortunate 
                to have mentors who guided me through those early struggles, and I knew I wanted to pay that forward.
              </p>
            </div>

            {/* Key Metrics */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-green-400" />
                Impact by the Numbers
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-300">Students Mentored</div>
                  <div className="text-xs text-gray-500 mt-1">Middle & High School</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">85%</div>
                  <div className="text-gray-300">Skill Improvement</div>
                  <div className="text-xs text-gray-500 mt-1">Average Increase</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Project Completion</div>
                  <div className="text-xs text-gray-500 mt-1">Success Rate</div>
                </div>
              </div>
            </section>

            {/* Project-Based Learning */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Target className="w-7 h-7 text-orange-400" />
                The Project-Based Learning Revolution
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                Instead of starting with syntax and theory, I decided to flip the script. Every student began with a 
                project they were genuinely excited about. Whether it was building a game in Scratch, creating an 
                Arduino-powered robot, or developing a simple web app, the projects came first.
              </p>

              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Code className="w-6 h-6 text-blue-400" />
                    <h4 className="text-lg font-semibold text-blue-400">Game Development in Scratch</h4>
                  </div>
                  <p className="text-gray-300">
                    Students created interactive stories and games, learning programming fundamentals through visual coding. 
                    This approach made abstract concepts like loops and conditionals tangible and fun.
                  </p>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-6 h-6 text-green-400" />
                    <h4 className="text-lg font-semibold text-green-400">Arduino IoT Projects</h4>
                  </div>
                  <p className="text-gray-300">
                    Building motion-sensor systems and smart home prototypes, bridging hardware and software. 
                    Students learned C++ while seeing immediate physical results of their code.
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="w-6 h-6 text-purple-400" />
                    <h4 className="text-lg font-semibold text-purple-400">Web Development Basics</h4>
                  </div>
                  <p className="text-gray-300">
                    Creating personal portfolio websites using HTML, CSS, and JavaScript. Students built something 
                    they could immediately share with friends and family.
                  </p>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                    <h4 className="text-lg font-semibold text-cyan-400">Data Science Exploration</h4>
                  </div>
                  <p className="text-gray-300">
                    Analyzing real-world datasets and creating visualizations using Python. Students explored topics 
                    they cared about, from sports statistics to climate data.
                  </p>
                </div>
              </div>
            </section>

            {/* Personalization */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Users className="w-7 h-7 text-pink-400" />
                The Power of Personalization
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                One of the most important lessons I learned was that every student has a unique learning style and 
                interest area. Some students thrived with visual programming environments like Scratch, while others 
                were drawn to the tangible nature of hardware projects with Arduino.
              </p>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-white mb-6">Adaptive Teaching Strategies</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Visual Learners</h4>
                      <p className="text-gray-300 text-sm">Used flowcharts and diagrams to explain algorithmic thinking</p>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <h4 className="font-semibold text-green-400 mb-2">Kinesthetic Learners</h4>
                      <p className="text-gray-300 text-sm">Emphasized hands-on projects with immediate feedback</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Analytical Minds</h4>
                      <p className="text-gray-300 text-sm">Introduced mathematical concepts through coding challenges</p>
                    </div>
                    <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                      <h4 className="font-semibold text-purple-400 mb-2">Creative Spirits</h4>
                      <p className="text-gray-300 text-sm">Focused on artistic coding and design-oriented projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Success Stories</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Sarah - From Scratch to Web Development</h4>
                  <p className="text-gray-300">
                    Started with simple Scratch animations and progressed to building a full responsive website for her 
                    school's robotics team. Now pursuing computer science at Stanford.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Marcus - Hardware Enthusiast to AI Explorer</h4>
                  <p className="text-gray-300">
                    Began with Arduino LED projects and evolved to building an AI-powered home automation system. 
                    Accepted to MIT's electrical engineering program.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Emma - Data Science Discovery</h4>
                  <p className="text-gray-300">
                    Started analyzing her favorite K-pop group's music trends and developed a passion for data visualization. 
                    Now interning at a data analytics startup.
                  </p>
                </div>
              </div>
            </section>

            {/* Key Lessons */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Key Lessons Learned</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Start with Passion, Not Syntax</h4>
                  <p className="text-gray-300">
                    Students learn faster when they're working on something they care about. Find their interests 
                    first, then introduce the technical concepts through that lens.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Fail Fast, Learn Faster</h4>
                  <p className="text-gray-300">
                    Encouraging students to experiment and make mistakes created a safe learning environment where 
                    curiosity thrived over perfectionism.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Celebrate Small Wins</h4>
                  <p className="text-gray-300">
                    Every successfully running "Hello World" program, every working button click, and every 
                    animated sprite deserves recognition and celebration.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Looking Forward</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Mentoring these incredible students has been one of the most rewarding experiences of my journey. 
                Watching them grow from hesitant beginners to confident creators who see problems as coding opportunities 
                reminds me why I fell in love with programming in the first place.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                The future belongs to this generation of digital natives, and I'm honored to have played a small part 
                in preparing them to build it. Their creativity, resilience, and fresh perspectives continue to inspire 
                my own work and remind me that the best way to learn is often to teach.
              </p>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
} 