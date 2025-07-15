import {
  Section,
  SectionTitle,
  Content,
  Journey,
  JourneyTitle,
  JourneyText,
  SkillsGrid,
  SkillCategory,
  SkillTitle,
  SkillList,
  SkillItem,
  Education,
  EducationItem,
  Degree,
  Institution,
  Date
} from './styles/About.styles';
import {
  UpdatesSection,
  UpdatesList,
  UpdateItem,
  UpdateDate,
  UpdateText,
} from './styles/Updates.styles';

const About = () => {
  return (
    <Section id="about">
      <Content>
        <SectionTitle>About Me</SectionTitle>
        
        <Journey>
          <JourneyTitle>My Journey</JourneyTitle>
          <JourneyText>
            {/* My path in technology began with a fascination for solving complex problems 
            through code. As I delved deeper into machine learning and artificial intelligence, 
            I discovered my passion for developing systems that can learn and adapt. Today, 
            I work at the intersection of research and engineering, translating cutting-edge 
            AI concepts into practical applications that solve real-world challenges. */}
            My journey in technology began with an innate curiosity for unraveling complex problems, first through building an online forum in 5th grade to trade furniture and sell turnips in Animal Crossing, and then evolving toward systems capable of learning and adaptation. Early experiences with programming quickly sparked my passion, and I kept coding on and off throughout my life until I settled on artificial intelligence and machine learning in undergrad.
            Today, I navigate the intersection of research and engineering as a Software and Machine Learning Engineer at NASA, collaborating across diverse fields from Earth science to astrophysics. My role allows me to transform advanced AI concepts into tangible applications that tackle significant real-world challenge, whether it's improving wildfire detection to help keep communities safe or aiding in the search for life beyond our planet.
            <br /> <br />
            Driven by personal inspiration, particularly from my younger brother Marvin, who is non-verbal and on the autism spectrum, I embarked on an entrepreneurial path. I am building an AI-powered augmentative and alternative communication (AAC) app designed to empower individuals with speech impairments.
            Throughout my career, I've prioritized collaboration and mentorship, leading teams that bridge scientific expertise with engineering innovation. I deeply believe in technology's potential to serve humanity positively, and I'm dedicated to creating solutions that are equitable, sustainable, and transformative. Looking ahead, my vision remains centered on leveraging AI to drive meaningful impact, whether that's through improving accessibility in everyday communication, enabling groundbreaking scientific discoveries, or shaping the future of space exploration.
          </JourneyText>
        </Journey>

        <UpdatesSection>
          <JourneyTitle>Recent Updates</JourneyTitle>
          <UpdatesList>
            <UpdateItem>
              <UpdateDate>July 2025:</UpdateDate>
              <UpdateText>
                Paper accepted to ICCV SEA Workshop! <i>PyroFocus: A Deep Learning Approach to Real-Time Wildfire Detection in Multispectral Remote Sensing Imagery</i>. Preprint coming soon!
              </UpdateText>
            </UpdateItem>
            <UpdateItem>
              <UpdateDate>December 2024:</UpdateDate>
              <UpdateText>
                Presenting at AGU 2024! Presenting work for 2 different projects there. Reach out if you want to meet up!
              </UpdateText>
            </UpdateItem>
          </UpdatesList>
        </UpdatesSection>

        <SkillsGrid>
          <SkillCategory>
            <SkillTitle>Artificial Intelligence & Machine Learning</SkillTitle>
            <SkillList>
              <SkillItem>Multimodal deep learning (vision + text + spectra)</SkillItem>
              <SkillItem>Geospatial & remote-sensing ML</SkillItem>
              <SkillItem>Bayesian DL & uncertainty quantification</SkillItem>
              <SkillItem>LLM fine-tuning (LoRA / QLoRA, vLLM)</SkillItem>
              <SkillItem> On-device model inference & optimization</SkillItem>
              <SkillItem>MLOps & production-grade AI/ML</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Software Engineering</SkillTitle>
            <SkillList>
              <SkillItem>Python, JS/TS, C, C++, Unity 3D, AR/VR & React Native/Expo</SkillItem>
              <SkillItem>Cloud inference & infrastructure (AWS, Azure, GCP, etc.)</SkillItem>
              <SkillItem>Serverless GPU & containers (Modal, Docker, Kubernetes)</SkillItem>
              <SkillItem>Full-stack development</SkillItem>
              <SkillItem>CI/CD & DevOps</SkillItem>
            </SkillList>
          </SkillCategory>

          <SkillCategory>
            <SkillTitle>Research Areas</SkillTitle>
            <SkillList>
              <SkillItem>AI/ML in Exoplanet biosignature detection</SkillItem>
              <SkillItem>AI/ML in Wildfire detection & FRP regression</SkillItem>
              <SkillItem>AI/ML in Forest canopy dynamics via data fusion</SkillItem>
              <SkillItem>Autonomous multi-agent space missions</SkillItem>
              <SkillItem>Assistive AI for AAC communication</SkillItem>
            </SkillList>
          </SkillCategory>
        </SkillsGrid>

        <Education>
          <JourneyTitle>Education</JourneyTitle>
          <EducationItem>
            <Degree>Bachelor of Science in Computer Science</Degree>
            <Institution>University of South Florida</Institution>
            <Date>2014 - 2018</Date>
          </EducationItem>
          <EducationItem>
            <Degree>Bachelor of Science in Biomedical Sciences</Degree>
            <Institution>University of South Florida</Institution>
            <Date>2014 - 2018</Date>
          </EducationItem>
        </Education>
      </Content>
    </Section>
  );
};

export default About; 