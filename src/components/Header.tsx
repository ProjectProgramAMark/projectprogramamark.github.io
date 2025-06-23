import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { NavDots, NavDot, NavDotInner, NavLabel, NavIcon } from './styles/Header.styles';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'publications', 'contact'];
      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're at the bottom of the page
      if (window.innerHeight + window.scrollY >= documentHeight - 50) {
        if (activeSection !== 'contact') {
          setActiveSection('contact');
        }
        return;
      }
      
      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + scrollTop;
          
          // Use a smaller threshold for the last section
          const threshold = section === 'contact' ? viewportHeight/4 : viewportHeight/3;
          
          // If we've scrolled past the top of this section
          if (scrollTop >= sectionTop - threshold) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    const scrollListener = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    // Set initial active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [activeSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Calculate responsive offset based on viewport height
      const viewportHeight = window.innerHeight;
      const offset = Math.min(Math.max(viewportHeight * 0.1, 60), 100);
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ marginTop: '64px' }}>
        <NavDots>
          {['hero', 'about', 'projects', 'publications', 'contact'].map((section) => (
            <NavDot
              key={section}
              $isActive={activeSection === section}
              onClick={() => scrollToSection(section)}
              aria-label={`Scroll to ${section} section`}
            >
              <NavDotInner $isActive={activeSection === section} />
              <NavLabel>
                <NavIcon>{section === 'hero' ? '🏠' : section === 'about' ? '👋' : section === 'projects' ? '💻' : section === 'publications' ? '📖' : '📬'}</NavIcon>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLabel>
            </NavDot>
          ))}
        </NavDots>
        {/* rest of header content should also be inside this div if present */}
      </div>
    </>
  );
};

export default Header; 