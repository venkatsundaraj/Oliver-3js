import React, { FC, useEffect, useState, useCallback, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { useAnimation } from "framer-motion"
import { motion } from "framer-motion"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  type CarouselApi,
  CarouselPrevious,
} from "@/app/_components/ui/carousel"
import Image from "next/image"
import { MotionCanvas } from "framer-motion-3d"

interface InfiniteMapProps {}

const InfiniteMap: FC<InfiniteMapProps> = ({}) => {
  const controls = useAnimation()

  // Infinite loop logic using framer-motion's controls
  const loopSlider = async () => {
    while (true) {
      await controls.start({
        x: "-100%", // Shift the entire container by one full width
        transition: {
          duration: 50, // Controls the scroll speed (increase for slower scrolling)
          ease: "linear", // Linear for continuous smooth scrolling
        },
      })
      controls.set({ x: 0 }) // Reset the position to the beginning once the animation completes
    }
  }

  useEffect(() => {
    loopSlider() // Start the continuous loop on mount
  }, [])

  return (
    <div className="overflow-hidden w-screen ">
      <motion.div className="flex w-max" animate={controls}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            src={
              "https://utfs.io/f/ZowmNmBHF7rVWyeN842uX31TIjKoHYR0aPnSbMcFkhvmy76G"
            }
            width={1200}
            alt="Heat Map"
            height={700}
            objectFit="cover"
          />
        ))}
      </motion.div>
    </div>
  )
}

export default InfiniteMap

// opts={{
//         align: "start",
//         loop: true,
//         active: true,
//         skipSnaps: false,
//         duration: 1000,
//         startIndex: 1,
//       }}
//       plugins={[
//         Autoplay({
//           delay: 5000,
//           stopOnInteraction: false,
//         }),
//       ]}
