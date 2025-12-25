import React, { useEffect, useState } from "react";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCode, FaAward, FaExternalLinkAlt } from "react-icons/fa";

function Experience() {
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

    const element = document.getElementById('experience');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      title: "DevOps Engineer (Internship)",
      company: "Bytefusion Techsoft (Pune)",
      location: "Remote",
      duration: "Sep 2024 - Present",
      period: "Sep 2024 - Present",
      type: "Remote Internship",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      description: "DevOps Engineer with hands-on experience in deploying and managing cloud-based projects using industry-standard DevOps tools and practices. Successfully deployed two major projects — one on UthoCloud and another on Hostinger (shared services with hPanel) gaining extensive knowledge in real-world environments.",
      responsibilities: [
        "Proficient in using tools such as Git for version control, GitHub for team collaboration, Jenkins for CI/CD automation, and Docker for containerization",
        "Actively worked on monitoring and logging, and utilized SonarQube to ensure code quality and security",
        "Gained strong problem-solving skills by troubleshooting complex deployment and configuration issues",
        "Deployed and managed cloud-based projects using industry-standard DevOps practices",
        "Implemented automated CI/CD pipelines for seamless application deployment",
        "Worked with containerization technologies for scalable application deployment",
        "Collaborated with development teams to optimize deployment workflows"
      ],
      technologies: [
        "Git",
        "GitHub",
        "Jenkins",
        "Docker",
        "SonarQube",
        "UthoCloud",
        "Hostinger",
        "hPanel",
        "CI/CD Pipelines",
        "Monitoring & Logging",
        "Cloud Deployment",
        "DevOps Automation"
      ],
      achievements: [
        "Successfully deployed two major projects in production environments",
        "Implemented automated CI/CD pipelines reducing deployment time significantly",
        "Enhanced code quality and security through SonarQube integration",
        "Gained expertise in troubleshooting complex deployment issues",
        "Contributed to team's DevOps best practices and workflow optimization",
        "Developed strong problem-solving skills in dynamic cloud environments"
      ],
      featured: true
    }
  ];

  const stats = [
    { number: "1+", label: "Years Experience", icon: FaCalendarAlt },
    { number: "2", label: "Major Projects Deployed", icon: FaAward },
    { number: "10+", label: "DevOps Technologies", icon: FaBriefcase },
    { number: "100%", label: "Remote Collaboration", icon: FaCode }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="text-center mb-5" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Real-world experience gained through hands-on internship, working with industry professionals and modern technologies.
        </p>

        {/* Experience Timeline */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-item ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="experience-card">
                <div className="experience-header">
                  <div className="company-logo">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                    <div className="job-meta">
                      <span className="duration">
                        <FaCalendarAlt className="me-2" />
                        {exp.period}
                      </span>
                      <span className="location">
                        <FaMapMarkerAlt className="me-2" />
                        {exp.location}
                      </span>
                      <span className={`job-type ${exp.type.toLowerCase()}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="experience-content">
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaBriefcase className="me-2" />
                        Key Responsibilities
                      </h5>
                      <ul className="responsibilities-list">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-lg-6 mb-4">
                      <h5 className="content-title">
                        <FaAward className="me-2" />
                        Key Achievements
                      </h5>
                      <ul className="achievements-list">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="technologies-used">
                    <h5 className="content-title">
                      <FaCode className="me-2" />
                      Technologies & Tools
                    </h5>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Stats */}
        <div className="experience-stats mt-5">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className={`stat-card ${isVisible ? 'animate-fadeInUp' : ''}`} style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                  <div className="stat-icon">
                    <stat.icon />
                  </div>
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="experience-cta mt-5">
          <div className="cta-card">
            <h3>Cloud & DevOps Expertise</h3>
            <p>
              With specialized experience in Azure cloud infrastructure, containerization, and CI/CD automation, 
              I'm ready to help organizations accelerate their digital transformation and optimize their deployment processes. 
              Let's discuss how my cloud and DevOps skills can drive your next project forward.
            </p>
            <button 
              className="cta-button"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <FaUsers className="me-2" />
              Discuss Cloud Solutions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;