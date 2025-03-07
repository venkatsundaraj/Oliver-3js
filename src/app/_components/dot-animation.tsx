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
  size: number; // Size of the dot
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
    // Helper function to generate a random size in the range of h-8 to h-14
    const randomSize = () => Math.floor(Math.random() * (14 - 8 + 1) + 8);

    // Initialize dots with fixed positions and random sizes
    dotsRef.current = [
      {
        id: 0,
        x: 50,
        y: 10,
        dx: 0,
        dy: 0,
        baseX: 50,
        baseY: 10,
        size: randomSize(),
      },
      {
        id: 1,
        x: 85,
        y: 35,
        dx: 0,
        dy: 0,
        baseX: 85,
        baseY: 35,
        size: randomSize(),
      },
      {
        id: 2,
        x: 75,
        y: 80,
        dx: 0,
        dy: 0,
        baseX: 75,
        baseY: 80,
        size: randomSize(),
      },
      {
        id: 3,
        x: 25,
        y: 80,
        dx: 0,
        dy: 0,
        baseX: 25,
        baseY: 80,
        size: randomSize(),
      },
      {
        id: 4,
        x: 15,
        y: 35,
        dx: 0,
        dy: 0,
        baseX: 15,
        baseY: 35,
        size: randomSize(),
      },
    ];

    // Create connections (outer lines first, followed by inner lines)
    connectionsRef.current = [
      { from: 0, to: 1 }, // Outer lines
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 4, to: 0 },
      { from: 0, to: 2 }, // Inner lines
      { from: 0, to: 3 },
      { from: 1, to: 3 },
      { from: 1, to: 4 },
      { from: 2, to: 4 },
    ];

    const animate = () => {
      dotsRef.current = dotsRef.current.map((dot) => {
        let { x, y, dx, dy, baseX, baseY } = dot;

        // Define the movement range (10cm = 10% of the screen area)
        const range = 5; // 10% range for movement
        const maxDx = 0.05; // Slow movement speed
        const maxDy = 0.05; // Slow movement speed

        // Gradual changes to dx and dy for smoother animation
        const randomFactorX = Math.random() * maxDx - maxDx / 2;
        const randomFactorY = Math.random() * maxDy - maxDy / 2;

        dx = dx + randomFactorX * 0.15; // Gradual change
        dy = dy + randomFactorY * 0.15; // Gradual change

        x += dx;
        y += dy;

        // Bound the movement to within the range
        x = Math.min(Math.max(x, baseX - range), baseX + range);
        y = Math.min(Math.max(y, baseY - range), baseY + range);

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
    <div className="w-full flex md:max-w-4xl h-[500px] md:h-[800px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden absolute z-[1]">
      <svg className="w-full h-full">
        {connectionsRef.current.map((connection, index) => {
          const fromDot = dotsRef.current.find(
            (dot) => dot.id === connection.from
          );
          const toDot = dotsRef.current.find((dot) => dot.id === connection.to);
          if (!fromDot || !toDot) return null;

          // Determine if the connection is an outer line
          const isOuterLine =
            (connection.from === 0 && connection.to === 1) ||
            (connection.from === 1 && connection.to === 2) ||
            (connection.from === 2 && connection.to === 3) ||
            (connection.from === 3 && connection.to === 4) ||
            (connection.from === 4 && connection.to === 0);

          return (
            <g key={index}>
              <line
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke={isOuterLine ? "#0077B9" : "#646464"} // Blue for outer, grey for inner
                strokeWidth="1"
                strokeOpacity={isOuterLine ? "1" : "0.8"} // Slight opacity for inner lines
              />
            </g>
          );
        })}
      </svg>
      {dotsRef.current.map((dot) => (
        <div
          key={dot.id}
          className={`absolute bg-white rounded-full border-2 border-transparent h-${dot.size}`}
          style={{
            width: `${dot.size * 3.6}px`, // Ensure consistent width and height
            height: `${dot.size * 3.6}px`,
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
