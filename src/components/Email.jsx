import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope, FaUser, FaComment, FaPhone, FaBriefcase, FaPaperPlane, FaCheckCircle, FaTimesCircle, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactMe = () => {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "",
    subject: "",
    message: "" 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_ki86lvf",
        "template_urgc4fo",
        formData,
        "0XDnUy0Rl3yb3710V"
      );
      setSubmitStatus('success');
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      console.error(error);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section-enhanced">
      <div className="container">
        <div className="row">
          {/* Contact Info Side */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className={`contact-info ${isVisible ? 'animate-fadeInLeft' : ''}`}>
              <h2 className="section-title text-start">Let's Work Together</h2>
              <p className="contact-description">
                Ready to bring your ideas to life? I'm here to help you build amazing digital experiences. 
                Let's discuss your project and create something extraordinary together.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FaEnvelope />
                  </div>
                  <div className="method-info">
                    <h4>Email Me</h4>
                    <p>kapiljatav4991@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaPhone />
                  </div>
                  <div className="method-info">
                    <h4>Call Me</h4>
                    <p>Available for consultation</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <FaBriefcase />
                  </div>
                  <div className="method-info">
                    <h4>Let's Collaborate</h4>
                    <p>Open for freelance projects</p>
                  </div>
                </div>
              </div>
              
              <div className="social-connect">
                <h4>Connect With Me</h4>
                <div className="social-links-contact">
                  <a href="https://www.linkedin.com/in/kapil-jatav-a21527280/" className="social-btn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/jatavkapil123" className="social-btn" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://x.com/KapilJatav48339" className="social-btn" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="col-lg-7">
            <div className={`contact-form-enhanced ${isVisible ? 'animate-fadeInRight' : ''}`}>
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="status-message success">
                  <FaCheckCircle className="me-2" />
                  Message sent successfully! I'll get back to you within 24 hours.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  <FaTimesCircle className="me-2" />
                  Failed to send message. Please try again or contact me directly.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="enhanced-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="name" className="form-label-enhanced">
                        <FaUser className="label-icon" />
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        placeholder="John Doe" 
                        className={`form-control-enhanced ${errors.name ? 'error' : ''}`}
                        value={formData.name} 
                        onChange={handleChange}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="email" className="form-label-enhanced">
                        <FaEnvelope className="label-icon" />
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        placeholder="john@example.com" 
                        className={`form-control-enhanced ${errors.email ? 'error' : ''}`}
                        value={formData.email} 
                        onChange={handleChange}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div>
                </div>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="phone" className="form-label-enhanced">
                        <FaPhone className="label-icon" />
                        Phone Number
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone" 
                        placeholder="+1 (555) 123-4567" 
                        className={`form-control-enhanced ${errors.phone ? 'error' : ''}`}
                        value={formData.phone} 
                        onChange={handleChange}
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group-enhanced">
                      <label htmlFor="subject" className="form-label-enhanced">
                        <FaBriefcase className="label-icon" />
                        Subject *
                      </label>
                      <select 
                        id="subject"
                        name="subject" 
                        className={`form-control-enhanced ${errors.subject ? 'error' : ''}`}
                        value={formData.subject} 
                        onChange={handleChange}
                      >
                        <option value="">Select a subject</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Cloud Solutions">Cloud Solutions</option>
                        <option value="Consultation">Consultation</option>
                        <option value="Collaboration">Collaboration</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>
                  </div>
                </div>

                <div className="form-group-enhanced">
                  <label htmlFor="message" className="form-label-enhanced">
                    <FaComment className="label-icon" />
                    Message *
                  </label>
                  <textarea 
                    id="message"
                    name="message" 
                    rows="6" 
                    placeholder="Tell me about your project, timeline, budget, and any specific requirements..." 
                    className={`form-control-enhanced ${errors.message ? 'error' : ''}`}
                    value={formData.message} 
                    onChange={handleChange}
                  ></textarea>
                  <div className="character-count">
                    {formData.message.length}/500
                  </div>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn-submit-enhanced" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="me-2" />
                      Send Message
                    </>
                  )}
                </button>
                
                <p className="form-note">
                  * Required fields. I typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
