export const profile = {
  name: "Allah-u-Abha Rodrigues",
  title: "Software Engineer & ML Researcher",
  subtitle: "Yale University • 1 Year Internship Experience • Open Source Contributor",
  location: "New Haven, CT",
  email: "allah-u-abha.rodrigues@yale.edu",
  
  bio: "Sophomore at Yale University studying Computer Science and Statistics & Data Science with expertise in full-stack development, machine learning, and DevOps. Passionate about building scalable software solutions and mentoring the next generation of developers through hands-on project-based learning.",
  
  longBio: "Rodrigues is a sophomore at Yale University, studying Computer Science and Statistics & Data Science with a focus on software engineering and machine learning applications. With over a year of internship experience, he has demonstrated expertise in building scalable CI/CD pipelines, mentoring students, and developing impactful software solutions.\n\nAs the Secretary of the Zeta Psi Eta Chapter, Rodrigues has effectively managed organizational communications and facilitated team coordination, showcasing his leadership abilities in collaborative environments.\n\nRodrigues specializes in full-stack development, DevOps optimization, and educational technology. At HapSTR, he transformed deployment processes, reducing release cycles by 97% through innovative Docker-first CI/CD pipelines. His technical expertise spans modern web technologies, cloud infrastructure, and machine learning frameworks.\n\nThrough his mentoring work with Curious Cardinals, he's passionate about making computer science accessible and engaging for middle and high school students, having improved coding proficiency for 15+ students by 85% through personalized, project-based learning approaches.\n\nBeyond professional work, he's deeply committed to social impact technology, having volunteered as a web developer for Plataforma Makobo, creating interactive relief maps that helped 62,000+ displaced families in Cabo Delgado access essential services.\n\nFor collaboration opportunities or networking, connect with him at allah-u-abha.rodrigues@yale.edu.",

  links: {
    email: "mailto:allah-u-abha.rodrigues@yale.edu",
    linkedIn: "https://linkedin.com/in/allah-u-abha-rodrigues",
    github: "https://github.com/allahu-rodrigues",
    portfolio: "https://allah-rodrigues.vercel.app"
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
      title: "Statistical Machine Learning Salary Prediction",
      period: "Nov 2024 - Feb 2025",
      description: "Comprehensive machine learning project predicting developer salaries using 2020 Stack Overflow Developer Survey data with advanced statistical modeling.",
      fullDescription: "This project harnesses the power of statistical machine learning to predict developer salaries using data from the 2020 Stack Overflow Developer Survey. Through rigorous data cleaning, exploratory data analysis, and model selection, we developed a robust prediction model that leverages features like location, experience, education, and tech stacks. The project achieved 20% improvement in prediction accuracy (RMSE) by implementing ensemble methods with Linear Regression and Random Forest algorithms.",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Statistical Analysis", "Random Forest", "Linear Regression"],
      liveUrl: "https://salary-prediction-ml.allahurodrigues.com",
      repoUrl: "https://github.com/allahu-rodrigues/ml-salary-prediction",
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
      featured: true,
      metrics: {
        beneficiaries: "62,000+",
        organizations: "150+",
        coverage: "100%"
      }
    },
    {
      title: "Yale Portfolio Generator",
      period: "Jan 2025 - Feb 2025",
      description: "Automated portfolio generation system for Yale students using Next.js, TypeScript, and modern design principles.",
      fullDescription: "Built a comprehensive portfolio generation platform specifically for Yale University students to showcase their academic achievements, projects, and professional experience. The system features dynamic content management, responsive design, and seamless integration with university systems.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://yale-portfolio-generator.vercel.app",
      repoUrl: "https://github.com/allahu-rodrigues/yale-portfolio-generator",
      images: ["/images/projects/yale-portfolio-1.jpg", "/images/projects/yale-portfolio-2.jpg", "/images/projects/yale-portfolio-3.jpg"],
      category: "Web Development",
      featured: false,
      metrics: {
        users: "500+",
        templates: "12",
        satisfaction: "95%"
      }
    }
  ],

  research: [
    {
      title: "AI-Driven Neural Circuit Mapping",
      institution: "Yale University - Kuan Neuroscience Lab",
      period: "Oct 2023 - Dec 2023",
      description: "Applied machine learning techniques to enhance neural circuit mapping methodologies using webKnossos platform for 3D brain tissue analysis.",
      fullDescription: "Collaborated with Aaron T. Kuan's research team to develop AI-driven methodologies for mapping complex neural circuits in 3D brain tissue images. Utilized advanced circuit-mapping techniques in webKnossos platform to facilitate automated analysis and pattern recognition in neurological data, contributing to better understanding of brain connectivity patterns.",
      tech: ["Python", "Machine Learning", "webKnossos", "3D Data Analysis", "Neural Networks"],
      publications: [],
      status: "Completed"
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
      title: "Building Scalable CI/CD Pipelines: From 2 Days to 45 Minutes",
      excerpt: "How we transformed deployment cycles at HapSTR using Docker, AWS ECS, and modern DevOps practices.",
      date: "March 15, 2025",
      readingTime: "8",
      link: "/blog/scalable-cicd-pipelines",
      tags: ["DevOps", "Docker", "AWS", "CI/CD"]
    },
    {
      title: "Mentoring the Next Generation: Teaching Code with Heart",
      excerpt: "How project-based learning and personalized mentorship transformed 15+ students' coding journey.",
      date: "February 20, 2025", 
      readingTime: "6",
      link: "/blog/mentoring-next-generation",
      tags: ["Education", "Mentoring", "Programming", "Teaching"]
    },
    {
      title: "Machine Learning in Practice: Real-World Salary Predictions",
      excerpt: "Statistical analysis and ML techniques applied to Stack Overflow data for accurate salary predictions.",
      date: "February 28, 2025", 
      readingTime: "12",
      link: "/blog/ml-salary-prediction",
      tags: ["Machine Learning", "Statistics", "Python", "Data Science"]
    },
    {
      title: "From Mozambique to Yale: Technology for Social Good",
      excerpt: "How building relief maps for displaced families shaped my perspective on technology's potential for social impact.",
      date: "December 10, 2024",
      readingTime: "10",
      link: "/blog/technology-social-good",
      tags: ["Social Impact", "Web Development", "Humanitarian Tech"]
    }
  ],

  documentation: [
    {
      title: "CI/CD Best Practices Guide",
      description: "Comprehensive guide to implementing Docker-first CI/CD pipelines with AWS ECS and GitHub Actions.",
      link: "/docs/cicd-best-practices",
      tags: ["DevOps", "Documentation", "Best Practices"]
    },
    {
      title: "Machine Learning Project Workflow",
      description: "End-to-end methodology for building and deploying machine learning models in production environments.",
      link: "/docs/ml-workflow",
      tags: ["Machine Learning", "Best Practices", "Documentation"]
    },
    {
      title: "Modern Web Development Stack",
      description: "Technical guide to building scalable web applications using Next.js, TypeScript, and modern tools.",
      link: "/docs/web-dev-stack",
      tags: ["Web Development", "TypeScript", "Next.js"]
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