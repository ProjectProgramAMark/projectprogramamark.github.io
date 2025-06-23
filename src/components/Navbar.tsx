import { useState, useEffect, useRef } from 'react';
import { NavbarContainer, NavLink, Hamburger, HamburgerLines, MobileMenu, MobileNavLink } from './styles/Navbar.styles';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && currentScrollY > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // close mobile menu on nav click or outside click
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      const menu = document.getElementById('mobile-menu');
      if (menu && !menu.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  const handleMobileNavClick = () => setMobileMenuOpen(false);

  return (
    <NavbarContainer $isVisible={show}>
      {/* Desktop nav links */}
      <NavLink href="#hero">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#publications">Publications</NavLink>
      <NavLink href="#contact">Contact</NavLink>

      {/* Hamburger icon for mobile */}
      <Hamburger onClick={() => setMobileMenuOpen(v => !v)} aria-label="Open navigation menu">
        <HamburgerLines />
        <HamburgerLines />
        <HamburgerLines />
      </Hamburger>

      {/* Mobile menu dropdown */}
      <MobileMenu id="mobile-menu" $open={mobileMenuOpen}>
        <MobileNavLink href="#hero" onClick={handleMobileNavClick}>Home</MobileNavLink>
        <MobileNavLink href="#about" onClick={handleMobileNavClick}>About</MobileNavLink>
        <MobileNavLink href="#projects" onClick={handleMobileNavClick}>Projects</MobileNavLink>
        <MobileNavLink href="#publications" onClick={handleMobileNavClick}>Publications</MobileNavLink>
        <MobileNavLink href="#contact" onClick={handleMobileNavClick}>Contact</MobileNavLink>
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
