import { motion } from "framer-motion";
import {
  mobile,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  framer,
  Ant,
  Mui,
  Github,
  Hdoc,
  Bwave,
  img1,
  img3,
  img2,
  img4,
  web,
  backend,
  creator,
  nexa,
  dangila,
  node,
  express,
  mongo,
} from "../assets";
import { SiHtml5 , SiCss3 , SiJavascript , SiReact , SiTailwindcss , SiAntdesign , SiFramer, SiGithub } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

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
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "API Integration",
    icon: mobile,
  },
  {
    title: "Responsive Design",
    icon: backend,
  },
  {
    title: "Backend Development",
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
    icon: img1,
  },
  {
    name: "JavaScript",
    icon: img3,
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
    icon: img2,
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
    icon: img4,
  },
  {
    name: "node",
    icon: node,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "mongo",
    icon: mongo,
  },
  // {
  //   name: "Material Ui",
  //   icon: Mui,
  // },
];

const experiences = [
  {
    title: "HTML",
    icon:  html, 
    iconBg: "#fff",
    points: [
      "Learned the foundational structure of web pages using HTML.",
      "Gained knowledge about semantic elements and web accessibility.",
      "Built static web pages to practice and understand the basics of markup."
    ],
  },
  {
    title: "CSS",
    icon: css, 
    iconBg: "#fff",
    points: [
      "Developed skills to style and layout web pages using CSS.",
      "Learned responsive design techniques for better user experience.",
      "Explored CSS frameworks and implemented grid and flexbox layouts."
    ],
  },
  {
    title: "JavaScript",
    icon: javascript, 
    iconBg: "#F7DF1E",
    points: [
      "Acquired programming logic with JavaScript for dynamic web functionalities.",
      "Practiced DOM manipulation to create interactive user interfaces.",
      "Explored ES6+ features for modern JavaScript development."
    ],
  },
  {
    title: "Tailwind CSS",
    icon: tailwind, 
    iconBg: "#fff",
    points: [
      "Mastered utility-first CSS framework for rapid UI development.",
      "Built responsive and modern layouts with Tailwind's pre-built utilities.",
      "Created reusable and maintainable styles for consistent designs."
    ],
  },
  {
    title: "React.js",
    icon: reactjs, 
    iconBg: "#333",
    points: [
      "Built dynamic and component-based web applications using React.",
      "Learned state management and props for better application workflows.",
      "Implemented React Router for seamless navigation between pages."
    ],
  },
  {
    title: "Framer-Motion",
    icon: framer, 
    iconBg: "#000",
    points: [
      "Enhanced user experience by adding smooth animations with Framer Motion.",
      "Implemented interactive transitions for visually appealing interfaces.",
      "Explored animation techniques for dynamic and engaging designs."
    ],
  },
  {
    title: "Github",
    icon: Github,
    iconBg: "#eee",
    points: [
      "Learned version control and collaboration using Github.",
      "Managed code repositories and tracked changes effectively.",
      "Collaborated with teams on projects through Github workflows like branching and merging."
    ],
  },
  {
    title: "Node.js",
    icon: node, 
    iconBg: "#000",
    points: [
      "Developed fast and scalable server-side applications using Node.js.",
"Leveraged asynchronous, event-driven architecture to handle high-concurrency workloads efficiently.",
"Integrated backend services and APIs to ensure smooth frontend-backend communication."
    ],
  },
  {
    title: "Express.js",
    icon: express, 
    iconBg: "#000",
    points: [
      "Built RESTful APIs and middleware logic with Express.js for robust backend infrastructure.",
"Implemented route handling, authentication, and data validation to support secure and scalable applications.",
"Optimized server performance through modular architecture and efficient request handling."
    ],
  },
  {
    title: "MongoDB",
    icon: mongo, 
    iconBg: "#000",
    points: [
      "Designed and managed flexible, schema-less databases using MongoDB.",
"Implemented CRUD operations, indexing, and aggregation pipelines for efficient data querying and storage.",
"Ensured data integrity and performance by using Mongoose for schema modeling and validation."
    ],
  },
  
  // {
  //   title: "Material-UI",
  //   icon: Mui,
  //   iconBg: "#000",
  //   points: [
  //     "Built user interfaces with Material-UI for React applications.",
  //     "Implemented responsive design using Material-UI’s grid system and components.",
  //     "Customized Material-UI themes for consistent and modern designs."
  //   ],
  // },
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
    name: "HealthDoc",
    description:
      "A professionally crafted healthcare web interface featuring responsive design, dynamic animations, and an intuitive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "violet-gradient",
      },
    ],
    image: Hdoc,
    source_code_link: "https://github.com/sahilphantom/Healthdoc",
    live_demo_link:"https://healthdoc12.netlify.app/",
  },
  {
    name: "Brainwave",
    description:
      "A visually appealing and modern web application designed with dynamic styling and responsive layouts for seamless performance across all screen sizes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "violet-gradient",
      },
    ],
    image: Bwave,
    source_code_link: "https://github.com/sahilphantom/brainwave",
    live_demo_link:"https://brainwavesm.netlify.app/",
  },
  {
    name: "Nexabuy",
    description:
      "Built a modern e-commerce website with a clean and responsive design using React, TailwindCSS, and Ant Design. Leveraged Zustand for efficient state management and React Router DOM for smooth navigation. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ant design",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "violet-gradient",
      },
      {
        name: "zustand",
        color: "green-pink-gradient",
      },
    ],
    image: nexa,
    source_code_link: "https://github.com/sahilphantom/nexabuy_app",
    live_demo_link:"https://nexabuy.netlify.app/",
  },
  {
    name: "Dangila Landing Page",
    description:
      "A modern and visually captivating landing page for a cosmetic product brand, designed to highlight features, and user engagement. Built using React.js and TailwindCSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
     
    ],
    image: dangila,
    source_code_link: "https://github.com/sahilphantom/dangila_landing_page",
    live_demo_link:"https://dangila.netlify.app/",
  },
 
];

export { services, technologies, experiences, testimonials, projects };
