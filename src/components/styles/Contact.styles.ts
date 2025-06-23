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

export const Text = styled.p`
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
  color: var(--color-text);
  text-align: center;
  padding: 0 20px;
`;

export const ContactInfo = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 30px;
  background: var(--color-card-bg);
  border-radius: 12px;
  width: calc(100% - 40px);
  max-width: 1050px;
  border: 1px solid var(--color-accent);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

export const Link = styled.a`
  color: var(--color-accent);
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  transition: all 0.3s ease;
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid var(--color-accent);
  background: transparent;
  text-align: center;
  min-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-accent-hover);
    color: var(--color-text);
    transform: translateY(-2px);
    border-color: var(--color-accent-hover);
  }
`; 