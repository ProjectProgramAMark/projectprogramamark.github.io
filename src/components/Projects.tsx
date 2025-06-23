import {
  Section,
  Container,
  Card,
  Title,
  ProjectTitle,
  Description,
  TechStack,
  TechTag,
  Link,
  ProjectType
} from './styles/Projects.styles';

interface Project {
  title: string;
  description: string;
  link?: string;
  technologies: string[];
  type: 'research' | 'development';
}

const projects: Project[] = [
  {
    title: "MosaicVoice AAC",
    description: "Personalized on-device and cloud LLM sentence and phrase generation, zero-shot voice cloning, AAC symbol generation, \
    and developed Augmentative Alternative Communication (AAC) app to bridge communication for non-verbal users. Just under 1,000 users in beta.",
    link: "https://mosaicvoiceaac.com/",
    technologies: ["PyTorch", "Large Language Models (LLMs)", "Vision Language Models (VLMs)", "Transformers", "Unsloth", "QLoRA", "vLLM", "Modal", 
      "AWS S3", "React Native/Expo"],
    type: "development"
  },
  {
    title: "Wildfire Detection & Fire Radiative Power Regression",
    description: "Developed novel AI/ML model pipeline for efficient onboard and low-latency wildfire analysis, detection, and prediction, \
    alongside development of new next generation wildfire sensor for airborne and spaceborne missions; ICCV 2025 submission in progress.",
    // link: "",
    technologies: ["PyTorch", "MobileNet", "TF-Lite", "ONNX", "NVIDIA Jetson", "CUDA", "Python"],
    type: "research"
  },
  {
    title: "Exoplanet Biosignature Flux Prediction",
    description: "Bayesian deep‑learning models trained on direct imaging spectra and exoplanet atmospheric characteristics to \
    predict biosignature fluxes as a proxy for life on exoplanets. To be used to find exoplanet candidates for Habitable Worlds Observatory (HWO). \
    Uncertainty quantification via variational inference.",
    // link: "",
    technologies: ["PyTorch","Bayesian CNNs", "Vision Transformers", "Variational Inference", "Flow Matching"],
    type: "research"
  },
  {
    title: "Forest Canopy Height Change Modeling",
    description: "426-band hyperspectral + LiDAR fusion across large scale remote-sensing/Earth Observation curated dataset at \
    1m & 10m resolutions using a multimodal hierarchical neural network (CNNs, Transformers, LSTMs), \
    achieving state-of-the-art cross-site MAE.",
    // link: "",
    technologies: ["PyTorch", "Vision Transformers", "Convolutional Neural Networks", "Multimodal Data Fusion", "Foundation Models", "Hierarchical Neural Networks"],
    type: "research"
  },
  {
    title: "Multi-Agent Decision-Making for Space Missions",
    description: "Autonomous high-level decision making for multi-agent systems. Things like whether to observe scientific phenomena, navigate, cool down, preserve power, etc.       \
    Using Reinforcement Learning. Successfully ran campaign in Alaska for Methane plume detection using autonomous drones. Presented at SmallSat 2023.",
    // link: "",
    technologies: ["Reinforcement Learning", "PyTorch"],
    type: "development"
  },
  {
    title: "Super Resolution on Satellite Imagery Data",
    description: "Used Generative Adversarial Networks (GANs) to increase resolution to 8K resolution for high visualization and further scientific discovery.",
    // link: "",
    technologies: ["Generative Adversarial Networks (GANs)", "Super Resolution", "ESRGAN", "Tensorflow"],
    type: "development"
  },
  // {
  //   title: "AI Safety Monitoring System",
  //   description: "Developed a system for monitoring and analyzing AI model behavior for safety and ethical concerns. Includes tools for bias detection, decision explanation, and performance auditing.",
  //   link: "https://github.com/yourusername/ai-safety-monitor",
  //   technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
  //   type: "development"
  // },
  // {
  //   title: "Transformer Architecture Optimization",
  //   description: "Developed innovative techniques for improving transformer model efficiency, resulting in 30% reduction in computational requirements while maintaining accuracy. Research focused on attention mechanism optimization and sparse computation.",
  //   link: "https://github.com/yourusername/transformer-optimization",
  //   technologies: ["PyTorch", "Transformers", "CUDA", "Python"],
  //   type: "research"
  // },
  // {
  //   title: "Scalable MLOps Pipeline",
  //   description: "Designed and implemented an end-to-end MLOps pipeline handling model training, deployment, and monitoring for large-scale AI applications. Features automated retraining, A/B testing, and performance monitoring.",
  //   link: "https://github.com/yourusername/mlops-pipeline",
  //   technologies: ["Kubernetes", "TensorFlow", "Docker", "AWS"],
  //   type: "development"
  // },
  // {
  //   title: "AI Safety Monitoring System",
  //   description: "Developed a system for monitoring and analyzing AI model behavior for safety and ethical concerns. Includes tools for bias detection, decision explanation, and performance auditing.",
  //   link: "https://github.com/yourusername/ai-safety-monitor",
  //   technologies: ["Python", "FastAPI", "React", "PostgreSQL"],
  //   type: "development"
  // }
];

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects & Research</Title>
      <Container>
        {projects.map((project, index) => (
          <Card key={index}>
            <ProjectType>{project.type === 'research' ? '🔬 Research' : '💻 Development'}</ProjectType>
            <ProjectTitle>{project.title}</ProjectTitle>
            <Description>{project.description}</Description>
            <TechStack>
              {project.technologies.map((tech, techIndex) => (
                <TechTag key={techIndex}>{tech}</TechTag>
              ))}
            </TechStack>
            <Link 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Project
            </Link>
          </Card>
        ))}
      </Container>
    </Section>
  );
};

export default Projects; 