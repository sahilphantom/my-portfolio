import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { Badge } from "./ui/Badge"
import { Button } from "./ui/Button"
import { Card, CardContent } from "./ui/Card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/Dialog"
import { Bwave, dangila, dbcli, Hdoc, nexa, urduLens } from "../assets/index"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
  {
    id: 1,
    title: "UeduLens",
    shortDescription: "Real-time Urdu OCR web app using modern frontend and deep learning backend.",
    description: "Built an Urdu OCR web app with React and Python that extracts text using CNN, LSTM, and CTC.",
    image: urduLens,
    tags: ["React", "Tailwind CSS", "Framer Motion", "React Router", "Axios"],
    features: [
      "Real-time Urdu text recognition",
      "Smooth animations with Framer Motion",
      "Responsive UI design",
    ],
    demoLink: "https://urdulens2.netlify.app/",
    githubLink: "https://github.com/sahilphantom/urdu_Lens",
    fullDescription:
      "UeduLens is a web application for real-time Urdu text recognition. Built with React, Tailwind CSS, and Framer Motion on the frontend, and a Python backend utilizing CNN, LSTM, and CTC for accurate script recognition. It features a clean, responsive design and smooth animations to enhance user experience.",
  },
  {
    id: 2,
    title: "HealthDoc",
    shortDescription: "Responsive healthcare interface with animations and intuitive navigation.",
    description: "A professional healthcare web interface built with React and TailwindCSS.",
    image: Hdoc,
    tags: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Healthcare-themed layout",
      "Smooth transitions",
      "Mobile-responsive interface",
    ],
    demoLink: "https://healthdoc12.netlify.app/",
    githubLink: "https://github.com/sahilphantom/Healthdoc",
    fullDescription:
      "HealthDoc is a sleek healthcare web interface featuring responsive layouts, animated transitions, and intuitive navigation. Built using React and TailwindCSS, it provides a smooth and professional experience for medical-related services or platforms.",
  },
  {
    id: 3,
    title: "Brainwave",
    shortDescription: "Modern UI web app with dynamic styling and full responsiveness.",
    description: "A visually attractive modern web app built with React, Tailwind, and Framer Motion.",
    image: Bwave,
    tags: ["React", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      "Fully responsive layout",
      "Engaging motion effects",
      "Clean UI design",
    ],
    demoLink: "https://brainwavesm.netlify.app/",
    githubLink: "https://github.com/sahilphantom/brainwave",
    fullDescription:
      "Brainwave is a visually modern web application that uses TailwindCSS and Framer Motion to deliver a responsive and stylish user experience across all devices. Ideal for showcasing creative digital concepts.",
  },
  {
    id: 4,
    title: "Nexabuy",
    shortDescription: "E-commerce platform with clean design and state management.",
    description: "Modern e-commerce app using Zustand for state and Ant Design for layout components.",
    image: nexa,
    tags: ["React", "Tailwind CSS", "Ant Design", "React Router", "Zustand"],
    features: [
      "Product management UI",
      "Responsive cart functionality",
      "Modern design using Ant Design",
    ],
    demoLink: "https://nexabuy.netlify.app/",
    githubLink: "https://github.com/sahilphantom/nexabuy_app",
    fullDescription:
      "Nexabuy is a modern e-commerce website developed with React, TailwindCSS, Ant Design, and Zustand. It features a seamless cart, clean UI, and smooth navigation with React Router DOM.",
  },
  {
    id: 5,
    title: "Dangila Landing Page",
    shortDescription: "Landing page for a cosmetic brand with engaging design.",
    description: "A captivating cosmetic brand landing page using React and Tailwind.",
    image: dangila,
    tags: ["React", "Tailwind CSS"],
    features: [
      "Brand-focused layout",
      "Smooth and clean design",
      "Highly responsive UI",
    ],
    demoLink: "https://dangila.netlify.app/",
    githubLink: "https://github.com/sahilphantom/dangila_landing_page",
    fullDescription:
      "Dangila is a single-page landing site for a cosmetic brand, designed with clean sections and modern UI aesthetics. Built with React and TailwindCSS to offer responsive and engaging user interaction.",
  },
  {
    id: 6,
    title: "DB Backup CLI Tool",
    shortDescription: "Node.js CLI tool for automated database backups and restores.",
    description: "CLI tool to back up and restore databases like MySQL, PostgreSQL, MongoDB, with compression and cloud/local storage.",
    image: dbcli,
    tags: ["Node.js", "Yargs", "Inquirer", "Chalk", "Ora", "Boxen"],
    features: [
      "Backup and restore for MySQL, PostgreSQL, MongoDB, SQLite",
      "Humanized CLI with Inquirer and colorized feedback",
      "Compression and local/cloud storage support",
      "Automatic scheduling and logging",
      "Summarized reports with boxen UI",
    ],
    demoLink: "#",
    githubLink: "https://github.com/sahilphantom/db-backup-cli",
    fullDescription:
      "A robust Node.js CLI tool that automates backups and restores for multiple databases (MySQL, PostgreSQL, MongoDB, SQLite). Features interactive prompts via Inquirer, real-time feedback with Ora spinners, colorized logging using Chalk, and post-operation summary reports with Boxen. Supports local and cloud storage along with compressed backup files.",
  },
];


  return (
   <section id="projects" className="py-20 bg-black text-white">
  <div className="container mx-auto px-4">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={fadeIn}
      className="text-center mb-16"
    >
      <Badge variant="outline" className="mb-4 text-white border-white">
        Portfolio
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
      <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          variants={fadeIn}
        >
          <Card
            className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg bg-zinc-900 text-white ${
              expandedProject === project.id ? "ring-2 ring-purple-600" : ""
            }`}
            onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
          >
            <CardContent className="p-0">
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.image || "https://via.placeholder.com/600x400"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.shortDescription}</p>
                </div>
              </div>

              <AnimatePresence>
                {expandedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 border-t border-gray-700 bg-zinc-800"
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Key Features:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                          {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4 pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.githubLink, "_blank")
                          }}
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(project.demoLink, "_blank")
                          }}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedProject(project)
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="p-4 text-center">
                <ChevronDown
                  className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                    expandedProject === project.id ? "rotate-180" : ""
                  }`}
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>

  {selectedProject && (
    <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
      <DialogContent className="max-w-3xl bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>{selectedProject.title}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-wrap gap-2 mt-2 mb-4">
              {selectedProject.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <img
            src={selectedProject.image || "https://via.placeholder.com/600x400"}
            alt={selectedProject.title}
            className="w-full rounded-md object-cover aspect-video"
          />
          <p className="text-gray-300">{selectedProject.fullDescription}</p>
          <div className="space-y-4">
            <h4 className="font-semibold">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {selectedProject.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end gap-4 mt-4">
            <Button variant="outline" asChild>
              <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
            <Button asChild>
              <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )}
</section>

  )
}
