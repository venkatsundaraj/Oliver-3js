"use client";

import { FC, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useProgress, Html } from "@react-three/drei";
import Character from "./character";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ModelProps {}

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const Model: FC<ModelProps> = ({}) => {
  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [frameValue, setFrameValue] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight); // Set the section height
    }
  }, [sectionRef]);

  const getFrameValue = function (value: number) {
    setFrameValue(value);
  };

  return (
    <main
      ref={sectionRef}
      className="w-screen h-[1000vh] relative overflow-hidden"
    >
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="!h-screen !fixed top-0 left-0"
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          <Character height={sectionHeight} frameValue={getFrameValue} />
        </Suspense>
      </Canvas>
      <section
        className={cn(
          "flex items-center p-48 justify-center fixed left-0 top-0 bg-white/10 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue === 0 || frameValue < 0
            ? "opacity-1 z-10"
            : "opacity-0 z-0"
        )}
      >
        <h1 className="text-slate-50 text-6xl">Hello World</h1>
      </section>
      <section
        className={cn(
          "flex items-center p-48 justify-start fixed left-0 top-0 bg-white/30 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue > 0 && frameValue < 0.2
            ? "opacity-1 z-10"
            : "opacity-0 z-0"
        )}
      >
        <h1 className="text-slate-50 text-6xl">section-1</h1>
      </section>
      <section
        className={cn(
          "flex items-center p-48 justify-start fixed left-0 top-0 bg-white/30 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue > 0.225 && frameValue < 0.4
            ? "opacity-1 z-10"
            : "opacity-0 z-0"
        )}
      >
        <h1 className="text-slate-50 text-6xl">section-2</h1>
      </section>
    </main>
  );
};

export default Model;
