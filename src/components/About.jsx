// import React from "react";
// import Tilt from "react-tilt";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
// import { fadeIn, textVariant } from "../utils/motion";

// const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
//       <div
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450,
//         }}
//         className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
//       >
//         <img
//           src={icon}
//           alt='web-development'
//           className='w-16 h-16 object-contain'
//         />

//         <h3 className='text-white text-[20px] font-bold text-center'>
//           {title}
//         </h3>
//       </div>
//     </motion.div>
//   </Tilt>
// );

// const About = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         <p className={styles.sectionSubText}>Introduction</p>
//         <h2 className={styles.sectionHeadText}>Overview.</h2>
//       </motion.div>

//       <motion.p
//         variants={fadeIn("", "", 0.1, 1)}
//         className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
//       >
//         I'm a skilled frontend developer with expertise in React, JavaScript, and modern UI frameworks. 
//   I specialize in creating dynamic, responsive, and visually appealing web applications. 
//   Let's collaborate to turn your ideas into seamless digital experiences!
//       </motion.p>

//       <div className='mt-20 flex flex-wrap gap-10'>
//         {services.map((service, index) => (
//           <ServiceCard key={service.title} index={index} {...service} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(About, "about");

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./CanvasRevealEffect";
import { Asterisk } from 'lucide-react';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Sahil_cv from "../../public/Sahil's_cv.pdf"
// console.log(SahilCV)
const About = () => {
  const openResume = () => {
    window.open("file:///C:/Users/Mg/Downloads/Sahil%20Resume.pdf")
  }
  return (
    <div className="py-8 flex flex-col items-start justify-start bg-[#000] dark:bg-black w-full gap-4 mx-auto px-8">
      {/* Intro Section */}
      <motion.div variants={textVariant()}  >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 mb-10  text-secondary text-[20px] max-w-3xl leading-[30px] text-left"
      >
        I'm a skilled frontend developer with expertise in React, JavaScript, and modern UI frameworks.
        I specialize in creating dynamic, responsive, and visually appealing web applications.
        Let's collaborate to turn your ideas into seamless digital experiences!
      </motion.p>
      <motion.div  variants={fadeIn("", "", 0.2, 1)} className="mb-4">
        {/* View Resume Button */}
        <a
  href={Sahil_cv}
  download="Sahil CV"
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-[#915EFF] text-white-100 px-4 py-2 rounded-md mb-8"

>
  View Resume
</a>

      </motion.div>

      {/* Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
        <Card title="Frontend Web Developer" icon={<Asterisk className="h-10 w-10 text-white" />}>
          <CanvasRevealEffect animationSpeed={5.1} containerClassName="bg-emerald-900" />
        </Card>
        <Card title="UI/UX Implementation" icon={<Asterisk className="h-10 w-10 text-white" />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card title="Interactive Animations" icon={<Asterisk className="h-10 w-10 text-white" />}>
          <CanvasRevealEffect animationSpeed={3} containerClassName="bg-sky-600" colors={[[125, 211, 252]]} />
        </Card>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");


const Card = ({ title, icon, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white group/canvas-card flex items-center justify-center inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 to-transparent bg-black max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full w-full absolute inset-0">
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-2 ">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

