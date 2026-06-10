export const profile = {
  name: "Allah-u-Abha Rodrigues",
  title: "Founder, Regilon",
  subtitle: "Yale University • Computer Science & Statistics • Founder, Regilon",
  location: "New Haven, CT",
  email: "allah-u-abha.rodrigues@yale.edu",

  languages: ["English", "Portuguese"],
  workAuthorization: {
    portugal: "EU Work Authorization",
    usa: "US Work Authorization"
  },

  bio: "Founder of Regilon, a property-tax intelligence platform for commercial real estate. Senior at Yale studying Computer Science and Statistics. Building at the intersection of machine learning, document intelligence, and real estate data.",

  longBio: "Allah-u-Abha Rodrigues is a senior at Yale University studying Computer Science and Statistics. He is the Founder of Regilon, a property-tax intelligence platform for commercial real estate portfolios. Regilon uses machine learning, statistical modeling, and document intelligence to help property owners detect likely overassessments, understand potential savings, and prepare stronger evidence before appeal deadlines pass.\n\nThe company is focused on one of the largest recurring expenses in commercial real estate: property taxes, where missed deadlines and inaccurate assessments can quietly reduce net operating income and asset value year after year.\n\nRodrigues began building in real estate with Tenure, a renter-focused lease intelligence platform that helped tenants negotiate renewals using lease analysis, rent benchmarks, tenant-rule context, and generated negotiation strategies. He later pivoted from B2C renter tools to B2B property-tax intelligence after recognizing that the same real-estate data and document-processing work could solve a larger, more recurring owner-side problem.\n\nPreviously, he built Unseen, a personal finance assistant that connected bank and card data to detect subscriptions, forecast taxes, and draft dispute messages. At the Yale Computer Society, Rodrigues works on Yalies.io, a platform used by thousands of Yale students.\n\nAuthorized to work in both Portugal (EU) and the United States. Fluent in English and Portuguese.",

  links: {
    email: "mailto:allah-u-abha.rodrigues@yale.edu",
    linkedIn: "https://linkedin.com/in/allahu-rodrigues",
    github: "https://github.com/AllahuRodrigues",
    portfolio: "https://allahurodrigues.com"
  },

  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "JavaScript/TypeScript", "R", "C", "Java", "SQL"]
    },
    {
      category: "Web Development",
      items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Django"]
    },
    {
      category: "Data Science & ML",
      items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "XGBoost", "Streamlit"]
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "GitHub Actions", "CI/CD", "ECS", "Blue-Green Deploy"]
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Elasticsearch", "Redis"]
    },
    {
      category: "Software Engineering",
      items: ["System Design", "REST APIs", "Testing", "Geospatial (CesiumJS)", "WebSockets"]
    }
  ],

  experience: [
    {
      company: "United Nations Development Programme (UNDP)",
      role: "GRP Fellow — Monitoring, Evaluation & Learning",
      period: "Jun 2026 - Present",
      type: "Fellowship",
      location: "The Hague / Remote",
      description: "Selected as a Governance, Rule of Law and Peacebuilding (GRP) Fellow supporting UNDP's work on monitoring, evaluation, learning, communications, and peacebuilding/local development. Working with the GRP Hub to help strengthen how governance and rule-of-law programs measure impact, communicate results, and translate field evidence into actionable learning across global and country-level initiatives.",
      achievements: [
        "Supported Monitoring, Evaluation & Learning work for governance, rule of law, and peacebuilding initiatives across UNDP's GRP Hub",
        "Contributed to research and synthesis around peacebuilding, local development, civic space, and people-centered justice/security programming",
        "Helped structure feedback and analysis for impact-measurement tools, including indicator frameworks and approaches to evaluating program effectiveness",
        "Applied a technical background in computer science, statistics, and data systems to improve how development programs organize evidence, measure outcomes, and communicate results",
        "Worked across international, cross-functional teams spanning policy, communications, reporting, operations, and program management"
      ],
      tech: ["Monitoring & Evaluation", "Data Analysis", "Impact Measurement", "Research Synthesis", "Policy Analysis", "Communications", "Excel", "Python", "Statistics"],
      links: {
        company: "https://www.undp.org"
      }
    },
    {
      company: "Regilon",
      role: "Founder",
      period: "2025 - Present",
      type: "Founder",
      location: "New Haven, CT",
      description: "Building Regilon, a property-tax intelligence platform for commercial real estate portfolios. Uses machine learning, statistical modeling, and document intelligence to detect overassessments, estimate potential savings, and surface evidence before appeal deadlines. Focused on property taxes — one of the largest recurring CRE expenses — where missed deadlines and inaccurate assessments quietly erode NOI and asset value.",
      achievements: [
        "Built ML pipeline combining county assessor rolls, CoStar, MLS, and Regrid data to score overassessment likelihood across a portfolio",
        "Designed deterministic comparable-sale engine: opportunity scores derived from comp strength, deadline urgency, and data completeness",
        "Shipped automated deadline tracker monitoring appeal windows across CA, TX, NY, and CT with supplemental-assessment flagging",
        "Architected evidence-packet generation workflow: source-cited PDFs ready for county appeal boards in 2–3 business days"
      ],
      tech: ["Python", "Machine Learning", "Next.js", "TypeScript", "PostgreSQL", "Document Intelligence", "Geospatial APIs"],
      links: {
        company: "http://regilon.com"
      }
    },
    {
      company: "Yale Computer Society",
      role: "Software Engineer — Yalies.io",
      period: "Jun 2025 - Present",
      type: "Part-time",
      location: "New Haven, CT • On-site",
      description: "Software engineer on the Yalies.io team, one of Yale's largest student-run platforms serving 30,000+ students and alumni. Expanded backend search and scalability to reliably handle 3,000+ daily requests.",
      achievements: [
        "Expanded backend and search to serve 3,000+ daily requests for 30,000+ users via paginated endpoints, request-level caching, and monitoring (Next.js/Node + Elasticsearch)",
        "Improved directory and profile experience by shipping query filters, profile views, and contributor docs",
        "Reduced dev ramp-up time via concise API specs and runbooks"
      ],
      tech: ["Next.js", "Node.js", "Elasticsearch", "TypeScript", "REST APIs"],
      links: {
        company: "https://yalies.io"
      }
    },
    {
      company: "Unlock Labs",
      role: "Machine Learning Engineer",
      period: "Jun 2025 - Aug 2025",
      type: "Contract",
      location: "Charlotte, NC • Remote",
      description: "Built a Streamlit-on-AWS analytics engine for a $32M DTC brand, reducing marketing spend by 2% through demand forecasting, Monte Carlo scenarios, and channel-reallocation recommendations.",
      achievements: [
        "Reduced marketing spend by 2% for a $32M DTC brand by building a Streamlit-on-AWS analytics engine with Random Forest demand forecasts and Monte Carlo scenario modeling",
        "Packaged forecasts, scenario controls, and KPI tracking in a single dashboard with automated data refresh and audit logs",
        "Improved leadership decision speed by surfacing channel reallocation recommendations with confidence intervals"
      ],
      tech: ["Python", "scikit-learn", "Random Forest", "Monte Carlo", "AWS", "Streamlit", "Pandas"],
      links: {
        company: "https://unlinklabs.com"
      }
    },
    {
      company: "HapSTR",
      role: "Software Engineer",
      period: "May 2025 - Aug 2025",
      type: "Internship",
      location: "Los Angeles, CA • Remote",
      description: "Scaled a photorealistic 3D real-estate web app from ~200 to 1,000+ users. Delivered sub-200ms property lookups and increased listing-detail clicks by 35%.",
      achievements: [
        "Scaled photorealistic 3D real-estate app from ~200 to 1,000+ users by integrating CesiumJS with Google Photorealistic 3D Tiles in Next.js/TypeScript and adding Street View handoff + click-to-building fly-to",
        "Delivered sub-200ms property lookups by designing cached geospatial endpoints fusing Zillow CSVs, ATTOM API data, and Microsoft Building Footprints with EPSG:4326 mapping and Haversine search",
        "Increased listing-detail clicks by 35% and cut time-to-first-insight by 40% by prototyping Interior Transparency using PyTorch + Hugging Face to infer floor layouts and render 3D interior previews",
        "Reduced release cycle from 2 days to 45 min by building a Docker-first CI/CD pipeline (GitHub Actions → AWS ECS) with 88% unit-test coverage and blue-green deployment"
      ],
      tech: ["Next.js", "TypeScript", "CesiumJS", "Google 3D Tiles", "PyTorch", "Python", "Docker", "AWS ECS", "GitHub Actions"],
      links: {
        company: "https://hapstr.com"
      }
    },
    {
      company: "Curious Cardinals",
      role: "Software & Machine Learning Engineer Mentor",
      period: "Apr 2025 - Present",
      type: "Part-time",
      location: "San Francisco, CA • Remote",
      description: "Lead 1:1 and group mentoring sessions for middle and high school students in software development, robotics, Python, and AI fundamentals. Design and teach hands-on projects to make computer science accessible.",
      achievements: [
        "Delivered a full-stack CRUD app in Java/Spring Boot by mentoring a cohort of 4 seniors on OOP design, testing, and CI",
        "Built an NBA fantasy predictor to AUC ≈ 0.95 with a junior mentee by integrating 5 Kaggle datasets, XGBoost tuning, and a Streamlit app for lineup exploration",
        "Designed hands-on projects spanning game development, Arduino automation, and Python robotics systems"
      ],
      tech: ["Python", "Java", "Spring Boot", "XGBoost", "Streamlit", "Arduino", "Scratch"],
      links: {
        company: "https://curiouscardinals.com"
      }
    }
  ],

  education: [
    {
      institution: "Yale University",
      degree: "Bachelor of Science",
      field: "Computer Science & Statistics and Data Science",
      period: "Aug 2023 - May 2027",
      status: "Senior",
      gpa: 3.72,
      activities: [
        "Software Developer, Yale Computer Society (Yalies.io)",
        "Vice President, Zeta Psi Fraternity (Eta Chapter)",
        "Flanker, Yale Men's Rugby (BD Team)",
        "Member, BlackGen Capital"
      ],
      coursework: [
        "Probability Theory",
        "Theory of Statistics",
        "Linear Algebra",
        "Multivariable Calculus",
        "Data Structures and Programming Techniques",
        "Discrete Mathematics",
        "Full-Stack Web Development",
        "Systems Programming"
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
        "Thirds Tennis Team",
        "Troutbeck Symposium Research Participant"
      ]
    }
  ],

  projects: [
    {
      title: "Regilon",
      period: "2025 - Present",
      description: "Property-tax intelligence platform for commercial real estate portfolios. Uses machine learning and document intelligence to detect overassessments and surface evidence before appeal deadlines — addressing one of the largest recurring costs in CRE.",
      fullDescription: "Regilon is a property-tax intelligence platform for commercial real estate portfolios. It uses machine learning, statistical modeling, and document intelligence to help property owners detect likely overassessments, estimate potential savings, and prepare stronger evidence before appeal deadlines pass. The platform combines county assessor rolls, CoStar, MLS, Regrid, and public deed records to score properties by overassessment likelihood and generate source-cited evidence packets for county appeal boards. Active in California, Texas, New York, and Connecticut.",
      tech: ["Python", "Machine Learning", "Next.js", "TypeScript", "PostgreSQL", "Document Intelligence", "Geospatial APIs", "County Assessor Data"],
      liveUrl: "http://regilon.com",
      repoUrl: "https://github.com/AllahuRodrigues",
      images: [],
      category: "PropTech",
      featured: true,
      metrics: {
        states: "4",
        avgSavings: "$246K",
        automation: "92%"
      }
    },
    {
      title: "Tenure",
      period: "2024 - 2025",
      description: "Renter-focused lease intelligence platform. Helped tenants negotiate renewals using lease parsing, market rent benchmarks, state-specific tenant-rule context, and a generated negotiation strategy — with landlord-ready email drafts.",
      fullDescription: "Tenure is a renter-focused lease intelligence platform that helps tenants negotiate renewals. Upload a lease; Tenure benchmarks nearby asking rents, scores leverage based on comparable spread, renewal timing, market slack, and tenant protections, then returns a clear recommendation: negotiate or accept, what number to anchor, and landlord-ready language to send today. Built after recognizing that most renters accept increases they could negotiate, for lack of structured evidence. Later pivoted to Regilon after recognizing the same data and document-processing infrastructure could solve a larger B2B problem on the owner side.",
      tech: ["Next.js", "TypeScript", "React", "Python", "Lease Parsing", "Market Data APIs", "AI/LLM", "PDF Generation"],
      liveUrl: "https://tenure-kappa.vercel.app",
      repoUrl: "https://github.com/AllahuRodrigues",
      images: [],
      category: "PropTech",
      featured: true,
      metrics: {
        outcome: "~$128/mo",
        success: "~62%",
        range: "$80–$250/mo"
      }
    },
    {
      title: "Statistical Salary Predictor",
      period: "Nov 2024 - Feb 2025",
      description: "ML model predicting software developer salaries from 60k+ Stack Overflow survey responses. Cut RMSE by 20% vs. baseline, reached 0.91 AUC on band classification, and deployed a live Streamlit dashboard used by 50+ Yale students.",
      fullDescription: "A machine learning pipeline predicting software developer salaries globally using Stack Overflow Developer Survey data (2020–2024). Trained on 60k+ responses with k-fold cross-validation, targeted feature engineering (location, experience, education, tech stack), and band classification. Cut RMSE by 20% vs. baseline and reached 0.91 AUC. Deployed as a Streamlit dashboard backed by PostgreSQL, enabling 50+ Yale users to run live salary scenarios and compare compensation ranges.",
      tech: ["Python", "scikit-learn", "Pandas", "NumPy", "Streamlit", "PostgreSQL", "Random Forest", "k-fold CV"],
      liveUrl: "https://salarypredictionml.streamlit.app",
      repoUrl: "https://github.com/AllahuRodrigues/SalaryPredictionML",
      images: [],
      category: "Machine Learning",
      featured: true,
      metrics: {
        rmseImprovement: "20%",
        auc: "0.91",
        dataPoints: "60k+"
      }
    },
    {
      title: "Plataforma Makobo Relief Map",
      period: "Jul 2021 - Jul 2022",
      description: "Interactive web map helping ~62,000 people displaced in Cabo Delgado access medical assistance, necessities, and employment through a network of volunteer and public health organizations.",
      fullDescription: "Developed an interactive web mapping application for Plataforma Makobo to help nearly 62,000 people displaced in Cabo Delgado due to terrorist attacks. The platform connects displaced families with volunteer and public health organizations providing medical assistance, necessities, and employment opportunities. Built with modern web technologies and geospatial data visualization.",
      tech: ["JavaScript", "Leaflet.js", "HTML/CSS", "GeoJSON", "Web Mapping"],
      liveUrl: "https://plataformamakobo.org/map",
      repoUrl: "https://github.com/plataforma-makobo/relief-map",
      images: [],
      category: "Social Impact",
      featured: false,
      metrics: {
        beneficiaries: "62,000+",
        organizations: "150+",
        region: "Cabo Delgado"
      }
    }
  ],

  research: [
    {
      title: "AI-Driven Neural Circuit Mapping",
      slug: "neural-circuit-mapping",
      institution: "Yale University — Kuan Neuroscience Lab",
      period: "Oct 2023 - Dec 2023",
      description: "Applied circuit-mapping techniques in webKnossos to facilitate AI-driven mapping and analysis of complex 3D brain tissue images, collaborating with Aaron T. Kuan's research team.",
      fullDescription: "Collaborated with Aaron T. Kuan's research team at Yale's Kuan Neuroscience Lab to develop methodologies for mapping complex neural circuits in 3D brain tissue images. Applied circuit-mapping techniques in webKnossos to facilitate automated analysis and pattern recognition in neurological data.",
      tech: ["Python", "Machine Learning", "webKnossos", "3D Data Analysis"],
      publications: [],
      status: "Completed",
      category: "Neuroscience"
    },
    {
      title: "Statistical Machine Learning — Salary Prediction",
      slug: "ml-software-engineering",
      institution: "Yale University",
      period: "Nov 2024 - Feb 2025",
      description: "Applied statistical machine learning to predict developer salaries from Stack Overflow survey data (60k+ responses). Rigorous data cleaning, model selection, and k-fold cross-validation to reach 0.91 AUC.",
      fullDescription: "This project harnesses statistical machine learning to predict developer salaries using Stack Overflow Developer Survey data (2020–2024). Through data cleaning, exploratory data analysis, and model selection, developed a prediction model leveraging location, experience, education, and tech stacks. Reached 0.91 AUC on band classification and cut RMSE by 20% vs. baseline.",
      tech: ["Python", "scikit-learn", "Statistical Analysis", "Pandas", "k-fold CV"],
      publications: [],
      status: "Completed",
      category: "Machine Learning"
    }
  ],

  volunteering: [
    {
      organization: "Plataforma Makobo",
      role: "Web Developer",
      period: "Jul 2021 - Jul 2022",
      description: "Developed interactive mapping platform to help displaced families in Cabo Delgado access essential services and support organizations.",
      impact: "Helped connect 62,000+ displaced individuals with aid organizations across Cabo Delgado",
      category: "Social Services"
    }
  ],

  achievements: [
    {
      title: "Yale Hacker House — 2026 San Francisco Cohort",
      organization: "Yale Hacker House",
      period: "Summer 2026",
      description: "Selected for Yale's first live-in founder residency in Nob Hill, San Francisco — 15 founders, 10 weeks, fully funded housing and office space. Backed by Caffeinated Capital, Perkins Coie, and HSBC Innovation Banking."
    },
    {
      title: "Vice President, Zeta Psi Fraternity (Eta Chapter)",
      organization: "Yale University",
      period: "2024 - Present",
      description: "Leadership role managing organizational communications and facilitating coordination for one of Yale's historic fraternities."
    },
    {
      title: "GPA 3.72 / 4.00",
      organization: "Yale University",
      period: "2023 - Present",
      description: "Maintained 3.72 GPA while founding and building Regilon, leading Yalies.io development, and completing internships at HapSTR and Unlock Labs."
    }
  ],

  interests: [
    "Proptech & Real Estate Intelligence",
    "Machine Learning & Statistical Modeling",
    "Full-Stack Product Development",
    "Document Intelligence & Data Extraction",
    "B2B SaaS & Founder-led Sales",
    "Rugby & Athletics",
    "Computer Science Education & Mentorship",
    "Social Impact Technology"
  ],

  blogPosts: [
    {
      title: "From Tenure to Regilon: Pivoting from B2C to B2B in PropTech",
      excerpt: "How building a renter tool taught me that the same data and document-processing infrastructure could solve a larger, more recurring problem on the owner side — property taxes.",
      date: "June 2026",
      readingTime: "10",
      link: "/blog/building-flowlens-saas-mvp",
      tags: ["PropTech", "Entrepreneurship", "Product", "Real Estate"]
    },
    {
      title: "Machine Learning for Salary Prediction: A Deep Dive",
      excerpt: "How I built a statistical ML model to predict software developer salaries from 60k+ Stack Overflow survey responses, reaching 0.91 AUC with k-fold CV and targeted feature engineering.",
      date: "February 2025",
      readingTime: "12",
      link: "/blog/machine-learning-salary-prediction",
      tags: ["Machine Learning", "Python", "Data Science", "Statistics"]
    },
    {
      title: "Mentoring the Next Generation: Teaching Code with Heart",
      excerpt: "My experience mentoring students at Curious Cardinals and how project-based learning transforms coding education — from NBA fantasy predictors to Spring Boot CRUD apps.",
      date: "February 2025",
      readingTime: "8",
      link: "/blog/mentoring-next-generation",
      tags: ["Education", "Mentoring", "Programming", "Teaching"]
    },
    {
      title: "Building Scalable CI/CD Pipelines: From 2 Days to 45 Minutes",
      excerpt: "How I transformed deployment cycles at HapSTR using Docker, AWS ECS, and blue-green deployment — achieving 88% test coverage and zero-downtime releases.",
      date: "August 2025",
      readingTime: "8",
      link: "/blog/scalable-cicd-pipelines",
      tags: ["DevOps", "Docker", "AWS", "CI/CD"]
    }
  ],

  documentation: [
    {
      title: "Property Tax Appeal: Data & Evidence Guide",
      slug: "cicd-best-practices",
      description: "How Regilon uses comparable sales, county assessor data, and deadline tracking to build evidence packets for commercial property tax appeals.",
      fullDescription: "A walkthrough of Regilon's evidence methodology: pulling county assessor rolls, finding comparable sales via CoStar and MLS, computing overassessment gaps with deterministic math, and packaging everything into a source-cited PDF ready for appeal boards. Covers deadline monitoring across CA, TX, NY, and CT.",
      sections: [
        "County Assessor Data Sources",
        "Comparable Sales Methodology",
        "Overassessment Scoring",
        "Deadline Monitoring",
        "Evidence Packet Structure"
      ],
      link: "/docs/cicd-best-practices",
      tags: ["PropTech", "Documentation", "Real Estate", "Data"],
      category: "PropTech"
    },
    {
      title: "Machine Learning Project Workflow",
      slug: "ml-workflow",
      description: "End-to-end methodology for building and deploying machine learning models — from data collection to production deployment.",
      fullDescription: "Complete guide to the ML project lifecycle from data collection to production deployment. Covers data preprocessing, model selection, evaluation metrics, deployment strategies, and monitoring. Includes practical examples from the Salary Prediction project.",
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
      description: "Technical guide to building scalable web applications using Next.js, TypeScript, and modern tooling.",
      fullDescription: "Comprehensive guide to modern web development practices using Next.js, TypeScript, and contemporary tools. Covers architecture patterns, performance optimization, security best practices, and deployment strategies.",
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
  'Founder, Regilon',
  'Software Engineer',
  'ML Engineer',
  'Full-Stack Developer',
  'Yale CS & Statistics'
];

export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      portfolio: 'Projects',
      research: 'Research',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      availableText: 'Available for opportunities',
      description: 'Building property-tax intelligence for commercial real estate and full-stack products at the intersection of ML, document intelligence, and real estate data.',
      subtitle: 'Founder of Regilon. Senior at Yale, CS & Statistics.',
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
      portfolio: 'Projetos',
      research: 'Pesquisa',
      blog: 'Blog',
      contact: 'Contato'
    },
    hero: {
      availableText: 'Disponível para oportunidades',
      description: 'Construindo inteligência de imposto sobre propriedades e produtos full-stack na interseção de ML, inteligência documental e dados imobiliários.',
      subtitle: 'Fundador da Regilon. Sênior em Yale, Ciência da Computação e Estatística.',
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
