import msf from "../src/assets/medical-specialist-finder-preview.png";
import bc from "../src/assets/boredom-challenge-preview.png";
import picmodoro from "../src/assets/picmodoro-preview.png";
import bookxmovie from "../src/assets/bookxmovie-preview.png";

const projects = [
  {
    name: "bookXmovie",
    description:
      "A fullstack web app to show and vote for which version was better — book or movie? Combined both Google Books API and TMDB API to create my own database.",
    tags: [
      "ReactJS",
      "Chakra UI",
      "Redux/Toolkit",
      "RTK Query",
      "Google Books API",
      "TMDB API",
      "NodeJS",
      "ExpressJS",
      "PostgresSQL",
      "bcrypt",
      "react-hook-form",
      "react-infinite-scroll",
    ],
    demoUrl: "https://bookxmovie.netlify.app/",
    sourceUrl: "https://github.com/rodelcdavid/bookxmovie",
    imgPreview: bookxmovie,
    type: "Personal Project",
  },
  {
    name: "Picmodoro",
    description:
      "A fullstack web app that will keep you motivated by showing a part of your goal every time you finish a Pomodoro session. Able to create and save multiple goals to your account.",
    tags: [
      "ReactJS",
      "Material UI",
      "Redux/Toolkit",
      "NodeJS",
      "ExpressJS",
      "PostgresSQL",
      "axios",
      "JWT",
      "bcrypt",
      "react-router-dom",
      "react-hook-form",
    ],
    demoUrl: "https://picmodoro.netlify.app/",
    sourceUrl: "https://github.com/rodelcdavid/picmodoro",
    imgPreview: picmodoro,
    type: "Personal Project",
  },
  {
    name: "30-Day Boredom Challenge",
    description: `A web app that will help you gain back your attention span by embracing boredom in a span of 30 days. Inspired by Chris Bailey's TED Talk titled "How to Get Your Brain to Focus". `,
    tags: ["ReactJS", "Styled Components", "Context API", "react-router-dom"],
    demoUrl: "https://rodelcdavid.github.io/boredom-challenge/",
    sourceUrl: "https://github.com/rodelcdavid/boredom-challenge",
    imgPreview: bc,
    type: "Personal Project",
  },
  {
    name: "PH Medical Specialist Finder",
    description:
      "A web app that will help you find Philhealth accredited medical specialists in the Philippines. Latest data (pdf file) extracted from Philhealth's website and processed via NodeJS.",
    tags: ["ReactJS", "Material UI", "NodeJS", "Context API", "pdf2table"],
    demoUrl: "https://phspecialistfinder.netlify.app/",
    sourceUrl: "https://github.com/rodelcdavid/phspecialistfinder",
    imgPreview: msf,
    type: "Personal Project",
  },
];

export default projects;
