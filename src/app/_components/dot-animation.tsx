"use client";

import { useState, useEffect, useRef, FC } from "react";

interface DotAnimationProps {}

interface Dot {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
}

interface Connection {
  from: number;
  to: number;
}

const DotAnimation: FC<DotAnimationProps> = function () {
  const [, setFrame] = useState(0);
  const dotsRef = useRef<Dot[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Initialize dots
    dotsRef.current = Array(5)
      .fill(null)
      .map((_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
      }));

    // Create connections (each dot connected to two others)
    connectionsRef.current = dotsRef.current
      .map((dot, index) => [
        { from: dot.id, to: dotsRef.current[(index + 1) % 5].id },
        { from: dot.id, to: dotsRef.current[(index + 2) % 5].id },
      ])
      .flat();

    const animate = () => {
      dotsRef.current = dotsRef.current.map((dot) => {
        let { x, y, dx, dy } = dot;

        // Update position
        x += dx;
        y += dy;

        // Bounce off edges
        if (x < 0 || x > 100) dx = -dx;
        if (y < 0 || y > 100) dy = -dy;

        // Ensure dot stays within bounds
        x = Math.max(0, Math.min(100, x));
        y = Math.max(0, Math.min(100, y));

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
    <div className="w-full h-[100vh] md:h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden absolute z-[-1]">
      <svg className="w-full h-full">
        {connectionsRef.current.map((connection, index) => {
          const fromDot = dotsRef.current.find(
            (dot) => dot.id === connection.from
          );
          const toDot = dotsRef.current.find((dot) => dot.id === connection.to);
          if (!fromDot || !toDot) return null;
          return (
            <>
              <line
                key={index}
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke="white"
                strokeWidth="1"
              />
              <line
                key={`${index}-outer`}
                x1={`${fromDot.x}%`}
                y1={`${fromDot.y}%`}
                x2={`${toDot.x}%`}
                y2={`${toDot.y}%`}
                stroke="#646464"
                strokeWidth="1"
                strokeOpacity="0.8"
              />
            </>
          );
        })}
      </svg>
      {dotsRef.current.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-8 h-8 bg-white rounded-full border-2 border-[#0077B9]"
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
