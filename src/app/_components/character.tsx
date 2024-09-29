"use effect";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { FC, useRef, useEffect, useState } from "react";
import { Group, SkinnedMesh } from "three";
import { MutableRefObject } from "react";
import { motion } from "framer-motion-3d";
import {
  THRESHOLD_MINIMUM_SCALE_VALUE,
  THRESHOLD_MAXIMUM_SCALE_VALUE,
} from "@/config/threejs-constants";

interface CharacterProps {
  height: number;
}

useGLTF.preload("robot_playground.glb") as any;

const Character: FC<CharacterProps> = ({ height }) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [scaleValue, setScaleValue] = useState<number>(0);

  // invoking all the actions from the 3d model
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("robot_playground.glb") as any;
  const { actions, ...values } = useAnimations(animations, scene);

  useEffect(() => {
    const scrollEvent = function (e: Event) {
      setScrollValue(window.scrollY);
    };
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  useEffect(() => {
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = true;
    }
  }, []);

  useFrame(() => {
    // scroll factor which varies from 0 to 1
    const maxScroll = height - window.innerHeight;
    const scrollFactor = Math.min(scrollValue / maxScroll, 1);

    // it's basically varying the time upto the end
    if (actions["Experiment"]) {
      actions["Experiment"].time =
        actions["Experiment"].getClip().duration * scrollFactor;
    }

    // enlarging and reducing the scales
    const scaleNumber =
      scrollFactor < THRESHOLD_MINIMUM_SCALE_VALUE
        ? scrollFactor / THRESHOLD_MINIMUM_SCALE_VALUE
        : scrollFactor > THRESHOLD_MINIMUM_SCALE_VALUE &&
          scrollFactor < THRESHOLD_MAXIMUM_SCALE_VALUE
        ? 1
        : scrollFactor > THRESHOLD_MAXIMUM_SCALE_VALUE
        ? (1 - scrollFactor) / THRESHOLD_MINIMUM_SCALE_VALUE
        : NaN;

    setScaleValue(scaleNumber);
    // console.log(scaleNumber);
  });

  return (
    <motion.group
      animate={{ scale: [scaleValue, scaleValue, scaleValue] }}
      transition={{ ease: "easeInOut", duration: 2 }}
      ref={group as any}
    >
      <primitive object={scene} />
    </motion.group>
  );
};

export default Character;
