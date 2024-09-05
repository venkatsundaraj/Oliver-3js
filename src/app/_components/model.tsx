import { FC, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, useProgress, Html } from "@react-three/drei"
import Character from "./character"

interface ModelProps {}

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const Model: FC<ModelProps> = ({}) => {
  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Character />
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default Model
