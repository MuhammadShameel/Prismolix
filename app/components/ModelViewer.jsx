"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import { Model } from "./Hitem3d";

const ModelViewer = () => {
  return (
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }} 
      style={{ height: "100%", width: "100%" }}
      className="absolute right-0 top-0"
    >
      <ambientLight intensity={1.25} />
      <directionalLight intensity={0.4} />

      <Suspense fallback={null}>
        <Bounds fit clip observe>
          <Model position={[0.025, -0.09, 0]} />
        </Bounds>
      </Suspense>

      <OrbitControls makeDefault enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default ModelViewer;