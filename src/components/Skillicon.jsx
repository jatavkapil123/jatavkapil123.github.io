import React, { useEffect, useState } from "react";

function SkillIcon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const allSkills = [
    // Cloud Platforms
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
      name: "AWS",
      category: "Cloud"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      name: "Azure",
      category: "Cloud"
    },
    { 
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Utho_logo.png/200px-Utho_logo.png", 
      name: "Utho",
      category: "Cloud"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg", 
      name: "GCP",
      category: "Cloud"
    },
    
    // CI/CD
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", 
      name: "Jenkins",
      category: "CI/CD"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", 
      name: "GitLab",
      category: "CI/CD"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      name: "Azure Pipelines",
      category: "CI/CD"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      name: "GitHub Action",
      category: "CI/CD"
    },
    
    // Containerization
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
      name: "Docker",
      category: "Container"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", 
      name: "Kubernetes",
      category: "Container"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
      name: "Docker Compose",
      category: "Container"
    },
    
    // Security & Quality
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", 
      name: "SonarQube",
      category: "Security"
    },
    { 
      src: "https://aquasecurity.github.io/trivy/v0.18.3/imgs/logo.png", 
      name: "Trivy",
      category: "Security"
    },
    { 
      src: "https://owasp.org/assets/images/logo.png", 
      name: "OWASP",
      category: "Security"
    },
    
    // Infrastructure as Code
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", 
      name: "Terraform",
      category: "IaC"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", 
      name: "Ansible",
      category: "IaC"
    },
    
    // Monitoring
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg", 
      name: "Prometheus",
      category: "Monitoring"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg", 
      name: "Grafana",
      category: "Monitoring"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", 
      name: "Azure Monitoring",
      category: "Monitoring"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", 
      name: "CloudWatch",
      category: "Monitoring"
    },
    
    // Version Control
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", 
      name: "Git",
      category: "VCS"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", 
      name: "GitHub",
      category: "VCS"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", 
      name: "GitLab",
      category: "VCS"
    },
    
    // Programming Languages
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      name: "Python",
      category: "Language"
    },
    { 
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", 
      name: "ShellScript",
      category: "Language"
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">DevOps & Cloud Engineering Skills</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem' }}>
          Comprehensive expertise in cloud infrastructure, automation, CI/CD practices, and modern DevOps technologies
        </p>
        
        <div className="skills-grid-unified">
          {allSkills.map((skill, index) => (
            <div 
              key={index} 
              className={`skill-item-unified ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="skill-icon-container">
                <img 
                  src={skill.src} 
                  alt={skill.name}
                  className="skill-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                  }}
                />
              </div>
              <div className="skill-info">
                <p className="skill-name">{skill.name}</p>
                <span className={`skill-category-tag ${skill.category.toLowerCase()}`}>
                  {skill.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillIcon;
