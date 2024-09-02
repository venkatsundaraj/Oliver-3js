"use client";

import { FC, useRef } from "react";
import { Mesh } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { BufferGeometry } from "three";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { NormalBufferAttributes, Material, Object3DEventMap } from "three";

interface CubeProps {}

const Cube: FC<CubeProps> = ({}) => {
  const mesh = useRef(null);
  const texture_1 = useLoader(TextureLoader, "/color.png");

  useFrame((state, delta) => {
    // @ts-ignore
    mesh.current.rotation.x += delta * 0.6;
    // @ts-ignore
    mesh.current.rotation.y += delta * 0.6;
    // @ts-ignore
    mesh.current.rotation.z += delta * 0.6;
  });
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[4.5, 4.5, 4.5]} />
      <meshBasicMaterial map={texture_1} />
    </mesh>
  );
};

export default Cube;
