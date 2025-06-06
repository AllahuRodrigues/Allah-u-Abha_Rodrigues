import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, ExternalLink, BookOpen, Users, Target, BarChart, TrendingUp, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Educational Technology Innovation Research | Allah-u-Abha Rodrigues',
  description: 'Research on the impact of project-based learning in computer science education and developing frameworks for personalized coding instruction.',
};

export default function EducationalTechnologyResearchPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-white/10 backdrop-blur-xl bg-black/50">
          <div className="container mx-auto px-6 py-4">
            <Link 
              href="/#research" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>
          </div>
        </nav>

        {/* Header */}
        <header className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Education', 'Research', 'Machine Learning', 'Pedagogy'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Educational Technology Innovation
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Researching the impact of project-based learning in computer science education and developing 
              frameworks for personalized coding instruction through data-driven methodologies.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                September 2024 - Present
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Yale University - Independent Research
              </div>
            </div>
          </div>
        </header>

        {/* Research Content */}
        <article className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                Research Overview
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This research focuses on understanding how project-based learning methodologies can be optimized 
                for computer science education. Through my work with Curious Cardinals, I&apos;m conducting a longitudinal 
                study on student engagement, learning outcomes, and skill retention when using hands-on projects 
                versus traditional lecture-based approaches.
              </p>
            </div>

            {/* Research Questions */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Target className="w-7 h-7 text-blue-400" />
                Key Research Questions
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">Primary Question</h4>
                  <p className="text-gray-300">
                    How does project-based learning impact student engagement, skill acquisition, and long-term 
                    retention in computer science education compared to traditional pedagogical approaches?
                  </p>
                </div>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Secondary Questions</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• What project characteristics maximize learning outcomes for different student types?</li>
                    <li>• How can adaptive learning frameworks personalize instruction based on progress patterns?</li>
                    <li>• What metrics best predict student success in project-based CS education?</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <BarChart className="w-7 h-7 text-green-400" />
                Research Methodology
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Data Collection</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Longitudinal study with 15+ students over 8 months</li>
                    <li>• Pre/post skill assessments using standardized coding challenges</li>
                    <li>• Weekly engagement metrics and project completion rates</li>
                    <li>• Qualitative interviews on learning experiences</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Analysis Framework</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Statistical analysis of learning outcome differences</li>
                    <li>• Machine learning models for personalization</li>
                    <li>• Thematic analysis of qualitative feedback</li>
                    <li>• Comparative analysis with control groups</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Preliminary Findings */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <TrendingUp className="w-7 h-7 text-cyan-400" />
                Preliminary Findings
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-gray-300">Skill Improvement</div>
                  <div className="text-xs text-gray-500 mt-1">Average increase in coding proficiency</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
                  <div className="text-gray-300">Project Completion</div>
                  <div className="text-xs text-gray-500 mt-1">Student portfolio success rate</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">92%</div>
                  <div className="text-gray-300">Engagement Rate</div>
                  <div className="text-xs text-gray-500 mt-1">Weekly participation consistency</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Key Insights</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <h4 className="font-semibold text-green-400 mb-2">Increased Motivation</h4>
                    <p className="text-gray-300 text-sm">
                      Students show 73% higher intrinsic motivation when working on personally meaningful projects 
                      compared to standardized assignments.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h4 className="font-semibold text-blue-400 mb-2">Better Retention</h4>
                    <p className="text-gray-300 text-sm">
                      Concepts learned through project implementation show 68% better retention after 3 months 
                      compared to lecture-based learning.
                    </p>
                  </div>

                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <h4 className="font-semibold text-purple-400 mb-2">Personalization Impact</h4>
                    <p className="text-gray-300 text-sm">
                      Adaptive project selection based on learning style preferences improves completion rates 
                      by 45% and quality scores by 38%.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Implementation */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <ExternalLink className="w-7 h-7 text-orange-400" />
                Technical Implementation
              </h2>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    'Python', 'R', 'Jupyter', 'Pandas', 
                    'Scikit-learn', 'Statistical Analysis', 'Data Visualization', 'Machine Learning'
                  ].map((tech) => (
                    <div key={tech} className="bg-gray-800/50 rounded-lg p-3 text-center text-sm font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-3">Adaptive Learning Framework</h4>
                <p className="text-gray-300 mb-4">
                  Developing a machine learning system that analyzes student progress patterns, learning styles, 
                  and engagement metrics to recommend personalized project paths and learning resources.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Input Features</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Completion time patterns</li>
                      <li>• Error frequency and types</li>
                      <li>• Engagement metrics</li>
                      <li>• Learning style preferences</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Personalized Outputs</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Custom project recommendations</li>
                      <li>• Difficulty progression paths</li>
                      <li>• Learning resource suggestions</li>
                      <li>• Intervention timing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Future Work */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Future Research Directions</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Publication Plan</h4>
                  <p className="text-gray-300 mb-4">
                    Preparing &quot;Project-Based Learning in CS Education: A Quantitative Analysis&quot; for submission 
                    to the Journal of Educational Technology Research by June 2025.
                  </p>
                  <div className="text-sm text-gray-500">Expected completion: June 2025</div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Scale Expansion</h4>
                  <p className="text-gray-300 mb-4">
                    Plans to expand the study to multiple educational institutions and diverse student populations 
                    to validate findings across different contexts and demographics.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Platform Development</h4>
                  <p className="text-gray-300">
                    Developing an open-source educational platform that implements the adaptive learning framework 
                    for broader adoption in computer science education.
                  </p>
                </div>
              </div>
            </section>

            {/* Collaboration */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Research Collaboration</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Interested in collaborating on educational technology research or implementing project-based 
                  learning methodologies? Let&apos;s discuss opportunities for partnership and knowledge sharing.
                </p>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  Get In Touch
                </Link>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
} 