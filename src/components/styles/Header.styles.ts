import styled from 'styled-components';

export const NavDots = styled.div`
  position: fixed;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 100;

  @media (max-width: 600px) {
    display: none;
  }
`;


export const NavDot = styled.button<{ $isActive: boolean }>`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavDotInner = styled.div<{ $isActive: boolean }>`
  width: ${props => props.$isActive ? '16px' : '12px'};
  height: ${props => props.$isActive ? '16px' : '12px'};
  border-radius: 50%;
  background: ${props => props.$isActive ? 'var(--color-accent)' : 'var(--color-text)'};
  opacity: ${props => props.$isActive ? 1 : 0.5};
  transition: all 0.3s ease;

  ${NavDot}:hover & {
    opacity: 1;
    width: 16px;
    height: 16px;
  }
`;

export const NavLabel = styled.span`
  position: absolute;
  right: 45px;
  background: rgba(26, 188, 156, 0.1);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 1rem;
  color: var(--color-text);
  white-space: nowrap;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.3s ease;
  pointer-events: none;
  border: 1px solid var(--color-accent);
  display: flex;
  align-items: center;
  gap: 8px;

  ${NavDot}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const NavIcon = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`; 