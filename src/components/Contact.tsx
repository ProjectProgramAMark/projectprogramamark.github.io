import {
  Section,
  Title,
  Text,
  ContactInfo,
  Link
} from './styles/Contact.styles';

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Text>
        If you'd like to connect or collaborate, feel free to drop me a line!
      </Text>
      <ContactInfo>
        <Link href="mailto:mark.moussa1234@gmail.com">Email</Link>
        <Link href="https://www.linkedin.com/in/markmoussa1234/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
        <Link href="https://x.com/thisisnotmark_" target="_blank" rel="noopener noreferrer">X / Twitter</Link>
        <Link href="https://github.com/ProjectProgramAMark" target="_blank" rel="noopener noreferrer">GitHub</Link>
      </ContactInfo>
    </Section>
  );
};

export default Contact; 