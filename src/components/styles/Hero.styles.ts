import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  color: var(--color-text);
  padding: 2rem var(--side-padding);
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  text-align: center;
`;

export const ProfileSection = styled.div`
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
  margin-bottom: 1rem;
`;

export const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 3px solid var(--color-accent);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-family: var(--font-code);
  animation: ${fadeIn} 0.5s ease-out;
  line-height: 1.3;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  font-family: var(--font-primary);
  color: var(--color-accent);
  animation: ${fadeIn} 0.5s ease-out 0.2s backwards;
  line-height: 1.4;
  max-width: 600px;
`;

export const AnimatedText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;
  animation: ${fadeIn} 0.5s ease-out 0.4s backwards;
  max-width: 600px;
  margin: 0.5rem 0;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
  animation: ${fadeIn} 0.5s ease-out 0.6s backwards;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const InfoLabel = styled.span`
  font-family: var(--font-code);
  font-size: 0.9rem;
  color: var(--color-accent);
  opacity: 0.9;
`;

export const InfoValue = styled.span`
  font-family: var(--font-primary);
  font-size: 0.95rem;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  animation: ${fadeIn} 0.5s ease-out 0.8s backwards;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const CTA = styled.a`
  display: inline-block;
  padding: 12px 32px;
  border: 2px solid var(--color-accent);
  color: var(--color-text);
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-family: var(--font-primary);
  font-size: 0.95rem;
  text-align: center;
  min-width: 160px;

  &:hover {
    background: var(--color-accent);
    color: var(--color-background);
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(CTA)`
  background: var(--color-accent);
  color: var(--color-background);

  &:hover {
    background: transparent;
    color: var(--color-text);
  }
`; 