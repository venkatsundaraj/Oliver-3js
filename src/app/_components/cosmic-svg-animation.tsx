"use client";

import { motion } from "framer-motion";
import React from "react";

const CosmicSvgAnimation = () => {
  const path1 = [
    { x: 744, y: 378 },
    { x: 708, y: 394 },
    { x: 598, y: 320 }, // Core
  ];
  const path2 = [
    { x: 780, y: 361 },
    { x: 708, y: 394 },
    { x: 598, y: 320 }, // Core
  ];

  const generateAnimation = (path: { x: number; y: number }[]) => {
    return {
      x: path.map((point) => point.x),
      y: path.map((point) => point.y),
    };
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="815"
      height="433"
      viewBox="0 0 815 433"
    >
      {/* Static Paths */}
      <g>
        <path
          d="M744,378 C720,380,708,390,598,320"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M780,361 C720,370,708,390,598,320"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </g>

      {/* Animated Dots */}
      <motion.circle
        cx="0"
        cy="0"
        r="2.9"
        fill="white"
        initial={{ x: path1[0].x, y: path1[0].y }}
        animate={generateAnimation(path1)}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="0"
        cy="0"
        r="2.9"
        fill="white"
        initial={{ x: path2[0].x, y: path2[0].y }}
        animate={generateAnimation(path2)}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

export default CosmicSvgAnimation;
