import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, FileText, Database, Brain, Settings, Monitor, CheckCircle, ArrowRight, Code, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Machine Learning Project Workflow | Allah-u-Abha Rodrigues',
  description: 'End-to-end methodology for building and deploying machine learning models in production environments.',
};

export default function MLWorkflowDocsPage() {
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

        {/* Header */}
        <header className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {['Machine Learning', 'Documentation', 'Best Practices', 'Python'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Machine Learning Project Workflow
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Complete guide to machine learning project lifecycle from data collection to production deployment. 
              Covers data preprocessing, model selection, evaluation metrics, deployment strategies, and monitoring.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Documentation
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Machine Learning Category
              </div>
            </div>
          </div>
        </header>

        {/* Documentation Content */}
        <article className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Brain className="w-6 h-6 text-purple-400" />
                Overview
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This documentation provides a complete methodology for implementing machine learning projects 
                from conception to production deployment. Based on practical experience from the SalaryPredictionML 
                project and industry best practices.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The workflow emphasizes reproducibility, scalability, and maintainability - essential factors 
                for successful ML projects in production environments.
              </p>
            </div>

            {/* Workflow Sections */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-white">Complete Workflow</h2>
              
              <div className="space-y-8">
                {/* Data Collection & Preprocessing */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold text-black">1</div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Database className="w-6 h-6 text-blue-400" />
                      Data Collection & Preprocessing
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Data Acquisition</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Identify reliable data sources (APIs, databases, files)</li>
                        <li>• Implement data collection pipelines</li>
                        <li>• Establish data quality validation rules</li>
                        <li>• Document data schema and sources</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Preprocessing Pipeline</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Handle missing values (imputation strategies)</li>
                        <li>• Normalize/standardize numerical features</li>
                        <li>• Encode categorical variables</li>
                        <li>• Feature engineering and selection</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Code Example: Data Preprocessing</h5>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
{`import pandas as pd
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.impute import SimpleImputer

def preprocess_data(df):
    # Handle missing values
    numeric_imputer = SimpleImputer(strategy='median')
    categorical_imputer = SimpleImputer(strategy='most_frequent')
    
    # Feature engineering
    df['experience_log'] = np.log1p(df['years_experience'])
    df['salary_per_experience'] = df['salary'] / (df['years_experience'] + 1)
    
    return df`}
                    </pre>
                  </div>
                </div>

                {/* Model Development */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold text-black">2</div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Brain className="w-6 h-6 text-green-400" />
                      Model Development
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Algorithm Selection</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Baseline models (Linear Regression, Decision Trees)</li>
                        <li>• Advanced algorithms (Random Forest, XGBoost)</li>
                        <li>• Ensemble methods for improved performance</li>
                        <li>• Hyperparameter optimization strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-400 mb-3">Training Process</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Cross-validation for robust evaluation</li>
                        <li>• Feature importance analysis</li>
                        <li>• Learning curves and validation plots</li>
                        <li>• Model checkpointing and versioning</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Model Training Pipeline</h5>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
{`from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import GridSearchCV

# Hyperparameter tuning
param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 20, 30, None],
    'min_samples_split': [2, 5, 10]
}

rf_grid = GridSearchCV(
    RandomForestRegressor(random_state=42),
    param_grid, cv=5, scoring='r2'
)

rf_grid.fit(X_train, y_train)`}
                    </pre>
                  </div>
                </div>

                {/* Evaluation & Validation */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-sm font-bold text-black">3</div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <BarChart3 className="w-6 h-6 text-purple-400" />
                      Evaluation & Validation
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Metrics</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• R² Score</li>
                        <li>• RMSE</li>
                        <li>• MAE</li>
                        <li>• MAPE</li>
                      </ul>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Validation</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Train/Valid/Test Split</li>
                        <li>• K-Fold Cross Validation</li>
                        <li>• Time Series Split</li>
                        <li>• Stratified Sampling</li>
                      </ul>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <h4 className="text-lg font-semibold text-purple-400 mb-3">Analysis</h4>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Feature Importance</li>
                        <li>• Residual Analysis</li>
                        <li>• Bias-Variance Trade-off</li>
                        <li>• Error Distribution</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Deployment Strategies */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-sm font-bold text-black">4</div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Settings className="w-6 h-6 text-orange-400" />
                      Deployment Strategies
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-3">Local Deployment</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Streamlit for rapid prototyping</li>
                        <li>• Flask/FastAPI for REST APIs</li>
                        <li>• Docker containerization</li>
                        <li>• Environment management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-orange-400 mb-3">Cloud Deployment</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• AWS SageMaker for ML workflows</li>
                        <li>• Heroku for simple web apps</li>
                        <li>• AWS Lambda for serverless</li>
                        <li>• Model serving with MLflow</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/30 rounded-lg p-4">
                    <h5 className="font-semibold text-cyan-400 mb-2">Streamlit Deployment Example</h5>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
{`import streamlit as st
import joblib
import pandas as pd

# Load trained model
@st.cache_resource
def load_model():
    return joblib.load('salary_prediction_model.pkl')

model = load_model()

# User input interface
st.title("Salary Prediction Tool")
experience = st.slider("Years of Experience", 0, 30, 5)
education = st.selectbox("Education Level", options)

# Make prediction
if st.button("Predict Salary"):
    prediction = model.predict([[experience, education, ...]])
    st.success(f"Predicted Salary: ${'{'}prediction[0]:,.2f{'}'}")`}
                    </pre>
                  </div>
                </div>

                {/* Production Monitoring */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-sm font-bold text-black">5</div>
                    <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                      <Monitor className="w-6 h-6 text-cyan-400" />
                      Production Monitoring
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Performance Monitoring</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Model accuracy tracking over time</li>
                        <li>• Prediction latency measurements</li>
                        <li>• Error rate monitoring</li>
                        <li>• Resource usage analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-3">Data Drift Detection</h4>
                      <ul className="text-gray-300 space-y-2 text-sm">
                        <li>• Input feature distribution changes</li>
                        <li>• Statistical drift tests</li>
                        <li>• Automated retraining triggers</li>
                        <li>• Model versioning and rollback</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Best Practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Best Practices</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Do's
                  </h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Version control your data and models</li>
                    <li>• Document assumptions and decisions</li>
                    <li>• Implement comprehensive testing</li>
                    <li>• Use reproducible random seeds</li>
                    <li>• Monitor model performance continuously</li>
                    <li>• Implement gradual rollouts</li>
                  </ul>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Common Pitfalls</h4>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• Data leakage in feature engineering</li>
                    <li>• Inadequate validation strategies</li>
                    <li>• Ignoring class imbalance</li>
                    <li>• Over-optimization on validation set</li>
                    <li>• Poor error handling in production</li>
                    <li>• Lack of model interpretability</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tools & Technologies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Recommended Tools</h2>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    'Python', 'Pandas', 'Scikit-learn', 'NumPy',
                    'Jupyter', 'MLflow', 'Docker', 'Streamlit',
                    'AWS SageMaker', 'Git/GitHub', 'pytest', 'Matplotlib'
                  ].map((tool) => (
                    <div key={tool} className="bg-gray-800/50 rounded-lg p-3 text-center text-sm font-medium">
                      {tool}
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm">
                  This tech stack provides a comprehensive foundation for ML projects, from development to deployment 
                  and monitoring. Choose tools based on your specific requirements and team expertise.
                </p>
              </div>
            </section>

            {/* Project Example */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-white">Real Project Example</h2>
              
              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">SalaryPredictionML Project</h3>
                <p className="text-gray-300 mb-6">
                  This workflow was successfully implemented in the SalaryPredictionML project, achieving 85% 
                  accuracy in predicting software developer salaries using Stack Overflow survey data.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/blog/machine-learning-salary-prediction"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <FileText className="w-4 h-4" />
                    Read Case Study
                  </Link>
                  <a
                    href="https://github.com/AllahuRodrigues/SalaryPredictionML"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    <Code className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </section>

          </div>
        </article>
      </div>
    </div>
  );
} 