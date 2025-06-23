import {
  Section,
  // Container,
  // Card,
  ListContainer,
  ListItem,
  Title,
  PublicationTitle,
  Authors,
  Venue,
  Link,
  Note
} from './styles/Publications.styles';
// import { ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  note?: string; // e.g. "upcoming", "DOI", etc.
};

const publications: Publication[] = [
  {
    title: "Using Artificial Intelligence and Machine Learning to Enhance Mission Design and Operations of the Habitable Worlds Observatory (HWO)",
    authors: `Victoria Da Poian, <strong class="author-highlight">Mark M. Moussa</strong> (presenting author), Umaa Rebbapragada, John Wu, Emilio Salazar‑Donate, Ehsan Gharib‑Nezhad, Vicki Toy‑Edens, Hamsa Venkataram, Mark Giuliano, Steve Chien, Aquib Moin, Gautier Bardi de Fourtou, Connor Basich, Eric Lyens, Bruce Dean, Megan Ansdell`,
    venue: "AGU",
    year: "2024",
    link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1706755"
    // note: "upcoming",
  },
  {
    title:
      "AI/ML Models and Tools for Processing and Analysis of Observational Data from the Habitable Worlds Observatory",
    authors:
      `Megan Ansdell, Ehsan Gharib‑Nezhad, Gautier Bardi de Fourtou, Steven Dillmann, Bruce Dean, Mario Damiano, Aidan Foreman, Cecilia Garraffo, Mahdi Habibi, Wenli Mo, Miguel Martinho, Aquib Moin, <strong class="author-highlight">Mark M. Moussa</strong>, Rafael Martínez‑Galarza, John Wu, Megan Shabram, Victoria Da Poian, Emilio Salazar‑Donate, Mainak Singha, Virisha Timmaraju, Gioia Rau, Hamed Valizadegan, Anuj Patel`,
    venue: "AGU",
    year: "2024",
    link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1681814"
  },
  {
    title:
      "Multimodal Earth Observation Workflow for Machine Learning: A Case Study in Canopy Height Change Prediction",
    authors: `<strong class="author-highlight">Mark Moussa</strong>, James MacKinnon, David Harding, Matthew Brandt`,
    venue: "AGU",
    year: "2024",
    link: "https://agu.confex.com/agu/agu24/meetingapp.cgi/Paper/1682021"
  },
  {
    title:
      "A Novel Framework for Multi‑Path Data Fusion in Earth Observation and New Observing Strategies: Applications to Predicting Forest Canopy Height",
    authors: `<strong class="author-highlight">Mark Moussa</strong>, James MacKinnon, David Harding, Matthew Brandt`,
    venue: "SPAICE",
    year: "2024",
    link: "https://doi.org/10.5281/zenodo.13885555",
  },
  {
    title:
      "An Autonomous Agent Framework for Constellation Missions: A Use Case for Predicting Atmospheric CO₂",
    authors:
      `<strong class="author-highlight">Mark Moussa</strong>, Matt Brandt, Daniel Rogers, Bethany P. Theiling, Shannon Bull, James MacKinnon, Timothy Chase, Ethan Haengel`,
    venue: "SmallSat",
    year: "2023",
    link: "https://digitalcommons.usu.edu/smallsat/2023/all2023/139/",
  },
  {
    title:
      "Multi‑Path Fusion: A Hierarchical Machine Learning Approach for Combining Diverse Data Sets for a Forest Monitoring New Observing System",
    authors:
      `James MacKinnon, David Harding, <strong class="author-highlight">Mark Moussa</strong>, Matt Brandt, Paul Montesano, Mark Carroll, Randolph Wynne, Valerie Thomas, Fred Huemmrich, Jon Ranson`,
    venue: "IGARSS",
    year: "2023",
    link: "https://ieeexplore.ieee.org/document/10282678",
  },
  {
    title: "Using Kamodo for CCMC ITM Output and Beyond",
    authors:
      `Darren De Zeeuw, <strong class="author-highlight">Mark M. Moussa</strong>, Rebecca Ringuette, Lutz Rastatter, Rita Owens, Chiu Wiegand`,
    venue: "AGU",
    year: "2022",
    link: "https://essopenarchive.org/doi/full/10.22541/essoar.167079453.30872037",
  },
  {
    title: "Enhanced Visualization using Kamodo for CCMC ITM Instant Runs",
    authors:
      `Darren De Zeeuw, <strong class="author-highlight">Mark Moussa</strong>, Rebecca Ringuette, Rita Owens, Chiu Wiegand`,
    venue: "AGU",
    year: "2022",
    link: "https://ui.adsabs.harvard.edu/abs/2022AGUFMSA32D1694D",
  },
  {
    title: "Human Adaptations to Multiday Saturation on NASA NEEMO",
    authors:
      `Andrew P. Koutnik, Michelle E. Favre, Karina Noboa, Marcos A. Sanchez‑Gonzalez, Sara E. Moss, Bishoy Goubran, Csilla Air, Angela M. Poff, Chris Q. Rogers, Janine M. DeBlasi, Bishoy Samy, <strong class="author-highlight">Mark Moussa</strong>, Jorge M. Serrador, Dominic P. D’Agostino`,
    venue: "Frontiers in Physiology",
    year: "2021",
    link: "https://doi.org/10.3389/fphys.2020.610000",
  },
  {
    title: "Using AI/ML Techniques to Combine Data",
    authors: `James MacKinnon, Lori Perkins, <strong class="author-highlight">Mark Moussa</strong>, Daniel Rogers`,
    venue: "AGU",
    year: "2021",
    link: "https://ui.adsabs.harvard.edu/abs/2021AGUFMIN15D0401M",
  },
  {
    title:
      "New Capabilities in Space Weather Model Simulation Services at the Community Coordinated Modeling Center (CCMC)",
    authors:
      `Maksym Petrenko, Chinnawat Didigui, Chiu Wiegand, Elon Olsson, Darren De Zeeuw, Corey Bettnehausen, Jia Yue, Joycelyn Jones, Katherine Garcia‑Sage, Kiran Patel, Kyla Roberts, M. Mays, Lutz Rastatter, <strong class="author-highlight">Mark Moussa</strong>, Masha Kuznetsova, Anne Michelle Mendoza, Min‑Yang Chou, Mostafa El‑Alaoui, Peter Neal McNeice, Polyv Manesis, Rebecca Manesis, Richard Mullinix, Aleksandre Taktakishvili, Sarabjit Bakshi, Tina Tsui, Tyler Schiewe, Yihua Zheng`,
    venue: "AGU",
    year: "2021",
    link: "https://ui.adsabs.harvard.edu/abs/2021AGUFMSM45C2293P",
  },
  {
    title:
      "Reducing Barriers in Space Weather Research and Operations with Next‑Generation Simulation Services at the Community Coordinated Modeling Center (CCMC)",
    authors:
      `M. Petrenko, C. Didigui, <strong class="author-highlight">M. Moussa</strong>, C. Wiegand, L. Rastatter, A. Chulaki, K. Garcia‑Sage, M. M. Kuznetsova, P. J. MacNeice, P. Manessis, A. M. Mendoza, T. Schiewe, A. Taktakishvili, T. Tsui, J. Yue, Y. Zheng`,
    venue: "AGU",
    year: "2020",
    link: "https://ntrs.nasa.gov/citations/20205005339",
  },
];

const Publications = () => {
  return (
    <Section id="publications">
      <Title>Publications</Title>

      {/* list-based layout */}
      <ListContainer>
        {publications.map((pub, index) => (
          <ListItem key={index}>
            <PublicationTitle>{pub.title}</PublicationTitle>
            <Authors dangerouslySetInnerHTML={{ __html: pub.authors }} />
            <Venue>{pub.venue}, {pub.year}</Venue>
            {pub.note && <Note>{pub.note}</Note>}
            <Link href={pub.link} target="_blank" rel="noopener noreferrer">
              View Publication
            </Link>
          </ListItem>
        ))}
      </ListContainer>

      {/*
      // card-based layout
      // <Container>
      //   {publications.map((pub, index) => (
      //     <Card key={index}>
      //       <PublicationTitle>{pub.title}</PublicationTitle>
      //       <Authors>{pub.authors}</Authors>
      //       <Venue>{pub.venue}, {pub.year}</Venue>
      //       {pub.note && <Note>{pub.note}</Note>}
      //       <Link href={pub.link} target="_blank" rel="noopener noreferrer">
      //         View Publication
      //       </Link>
      //     </Card>
      //   ))}
      // </Container>
      */}
    </Section>
  );
};

export default Publications;