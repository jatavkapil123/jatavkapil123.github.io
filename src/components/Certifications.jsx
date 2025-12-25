import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaCertificate, FaAward } from "react-icons/fa";

function Certifications() {
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

    const element = document.getElementById('certifications');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      id: 1,
      title: "Azure Fundamentals",
      provider: "Microsoft",
      code: "AZ-900",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Cloud Computing", "Azure Services", "Security", "Compliance"],
      verifyUrl: "#",
      issueDate: "2024",
      featured: true
    },
    {
      id: 2,
      title: "GitHub Foundations",
      provider: "GitHub",
      code: "GitHub Certified",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      description: "Demonstrates foundational knowledge of Git, GitHub, and collaborative software development practices.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      verifyUrl: "#",
      issueDate: "2024",
      featured: true
    },
    {
      id: 3,
      title: "Oracle Cloud Foundations Associate",
      provider: "Oracle",
      code: "OCI Foundations",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      description: "Foundational knowledge of Oracle Cloud Infrastructure services and cloud computing concepts.",
      skills: ["Oracle Cloud", "Cloud Architecture", "Infrastructure", "Security"],
      verifyUrl: "#",
      issueDate: "2024",
      featured: false
    }
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Professional certifications that validate my expertise in cloud computing, development tools, and modern technologies.
        </p>
        
        <div className="row g-4">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className={`col-lg-4 col-md-6 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`certification-card ${cert.featured ? 'featured' : ''}`}>
                {cert.featured && (
                  <div className="featured-badge">
                    <FaAward className="me-1" />
                    Featured
                  </div>
                )}
                
                <div className="cert-header">
                  <div className="cert-icon">
                    <img 
                      src={cert.icon} 
                      alt={cert.provider}
                      className="provider-icon"
                    />
                  </div>
                  <div className="cert-info">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-provider">{cert.provider}</p>
                    <span className="cert-code">{cert.code}</span>
                  </div>
                </div>
                
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="cert-footer">
                  <div className="cert-date">
                    <FaCertificate className="me-2" />
                    Issued {cert.issueDate}
                  </div>
                  <a 
                    href={cert.verifyUrl} 
                    className="verify-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="me-2" />
                    Verify
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="cert-stats mt-5">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="stat-number">3+</h3>
                <p className="stat-label">Certifications</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="stat-number">2024</h3>
                <p className="stat-label">Latest Achievement</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="stat-number">100%</h3>
                <p className="stat-label">Verified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;