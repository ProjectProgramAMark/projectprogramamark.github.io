import styled from 'styled-components';

export const Section = styled.section`
  padding: 5rem var(--side-padding);
  background: rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  color: var(--color-text);
  text-align: center;
  margin-bottom: 2rem;
  font-family: var(--font-code);
`;

export const Journey = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const JourneyTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--color-accent);
  font-family: var(--font-code);
  margin-bottom: 1rem;
`;

export const JourneyText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  opacity: 0.9;
`;

export const ResearchInterests = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InterestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InterestItem = styled.div`
  font-size: 1.1rem;
  line-height: 1.6;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid var(--color-accent);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

export const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-accent-purple);
  }
`;

export const SkillTitle = styled.h4`
  font-size: 1.3rem;
  color: var(--color-accent-purple-bright);
  margin-bottom: 1.5rem;
  font-family: var(--font-code);
  opacity: 1;
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkillItem = styled.li`
  font-size: 1rem;
  color: var(--color-text);
  opacity: 0.9;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: "▹";
    color: var(--color-accent);
  }

  &:hover {
    color: var(--color-accent-purple-bright);
    opacity: 1;
  }
`;

export const Education = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EducationItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export const Degree = styled.h4`
  font-size: 1.2rem;
  color: var(--color-text);
  font-family: var(--font-code);
`;

export const Institution = styled.p`
  font-size: 1rem;
  color: var(--color-accent);
`;

export const Date = styled.p`
  font-size: 0.9rem;
  color: var(--color-text);
  opacity: 0.8;
`;

export const Publications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PublicationItem = styled.div`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(10px);
  }
`;

export const PublicationTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  font-family: var(--font-code);
`;

export const PublicationDetails = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  opacity: 0.9;
`;