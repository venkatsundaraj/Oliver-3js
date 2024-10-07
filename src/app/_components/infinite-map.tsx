import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { tailSectionData } from "@/config/marketing";
import Image from "next/image";
import { MotionCanvas } from "framer-motion-3d";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/_components/ui/carousel";

interface InfiniteMapProps {}

const colors = [
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];

const InfiniteMap: FC<InfiniteMapProps> = ({}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
        skipSnaps: true,
        duration: 3000,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
        }),
      ]}
      className=""
    >
      <CarouselContent className="w-screen h-screen pl-0 ml-0">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className=" pl-0">
            <div
              className={cn(
                "w-full bg-background h-full border-b-primary-foreground flex items-center flex-col justify-center"
              )}
            >
              <Image
                src={
                  "https://utfs.io/f/ZowmNmBHF7rVWyeN842uX31TIjKoHYR0aPnSbMcFkhvmy76G"
                }
                className="w-full h-full object-cover"
                width={1200}
                alt="Heat Map"
                height={700}
                objectFit="cover"
              />
              <div className="w-full h-16 bg-gradient-to-tr from-violet-400 to-slate-50"></div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InfiniteMap;

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
