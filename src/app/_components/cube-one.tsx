"use client"

import { FC, useRef, useEffect } from "react"
import { useMotionValue, useSpring } from "framer-motion"
import { motion } from "framer-motion-3d"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import { useFrame } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"

const options = { damping: 40 }

interface cubeOneProps {}

const cubeOne: FC<cubeOneProps> = ({}) => {
  const mesh = useRef(null)
  const texture_1 = useLoader(TextureLoader, "/color.png")
  const texture_2 = useLoader(TextureLoader, "/1(2).jpg")
  const texture_3 = useLoader(TextureLoader, "/2(2).jpg")
  const texture_4 = useLoader(TextureLoader, "/3(2).jpg")
  const texture_5 = useLoader(TextureLoader, "/4(2).jpg")
  const texture_6 = useLoader(TextureLoader, "/5(2).jpg")

  useFrame((state, delta) => {
    // @ts-ignore
    mesh.current.rotation.x += delta * 0.1
    // @ts-ignore
    mesh.current.rotation.y += delta * 0.2
    // @ts-ignore
    mesh.current.rotation.z += delta * 0.3
  })

  const x = useMotionValue(0)

  console.log(x)

  return (
    <motion.mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  )
}

export default cubeOne
