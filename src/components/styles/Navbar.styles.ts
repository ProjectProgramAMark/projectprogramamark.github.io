import styled from 'styled-components';

interface NavbarContainerProps {
  $isVisible: boolean;
}

export const NavbarContainer = styled.nav<NavbarContainerProps>`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: transparent;

  @media (max-width: 600px) {
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem 0.5rem;
    min-height: 56px;
    font-size: 0.95rem;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: unset;
    white-space: normal;
    background: transparent;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  position: fixed;
  top: ${({ $isVisible }) => ($isVisible ? '0' : '-100px')};
  left: 0;
  width: 100%;
  z-index: 1000;
  border-radius: 0; // square corners
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: top 0.3s ease-in-out;
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00bfff;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1100;
    margin-left: 0;
    padding: 0;
    touch-action: manipulation;
  }
`;

export const HamburgerLines = styled.div`
  width: 24px;
  height: 3px;
  background: #fff;
  margin: 3px 0;
  border-radius: 2px;
  transition: all 0.3s ease;
`;

export const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 60px;
    left: 0;
    width: 100vw;
    background: rgba(30, 40, 50, 0.98);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    z-index: 1099;
    padding: 2rem 0 1rem 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-100%)')};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
  }
`;

export const MobileNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-align: left;
  transition: color 0.3s ease;

  &:hover {
    color: #00bfff;
  }
`;
