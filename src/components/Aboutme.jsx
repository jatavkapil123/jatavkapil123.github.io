import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Aboutme = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <div className={`${isVisible ? 'animate-fadeInUp' : ''}`}>
                <h1 className="hero-title">
                  Hi, I'm Kapil Jatav
                </h1>
                <h2 className="hero-role">DevOps & Cloud Engineer</h2>
                <p className="hero-subtitle">
                  Passionate DevOps Engineer specializing in cloud infrastructure, automation, and CI/CD practices.
                  I transform complex deployment challenges into streamlined, efficient solutions.
                </p>

                <div className="hero-contact">
                  <p className="contact-info">
                    <span className="contact-item">📞 +91 9770236178</span>
                    <span className="contact-separator">|</span>
                    <span className="contact-item">✉️ kapiljatav4991@gmail.com</span>
                  </p>
                </div>

                <div className="social-links">
                  <a
                    href="https://www.linkedin.com/in/kapil-jatav-a21527280/"
                    className="social-link animate-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://github.com/jatavkapil123"
                    className="social-link animate-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    style={{ animationDelay: '0.4s' }}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://medium.com/@kapiljatav4991"
                    className="social-link animate-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Medium"
                    style={{ animationDelay: '0.6s' }}
                  >
                    <FaMedium size={24} />
                  </a>
                  <a
                    href="https://x.com/KapilJatav48339"
                    className="social-link animate-float"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    style={{ animationDelay: '0.8s' }}
                  >
                    <FaXTwitter size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h2 className="section-title text-center">About Me</h2>
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <div className="about-content">
                    <p className="about-description">
                      I'm a dedicated DevOps Engineer with over a year of hands-on experience in automation,
                      cloud infrastructure, and CI/CD practices. My journey in technology began with a passion
                      for solving complex problems and optimizing systems for better performance and reliability.
                    </p>

                    <p className="about-description">
                      Currently pursuing my Bachelor's in Electronics and Communication Engineering, I've developed
                      expertise in modern DevOps tools including Docker, Jenkins, Kubernetes, and Terraform.
                      I thrive in dynamic environments where I can troubleshoot complex issues and streamline
                      deployment workflows.
                    </p>



                    <div className="education-info">
                      <h4>Education</h4>
                      <div className="education-item">
                        <h5>Bachelor of Technology in Electronics and Communication</h5>
                        <p>University Institute of Technology, RGPV, Bhopal</p>
                        <span className="education-meta">2022 - 2026 | CGPA: 6.83</span>
                      </div>
                      <div className="education-item">
                        <h5>Higher Secondary Certificate (HSC)</h5>
                        <p>Government Excellence Higher Secondary School, Ashoknagar</p>
                        <span className="education-meta">2021 - 2022 | 87%</span>
                      </div>
                      <div className="education-item">
                        <h5>Secondary School Certificate (SSC)</h5>
                        <p>Blue Chip Public School, Ashoknagar</p>
                        <span className="education-meta">2019 - 2020 | 76.00%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="about-stats">
                    <div className="stat-item">
                      <h4 className="stat-number">1+</h4>
                      <p className="stat-label">Years Experience</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">15+</h4>
                      <p className="stat-label">Technologies Mastered</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">5+</h4>
                      <p className="stat-label">Major Projects</p>
                    </div>
                    <div className="stat-item">
                      <h4 className="stat-number">3</h4>
                      <p className="stat-label">Cloud Platforms</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme; 