import msf from "../src/assets/medical-specialist-finder-preview.png";
import bc from "../src/assets/boredom-challenge-preview.png";
import picmodoro from "../src/assets/picmodoro-preview.png";

const projects = [
  {
    name: "Picmodoro",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
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
      "yup",
    ],
    demoUrl: "https://rodelcdavid.github.io/picmodoro/",
    sourceUrl: "http://www.github.com",
    imgPreview: picmodoro,
    type: "Personal Project",
  },
  {
    name: "30-Day Boredom Challenge",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
    tags: ["ReactJS", "Styled Components", "Context API", "react-router-dom"],
    demoUrl: "http://www.google.com",
    sourceUrl: "http://www.github.com",
    imgPreview: bc,
    type: "Personal Project",
  },
  {
    name: "PH Medical Specialist Finder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua.",
    tags: ["ReactJS", "Material UI", "NodeJS", "Context API", "pdf2table"],
    demoUrl: "http://www.google.com",
    sourceUrl: "http://www.github.com",
    imgPreview: msf,
    type: "Personal Project",
  },
];

export default projects;
