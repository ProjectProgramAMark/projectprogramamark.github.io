import styled from 'styled-components';

export const Section = styled.section`
  padding: 80px 0;
  text-align: center;
  color: var(--color-text);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-top: 40px;
  width: calc(100% - 40px);
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
`;

export const Card = styled.div`
  background: var(--color-card-bg);
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  border: 1px solid var(--color-accent);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
    border-color: var(--color-accent-purple);
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  font-family: 'Fira Code', monospace;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 2px;
    background: var(--color-accent);
    margin: 10px auto 0;
  }
`;

export const ProjectTitle = styled.h3`
  font-family: 'Fira Code', monospace;
  margin-bottom: 15px;
  color: var(--color-accent);
  font-size: 1.3rem;
  width: 100%;
  text-align: center;
`;

export const Description = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  flex-grow: 1;
  color: var(--color-text);
  text-align: center;
  width: 100%;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  justify-content: center;
  width: 100%;
`;

export const TechTag = styled.span`
  background: rgba(209, 118, 255, 0.1);
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.85rem;
  color: var(--color-accent-purple-bright);
  font-family: 'Roboto Mono', monospace;
  border: 1px solid var(--color-accent-purple);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(209, 118, 255, 0.2);
    color: var(--color-accent-purple-bright);
  }
`;

export const Link = styled.a`
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  margin-top: auto;
  text-align: center;

  &:hover {
    background: var(--color-accent-hover);
    color: var(--color-text);
    border-color: var(--color-accent-hover);
  }
`;

export const ProjectType = styled.div`
  font-size: 0.9rem;
  color: var(--color-accent-purple-bright);
  margin-bottom: 0.5rem;
  font-family: var(--font-code);
  opacity: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    font-size: 1.2rem;
  }
`; 