import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { MdOutlineDarkMode, MdLightMode, MdHome, MdPerson, MdCode, MdWork, MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaCertificate, FaProjectDiagram } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const isProjectDetailPage = location.pathname.startsWith('/project/');

  // Theme management
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (darkMode) {
      root.setAttribute("data-theme", "dark");
      body.classList.add("dark-theme");
      body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
      body.classList.add("light-theme");
      body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }

    // Smooth theme transition
    root.style.transition = "all 0.3s ease";
    setTimeout(() => {
      root.style.transition = "";
    }, 300);
  }, [darkMode]);

  // Active section tracking
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    // If we're on a project detail page, navigate to home first
    if (isProjectDetailPage) {
      navigate('/', { replace: true });
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Normal scrolling for home page
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        setActiveSection(sectionId);
      }
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);

    // Add a subtle animation feedback
    const themeButton = document.querySelector('.theme-toggle-minimal');
    if (themeButton) {
      themeButton.style.transform = 'scale(0.9)';
      setTimeout(() => {
        themeButton.style.transform = '';
      }, 150);
    }
  };

  const navItems = [
    { id: 'home', icon: MdHome, label: 'Home' },
    { id: 'about', icon: MdPerson, label: 'About' },
    { id: 'skills', icon: MdCode, label: 'Skills' },
    { id: 'projects', icon: FaProjectDiagram, label: 'Projects' },
    { id: 'experience', icon: MdWork, label: 'Experience' },
    { id: 'certifications', icon: FaCertificate, label: 'Certifications' },
    { id: 'contact', icon: MdEmail, label: 'Contact' }
  ];

  return (
    <nav className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* DevOps Logo - Always visible */}
        <button
          className={`nav-icon-minimal logo-minimal ${!isProjectDetailPage && activeSection === 'home' ? 'active' : ''}`}
          onClick={() => scrollToSection('home')}
          title="Kapil Jatav - DevOps Engineer"
        >
          <img
            src="/devops-logo.svg"
            alt="DevOps"
            className="navbar-logo-minimal"
          />
        </button>

        {/* Navigation Items */}
        {navItems.slice(0, 4).map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-icon-minimal ${!isProjectDetailPage && activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              title={item.label}
            >
              <IconComponent size={18} />
            </button>
          );
        })}

        {/* Divider */}
        <div className="navbar-divider"></div>

        {/* More Navigation Items */}
        {navItems.slice(4).map((item) => {
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              className={`nav-icon-minimal ${!isProjectDetailPage && activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              title={item.label}
            >
              <IconComponent size={18} />
            </button>
          );
        })}

        {/* Social Links */}
        <a
          href="https://github.com/jatavkapil123"
          className="nav-icon-minimal social-link"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile"
        >
          <FaGithub size={16} />
        </a>

        <a
          href="https://linkedin.com/in/kapil-jatav"
          className="nav-icon-minimal social-link"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn Profile"
        >
          <FaLinkedin size={16} />
        </a>

        {/* Divider */}
        <div className="navbar-divider"></div>

        {/* Enhanced Theme Toggle */}
        <button
          className={`nav-icon-minimal theme-toggle-minimal ${darkMode ? 'dark-active' : 'light-active'}`}
          onClick={toggleTheme}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          <div className="theme-icon-container">
            {darkMode ? (
              <MdLightMode size={18} className="theme-icon" />
            ) : (
              <MdOutlineDarkMode size={18} className="theme-icon" />
            )}
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
