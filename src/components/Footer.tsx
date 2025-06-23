import { Container } from './styles/Footer.styles';

const Footer = () => {
  return (
    <Container>
      <p>&copy; {new Date().getFullYear()} Mark Moussa. All rights reserved.</p>
    </Container>
  );
};

export default Footer; 