"use client"

import { FC, useRef, useEffect, useState } from "react"
import {
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion"
import { motion } from "framer-motion-3d"
import { TextureLoader } from "three/src/loaders/TextureLoader"

import { useFrame } from "@react-three/fiber"
import { useLoader } from "@react-three/fiber"

const options = { damping: 40 }

interface CubeProps {}

const Cube: FC<CubeProps> = ({}) => {
  const mesh = useRef(null)
  const texture_1 = useLoader(TextureLoader, "/color.png")
  const texture_2 = useLoader(TextureLoader, "/1(2).jpg")
  const texture_3 = useLoader(TextureLoader, "/2(2).jpg")
  const texture_4 = useLoader(TextureLoader, "/3(2).jpg")
  const texture_5 = useLoader(TextureLoader, "/4(2).jpg")
  const texture_6 = useLoader(TextureLoader, "/5(2).jpg")

  const [motionValue, setMotionValue] = useState<number>()

  // useFrame((state, delta) => {
  //   // @ts-ignore
  //   mesh.current.rotation.x += delta * 0.1
  //   // @ts-ignore
  //   mesh.current.rotation.y += delta * 0.2
  //   // @ts-ignore
  //   mesh.current.rotation.z += delta * 0.3
  // })

  // const mouse = {
  //   x: useSpring(useMotionValue(0), options),
  //   y: useSpring(useMotionValue(0), options),
  // }

  // const manageMouseMove = (e: MouseEvent) => {
  //   const { innerWidth, innerHeight } = window

  //   const { clientX, clientY } = e

  //   const multiplier = 0.8

  //   // const x = (-0.5 + clientX / innerWidth) * multiplier

  //   // const y = (-0.5 + clientY / innerHeight) * multiplier
  //   const x = clientX / innerWidth

  //   const y = clientY / innerHeight

  //   mouse.x.set(x)

  //   mouse.y.set(y)
  // }

  // useEffect(() => {
  //   window.addEventListener("mousemove", manageMouseMove)

  //   return () => window.removeEventListener("mousemove", manageMouseMove)
  // }, [])

  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const modifiedValue = (latest / 100) * 360

    setMotionValue(modifiedValue)
  })

  const spring = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    console.log(spring)
  }, [scrollYProgress, spring])

  return (
    <motion.mesh rotation-y={spring} ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial map={texture_1} />
    </motion.mesh>
  )
}

export default Cube
