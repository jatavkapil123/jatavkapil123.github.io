import React, { useState, useEffect, useRef } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setTargetPosition({ x: event.clientX, y: event.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (event) => {
      const target = event.target;
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .btn, .card, .project-card, .skill-item, .social-link, .nav-link, .theme-toggle, .navbar-brand, .tech-tag, .project-link') || 
                           target.closest('a, button, .btn, .card, .project-card, .skill-item, .social-link, .nav-link, .theme-toggle, .navbar-brand');
      setIsHovering(isInteractive);
    };

    // Only show cursor follower on desktop
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseover", handleMouseOver);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible]);

  // Smooth animation loop
  useEffect(() => {
    const animate = () => {
      setPosition(prevPosition => {
        const dx = targetPosition.x - prevPosition.x;
        const dy = targetPosition.y - prevPosition.y;
        
        // Smooth easing factor (lower = smoother but slower)
        const easing = isHovering ? 0.25 : 0.12;
        
        return {
          x: prevPosition.x + dx * easing,
          y: prevPosition.y + dy * easing
        };
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetPosition]);

  if (window.innerWidth <= 768) return null;

  return (
    <>
      {/* Main cursor follower */}
      <div 
        ref={cursorRef}
        className={`cursor-follower ${isHovering ? 'cursor-hover' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isVisible ? 1 : 0
        }}
      />
      
      {/* Trailing cursor for extra smoothness */}
      <div 
        className={`cursor-trail ${isHovering ? 'cursor-hover' : ''}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          opacity: isVisible ? 0.6 : 0
        }}
      />
    </>
  );
};

export default CursorFollower;
