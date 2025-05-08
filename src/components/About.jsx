import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Sahil_cv from '../assets/Sahil_cv.pdf'

const ServiceCard = ({ index, title, icon }) => (
 
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' xs:w-[250px] w-full green-pink-gradient p-[1px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       I'm a skilled full-stack web developer with expertise in React, JavaScript, Node.js, and
        modern UI frameworks like TailwindCSS and Ant Design. I specialize in building dynamic, responsive,
         and visually appealing web applications, backed by robust, scalable backend solutions using Express.js and MongoDB. 
         From crafting intuitive user interfaces to designing efficient APIs, I focus on delivering seamless digital experiences that perform at scale. Let's collaborate to bring your ideas to life.
      </motion.p>
       {/* View Resume Button */}
       <a
  href={Sahil_cv}
  // download="Sahil CV"
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-[#915EFF] text-white-100 px-4 py-2 rounded-md mb-4"

>
  View Resume
</a>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");



