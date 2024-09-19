"use client"

import { FC, useEffect } from "react"
import { Button } from "../../_components/button"
import { useSpring } from "framer-motion"
import { motion } from "framer-motion-3d"
import { cn } from "@/lib/utils"
import { useMotionValue } from "framer-motion"

interface pageProps {}
const options = { damping: 40 }

const page: FC<pageProps> = ({}) => {
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const eventHandler = function (e: MouseEvent) {
    const { innerWidth, innerHeight } = window

    const { clientX, clientY } = e

    const multiplier = 0.8

    // const x = (-0.5 + clientX / innerWidth) * multiplier

    // const y = (-0.5 + clientY / innerHeight) * multiplier
    const x = clientX / innerWidth

    const y = clientY / innerHeight

    mouse.x.set(x)

    mouse.y.set(y)
  }

  console.log(mouse)

  useEffect(() => {
    window.addEventListener("mousemove", eventHandler)

    return () => {
      window.removeEventListener("mousemove", eventHandler)
    }
  })

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <motion.button
        className={cn(
          "w-44 h-44 rounded-full border bg-violet-500 border-1 border-slate-600",
          `translate-x-${mouse.x}`
        )}
        rotation-x={mouse.y}
        rotation-y={mouse.x}
      >
        FBL
      </motion.button>
    </section>
  )
}

export default page
