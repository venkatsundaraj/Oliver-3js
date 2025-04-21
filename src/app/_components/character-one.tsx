"use client";

import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { useGLTF, useAnimations, Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";
import {
  THRESHOLD_MINIMUM_SCALE_VALUE,
  THRESHOLD_MAXIMUM_SCALE_VALUE,
} from "@/config/threejs-constants";
import { useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useScroll, MotionValue, useTransform } from "framer-motion";
interface CharacterOneProps {
  height: number;
  frameValue: (value: number) => void;
  getScrollValue: number;
}

export default function CharacterOne({
  height,
  frameValue,
  getScrollValue,
}: CharacterOneProps) {
  const [scrollValue, setScrollValue] = useState<number>(getScrollValue);
  const [scaleValue, setScaleValue] = useState<number>(0);
  const [startAnimation, setStartAnimation] = useState<boolean>(true);

  const { nodes, materials, animations } = useGLTF("f22noanime.glb") as any;
  const { actions } = useAnimations(animations);
  const ref = useRef<THREE.Group>(null);

  const spira = useRef<THREE.Group>(null);
  const dot1 = useRef<THREE.Mesh>(null);
  const dot2 = useRef<THREE.Mesh>(null);
  const dot3 = useRef<THREE.Mesh>(null);
  const dot4 = useRef<THREE.Mesh>(null);
  const dot5 = useRef<THREE.Mesh>(null);
  const dot9 = useRef<THREE.Mesh>(null);
  const dot10 = useRef<THREE.Mesh>(null);
  const dot8 = useRef<THREE.Mesh>(null);
  const dot7 = useRef<THREE.Mesh>(null);
  const dot6 = useRef<THREE.Mesh>(null);
  const onecir = useRef<THREE.Group>(null);
  const seccir = useRef<THREE.Group>(null);
  const three = useRef<THREE.Group>(null);
  const four = useRef<THREE.Group>(null);
  const five = useRef<THREE.Group>(null);
  const outonecir = useRef<THREE.Group>(null);
  const centercir = useRef<THREE.Group>(null);
  const centerball = useRef<THREE.Mesh>(null);
  const spreaone = useRef<THREE.Group>(null);
  const finalsma = useRef<THREE.Group>(null);
  const sprea = useRef<THREE.Group>(null);
  const overalls = useRef<THREE.Group>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);
  const { viewport } = useThree();
  const resRatio = viewport.width / 2;
  const isMobile = window.innerWidth < 768;
  function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  useEffect(() => {
    const initiateAnimation = async function () {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      let value = 0;

      const interval = setInterval(async () => {
        if (value >= 198) {
          await new Promise((resolve) =>
            setTimeout(() => {
              value = -10;
              return resolve;
            }, 2000)
          );
        } else {
          value += 1;
        }

        setScrollValue(value);
      }, 20);

      return () => clearInterval(interval);
    };

    initiateAnimation();
  }, []);

  const CircleOutline = ({
    radius = 1,
    segments = 64,
    color = "black",
  }: {
    radius?: number;
    segments?: number;
    color?: string;
  }) => {
    const points: Array<[number, number, number]> = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }

    return <Line points={points} color={color} lineWidth={2.5} />;
  };

  const { scrollYProgress } = useScroll();
  const springScale = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 50,
    restDelta: 0.01,
  });
  useFrame(() => {
    const maxScroll = height - window.innerHeight;
    // const scrollFactor = Math.min(scrollValue / maxScroll, 1);
    const scrollFactor = Math.min(scrollValue / 200, 1);

    frameValue(scrollFactor);

    if (tl.current) {
      tl.current.seek(scrollFactor * tl.current.duration());
    }

    // enlarging and reducing the scales
    const scaleNumber =
      scrollFactor < THRESHOLD_MINIMUM_SCALE_VALUE
        ? Math.max(scrollFactor / THRESHOLD_MINIMUM_SCALE_VALUE, 0)
        : scrollFactor > THRESHOLD_MINIMUM_SCALE_VALUE &&
          scrollFactor < THRESHOLD_MAXIMUM_SCALE_VALUE
        ? 1
        : scrollFactor > THRESHOLD_MAXIMUM_SCALE_VALUE
        ? 1
        : 1;
    console.log(scaleNumber);
    setScaleValue(scaleNumber);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    if (spira.current) {
      tl.current.to(
        spira.current.rotation,
        {
          duration: 0.3,
          x: isMobile ? 1.59 : 1.66,
          y: isMobile ? -0.2 : -0.2,
        },
        -0.5
      );
    }

    if (spira.current) {
      tl.current.to(
        spira.current.position,
        {
          duration: 0.3,
          x: isMobile ? 0.15 : 0.44,
          y: isMobile ? -0.09 : -0.19,
        },
        -0.5
      );
    }

    if (dot5.current) {
      tl.current.to(
        dot5.current.position,
        {
          duration: 0.3,
          x: -0.7,
          y: isMobile ? 0.01 : 0.02,
        },
        -0.5
      );
    }

    if (dot9.current) {
      tl.current.to(
        dot9.current.position,
        {
          duration: 0.3,
          x: 0.7,
          y: isMobile ? 0.02 : 0.01,
        },
        -0.5
      );
    }

    if (dot4.current) {
      tl.current.to(
        dot4.current.position,
        {
          duration: 0.3,
          x: -1.2,
          y: isMobile ? 0.01 : 0.02,
        },
        -0.5
      );
    }

    if (dot10.current) {
      tl.current.to(
        dot10.current.position,
        {
          duration: 0.3,
          x: 1.2,
          y: isMobile ? 0.03 : 0.01,
        },
        -0.5
      );
    }

    if (dot3.current) {
      tl.current.to(
        dot3.current.position,
        {
          duration: 0.3,
          x: -1.7,
          y: isMobile ? 0.01 : 0.02,
        },
        -0.5
      );
    }

    if (dot8.current) {
      tl.current.to(
        dot8.current.position,
        {
          duration: 0.3,
          x: 1.7,
          y: isMobile ? 0.03 : 0.01,
        },
        -0.5
      );
    }

    if (dot2.current) {
      tl.current.to(
        dot2.current.position,
        {
          duration: 0.3,
          x: -2.2,
          y: isMobile ? 0.0 : 0.02,
        },
        -0.5
      );
    }

    if (dot7.current) {
      tl.current.to(
        dot7.current.position,
        {
          duration: 0.3,
          x: 2.2,
          y: isMobile ? 0.03 : 0.01,
        },
        -0.5
      );
    }

    if (dot1.current) {
      tl.current.to(
        dot1.current.position,
        {
          duration: 0.3,
          x: -2.7,
          y: isMobile ? 0.0 : 0.02,
        },
        -0.5
      );
    }

    if (dot6.current) {
      tl.current.to(
        dot6.current.position,
        {
          duration: 0.3,
          x: 2.7,
          y: isMobile ? 0.04 : 0.01,
        },
        -0.5
      );
    }

    if (spira.current) {
      tl.current.to(
        spira.current.scale,
        {
          duration: 0.4,
          x: 0,
          y: 0,
          z: 0,
        },
        0
      );
    }

    if (spira.current) {
      tl.current.to(
        spira.current.position,
        {
          duration: 0.4,
          x: 0,
          y: 0,
          z: 0,
        },
        0
      );
    }

    if (onecir.current) {
      tl.current.to(
        onecir.current.rotation,
        {
          duration: 0.4,
          z: -3.1,
        },
        0.5
      );
    }

    if (seccir.current) {
      tl.current.to(
        seccir.current.rotation,
        {
          duration: 0.4,
          z: -3.1,
        },
        0.52
      );
    }

    if (three.current) {
      tl.current.to(
        three.current.rotation,
        {
          duration: 0.4,
          z: -3.1,
        },
        0.54
      );
    }

    if (four.current) {
      tl.current.to(
        four.current.rotation,
        {
          duration: 0.4,
          z: -3.1,
        },
        0.56
      );
    }

    if (five.current) {
      tl.current.to(
        five.current.rotation,
        {
          duration: 0.4,
          z: -3.1,
        },
        0.58
      );
    }

    // if (overalls.current) {
    //   tl.current.to(
    //     overalls.current.position,
    //     {
    //       duration: 0.4,

    //       x: 0.08,
    //       y: 1.25,
    //     },
    //     0.7
    //   );
    // }
    if (overalls.current) {
      const centerX = isMobile ? 0.075 : 0.08; // Keep X centered
      const centerY = isMobile ? 1.23 : 1.25; // Adjust Y for mobile screens

      tl.current.to(
        overalls.current.position,
        {
          duration: 0.4,
          x: centerX,
          y: centerY, // Dynamically center Y for mobile
        },
        0.7
      );
    }

    const radius = 0.22; // 50% of the original radius

    if (dot1.current) {
      tl.current.to(
        dot1.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 4) / 10),
          y: radius * Math.sin((2 * Math.PI * 4) / 10),
          z: 0.3,
        },
        0.7
      );
    }

    if (dot2.current) {
      tl.current.to(
        dot2.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 3) / 10),
          y: radius * Math.sin((2 * Math.PI * 3) / 10),
          z: 0.3,
        },
        0.7
      );
    }

    if (dot3.current) {
      tl.current.to(
        dot3.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 2) / 10),
          y: radius * Math.sin((2 * Math.PI * 2) / 10),
          z: 0.3,
        },
        0.7
      );
    }

    if (dot4.current) {
      tl.current.to(
        dot4.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 1) / 10),
          y: radius * Math.sin((2 * Math.PI * 1) / 10),
          z: 0.3,
        },
        0.7
      );
    }

    if (dot5.current) {
      tl.current.to(
        dot5.current.position,
        {
          duration: 0.4,
          x: radius,
          y: 0.0,
          z: 0.3,
        },
        0.7
      );
    }
    if (dot6.current) {
      tl.current.to(
        dot6.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos(Math.PI),
          y: radius * Math.sin(Math.PI),
          z: 0.3,
        },
        0.7
      );
    }
    if (dot7.current) {
      tl.current.to(
        dot7.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 6) / 10),
          y: radius * Math.sin((2 * Math.PI * 6) / 10),
          z: 0.3,
        },
        0.7
      );
    }
    if (dot8.current) {
      tl.current.to(
        dot8.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 7) / 10),
          y: radius * Math.sin((2 * Math.PI * 7) / 10),
          z: 0.3,
        },
        0.7
      );
    }
    if (dot9.current) {
      tl.current.to(
        dot9.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 8) / 10),
          y: radius * Math.sin((2 * Math.PI * 8) / 10),
          z: 0.3,
        },
        0.7
      );
    }
    if (dot10.current) {
      tl.current.to(
        dot10.current.position,
        {
          duration: 0.4,
          x: radius * Math.cos((2 * Math.PI * 9) / 10),
          y: radius * Math.sin((2 * Math.PI * 9) / 10),
          z: 0.3,
        },
        0.7
      );
    }
    if (overalls.current) {
      tl.current.to(
        overalls.current.rotation,
        {
          duration: 0.5,

          z: -6.3,
        },
        1
      );
    }
    if (sprea.current) {
      tl.current.to(
        sprea.current.scale,
        {
          duration: 0.4,
          x: 0.25,
          y: 0.25,
          z: 0.25,
        },
        0.9
      );
    }
    if (overalls.current) {
      tl.current.to(
        overalls.current.scale,
        {
          duration: 0,
          x: 0,
          y: 0,
          z: 0,
        },
        1.4
      );
    }

    if (centerball.current) {
      tl.current.to(
        centerball.current.scale,
        {
          duration: 0.2,
          x: 0,
          y: 0,
          z: 0,
        },
        1.45
      );
    }

    if (spreaone.current) {
      tl.current.to(
        spreaone.current.scale,
        {
          duration: 0.4,
          x: 0.25,
          y: 0.25,
          z: 0.25,
        },
        1
      );
    }

    if (sprea.current) {
      tl.current.to(
        sprea.current.scale,
        {
          duration: 0.5,
          delay: 0.5,
          x: 8,
          y: 8,
          z: 8,
        },
        1.28
      );
    }

    if (spreaone.current) {
      tl.current.to(
        spreaone.current.scale,
        {
          duration: 0.5,
          delay: 0.5,
          x: 8,
          y: 8,
          z: 8,
        },
        1.2
      );
    }
  }, [isMobile]);

  return (
    <motion.group
      animate={{ scale: [scaleValue, scaleValue, scaleValue] }}
      transition={{ ease: "easeInOut", duration: 2 }}
    >
      <group
        scale={[
          isMobile ? 0.6 / resRatio : 1,
          isMobile ? 0.6 / resRatio : 1,
          isMobile ? 0.6 / resRatio : 1,
        ]}
        rotation={[isMobile ? 0 : 0.1, 5.5, 0]}
        position={[0, isMobile ? -0.2 : -1, 1]}
      >
        <group>
          <group position={[0.098, 1.24, 0.08]}>
            <group ref={centercir}>
              <mesh
                geometry={nodes.center_circle.geometry}
                material={materials["Material.008"]}
                position={[0.1, -0.007, 0.089]}
                rotation={[0, -0.62, -Math.PI / 2]}
                scale={0}
              />
            </group>
          </group>
          <group
            ref={overalls}
            position={[0.098, 1.24, 0.08]}
            rotation={[0, 0.838, -0.001]}
          >
            <group>
              <group ref={five}>
                <mesh
                  ref={dot1}
                  geometry={nodes.dot1.geometry}
                  material={materials["Material.008"]}
                  position={[-0.922, 0.43, -0.044]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot6}
                  geometry={nodes.dot6.geometry}
                  material={materials["Material.008"]}
                  position={[2.256, 0.275, 0.141]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={four}>
                <mesh
                  ref={dot2}
                  geometry={nodes.dot2.geometry}
                  material={materials["Material.008"]}
                  position={[-0.505, 0.602, -0.024]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot7}
                  geometry={nodes.dot7.geometry}
                  material={materials["Material.008"]}
                  position={[1.831, 0.014, 0.094]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group ref={outonecir}>
              <group ref={onecir}>
                <mesh
                  ref={dot5}
                  geometry={nodes.dot5.geometry}
                  material={materials["Material.008"]}
                  position={[0.974, 1.076, 0.043]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot9}
                  geometry={nodes.dot9.geometry}
                  material={materials["Material.008"]}
                  position={[0.358, -0.684, 0.021]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={seccir}>
                <mesh
                  ref={dot10}
                  geometry={nodes.dot10.geometry}
                  material={materials["Material.008"]}
                  position={[0.876, -0.464, 0.05]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot4}
                  geometry={nodes.dot4.geometry}
                  material={materials["Material.008"]}
                  position={[0.433, 0.934, 0.019]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={three}>
                <mesh
                  ref={dot3}
                  geometry={nodes.dot3.geometry}
                  material={materials["Material.008"]}
                  position={[-0.036, 0.773, -0.004]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot8}
                  geometry={nodes.dot8.geometry}
                  material={materials["Material.008"]}
                  position={[1.373, -0.231, 0.068]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
              </group>
            </group>
          </group>
          <mesh
            ref={centerball}
            geometry={nodes.center_ball.geometry}
            material={materials["Material.001"]}
            position={[0.098, 1.24, 0.08]}
            scale={0.24}
          />
          <group
            position={[0.082, 1.222, 0.093]}
            rotation={[-0.196, 0.567, -2.689]}
          >
            <group ref={spira}>
              <mesh
                geometry={nodes.spiral.geometry}
                material={materials["Material.008"]}
                scale={0.12}
              />
            </group>
          </group>
          <group
            ref={sprea}
            scale={0}
            position={[0.1, 1.24, 0.083]}
            rotation={[0, 0.8, -2.689]}
          >
            <CircleOutline color="white" />
          </group>
          <group
            ref={spreaone}
            scale={0}
            position={[0.1, 1.24, 0.083]}
            rotation={[0, 0.8, -2.689]}
          >
            <CircleOutline color="white" />
          </group>
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload("f22noanime.glb");
