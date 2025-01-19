import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");


// import React, { Suspense } from "react";
// // import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload } from "@react-three/drei";
// import Ball from "./canvas/Ball"; // Ball component for individual spheres
// import { technologies } from "../constants";
// import CanvasLoader from "./Loader";
// import { BallCanvas } from "./canvas";

// const Tech = () => {
//   return (
//     <div className="flex flex-wrap justify-center gap-5 sm:gap-10 sm:grid-cols-3">
//       <BallCanvas
//         frameloop="demand"
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls enableZoom={false} />
//           {technologies.map((technology, index) => (
//             <Ball
//               key={index}
//               position={[index % 3 * 2, Math.floor(index / 3) * -2, 0]} // Adjust positions for layout
//               imgUrl={technology.icon}
//             />
//           ))}
//         </Suspense>
//         <Preload all />
//       </BallCanvas>
//     </div>
//   );
// };

// export default Tech;

