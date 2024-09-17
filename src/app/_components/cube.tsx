"use client";

import { FC, useRef, useEffect, useState } from "react";
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { motion } from "framer-motion-3d";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { useLoader } from "@react-three/fiber";

const options = { damping: 40 };

interface CubeProps {}

const Cube: FC<CubeProps> = ({}) => {
  const mesh = useRef(null);
  const texture_1 = useLoader(TextureLoader, "/color.png");
  const texture_2 = useLoader(TextureLoader, "/1(2).jpg");
  const texture_3 = useLoader(TextureLoader, "/2(2).jpg");
  const texture_4 = useLoader(TextureLoader, "/3(2).jpg");
  const texture_5 = useLoader(TextureLoader, "/4(2).jpg");
  const texture_6 = useLoader(TextureLoader, "/5(2).jpg");

  const [motionValue, setMotionValue] = useState<number>();

  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const modifiedValue = (latest / 100) * 360;

    setMotionValue(modifiedValue);
  });

  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    console.log(spring);
  }, [scrollYProgress, spring]);

  return (
    <motion.mesh rotation-y={spring} rotation-x={spring} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  );
};

export default Cube;

//Installing @types/three@0.163.0 would solve the solution
