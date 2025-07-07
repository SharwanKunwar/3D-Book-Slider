'use client'

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { Loader } from "@react-three/drei";

export default function Home() {
  return (
    <>
    <UI/>
    <Loader/>
    <Canvas shadows camera={{position: [-0.5,1,4], fov:45}}>
      <group position-y={0}>
        <Suspense fallback={null}>
          <Experience/>
        </Suspense>
      </group>
    </Canvas>
    </>
  );
}
