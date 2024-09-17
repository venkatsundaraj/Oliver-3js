"use effect";

import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMotionValueEvent } from "framer-motion";
import { FC, useRef, useEffect } from "react";
import { Group, SkinnedMesh } from "three";

interface CharacterProps {}

useGLTF.preload("robot_playground.glb");
const Character: FC<CharacterProps> = ({}) => {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("robot_playground.glb");
  const { actions, ...values } = useAnimations(animations, scene);
  console.log(actions);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Experiment"].play().paused = true;
  }, []);

  useFrame(() => {
    //@ts-ignore
    actions["Experiment"].time =
      //@ts-ignore
      (actions["Experiment"].getClip().duration * scroll.offset) / 4;
    //@ts-ignore
    // console.log(actions["Experiment"].time);
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
};

export default Character;
