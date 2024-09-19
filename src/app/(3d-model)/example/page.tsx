"use client"

import { useMotionValue, motion, transform } from "framer-motion"
import { FC, useEffect } from "react"

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <section className="w-screen h-screen flex items-center justify-center bg-red-400">
      <motion.div style={{}} className="bg-slate-100 gap-3 absolute">
        <h1>Hello World</h1>
      </motion.div>
    </section>
  )
}

export default page
