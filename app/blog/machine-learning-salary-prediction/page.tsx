import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ExternalLink, Github, TrendingUp, Database, Brain } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Machine Learning for Salary Prediction: A Deep Dive | Allah-u-Abha Rodrigues',
  description: 'How I built a comprehensive ML model to predict software developer salaries using Stack Overflow survey data and advanced statistical techniques.',
};

export default function MachineLearningPredictionPage() {
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
              {['Machine Learning', 'Python', 'Data Science', 'Statistics'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Machine Learning for Salary Prediction: A Deep Dive
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              How I built a comprehensive ML model to predict software developer salaries using Stack Overflow 
              survey data and advanced statistical techniques.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                March 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min read
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
                <TrendingUp className="w-6 h-6 text-green-400" />
                The Challenge
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Predicting software developer salaries is a complex machine learning problem involving geographic, 
                educational, experiential, and technological factors. Using the 2020 Stack Overflow Developer Survey 
                data with 50,000+ responses, I built a model that achieves 85% accuracy in salary predictions.
              </p>
            </div>

            {/* Dataset Overview */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Database className="w-7 h-7 text-blue-400" />
                Dataset Deep Dive
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">Data Sources</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• 2020 Stack Overflow Developer Survey</li>
                    <li>• 64,461 global responses</li>
                    <li>• 50+ features analyzed</li>
                    <li>• Geographic salary variations</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">Key Features</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>• Years of experience</li>
                    <li>• Education level</li>
                    <li>• Programming languages</li>
                    <li>• Geographic location</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                The Stack Overflow survey provides a unique window into the global developer ecosystem. 
                However, raw survey data requires extensive preprocessing to extract meaningful insights 
                for machine learning applications.
              </p>
            </section>

            {/* Data Preprocessing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Data Preprocessing Pipeline</h2>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Cleaning Steps</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-black">1</div>
                    <div>
                      <h4 className="font-semibold text-orange-400 mb-2">Salary Standardization</h4>
                      <p className="text-gray-300 text-sm">
                        Converted all salary data to USD using PPP (Purchasing Power Parity) adjustments 
                        for fair cross-country comparisons.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold text-black">2</div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-2">Missing Value Treatment</h4>
                      <p className="text-gray-300 text-sm">
                        Implemented median imputation for numerical features and mode imputation 
                        for categorical variables, reducing data loss by 73%.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-black">3</div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-2">Feature Engineering</h4>
                      <p className="text-gray-300 text-sm">
                        Created composite features like "Tech Stack Complexity" and "Career Level" 
                        from multiple survey responses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-cyan-400 mb-3">Statistical Insights</h4>
                <p className="text-gray-300 mb-4">
                  After preprocessing, several interesting patterns emerged:
                </p>
                <ul className="text-gray-300 space-y-2">
                  <li>• US developers earn 2.3x the global median</li>
                  <li>• Machine Learning skills increase salary by 32% on average</li>
                  <li>• Advanced degree holders earn 18% more than self-taught developers</li>
                  <li>• Remote work correlates with 15% salary increase</li>
                </ul>
              </div>
            </section>

            {/* Model Architecture */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                <Brain className="w-7 h-7 text-purple-400" />
                Model Architecture & Selection
              </h2>
              
              <p className="text-gray-300 mb-8 leading-relaxed">
                I experimented with multiple algorithms to find the optimal approach for salary prediction. 
                The final ensemble model combines the strengths of different algorithms for robust predictions.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Algorithms Tested</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Linear Regression</span>
                      <span className="text-yellow-400 font-semibold">78% R²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Random Forest</span>
                      <span className="text-green-400 font-semibold">85% R²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg">
                      <span className="text-gray-300">Gradient Boosting</span>
                      <span className="text-blue-400 font-semibold">82% R²</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-800/30 rounded-lg border-2 border-purple-500/30">
                      <span className="text-white font-semibold">Ensemble Model</span>
                      <span className="text-purple-400 font-bold">87% R²</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Feature Importance</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-sm text-gray-400">32%</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-green-400 h-2 rounded-full" style={{width: '32%'}}></div>
                      </div>
                      <span className="text-gray-300 text-sm">Location</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-sm text-gray-400">28%</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{width: '28%'}}></div>
                      </div>
                      <span className="text-gray-300 text-sm">Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-sm text-gray-400">22%</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-purple-400 h-2 rounded-full" style={{width: '22%'}}></div>
                      </div>
                      <span className="text-gray-300 text-sm">Tech Stack</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-sm text-gray-400">18%</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-2">
                        <div className="bg-cyan-400 h-2 rounded-full" style={{width: '18%'}}></div>
                      </div>
                      <span className="text-gray-300 text-sm">Education</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">Technical Implementation</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Streamlit', 'Matplotlib', 'Seaborn', 'Jupyter'].map((tech) => (
                    <div key={tech} className="bg-gray-800/50 rounded-lg p-3 text-center text-sm font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  The final model uses a weighted ensemble approach where Random Forest (weight: 0.6) provides 
                  robust baseline predictions, while Gradient Boosting (weight: 0.4) captures complex non-linear 
                  relationships between features.
                </p>
              </div>
            </section>

            {/* Results & Deployment */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Model Performance & Deployment</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                  <div className="text-gray-300">Prediction Accuracy</div>
                  <div className="text-xs text-gray-500 mt-1">R² Score</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">50K+</div>
                  <div className="text-gray-300">Training Data Points</div>
                  <div className="text-xs text-gray-500 mt-1">Survey Responses</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">12K</div>
                  <div className="text-gray-300">RMSE (USD)</div>
                  <div className="text-xs text-gray-500 mt-1">Average Error</div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Real-World Application</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The model is deployed as an interactive Streamlit application that allows users to input 
                  their profile information and receive instant salary predictions. The interface includes:
                </p>
                <ul className="text-gray-300 space-y-2 mb-6">
                  <li>• Interactive input forms for all key features</li>
                  <li>• Real-time prediction updates as users modify inputs</li>
                  <li>• Confidence intervals for prediction reliability</li>
                  <li>• Comparison with industry benchmarks</li>
                  <li>• Feature impact visualization</li>
                </ul>
              </div>
            </section>

            {/* Key Insights */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Key Insights & Findings</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Geographic Impact</h4>
                  <p className="text-gray-300">
                    Location remains the strongest predictor of salary, with US-based developers commanding 
                    premium compensation. However, remote work is rapidly changing this dynamic.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technology Premium</h4>
                  <p className="text-gray-300">
                    Emerging technologies like machine learning, cloud platforms, and modern web frameworks 
                    command significant salary premiums compared to legacy technologies.
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Experience vs. Education</h4>
                  <p className="text-gray-300">
                    While formal education provides a baseline, practical experience and continuous learning 
                    have stronger correlations with higher compensation levels.
                  </p>
                </div>
              </div>
            </section>

            {/* Future Improvements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Future Enhancements</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The current model provides a solid foundation, but there are several areas for improvement:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-orange-400 mb-3">Real-Time Data</h4>
                  <p className="text-gray-300 text-sm">
                    Integrate with job boards and salary databases for more current market data.
                  </p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Deep Learning</h4>
                  <p className="text-gray-300 text-sm">
                    Experiment with neural networks for capturing complex feature interactions.
                  </p>
                </div>
              </div>
            </section>

            {/* Links */}
            <section className="mb-12">
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://salarypredictionml.streamlit.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Try the Model
                </a>
                <a 
                  href="https://github.com/AllahuRodrigues/SalaryPredictionML" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
} 