"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

interface CircularProgressArrowProps {
  progress?: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
  animate?: boolean;
}

export default function CircularProgressArrow({
  progress = 100,
  size = 40,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
  animate = false,
}: CircularProgressArrowProps) {
  const [currentProgress, setCurrentProgress] = useState(
    animate ? 0 : progress
  );

  // Calculate the circle properties
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (currentProgress / 100) * circumference;

  // Animate the progress if animate is true
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        if (currentProgress < progress) {
          setCurrentProgress((prev) => Math.min(prev + 1, progress));
        }
      }, 20); // Adjust speed as needed

      return () => clearTimeout(timer);
    } else {
      setCurrentProgress(progress);
    }
  }, [currentProgress, progress, animate]);

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      {/* SVG for the circular progress */}
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute top-0 left-0 -rotate-90 transform"
      >
        {/* Background circle (optional, comment out if not needed) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          opacity={0.2}
        />

        {/* Progress circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-300 ease-out"
        />
      </svg>

      {/* Arrow icon in the center */}
      <div className="relative z-10 translate-y-[20%]">
        <ArrowDown
          className="stroke-foreground animate-bounce"
          size={size * 0.5}
        />
      </div>
    </div>
  );
}
