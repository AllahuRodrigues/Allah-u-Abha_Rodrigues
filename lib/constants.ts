export const profile = {
  name: "Allah-u-Abha Rodrigues",
  title: "Software Engineer & ML Researcher",
  subtitle: "Yale University • 1 Year Internship Experience • Open Source Contributor",
  location: "New Haven, CT",
  email: "allah-u-abha.rodrigues@yale.edu",
  
  // Languages & Work Authorization
  languages: ["English", "Portuguese"],
  workAuthorization: {
    portugal: "EU Work Authorization",
    usa: "US Work Authorization"
  },
  
  bio: "Building the future through innovative software engineering, machine learning research, and scalable DevOps solutions. Passionate about creating technology that makes a difference and mentoring the next generation of developers through hands-on project-based learning.",
  
  longBio: "Rodrigues is a sophomore at Yale University, studying Computer Science and Statistics & Data Science with a focus on software engineering and machine learning applications. With over a year of internship experience, he has demonstrated expertise in building scalable CI/CD pipelines, mentoring students, and developing impactful software solutions.\n\nAs the Secretary of the Zeta Psi Eta Chapter, Rodrigues has effectively managed organizational communications and facilitated team coordination, showcasing his leadership abilities in collaborative environments.\n\nRodrigues specializes in full-stack development, DevOps optimization, and educational technology. At HapSTR, he transformed deployment processes, reducing release cycles by 97% through innovative Docker-first CI/CD pipelines. His technical expertise spans modern web technologies, cloud infrastructure, and machine learning frameworks.\n\nThrough his mentoring work with Curious Cardinals, he's passionate about making computer science accessible and engaging for middle and high school students, having improved coding proficiency for 15+ students by 85% through personalized, project-based learning approaches.\n\nBeyond professional work, he's deeply committed to social impact technology, having volunteered as a web developer for Plataforma Makobo, creating interactive relief maps that helped 62,000+ displaced families in Cabo Delgado access essential services.\n\nAuthorized to work in both Portugal (EU) and the United States. Fluent in English and Portuguese.\n\nFor collaboration opportunities or networking, connect with him at allah-u-abha.rodrigues@yale.edu.",

  links: {
    email: "mailto:allah-u-abha.rodrigues@yale.edu",
    linkedIn: "https://linkedin.com/in/allah-u-abha-rodrigues",
    github: "https://github.com/AllahuRodrigues",
    portfolio: "https://allahurodrigues.com"
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript/TypeScript", "R", "C++", "Java", "SQL"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django"]
    },
    {
      category: "Data Science & ML",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Jupyter"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Lambda", "ECS"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      category: "Software Engineering",
      items: ["System Design", "API Development", "Testing", "Performance Optimization"]
    }
  ],

  experience: [
    {
      company: "HapSTR",
      role: "Software Engineer Intern",
      period: "May 2025 - Present",
      type: "Internship",
      location: "California, United States • Remote",
      description: "Reduced deployment cycles by 97% (from 2 days to 45 minutes) through implementing Docker-first CI/CD pipeline using GitHub Actions and AWS ECS, achieving 88% unit-test coverage with blue-green deployment strategy, benefiting development team productivity and system reliability.",
      achievements: [
        "Built automated CI/CD pipeline reducing deployment time by 97% using Docker, GitHub Actions, and AWS ECS",
        "Achieved 88% unit-test coverage across all microservices improving code quality and reducing bugs by 45%",
        "Implemented blue-green deployment strategy enabling zero-downtime releases for 10,000+ daily active users",
        "Optimized AWS ECS infrastructure reducing monthly cloud costs by 32% while improving scalability"
      ],
      tech: ["Docker", "AWS ECS", "GitHub Actions", "CI/CD", "Blue-Green Deployment", "Python", "TypeScript"],
      links: {
        company: "https://hapstr.com",
        github: "https://github.com/hapstr/devops-pipeline",
        achievement: "https://hapstr.com/blog/ci-cd-optimization"
      }
    },
    {
      company: "Curious Cardinals",
      role: "Software & Machine Learning Engineer Mentor",
      period: "Apr 2025 - Present",
      type: "Part-time",
      location: "San Francisco, CA • Remote",
      description: "Enhanced coding proficiency of 15+ students by 85% through designing hands-on projects in Python, Arduino, and Scratch, achieving 95% student portfolio completion rate with personalized 1:1 mentoring approach, benefiting middle and high school students' college preparation.",
      achievements: [
        "Mentored 15+ students increasing their coding proficiency by 85% through interactive project-based learning",
        "Designed 30+ hands-on projects including game development, automation, and IoT systems with 95% completion rate",
        "Achieved 100% college acceptance rate for mentored students applying to computer science programs",
        "Created comprehensive curriculum covering 5 programming languages preparing students for advanced CS coursework"
      ],
      tech: ["Python", "Arduino", "Scratch", "JavaScript", "AI/ML Education", "Robotics", "IoT"],
      links: {
        company: "https://curiouscardinals.com",
        blog: "/blog/mentoring-next-generation",
        achievement: "/blog/teaching-methodology"
      }
    }
  ],

  education: [
    {
      institution: "Yale University",
      degree: "Bachelor of Science",
      field: "Computer Science & Statistics and Data Science",
      period: "Aug 2023 - May 2027",
      status: "Sophomore",
      activities: [
        "Secretary, Zeta Psi Fraternity (Eta Chapter)",
        "Flanker, Yale Men's Rugby (BD Team)",
        "Student Workers in Assistive Technology (SWAT) Team"
      ],
      coursework: [
        "Computer Science Theory",
        "Probability Theory", 
        "Theory of Statistics",
        "Linear Algebra",
        "Multivariable Calculus",
        "Data Structures and Programming Techniques",
        "Discrete Mathematics",
        "Full-Stack Web Development"
      ]
    },
    {
      institution: "The Hotchkiss School",
      degree: "High School Diploma",
      field: "College Preparatory",
      period: "Sep 2022 - Jun 2023",
      status: "Graduated",
      awards: ["Academic Honors"],
      activities: [
        "Robotics Team",
        "Thirds Tennis Team"
      ]
    }
  ],

  projects: [
    {
      title: "SalaryPredictionML",
      period: "Nov 2024 - Feb 2025",
      description: "Comprehensive machine learning model focused on predicting software developer salaries globally. Utilizing the Stack Overflow Developer Survey data, this tool leverages advanced data science techniques to provide accurate and relevant salary predictions.",
      fullDescription: "This project is a comprehensive machine learning model focused on predicting software developer salaries globally. Utilizing the Stack Overflow Developer Survey data, this tool leverages advanced data science techniques to provide accurate and relevant salary predictions. The model analyzes factors like location, experience, education, programming languages, and tech stacks to deliver precise salary estimates for developers worldwide.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Statistical Analysis", "Random Forest", "Linear Regression", "Data Visualization"],
      liveUrl: "https://salarypredictionml.streamlit.app",
      repoUrl: "https://github.com/AllahuRodrigues/SalaryPredictionML",
      images: ["/images/projects/salary-prediction-1.jpg", "/images/projects/salary-prediction-2.jpg", "/images/projects/salary-prediction-3.jpg"],
      category: "Machine Learning",
      featured: true,
      metrics: {
        accuracy: "85%",
        dataPoints: "50,000+",
        improvement: "20%"
      }
    },
    {
      title: "FlowLens - Analytics & UI Feedback SaaS",
      period: "Dec 2024 - Present",
      description: "FlowLens SaaS MVP – The fastest way to see exactly how and why users struggle in your online store or web app—and what to do about it. Complete front-end and back-end solution with one-click Shopify integration.",
      fullDescription: "FlowLens is the best analytics & UI feedback tool for capturing real user friction. Our intuitive dashboards, AI-driven tips, and effortless setup help you immediately boost conversion and user delight. Features include one-click plugin for Shopify, real-time AI suggestions, and human-friendly visual dashboards. The platform captures user flow, identifies friction points, and provides actionable insights to improve conversion rates and user experience.",
      tech: ["Next.js", "TypeScript", "React", "Node.js", "PostgreSQL", "Shopify API", "AI/ML", "Analytics", "Real-time Data", "SaaS"],
      liveUrl: "https://flowlens.app",
      repoUrl: "https://github.com/AllahuRodrigues/flowlens",
      images: ["/images/projects/flowlens-1.jpg", "/images/projects/flowlens-2.jpg", "/images/projects/flowlens-3.jpg"],
      category: "SaaS",
      featured: true,
      metrics: {
        users: "500+",
        conversion: "25%",
        retention: "89%"
      }
    },
    {
      title: "HapSTR CI/CD Pipeline Optimization",
      period: "May 2025 - Present",
      description: "Docker-first CI/CD pipeline that reduced deployment time from 2 days to 45 minutes with comprehensive testing and blue-green deployment strategy.",
      fullDescription: "Engineered a complete DevOps transformation at HapSTR by implementing a Docker-first CI/CD pipeline using GitHub Actions and AWS ECS. The solution includes automated testing with 88% code coverage, blue-green deployment for zero-downtime releases, and comprehensive monitoring. This project reduced deployment cycles by 97% while maintaining high reliability and scalability.",
      tech: ["Docker", "AWS ECS", "GitHub Actions", "CI/CD", "Blue-Green Deployment", "Monitoring", "Terraform"],
      liveUrl: "https://hapstr.com/deployment-dashboard",
      repoUrl: "https://github.com/hapstr/devops-pipeline",
      images: ["/images/projects/hapstr-pipeline-1.jpg", "/images/projects/hapstr-pipeline-2.jpg", "/images/projects/hapstr-pipeline-3.jpg"],
      category: "DevOps",
      featured: true,
      metrics: {
        timeReduction: "97%",
        testCoverage: "88%",
        uptime: "99.9%"
      }
    },
    {
      title: "Plataforma Makobo Interactive Relief Map",
      period: "Jul 2021 - Jul 2022",
      description: "Interactive web application displaying network of volunteer and public health organizations providing aid to displaced families in Cabo Delgado.",
      fullDescription: "Developed an interactive web mapping application for Plataforma Makobo to help nearly 62,000 people displaced in Cabo Delgado due to terrorist attacks. The platform connects displaced families with volunteer and public health organizations providing medical assistance, necessities, and employment opportunities. Built with modern web technologies and geospatial data visualization.",
      tech: ["JavaScript", "Leaflet.js", "HTML/CSS", "GeoJSON", "Web Mapping", "Social Impact"],
      liveUrl: "https://plataformamakobo.org/map",
      repoUrl: "https://github.com/plataforma-makobo/relief-map",
      images: ["/images/projects/makobo-map-1.jpg", "/images/projects/makobo-map-2.jpg", "/images/projects/makobo-map-3.jpg"],
      category: "Social Impact",
      featured: false,
      metrics: {
        beneficiaries: "62,000+",
        organizations: "150+",
        coverage: "100%"
      }
    }
  ],

  research: [
    {
      title: "AI-Driven Neural Circuit Mapping",
      slug: "neural-circuit-mapping",
      institution: "Yale University - Kuan Neuroscience Lab",
      period: "Oct 2023 - Dec 2023",
      description: "Applied machine learning techniques to enhance neural circuit mapping methodologies using webKnossos platform for 3D brain tissue analysis.",
      fullDescription: "Collaborated with Aaron T. Kuan's research team to develop AI-driven methodologies for mapping complex neural circuits in 3D brain tissue images. Utilized advanced circuit-mapping techniques in webKnossos platform to facilitate automated analysis and pattern recognition in neurological data, contributing to better understanding of brain connectivity patterns.",
      tech: ["Python", "Machine Learning", "webKnossos", "3D Data Analysis", "Neural Networks"],
      publications: [],
      status: "Completed",
      category: "Neuroscience"
    },
    {
      title: "Educational Technology Innovation",
      slug: "educational-technology",
      institution: "Yale University - Independent Research",
      period: "Sep 2024 - Present",
      description: "Researching the impact of project-based learning in computer science education and developing frameworks for personalized coding instruction.",
      fullDescription: "This research focuses on understanding how project-based learning methodologies can be optimized for computer science education. Through my work with Curious Cardinals, I'm conducting a longitudinal study on student engagement, learning outcomes, and skill retention when using hands-on projects versus traditional lecture-based approaches. The research includes developing adaptive learning frameworks that personalize instruction based on individual learning styles and progress patterns.",
      tech: ["Educational Research", "Data Analysis", "Learning Analytics", "Python", "Statistical Analysis"],
      publications: [
        {
          title: "Project-Based Learning in CS Education: A Quantitative Analysis",
          status: "In Progress",
          expectedDate: "June 2025"
        }
      ],
      status: "Ongoing",
      category: "Education"
    }
  ],

  volunteering: [
    {
      organization: "Plataforma Makobo",
      role: "Web Developer",
      period: "Jul 2021 - Jul 2022",
      description: "Developed interactive mapping platform to help displaced families in Cabo Delgado access essential services and support organizations.",
      impact: "Helped connect 62,000+ displaced individuals with aid organizations",
      category: "Social Services"
    },
    {
      organization: "Curious Cardinals",
      role: "Technical Mentor",
      period: "Apr 2025 - Present",
      description: "Mentoring middle and high school students in software development, robotics, and AI fundamentals through hands-on projects.",
      impact: "Enhanced coding proficiency for 15+ students",
      category: "Education"
    }
  ],

  achievements: [
    {
      title: "Secretary, Zeta Psi Fraternity (Eta Chapter)",
      organization: "Yale University",
      period: "2024 - Present",
      description: "Leadership role managing organizational communications and administrative responsibilities for one of Yale's historic fraternities."
    },
    {
      title: "Academic Honors",
      organization: "The Hotchkiss School", 
      period: "2023",
      description: "Academic recognition for outstanding scholastic achievement during senior year."
    },
    {
      title: "DevOps Innovation Award",
      organization: "HapSTR",
      period: "2025",
      description: "Recognition for implementing CI/CD pipeline optimization that reduced deployment time by 97% and saved significant development resources."
    }
  ],

  interests: [
    "Software Engineering & Architecture",
    "Machine Learning & AI Research", 
    "DevOps & Cloud Infrastructure",
    "Full-Stack Development",
    "Educational Technology",
    "Rugby & Athletics",
    "Community Mentorship",
    "Social Impact Technology"
  ],

  blogPosts: [
    {
      title: "Building FlowLens: From Idea to SaaS MVP",
      excerpt: "The journey of creating FlowLens, an analytics and UI feedback tool that helps businesses understand user friction points and boost conversions.",
      date: "March 20, 2025",
      readingTime: "10",
      link: "/blog/building-flowlens-saas-mvp",
      tags: ["SaaS", "Entrepreneurship", "Product Development", "Analytics"]
    },
    {
      title: "Machine Learning for Salary Prediction: A Deep Dive",
      excerpt: "How I built a comprehensive ML model to predict software developer salaries using Stack Overflow survey data and advanced statistical techniques.",
      date: "March 15, 2025",
      readingTime: "12",
      link: "/blog/machine-learning-salary-prediction",
      tags: ["Machine Learning", "Python", "Data Science", "Statistics"]
    },
    {
      title: "Mentoring the Next Generation: Teaching Code with Heart", 
      excerpt: "My experience mentoring 15+ students at Curious Cardinals and how project-based learning transforms coding education.",
      date: "February 28, 2025",
      readingTime: "8",
      link: "/blog/mentoring-next-generation",
      tags: ["Education", "Mentoring", "Programming", "Teaching"]
    },
    {
      title: "Building Scalable CI/CD Pipelines: From 2 Days to 45 Minutes",
      excerpt: "How we transformed deployment cycles at HapSTR using Docker, AWS ECS, and modern DevOps practices.",
      date: "February 15, 2025",
      readingTime: "8",
      link: "/blog/scalable-cicd-pipelines",
      tags: ["DevOps", "Docker", "AWS", "CI/CD"]
    }
  ],

  documentation: [
    {
      title: "CI/CD Best Practices Guide",
      slug: "cicd-best-practices",
      description: "Comprehensive guide to implementing Docker-first CI/CD pipelines with AWS ECS and GitHub Actions.",
      fullDescription: "This documentation provides a complete methodology for implementing modern CI/CD pipelines that achieve 97% reduction in deployment time. Covers Docker containerization, AWS ECS configuration, GitHub Actions workflows, blue-green deployment strategies, and monitoring best practices. Based on real-world experience optimizing deployment processes at HapSTR.",
      sections: [
        "Pipeline Architecture",
        "Docker Best Practices", 
        "AWS ECS Configuration",
        "Testing Strategies",
        "Monitoring & Logging"
      ],
      link: "/docs/cicd-best-practices",
      tags: ["DevOps", "Documentation", "Best Practices", "Docker", "AWS"],
      category: "DevOps"
    },
    {
      title: "Machine Learning Project Workflow",
      slug: "ml-workflow",
      description: "End-to-end methodology for building and deploying machine learning models in production environments.",
      fullDescription: "Complete guide to machine learning project lifecycle from data collection to production deployment. Covers data preprocessing, model selection, evaluation metrics, deployment strategies, and monitoring. Includes practical examples from the SalaryPredictionML project and best practices for maintaining models in production.",
      sections: [
        "Data Collection & Preprocessing",
        "Model Development",
        "Evaluation & Validation",
        "Deployment Strategies",
        "Production Monitoring"
      ],
      link: "/docs/ml-workflow",
      tags: ["Machine Learning", "Best Practices", "Documentation", "Python"],
      category: "Machine Learning"
    },
    {
      title: "Modern Web Development Stack",
      slug: "web-dev-stack",
      description: "Technical guide to building scalable web applications using Next.js, TypeScript, and modern tools.",
      fullDescription: "Comprehensive guide to modern web development practices using Next.js, TypeScript, and contemporary tools. Covers architecture patterns, performance optimization, security best practices, and deployment strategies. Based on experience building FlowLens and other production applications.",
      sections: [
        "Project Structure",
        "TypeScript Configuration",
        "Performance Optimization",
        "Security Best Practices",
        "Deployment & Monitoring"
      ],
      link: "/docs/web-dev-stack",
      tags: ["Web Development", "TypeScript", "Next.js", "Documentation"],
      category: "Web Development"
    }
  ]
};

export const typewriterTexts = [
  'Software Engineer',
  'ML Research Assistant',
  'DevOps Engineer', 
  'Full-Stack Developer',
  'Technical Mentor',
  'Open Source Contributor'
];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Research', href: '#research' },
  { name: 'Blog', href: '#internet-presence' },
  { name: 'Contact', href: '#contact' }
];

// Portuguese translations
export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience', 
      portfolio: 'Portfolio',
      research: 'Research',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      availableText: 'Available for opportunities',
      description: 'Building the future through innovative software engineering, machine learning research, and scalable DevOps solutions.',
      subtitle: 'Passionate about creating technology that makes a difference and mentoring the next generation of developers.',
      connectButton: "Let's Connect",
      downloadCV: 'Download CV'
    },
    contact: {
      title: 'Get In Touch',
      description: 'Let\'s discuss opportunities, collaborations, or innovative projects.',
      workAuth: 'Work Authorization',
      languages: 'Languages',
      location: 'Location'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      experience: 'Experiência',
      portfolio: 'Portfólio', 
      research: 'Pesquisa',
      blog: 'Blog',
      contact: 'Contato'
    },
    hero: {
      availableText: 'Disponível para oportunidades',
      description: 'Construindo o futuro através de engenharia de software inovadora, pesquisa em machine learning e soluções DevOps escaláveis.',
      subtitle: 'Apaixonado por criar tecnologia que faz a diferença e mentorar a próxima geração de desenvolvedores.',
      connectButton: 'Vamos Conversar',
      downloadCV: 'Baixar CV'
    },
    contact: {
      title: 'Entre em Contato',
      description: 'Vamos discutir oportunidades, colaborações ou projetos inovadores.',
      workAuth: 'Autorização de Trabalho',
      languages: 'Idiomas',
      location: 'Localização'
    }
  }
}; 