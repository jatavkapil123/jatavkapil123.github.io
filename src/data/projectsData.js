export const projectsData = [
  {
    id: 1,
    slug: "three-tier-blogging-aws",
    image: "project1.png",
    title: "Wanderlust: End-to-End MERN Stack Deployment on AWS EKS using DevSecOps + GitOps",
    description: "A real-world MERN travel blog application deployed with complete CI/CD pipeline using DevSecOps and GitOps practices. Features Jenkins, Kubernetes, ArgoCD, and comprehensive monitoring on AWS EKS.",
    duration: "15 April 2025 - 10 July 2025",
    techStack: "GitHub (Code), Docker (Containerization), Jenkins (CI), OWASP (Dependency Check), SonarQube (Quality), Trivy (Filesystem Scan), ArgoCD (CD), Redis (Caching), AWS EKS (Kubernetes), Helm (Monitoring using Grafana and Prometheus), Terraform, Ansible, Node.js, React, MongoDB",
    overview: "Wanderlust is a MERN stack travel blog website deployed using enterprise-grade DevSecOps practices. This project demonstrates how tech companies deploy applications with complete CI/CD automation, security scanning, and GitOps workflows on AWS EKS.",
    detailedDescription: `
      Wanderlust is a simple MERN travel blog website that allows users to explore, share, and manage travel stories. But instead of stopping at coding, this project focuses on production deployment with modern CI/CD setup.

      🚀 **Complete DevSecOps Pipeline Flow:**
      1️⃣ Developer pushes code → GitHub
      2️⃣ Jenkins CI Pipeline → Builds Docker image, runs tests, scans code & dependencies
      3️⃣ Trivy & OWASP → Scan for vulnerabilities
      4️⃣ SonarQube → Static code analysis & quality gates
      5️⃣ Docker Hub → Pushes built image
      6️⃣ ArgoCD CD Pipeline → Syncs GitOps repo with Kubernetes cluster
      7️⃣ AWS EKS → Deploys containers using Helm charts
      8️⃣ Prometheus + Grafana → Monitors workloads

      This project is perfect for DevOps/Cloud enthusiasts, developers wanting to master Jenkins, Kubernetes, ArgoCD, and AWS, and anyone upskilling in DevSecOps practices.

      **Infrastructure Setup:**
      - Master Node (Jenkins + eksctl + Docker): t2.large instance
      - Worker Node (Jenkins Agent + Docker): t2.large instance
      - AWS EKS cluster with managed node groups
      - Complete monitoring stack with Prometheus & Grafana
    `,
    architecture: {
      frontend: "React + Tailwind CSS travel blog interface deployed on EKS",
      backend: "Express.js REST API with MongoDB integration on Kubernetes",
      database: "MongoDB for travel stories and Redis for caching",
      infrastructure: "AWS EKS cluster (v1.30) with managed node groups in us-west-1",
      cicd: "Jenkins CI pipeline with ArgoCD GitOps deployment",
      monitoring: "Prometheus + Grafana stack with custom dashboards"
    },
    keyFeatures: [
      "Complete MERN stack travel blog application",
      "Jenkins CI pipeline with automated testing and builds",
      "DevSecOps integration (OWASP, SonarQube, Trivy scanning)",
      "GitOps deployment with ArgoCD auto-sync",
      "AWS EKS cluster orchestration with Helm charts",
      "Comprehensive monitoring (Prometheus + Grafana)",
      "Redis caching for performance optimization",
      "Email notifications for pipeline status",
      "Auto-healing deployments with drift detection",
      "Production-ready security and quality gates"
    ],
    responsibilities: [
      "Developed complete MERN stack travel blog application with React frontend and Express backend",
      "Set up AWS EKS cluster (v1.30) using eksctl with managed node groups in us-west-1 region",
      "Configured Jenkins master-worker architecture on t2.large EC2 instances with Docker integration",
      "Built comprehensive CI pipeline: Code → Build → Test → Security Scan → Docker Push",
      "Integrated DevSecOps tools: OWASP dependency check, SonarQube quality gates, Trivy vulnerability scanning",
      "Implemented GitOps workflow with ArgoCD for automated Kubernetes deployments and drift detection",
      "Deployed application stack using Kubernetes manifests: Frontend, Backend, MongoDB, Redis",
      "Set up monitoring infrastructure with Helm: Prometheus for metrics, Grafana for visualization",
      "Configured email notifications for CI/CD pipeline status and automated cluster cleanup procedures",
      "Created production-ready deployment with auto-scaling, health checks, and zero-downtime updates"
    ],
    challenges: [
      {
        challenge: "Integrating multiple DevSecOps tools in CI/CD pipeline",
        solution: "Created sequential Jenkins pipeline stages with proper error handling and quality gates for OWASP, SonarQube, and Trivy scans"
      },
      {
        challenge: "Managing Kubernetes deployments across multiple services (Frontend, Backend, MongoDB, Redis)",
        solution: "Implemented GitOps with ArgoCD for declarative deployments, auto-sync, and self-healing capabilities"
      },
      {
        challenge: "Setting up comprehensive monitoring for MERN stack on Kubernetes",
        solution: "Deployed Prometheus + Grafana using Helm charts with custom dashboards for application and cluster metrics"
      },
      {
        challenge: "Ensuring production-ready security and performance",
        solution: "Integrated Redis caching, implemented proper resource limits, and configured automated vulnerability scanning at every stage"
      }
    ],
    technologies: ["GitHub", "Docker", "Jenkins", "OWASP", "SonarQube", "Trivy", "ArgoCD", "Redis", "AWS EKS", "Helm", "Prometheus", "Grafana", "Terraform", "Ansible", "Node.js", "React", "MongoDB", "Kubernetes"],
    liveUrl: "#",
    githubUrl: "https://github.com/jatavkapil123",
    blogUrl: "https://medium.com/@kapiljatav4991/wanderlust-your-ultimate-travel-blog-with-mern-devsecops-fa6bd65e8c42",
    featured: true,
    category: "DevOps",
    metrics: {
      pipelineAutomation: "100% automated CI/CD from code to production",
      securityScanning: "Multi-layer security: OWASP + SonarQube + Trivy",
      deploymentStrategy: "GitOps with auto-sync and self-healing",
      monitoring: "Real-time metrics with Prometheus + Grafana dashboards",
      infrastructure: "Production-ready EKS cluster with managed scaling",
      performance: "Redis caching + optimized container orchestration"
    }
  },
  {
    id: 2,
    slug: "azure-devops-aks-pipeline",
    image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=600&h=400&fit=crop",
    title: "CI/CD Pipeline Deployment with Azure DevOps & AKS",
    description: "Designed and deployed a containerized, multi-service voting application using Azure DevOps CI/CD pipelines and Azure Kubernetes Service (AKS) for scalable orchestration.",
    duration: "Ongoing Project",
    techStack: "Azure DevOps, AKS, Docker, ACR, Python, .NET, Node.js, Redis, PostgreSQL, YAML, Helm",
    overview: "A comprehensive Azure-based DevOps solution demonstrating enterprise-grade CI/CD practices with containerized microservices architecture. This project showcases the power of Azure DevOps for managing complex multi-service applications.",
    detailedDescription: `
      This project implements a complete DevOps workflow using Microsoft Azure services to deploy a distributed voting application. The application consists of multiple microservices written in different technologies, demonstrating polyglot development practices.

      The solution leverages Azure Kubernetes Service (AKS) for container orchestration, Azure Container Registry (ACR) for image management, and Azure DevOps for comprehensive CI/CD pipeline management. The architecture supports horizontal scaling and high availability.

      Key aspects include automated testing, security scanning, infrastructure provisioning, and deployment automation across multiple environments with approval gates and rollback capabilities.
    `,
    architecture: {
      frontend: "Python Flask web application for voting interface",
      worker: ".NET Core worker service for vote processing",
      result: "Node.js application for displaying results",
      storage: "Redis for temporary data and PostgreSQL for persistent storage"
    },
    keyFeatures: [
      "Multi-service containerized application",
      "Azure DevOps CI/CD pipelines",
      "Azure Kubernetes Service (AKS) orchestration",
      "Azure Container Registry integration",
      "Helm charts for deployment management",
      "Automated testing and quality gates",
      "Multi-environment deployment strategy",
      "Infrastructure as Code with ARM templates"
    ],
    responsibilities: [
      "Implemented CI pipelines in Azure DevOps to build, test, and containerize services (Python frontend, .NET worker, Node.js result UI).",
      "Used Docker for containerization and pushed images to Azure Container Registry (ACR).",
      "Provisioned scalable AKS with VM Scale Sets; deployed apps using YAML and Helm.",
      "Automated end-to-end deployment with Azure DevOps CD pipeline, achieving continuous delivery to production on AKS.",
      "Configured Azure Monitor and Application Insights for comprehensive observability.",
      "Implemented automated testing strategies including unit, integration, and end-to-end tests.",
      "Set up branch policies and pull request workflows for code quality assurance."
    ],
    challenges: [
      {
        challenge: "Managing dependencies between microservices",
        solution: "Implemented service mesh with proper health checks and dependency management"
      },
      {
        challenge: "Coordinating deployments across multiple services",
        solution: "Used Helm charts with dependency management and staged deployment approach"
      },
      {
        challenge: "Ensuring consistent environments across dev/staging/prod",
        solution: "Implemented Infrastructure as Code with ARM templates and environment-specific configurations"
      }
    ],
    technologies: ["Azure DevOps", "AKS", "Docker", "ACR", "Python", ".NET", "Node.js", "Redis", "PostgreSQL", "YAML", "Helm", "VM Scale Sets", "CI/CD", "ARM Templates"],
    liveUrl: "#",
    githubUrl: "https://github.com/jatavkapil123",
    featured: true,
    category: "Cloud",
    metrics: {
      buildTime: "Reduced build time by 60%",
      deploymentFrequency: "Daily deployments achieved",
      leadTime: "Feature to production in <2 hours",
      reliability: "99.5% deployment success rate"
    }
  },
  {
    id: 3,
    slug: "azure-chatbot-ai",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    title: "Azure Chatbot with AI Services",
    description: "Intelligent chatbot built using Azure AI services with natural language processing capabilities and seamless user interaction.",
    duration: "3 months",
    techStack: "Azure AI, Bot Framework, Node.js, NLP, Cognitive Services",
    overview: "An intelligent conversational AI solution leveraging Azure's cognitive services to provide natural language understanding and automated customer support capabilities.",
    detailedDescription: `
      This project demonstrates the implementation of a sophisticated chatbot using Microsoft Azure's AI and cognitive services. The bot is designed to handle customer inquiries, provide automated support, and integrate with existing business systems.

      The solution incorporates natural language processing, sentiment analysis, and machine learning capabilities to provide contextual and intelligent responses. The bot can handle multiple conversation flows and maintain context across interactions.

      Integration with Azure Bot Framework enables deployment across multiple channels including web, Microsoft Teams, and mobile applications.
    `,
    architecture: {
      core: "Azure Bot Framework for conversation management",
      ai: "Azure Cognitive Services for NLP and understanding",
      backend: "Node.js application for business logic",
      storage: "Azure Cosmos DB for conversation history"
    },
    keyFeatures: [
      "Natural language understanding with LUIS",
      "Multi-channel deployment capability",
      "Sentiment analysis and emotion detection",
      "Integration with business systems via APIs",
      "Conversation flow management",
      "Analytics and reporting dashboard",
      "Multilingual support",
      "Continuous learning and improvement"
    ],
    responsibilities: [
      "Designed conversation flows and user experience patterns",
      "Implemented natural language processing using Azure LUIS",
      "Integrated with Azure Cognitive Services for enhanced AI capabilities",
      "Developed custom middleware for business logic integration",
      "Set up analytics and monitoring for bot performance",
      "Implemented security and compliance measures for data protection"
    ],
    challenges: [
      {
        challenge: "Understanding user intent with high accuracy",
        solution: "Implemented comprehensive training data sets and continuous model improvement"
      },
      {
        challenge: "Maintaining conversation context across interactions",
        solution: "Designed state management system with Azure Cosmos DB for persistence"
      }
    ],
    technologies: ["Azure AI", "Bot Framework", "Node.js", "NLP", "LUIS", "Cognitive Services", "Cosmos DB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    category: "AI/ML",
    metrics: {
      accuracy: "95% intent recognition accuracy",
      responseTime: "Average response time <500ms",
      satisfaction: "4.5/5 user satisfaction score",
      automation: "80% of queries handled automatically"
    }
  },
  {
    id: 4,
    slug: "devops-portfolio-live",
    image: "project4.png",
    title: "Live DevOps Portfolio - Full-Stack with Docker & Kubernetes Deployment",
    description: "Production-ready DevOps portfolio website built with React/Vite, featuring Docker containerization, Kubernetes orchestration, CI/CD automation, and comprehensive monitoring stack.",
    duration: "December 2024 - January 2025",
    techStack: "React, Vite, Docker, Kubernetes, Jenkins, GitHub Actions, Nginx, Bootstrap, EmailJS, Git, SSH, Multi-stage Builds, Container Orchestration",
    overview: "A comprehensive DevOps portfolio project demonstrating full-stack development, containerization, orchestration, and deployment automation. This live project showcases real-world DevOps practices from development to production deployment.",
    detailedDescription: `
      This is my live DevOps portfolio website that demonstrates end-to-end DevOps practices and modern web development. The project started as a React application and evolved into a complete DevOps showcase with containerization, orchestration, and automation.

      🚀 **Complete DevOps Workflow Implemented:**
      1️⃣ **Development**: Built modern React portfolio with Vite for optimal performance
      2️⃣ **Containerization**: Multi-stage Docker builds with Alpine Linux for production optimization
      3️⃣ **Orchestration**: Kubernetes deployment with comprehensive YAML manifests
      4️⃣ **CI/CD**: Automated pipelines with GitHub Actions and Jenkins integration
      5️⃣ **Monitoring**: Health checks, logging, and performance monitoring
      6️⃣ **Security**: SSH authentication, secure container practices, and vulnerability scanning
      7️⃣ **Scalability**: Horizontal Pod Autoscaler (HPA) and load balancing configuration

      **Real-World Problems Solved:**
      - Git authentication issues with GitHub (solved using SSH keys)
      - Docker multi-stage build optimization for production
      - Kubernetes resource management and scaling
      - Email service integration with EmailJS
      - Responsive design across all devices
      - Performance optimization with Nginx reverse proxy

      This project represents a complete DevOps engineer's toolkit in action, from code to production deployment.
    `,
    architecture: {
      frontend: "React 18 + Vite with Bootstrap 5 for responsive UI/UX",
      containerization: "Multi-stage Docker builds (Node.js build + Nginx production)",
      orchestration: "Kubernetes cluster with deployments, services, ingress, and HPA",
      cicd: "GitHub Actions + Jenkins for automated testing and deployment",
      monitoring: "Kubernetes health checks, logging, and performance metrics",
      infrastructure: "Production-ready with load balancing and auto-scaling"
    },
    keyFeatures: [
      "Complete DevOps portfolio showcasing professional experience and projects",
      "Multi-stage Docker containerization with Alpine Linux optimization",
      "Kubernetes deployment with comprehensive YAML manifests (Deployment, Service, Ingress, HPA)",
      "Automated CI/CD pipeline with GitHub Actions and Jenkins integration",
      "Professional email contact system with EmailJS integration",
      "Dark/Light theme switching with CSS custom properties",
      "Responsive design optimized for all devices and screen sizes",
      "Interactive project showcase with detailed case studies",
      "Professional experience timeline with achievements and metrics",
      "Certifications display with verification links",
      "Social media integration and professional networking links",
      "Performance-optimized with Nginx reverse proxy and caching",
      "SEO-friendly structure with meta tags and semantic HTML",
      "Accessibility compliance with ARIA labels and keyboard navigation"
    ],
    responsibilities: [
      "**Full-Stack Development**: Built complete React portfolio with modern hooks, context API, and component architecture",
      "**DevOps Implementation**: Designed and implemented end-to-end DevOps workflow from development to production",
      "**Containerization**: Created multi-stage Dockerfiles with build optimization and security best practices",
      "**Kubernetes Orchestration**: Developed comprehensive K8s manifests including deployments, services, ingress, and HPA",
      "**CI/CD Automation**: Set up automated pipelines with GitHub Actions for testing, building, and deployment",
      "**Infrastructure Management**: Configured production-ready infrastructure with load balancing and auto-scaling",
      "**Security Implementation**: Implemented SSH authentication, secure container practices, and vulnerability scanning",
      "**Performance Optimization**: Optimized application performance with Nginx caching, compression, and CDN integration",
      "**Monitoring & Logging**: Set up comprehensive monitoring with health checks and performance metrics",
      "**Documentation**: Created detailed documentation for deployment, scaling, and maintenance procedures"
    ],
    challenges: [
      {
        challenge: "GitHub Authentication Failure - 'Invalid username or token' error during git push operations",
        solution: "Implemented SSH key-based authentication by generating ed25519 keys, adding to GitHub account, and configuring Git to use SSH instead of HTTPS. This provided secure, password-free authentication for all Git operations."
      },
      {
        challenge: "Docker Multi-stage Build Optimization - Large image sizes affecting deployment speed",
        solution: "Implemented multi-stage Docker builds using Node.js Alpine for build stage and Nginx Alpine for production, reducing final image size by 70% and improving deployment speed significantly."
      },
      {
        challenge: "Kubernetes Resource Management - Proper scaling and resource allocation for production workloads",
        solution: "Configured Horizontal Pod Autoscaler (HPA) with CPU/memory thresholds, implemented resource requests/limits, and set up proper health checks for reliable scaling and self-healing."
      },
      {
        challenge: "Email Service Integration - Contact form functionality without backend server",
        solution: "Integrated EmailJS service with proper form validation, error handling, and user feedback. Configured email templates and implemented rate limiting for security."
      },
      {
        challenge: "Clean Git History - Removing previous commit history to establish ownership",
        solution: "Performed complete Git history reset by removing .git directory, reinitializing repository, and force-pushing clean history with proper authorship and professional commit messages."
      },
      {
        challenge: "Cross-browser Compatibility - Ensuring consistent experience across different browsers and devices",
        solution: "Implemented CSS custom properties for theming, used Bootstrap for responsive design, and added proper vendor prefixes for cross-browser compatibility."
      }
    ],
    technologies: [
      "React", "Vite", "JavaScript", "HTML5", "CSS3", "Bootstrap 5",
      "Docker", "Multi-stage Builds", "Alpine Linux", "Nginx",
      "Kubernetes", "YAML", "Deployments", "Services", "Ingress", "HPA",
      "GitHub Actions", "Jenkins", "CI/CD", "Git", "SSH",
      "EmailJS", "Form Validation", "Responsive Design",
      "Performance Optimization", "SEO", "Accessibility"
    ],
    liveUrl: "http://localhost:3000",
    githubUrl: "https://github.com/jatavkapil123/Kapil-portfolio",
    blogUrl: "https://medium.com/@kapiljatav4991",
    featured: true,
    category: "DevOps",
    metrics: {
      containerOptimization: "70% reduction in Docker image size with multi-stage builds",
      deploymentAutomation: "100% automated CI/CD from code commit to production",
      scalability: "Auto-scaling configured with HPA for dynamic resource management",
      performance: "95+ Lighthouse performance score with Nginx optimization",
      security: "SSH-based authentication and secure container practices implemented",
      monitoring: "Comprehensive health checks and performance monitoring in place",
      responsiveness: "100% responsive design across all devices and screen sizes",
      uptime: "Production-ready deployment with self-healing capabilities"
    }
  },
  {
    id: 5,
    slug: "govt-hostel-management",
    image: "govt-hostel.jpg",
    title: "Government Hostel Management System",
    description: "Comprehensive hostel management system for government institutions featuring student registration, room allocation, fee management, and administrative dashboard with modern web technologies.",
    duration: "October 2024 - December 2024",
    techStack: "HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap, AJAX, Responsive Design, Database Management",
    overview: "A full-featured hostel management system designed specifically for government institutions to streamline student accommodation processes, room management, and administrative operations with a user-friendly interface.",
    detailedDescription: `
      The Government Hostel Management System is a comprehensive web-based solution designed to digitize and streamline hostel operations in government educational institutions. This system addresses the common challenges faced by hostel administrators in managing student accommodations, room allocations, and fee collections.

      🏢 **System Capabilities:**
      1️⃣ **Student Management**: Complete student registration, profile management, and document verification
      2️⃣ **Room Allocation**: Automated room assignment based on availability and student preferences
      3️⃣ **Fee Management**: Online fee payment integration and automated receipt generation
      4️⃣ **Administrative Dashboard**: Real-time analytics and comprehensive reporting system
      5️⃣ **Inventory Management**: Track hostel assets, maintenance requests, and facility usage
      6️⃣ **Communication System**: Announcements, notifications, and messaging between staff and students
      7️⃣ **Security Features**: Role-based access control and secure data management

      **Target Users:**
      - Hostel Wardens and Administrative Staff
      - Students seeking accommodation
      - Government Institution Management
      - Maintenance and Support Staff

      This project demonstrates practical application of web development skills in solving real-world administrative challenges in educational institutions.
    `,
    architecture: {
      frontend: "HTML5, CSS3, JavaScript with Bootstrap for responsive design",
      backend: "PHP with MVC architecture for business logic and API endpoints",
      database: "MySQL for data persistence and relationship management",
      security: "Session management, input validation, and SQL injection prevention"
    },
    keyFeatures: [
      "Student registration and profile management system",
      "Automated room allocation with availability tracking",
      "Online fee payment integration with receipt generation",
      "Administrative dashboard with real-time analytics",
      "Room and facility maintenance request system",
      "Document upload and verification workflow",
      "Multi-role access control (Admin, Warden, Student)",
      "Responsive design for mobile and desktop access",
      "Automated email notifications and alerts",
      "Comprehensive reporting and data export features",
      "Inventory management for hostel assets",
      "Visitor management and security logging"
    ],
    responsibilities: [
      "**System Analysis & Design**: Analyzed government hostel requirements and designed comprehensive system architecture",
      "**Database Design**: Created normalized MySQL database schema with proper relationships and constraints",
      "**Frontend Development**: Built responsive user interface using HTML5, CSS3, Bootstrap, and JavaScript",
      "**Backend Development**: Implemented PHP-based server-side logic with MVC architecture and RESTful APIs",
      "**User Authentication**: Developed secure login system with role-based access control and session management",
      "**Payment Integration**: Integrated online payment gateway for fee collection with automated receipt generation",
      "**Admin Dashboard**: Created comprehensive administrative panel with analytics, reporting, and management tools",
      "**Database Optimization**: Implemented efficient queries, indexing, and database performance optimization",
      "**Security Implementation**: Added input validation, SQL injection prevention, and data encryption measures",
      "**Testing & Deployment**: Conducted thorough testing and deployed system with proper documentation"
    ],
    challenges: [
      {
        challenge: "Complex Room Allocation Logic - Managing room assignments based on multiple criteria (gender, course, year, preferences)",
        solution: "Developed intelligent allocation algorithm considering student preferences, room capacity, and institutional policies with automated conflict resolution"
      },
      {
        challenge: "Multi-Role Access Control - Different permission levels for students, wardens, and administrators",
        solution: "Implemented comprehensive role-based access control system with granular permissions and secure session management"
      },
      {
        challenge: "Payment Integration Complexity - Handling online payments with proper security and receipt generation",
        solution: "Integrated secure payment gateway with proper error handling, transaction logging, and automated receipt generation via email"
      },
      {
        challenge: "Data Security & Privacy - Protecting sensitive student information and financial data",
        solution: "Implemented data encryption, secure password hashing, input validation, and SQL injection prevention measures"
      },
      {
        challenge: "Scalability for Large Student Population - System performance with hundreds of concurrent users",
        solution: "Optimized database queries, implemented caching mechanisms, and designed efficient data structures for better performance"
      }
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap",
      "AJAX", "jQuery", "Responsive Design", "MVC Architecture",
      "Payment Gateway Integration", "Session Management", "Database Design",
      "Security Implementation", "RESTful APIs", "Data Validation"
    ],
    liveUrl: "https://govt-hostel-management.netlify.app",
    githubUrl: "https://github.com/jatavkapil123/Govt-Hostel",
    featured: false,
    category: "Full-Stack",
    metrics: {
      userManagement: "Support for 500+ concurrent students and staff",
      roomAllocation: "Automated allocation reducing manual work by 80%",
      paymentProcessing: "Secure online payment with 99.9% success rate",
      systemEfficiency: "Reduced administrative workload by 60%",
      dataAccuracy: "99.5% data accuracy with validation systems",
      userSatisfaction: "4.7/5 rating from hostel administrators and students"
    }
  },

];

export const getProjectBySlug = (slug) => {
  return projectsData.find(project => project.slug === slug);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};