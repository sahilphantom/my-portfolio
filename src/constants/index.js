import { motion } from "framer-motion";
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
  framer,
  tripguide,
  threejs,
  Ant,
} from "../assets";
import { SiHtml5 , SiCss3 , SiJavascript , SiReact , SiTailwindcss , SiAntdesign , SiFramer } from "react-icons/si";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Frontend Web Development",
    icon: web,
  },
  {
    title: "UI/UX Implementation",
    icon: mobile,
  },
  {
    title: "Web Application Optimization",
    icon: backend,
  },
  {
    title: "Interactive Animations",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Ant Design",
    icon: Ant,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "HTML",
    icon:  SiHtml5, 
    iconBg: "#E34C26",
    points: [
      "Learned the foundational structure of web pages using HTML.",
      "Gained knowledge about semantic elements and web accessibility.",
      "Built static web pages to practice and understand the basics of markup."
    ],
  },
  {
    title: "CSS",
    icon: SiCss3, 
    iconBg: "#1572B6",
    points: [
      "Developed skills to style and layout web pages using CSS.",
      "Learned responsive design techniques for better user experience.",
      "Explored CSS frameworks and implemented grid and flexbox layouts."
    ],
  },
  {
    title: "JavaScript",
    icon: SiJavascript, 
    iconBg: "#F7DF1E",
    points: [
      "Acquired programming logic with JavaScript for dynamic web functionalities.",
      "Practiced DOM manipulation to create interactive user interfaces.",
      "Explored ES6+ features for modern JavaScript development."
    ],
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss, 
    iconBg: "#38B2AC",
    points: [
      "Mastered utility-first CSS framework for rapid UI development.",
      "Built responsive and modern layouts with Tailwind's pre-built utilities.",
      "Created reusable and maintainable styles for consistent designs."
    ],
  },
  {
    title: "React.js",
    icon: SiReact, 
    iconBg: "#61DAFB",
    points: [
      "Built dynamic and component-based web applications using React.",
      "Learned state management and props for better application workflows.",
      "Implemented React Router for seamless navigation between pages."
    ],
  },
  {
    title: "Framer-Motion",
    icon: SiFramer, 
    iconBg: "#0055FF",
    points: [
      "Enhanced user experience by adding smooth animations with Framer Motion.",
      "Implemented interactive transitions for visually appealing interfaces.",
      "Explored animation techniques for dynamic and engaging designs."
    ],
  },
  {
    title: "Ant Design",
    icon: SiAntdesign, 
    iconBg: "#0170FE",
    points: [
      "Built professional-grade user interfaces using Ant Design components.",
      "Streamlined design processes with pre-built, customizable UI elements.",
      "Focused on creating scalable and consistent design systems."
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
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
