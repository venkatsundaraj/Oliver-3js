"use effect";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { FC, useRef, useEffect, useState } from "react";
import { Group, SkinnedMesh } from "three";
import { MutableRefObject } from "react";

interface CharacterProps {
  height: number;
}

useGLTF.preload("robot_playground.glb") as any;
const Character: FC<CharacterProps> = ({ height }) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
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
    console.log(actions, group.current);
    if (actions["Experiment"]) {
      actions["Experiment"].play().paused = true;
    }
  }, []);

  useFrame(() => {
    const maxScroll = height - window.innerHeight;
    const scrollFactor = Math.min(scrollValue / maxScroll, 1);
    if (actions["Experiment"]) {
      actions["Experiment"].time =
        actions["Experiment"].getClip().duration * scrollFactor;
    }
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Character;
