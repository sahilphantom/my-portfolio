import React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, ChevronDown } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/Dialog"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
  features,
  fullDescription,
  expandedProject,
  setExpandedProject,
  setSelectedProject,
  project,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className={`bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
          expandedProject === project.id ? "ring-2 ring-purple-600" : ""
        }`}
        onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image || "/placeholder.svg"}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <AnimatePresence>
          {expandedProject === project.id && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4"
            >
              {features && (
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="list-disc list-inside text-secondary text-[14px] space-y-1">
                    {features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex mt-5 flex-wrap justify-between">
          <button
            className="px-4 py-1 indigo-gradient rounded-full text-white text-[14px]"
            onClick={(e) => {
              e.stopPropagation()
              window.open(live_demo_link, "_blank")
            }}
          >
            #Live Demo
          </button>
          <button
            className="px-3 py-1 indigo-gradient rounded-full text-white text-[14px]"
            onClick={(e) => {
              e.stopPropagation()
              window.open(source_code_link, "_blank")
            }}
          >
            #View Code
          </button>
          {(features || fullDescription) && (
            <button
              className="px-3 py-1 indigo-gradient rounded-full text-white text-[14px]"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedProject(project)
              }}
            >
              #Learn More
            </button>
          )}
        </div>

        <div className="mt-4 text-center">
          <ChevronDown
            className={`w-6 h-6 mx-auto transition-transform duration-300 text-secondary ${
              expandedProject === project.id ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
    </motion.div>
  )
}

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My Selected work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            project={project}
            expandedProject={expandedProject}
            setExpandedProject={setExpandedProject}
            setSelectedProject={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl bg-tertiary border-none">
            <DialogHeader>
              <DialogTitle className="text-white text-[24px] font-bold">{selectedProject.name}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <p key={i} className={`text-[14px] ${tag.color}`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.name}
                className="w-full rounded-2xl object-cover aspect-video"
              />
              <p className="text-secondary text-[16px]">
                {selectedProject.fullDescription || selectedProject.description}
              </p>
              {selectedProject.features && (
                <div className="space-y-4">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  <ul className="list-disc list-inside text-secondary space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex justify-end gap-4 mt-4">
                <button className="px-4 py-2 indigo-gradient rounded-full text-white">
                  <a
                    href={selectedProject.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </button>
                <button className="px-4 py-2 indigo-gradient rounded-full text-white">
                  <a
                    href={selectedProject.live_demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export default SectionWrapper(Works, "")
