"use client";

import { FC } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./_components/cube";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <Suspense fallback={null}>
      <Canvas className="w-screen min-h-screen flex items-center justify-center h-48">
        <OrbitControls enablePan={false} enableZoom={false} />
        <Cube />
        <directionalLight position={[5, 1, 0]} />
      </Canvas>
    </Suspense>
  );
};

export default page;
