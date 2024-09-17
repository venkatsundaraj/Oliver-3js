"use client";
import { FC, useRef } from "react";

interface SquareProps {}

const Square: FC<SquareProps> = ({}) => {
  const mesh = useRef(null);
  return (
    <mesh>
      <circleGeometry />
    </mesh>
  );
};

export default Square;
