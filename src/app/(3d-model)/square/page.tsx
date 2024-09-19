"use client"

import { FC } from "react"
import { Canvas } from "@react-three/fiber"
import Cube from "@/app/_components/cube"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import Square from "@/app/_components/square"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <div className="fixed top-0 w-full overflow-x-hidden">
        <Suspense fallback={null}>
          <Canvas className="w-screen min-h-screen flex items-center justify-center">
            <OrbitControls enablePan={true} enableZoom={false} />
            <Cube />
            {/* <Square /> */}
            <ambientLight intensity={2} />
            <directionalLight position={[2, 1, 1]} />
          </Canvas>
        </Suspense>
      </div>
      <section>
        <h1>Hello world</h1>
      </section>
    </main>
  )
}

export default page
