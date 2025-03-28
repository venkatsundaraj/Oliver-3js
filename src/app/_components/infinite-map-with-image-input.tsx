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

const colors = [
  "blue",
  "green",
  "bg-red-500",
  "bg-violet-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-yellow-500",
];

interface InfiniteMapWithImageInputProps {
  className?: string;
  src: string;
}

const InfiniteMapWithImageInput: FC<InfiniteMapWithImageInputProps> = ({
  className,
  src,
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
        active: true,
        skipSnaps: true,
        duration: 12000,
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
        }),
      ]}
      className={className}
    >
      <CarouselContent className=" md:min-w-screen pl-0 ml-0 ">
        {Array.from({ length: 2 }).map((_, index) => (
          <CarouselItem key={index} className="pl-0 min-w-[140vw]">
            <div
              className={cn(
                "  md:w-full  gap-4 bg-transparent py-6 border-b-primary-foreground flex items-center flex-col justify-center"
              )}
            >
              <Image
                src={src}
                className=" md:w-full   scale-100 md:scale-100  object-cover p-4 h-full"
                width={1900}
                alt="Heat Map"
                height={700}
                objectFit="cover"
                quality={100}
                priority
              />
              <div className="w-full h-16 py-8 bg-background  border-t overflow-visible border-t-foreground border-b border-b-foreground hidden items-center gap-8">
                <ul className="flex items-center flex-row justify-between w-full flex-nowrap overflow-visible ml-8">
                  {tailSectionData.map((item, i) => (
                    <li
                      className={cn(
                        "text-foreground px-2 py-2 rounded-sm text-nowrap",
                        item.palette
                      )}
                      key={i}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default InfiniteMapWithImageInput;
