import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  voxelverse,
  orbitroom,
  framewalk,
  spacecase,
  rbk,
  aur,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "3D Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Rush By Kira",
    icon: rbk,
    iconBg: "#ffffff",
    date: "May 2024 - July 2024",
    points: [
      "Worked as front-end developer",
      "Created APIs for the website on Node JS using Express, managed data on MongoDB, and performed queries using Mongoose",
      "Added some 3d Cloth models using Three.js for showcasing.",
      "Worked on the company's front-end using React.js, and Tailwind CSS.",
    ],
  },

  {
    title: "Full Stack Developer",
    company_name: "Amity University Rajasthan",
    icon: aur,
    iconBg: "#383E56",
    date: "Jan 2025 - Feb 2025",
    points: [
      "Developing and maintaining Odyssey 2025 website",
      "Created Front end and backend of the odyssey website 2025 of Amity University Rajasthan.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "VoxelVerse",
    description:
      "A playful, voxel-style 3D world inspired by Minecraft, where each zone represents a section of your portfolio. Combines nostalgia with creativity,it feel like a mini open-world game.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "blender",
        color: "pink-text-gradient",
      },
    ],
    image: voxelverse,
    source_code_link: "https://github.com/saicastic/voxelverse",
    deployed_link: "https://voxelverse.vercel.app/",
  },
  {
    name: "FrameWalk",
    description:
      "A virtual 3D gallery where users can walk through an elegant space to view showcased work on digital walls. Built with React Three Fiber, the gallery allows interactions like clicking on artwork to reveal details or project links.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: framewalk,
    source_code_link: "https://github.com/saicastic/framewalk",
    deployed_link: "https://framewalk.vercel.app/",
  },
  {
    name: "OrbitRoom",
    description:
      "An 3D environment with a stylized room at its center, where users can explore and interact with various elements. The space blends structures, offering a peaceful, immersive showcase.",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "webGL",
        color: "pink-text-gradient",
      },
    ],
    image: orbitroom,
    source_code_link: "https://github.com/saicastic/orbitroom",
    deployed_link: "https://orbitroom.vercel.app/",
  },
  {
    name: "SpaceCase",
    description:
      "SpaceCase is an immersive 3D web application that showcases advanced real-time rendering and interactive design principles. Built using Three.js, the project delivers a seamless and responsive user experience.  ",
    tags: [
      {
        name: "three.js",
        color: "blue-text-gradient",
      },
      {
        name: "react.js",
        color: "green-text-gradient",
      },
      {
        name: "webGL",
        color: "pink-text-gradient",
      },
    ],
    image: spacecase,
    source_code_link: "https://github.com/saicastic/spacecase",
    deployed_link: "https://spacecase-nine.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
