

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {

  return (
    <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
      {technologies.map((technology) => (
        <div className='w-20 h-20 sm:w-28 sm:h-28' key={technology.name}>
            <img 
              src={technology.icon || "/placeholder.svg"} 
              alt={technology.name} 
              className="w-full h-full object-contain"
            />
        
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");






