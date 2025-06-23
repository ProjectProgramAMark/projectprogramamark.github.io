import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine, OutMode } from 'tsparticles-engine';
import { Container } from './styles/ParticleBackground.styles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: { enable: true },
    background: {
      color: { value: "#2C3E50" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
        resize: true,
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#1ABC9C" },
      links: { color: "#1ABC9C", distance: 150, enable: true, opacity: 0.5, width: 1 },
      collisions: { enable: true },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce" as OutMode
        },
        speed: 1,
      },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return (
    <Container>
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </Container>
  );
};

export default ParticleBackground;