import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { projectsData } from "../data/projectsData";

function Projects() {
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

    const element = document.getElementById('projects');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projectList = projectsData;

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="row g-4">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className={`col-lg-6 col-md-6 ${isVisible ? 'animate-fadeInUp' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="project-card">
                <div className="position-relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  {project.featured && (
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-primary">Featured</span>
                    </div>
                  )}
                </div>

                <div className="project-content">
                  {project.duration && (
                    <div className="project-meta">
                      <span className="project-duration">{project.duration}</span>
                      {project.category && (
                        <span className={`project-category ${project.category.toLowerCase()}`}>
                          {project.category}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  {project.techStack && (
                    <div className="tech-stack-section">
                      <h4 className="tech-stack-title">Tech Stack:</h4>
                      <p className="tech-stack-text">{project.techStack}</p>
                    </div>
                  )}

                  {project.responsibilities && (
                    <div className="responsibilities-section">
                      <h4 className="responsibilities-title">Key Responsibilities:</h4>
                      <ul className="responsibilities-list">
                        {project.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="project-tech">
                    {project.technologies.slice(0, 8).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 8 && (
                      <span className="tech-tag-more">
                        +{project.technologies.length - 8} more
                      </span>
                    )}
                  </div>

                  <div className="project-links">
                    <Link
                      to={`/project/${project.slug}`}
                      className="project-link view-details"
                    >
                      <FaArrowRight className="me-2" />
                      View Details
                    </Link>
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt className="me-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="me-2" />
                      Source Code
                    </a>
                    {project.blogUrl && (
                      <a
                        href={project.blogUrl}
                        className="project-link secondary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="me-2" />
                        Read Blog
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
