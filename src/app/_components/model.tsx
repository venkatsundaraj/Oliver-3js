"use client"

import { FC, Suspense, useEffect, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { ScrollControls, useProgress, Html } from "@react-three/drei"
import Character from "./character"
import { useState } from "react"

interface ModelProps {}

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

const Model: FC<ModelProps> = ({}) => {
  const [sectionHeight, setSectionHeight] = useState<number>(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (sectionRef.current) {
      setSectionHeight(sectionRef.current.offsetHeight) // Set the section height
    }
  }, [sectionRef])

  return (
    <section
      ref={sectionRef}
      className="w-screen h-[1000vh] relative overflow-hidden"
    >
      <Canvas
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        className="!h-screen !fixed top-0 left-0"
      >
        <directionalLight position={[-5, -5, 5]} intensity={4} />
        <Suspense fallback={<Loader />}>
          {/* <ScrollControls damping={0.5} pages={8}> */}
          <Character height={sectionHeight} />
          {/* </ScrollControls> */}
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Model
