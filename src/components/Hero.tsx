import { useState, useEffect } from 'react';
import { 
  Section, 
  Content, 
  Title, 
  Subtitle, 
  CTA,
  SecondaryButton,
  ButtonGroup,
  ProfileSection,
  ProfileImage,
  InfoGrid,
  InfoItem,
  InfoLabel,
  InfoValue,
  TextContent,
  AnimatedText
} from './styles/Hero.styles';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Hi, I'm Mark";
  
  useEffect(() => {
    setDisplayedText(fullText);
    
    const timeout = setTimeout(() => {
      setDisplayedText("");
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(interval);
      }, 100);
      return () => clearInterval(interval);
    }, 500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <Section id="hero">
      <Content>
        <ProfileSection>
          <ProfileImage 
            src="/your-profile-pic.jpg" 
            alt="Mark Moussa"
          />
        </ProfileSection>
        <TextContent>
          <Title>{displayedText || fullText}</Title>
          <Subtitle>AI/ML Research Engineer and Software Engineer</Subtitle>
          <AnimatedText>
            I like working on AI/ML on the intersection between sciences and engineering. These days I mainly work on AI/ML for the natural sciences, like detecting life on exoplanets, analyzing and predicting wildfires, canopy height change in our forests, and intelligent high-level decision making on multi-agent systems for spaceborne missions.

            I also have founded a startup that uses AI/ML to bridge the communication gap between those who are non-verbal (on the Autism spectrum or otherwise) and those who are verbal. Check it out <a href="https://mosaicvoiceaac.com/" target="_blank" rel="noopener noreferrer">here</a>.
          </AnimatedText>
          <InfoGrid>
            <InfoItem>
              <InfoLabel>Location</InfoLabel>
              <InfoValue>Washington, D.C. (Moving to Bay Area soon)</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Expertise</InfoLabel>
              <InfoValue>AI/ML Research Engineer, Science, Software Engineer</InfoValue>
            </InfoItem>
            {/* <InfoItem>
              <InfoLabel>Focus</InfoLabel>
              <InfoValue>Artificial Intelligence & Machine Learning</InfoValue>
            </InfoItem> */}
          </InfoGrid>
          <ButtonGroup>
            <CTA href="#projects">View My Work</CTA>
            <SecondaryButton href="src/assets/Mark_Moussa_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </SecondaryButton>
          </ButtonGroup>
        </TextContent>
      </Content>
    </Section>
  );
};

export default Hero; 