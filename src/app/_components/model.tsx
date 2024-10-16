"use client";

import { FC, Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useProgress, Html } from "@react-three/drei";
import Character from "./character";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CharacterOne from "./character-one";

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
      className="w-screen h-[1000vh] relative overflow-hidden z-0"
    >
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="!h-svh !fixed top-0 left-0 flex items-center justify-center"
      >
        <directionalLight intensity={4} />
        <Suspense fallback={<Loader />}>
          {/* <Character height={sectionHeight} frameValue={getFrameValue} /> */}
          <CharacterOne height={sectionHeight} frameValue={getFrameValue} />
        </Suspense>
      </Canvas>
      <section
        className={cn(
          "flex items-center  justify-center flex-col fixed left-0 top-0 bg-white/10 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue === 0 || frameValue < 0
            ? "opacity-1 z-10"
            : "opacity-0 z-[-1]"
        )}
      >
        <span className="text-foreground text-center text-6xl font-heading text-extra_paragraph_heading">
          We are
        </span>
        <h1 className="text-secondary_heading text-center font-heading text-primary-foreground">
          Growth Strategies
        </h1>
      </section>
      <section
        className={cn(
          "flex items-center justify-start fixed left-0 top-0 bg-transparent w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue > 0 && frameValue < 0.03
            ? "opacity-1 z-10"
            : "opacity-0 z-[-1]"
        )}
      >
        <div className="container w-full h-full flex flex-col items-center justify-center gap-48">
          <div className="self-start">
            <span className="text-foreground text-center text-6xl font-heading text-extra_paragraph_heading">
              Who utilize
            </span>
            <h1 className="text-secondary_heading text-center font-heading text-primary-foreground">
              Insights
            </h1>
          </div>
          <div className="self-end">
            <span className="text-foreground text-center text-6xl font-heading text-extra_paragraph_heading">
              to unlock
            </span>
            <h1 className="text-secondary_heading text-center font-heading text-primary-foreground">
              Heigher Profits
            </h1>
          </div>
        </div>
      </section>
      <section
        className={cn(
          "flex items-center  justify-start fixed left-0 top-0 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue > 0.05 && frameValue < 0.1
            ? "opacity-1 z-10"
            : "opacity-0 z-[-1]"
        )}
      >
        <div className="container w-full h-full flex flex-col items-center justify-center gap-48">
          <div className="self-start">
            <span className="text-foreground text-center text-6xl font-paragraph text-extra_paragraph_heading leading-7">
              We unlock <br />
              <strong>
                Business Growth
                <br /> Spirals
              </strong>
            </span>
          </div>
          <div className="self-end">
            <span className="text-foreground text-center text-6xl font-paragraph text-extra_paragraph_heading leading-7">
              that are
              <strong>
                Transformative
                <br /> and Profitable
                <br />
              </strong>
              for our clients
            </span>
          </div>
        </div>
      </section>
      <section
        className={cn(
          "flex items-center justify-start fixed left-0 top-0 w-screen h-screen duration-150 transition-opacity overflow-hidden",
          frameValue > 0.7 && frameValue < 1
            ? "opacity-1 z-10"
            : "opacity-0 z-[-1]"
        )}
      >
        <div className="container w-full h-full flex flex-col items-center justify-center ">
          <span className="text-foreground text-center text-6xl font-heading text-extra_paragraph_heading">
            Our
          </span>
          <h1 className="text-secondary_heading text-center font-heading text-primary-foreground mb-2">
            Proposition
          </h1>
          <p className="text-foreground leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
            <strong>
              Insight-centered business strategy & organization design
            </strong>{" "}
            with collaboration & accountability
          </p>
        </div>
      </section>
    </main>
  );
};

export default Model;
