// import React, { Suspense } from 'react'
// import { Canvas } from "@react-three/fiber";
// import {
//     OrbitControls,
//     Preload,
//   } from "@react-three/drei";
// import CanvasLoader from '../Loader';
// import Ball from './Ball';

// const BallCanvas = ({ icon }) => {
//     return (
//       <Canvas
//         frameloop='demand'
//         dpr={[1, 2]}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls enableZoom={false} />
//           <Ball imgUrl={icon} />
//         </Suspense>
  
//         <Preload all />
//       </Canvas>
//     );
//   };
  
//   export default BallCanvas;
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";

import CanvasLoader from "../Loader";
import Ball from "./Ball";



const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

