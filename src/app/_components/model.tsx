import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, useProgress, Html } from "@react-three/drei";
import Character from "./character";

interface ModelProps {}

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const Model: FC<ModelProps> = ({}) => {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]}>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={6}>
          <Character />
        </ScrollControls>
      </Suspense>
    </Canvas>
  );
};

export default Model;
