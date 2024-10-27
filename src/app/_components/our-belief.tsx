"use client";

import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { tailSectionData } from "@/config/marketing";
import Image from "next/image";
import { MotionCanvas } from "framer-motion-3d";
import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/app/_components/ui/carousel";
import { ourProfileContent } from "@/config/marketing";

interface OurBelieveProps {
  className: string;
}

const CarouselDots = ({
  itemCount,
  currentIndex,
  onDotClick,
}: {
  itemCount: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}) => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-4">
      {Array.from({ length: itemCount }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={cn(
            "w-[10px] h-[10px] rounded-full p-0",
            currentIndex === index ? "bg-foreground" : "bg-primary"
          )}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

const OurBelieve: FC<OurBelieveProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [api, setApi] = React.useState<any>();

  const onDotClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: "start",
        loop: true,
        active: true,
      }}
      plugins={[]}
      orientation="vertical"
      className={cn(
        "w-full flex items-center justify-center relative ",
        className
      )}
    >
      <CarouselContent className="-mt-1 h-[200px]">
        {ourProfileContent.map((item, index) => (
          <CarouselItem
            key={index}
            className="flex items-center justify-center px-16"
          >
            <div className="p-1">
              <span className="text-subtitle_heading text-foreground font-paragraph">
                {item}
              </span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute top-[50%] left-0 translate-y-[-50%]">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselDots
          itemCount={ourProfileContent.length}
          currentIndex={currentIndex}
          onDotClick={onDotClick}
        />
      </div>
    </Carousel>
  );
};

export default OurBelieve;
