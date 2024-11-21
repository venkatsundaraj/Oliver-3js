"use client";

import { useState, useEffect, useRef, FC } from "react";

interface DotAnimationProps {}

interface Dot {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  baseX: number;
  baseY: number;
}

interface Connection {
  from: number;
  to: number;
}

const DotAnimation: FC<DotAnimationProps> = () => {
  const [, setFrame] = useState(0);
  const dotsRef = useRef<Dot[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize dots with fixed positions
    dotsRef.current = [
      { id: 0, x: 50, y: 10, dx: 0.05, dy: 0.05, baseX: 50, baseY: 10 }, // Top
      { id: 1, x: 85, y: 35, dx: 0.05, dy: 0.05, baseX: 85, baseY: 35 }, // Top right
      { id: 2, x: 75, y: 80, dx: 0.05, dy: 0.05, baseX: 75, baseY: 80 }, // Bottom right
      { id: 3, x: 25, y: 80, dx: 0.05, dy: 0.05, baseX: 25, baseY: 80 }, // Bottom left
      { id: 4, x: 15, y: 35, dx: 0.05, dy: 0.05, baseX: 15, baseY: 35 }, // Top left
    ];

    // Create connections (including inter-cross section lines)
    connectionsRef.current = [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 0 },
      { from: 0, to: 2 },
      { from: 0, to: 3 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 4 },
    ];

    const animate = () => {
      dotsRef.current = dotsRef.current.map((dot) => {
        let { x, y, dx, dy, baseX, baseY } = dot;

        // Update position within 5mm range (assuming 1% = 1mm for simplicity)
        x += dx;
        y += dy;

        // Reverse direction if reached the edge of 5mm range
        if (Math.abs(x - baseX) > 2.5) {
          dx = -dx;
          x = x > baseX ? baseX + 2.5 : baseX - 2.5;
        }
        if (Math.abs(y - baseY) > 2.5) {
          dy = -dy;
          y = y > baseY ? baseY + 2.5 : baseY - 2.5;
        }

        return { ...dot, x, y, dx, dy };
      });

      setFrame((prev) => prev + 1); // Trigger re-render
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full md:max-w-2xl h-[100vh] md:h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden absolute z-[1]">
      <svg className="w-full h-full">
        {connectionsRef.current.map((connection, index) => {
          const fromDot = dotsRef.current.find(
            (dot) => dot.id === connection.from
          );
          const toDot = dotsRef.current.find((dot) => dot.id === connection.to);
          if (!fromDot || !toDot) return null;
          return (
            <g key={index}>
              <line
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke="white"
                strokeWidth="1"
              />
              <line
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke="#646464"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </g>
          );
        })}
      </svg>
      {dotsRef.current.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-6 h-6 bg-white/40 rounded-full border-2 border-[#0077B9]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default DotAnimation;
