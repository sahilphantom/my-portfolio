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
  urduLens,
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
    name: "UeduLens",
    description: "Real-time Urdu OCR web app with modern UI.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "Framer Motion", color: "text-green-500" },
      { name: "Tailwind CSS", color: "text-pink-500" },
      { name: "react-router-dom", color: "text-violet-500" },
      { name: "axios", color: "text-pink-500" },
    ],
    image: urduLens,
    source_code_link: "https://github.com/sahilphantom/urdu_Lens",
    live_demo_link: "https://urdulens2.netlify.app/",
    features: [
      "Real-time Urdu text detection",
      "Smooth transitions with Framer Motion",
      "Fully responsive UI design",
    ],
    fullDescription:
      "Built a responsive web application for real-time Urdu text recognition using React, TailwindCSS, and Framer Motion. Collaborated on an end-to-end OCR system with a Python backend leveraging CNN, LSTM, and CTC for accurate Urdu script extraction.",
  },
  {
    name: "HealthDoc",
    description: "Responsive healthcare UI with animations.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "Framer Motion", color: "text-green-500" },
      { name: "Tailwind CSS", color: "text-pink-500" },
      { name: "react-router-dom", color: "text-violet-500" },
    ],
    image: Hdoc,
    source_code_link: "https://github.com/sahilphantom/Healthdoc",
    live_demo_link: "https://healthdoc12.netlify.app/",
    features: [
      "Healthcare interface design",
      "Dynamic animations for interactivity",
      "Mobile-friendly layout",
    ],
    fullDescription:
      "A professionally crafted healthcare web interface featuring responsive design, dynamic animations, and an intuitive user experience.",
  },
  {
    name: "Brainwave",
    description: "Modern and stylish responsive UI app.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "Framer Motion", color: "text-green-500" },
      { name: "Tailwind CSS", color: "text-pink-500" },
      { name: "react-router-dom", color: "text-violet-500" },
    ],
    image: Bwave,
    source_code_link: "https://github.com/sahilphantom/brainwave",
    live_demo_link: "https://brainwavesm.netlify.app/",
    features: [
      "Visually appealing UI",
      "Smooth page transitions",
      "Responsive design for all screen sizes",
    ],
    fullDescription:
      "A visually appealing and modern web application designed with dynamic styling and responsive layouts for seamless performance across all screen sizes.",
  },
  {
    name: "Nexabuy",
    description: "E-commerce site with state management.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "ant design", color: "text-green-500" },
      { name: "Tailwind CSS", color: "text-pink-500" },
      { name: "react-router-dom", color: "text-violet-500" },
      { name: "zustand", color: "text-pink-600" },
    ],
    image: nexa,
    source_code_link: "https://github.com/sahilphantom/nexabuy_app",
    live_demo_link: "https://nexabuy.netlify.app/",
    features: [
      "Product listing & cart system",
      "Responsive layout with Ant Design",
      "State management with Zustand",
    ],
    fullDescription:
      "Built a modern e-commerce website with a clean and responsive design using React, TailwindCSS, and Ant Design. Leveraged Zustand for efficient state management and React Router DOM for smooth navigation.",
  },
  {
    name: "Dangila Landing Page",
    description: "Cosmetics brand landing page UI.",
    tags: [
      { name: "react", color: "text-blue-500" },
      { name: "Tailwind CSS", color: "text-pink-500" },
    ],
    image: dangila,
    source_code_link: "https://github.com/sahilphantom/dangila_landing_page",
    live_demo_link: "https://dangila.netlify.app/",
    features: [
      "Attractive cosmetic product layout",
      "Brand-focused landing design",
      "Clean responsive design",
    ],
    fullDescription:
      "A modern and visually captivating landing page for a cosmetic product brand, designed to highlight features and user engagement. Built using React.js and TailwindCSS.",
  },
];

export { services, technologies, experiences, testimonials, projects };
