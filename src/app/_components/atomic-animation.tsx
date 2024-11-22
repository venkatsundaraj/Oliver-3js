"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface OrbitSymbolProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function OrbitSymbol({
  size = 300,
  color = "#646464",
  strokeWidth = 1,
  className = "",
}: OrbitSymbolProps) {
  const [rotations, setRotations] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotations((prev) => prev.map((r) => (r + 1) % 360)); // Increment rotation for each dot
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const orbitRadius = 45; // Major radius
  const orbitCenter = 50; // Center of the SVG canvas
  const minorRadius = 20; // Minor radius

  const calculatePosition = (
    angle: number,
    rx: number,
    ry: number,
    rotationAngle: number = 0
  ) => {
    // Apply the orbit-specific rotation to the angle
    const radians = ((angle + rotationAngle) * Math.PI) / 180;

    // Calculate unrotated position
    const x = rx * Math.cos(radians);
    const y = ry * Math.sin(radians);

    // Apply the ellipse's rotation (around its center)
    const rotationRadians = (rotationAngle * Math.PI) / 180;
    const rotatedX =
      x * Math.cos(rotationRadians) - y * Math.sin(rotationRadians);
    const rotatedY =
      x * Math.sin(rotationRadians) + y * Math.cos(rotationRadians);

    // Translate back to the orbit's center
    return {
      x: orbitCenter + rotatedX,
      y: orbitCenter + rotatedY,
    };
  };

  return (
    <svg
      //   width={size}
      //   height={size}
      viewBox="0 0 100 100"
      className={cn(
        `${className}`,
        "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[300px] md:w-[500px]"
      )}
    >
      {/* Horizontal orbit */}
      <ellipse
        cx={orbitCenter}
        cy={orbitCenter}
        rx={orbitRadius}
        ry={minorRadius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
      <circle
        cx={calculatePosition(rotations[0], orbitRadius, minorRadius).x}
        cy={calculatePosition(rotations[0], orbitRadius, minorRadius).y}
        r={4}
        fill={"white"}
      />

      {/* Diagonal orbit 1 */}
      <ellipse
        cx={orbitCenter}
        cy={orbitCenter}
        rx={orbitRadius}
        ry={minorRadius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        transform={`rotate(60 ${orbitCenter} ${orbitCenter})`}
      />
      <circle
        cx={calculatePosition(rotations[1], orbitRadius, minorRadius, 60).x}
        cy={calculatePosition(rotations[1], orbitRadius, minorRadius, 60).y}
        r={4}
        fill={"white"}
      />

      {/* Diagonal orbit 2 */}
      <ellipse
        cx={orbitCenter}
        cy={orbitCenter}
        rx={orbitRadius}
        ry={minorRadius}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        transform={`rotate(-60 ${orbitCenter} ${orbitCenter})`}
      />
      <circle
        cx={calculatePosition(rotations[2], orbitRadius, minorRadius, -60).x}
        cy={calculatePosition(rotations[2], orbitRadius, minorRadius, -60).y}
        r={4}
        fill={"white"}
      />
    </svg>
  );
}
