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
import {
  ourProfileContent,
  ourProfileContentForStickySlider,
} from "@/config/marketing";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Icons } from "@/app/_components/icons";

interface OurBelieveProps {
  className?: string;
}

const iconSpacing = 60; // Increased spacing between icons

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

const StickySlider: FC<OurBelieveProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [sectionHeight, setSectionHeight] = useState<number>(0);
  const [api, setApi] = React.useState<any>();

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const onDotClick = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index);
      }
    },
    [api]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (sectionRef.current && api) {
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight =
        sectionRef.current.clientHeight - window.innerHeight;

      if (latest >= sectionTop && latest <= sectionTop + sectionHeight) {
        const scrollProgress = (latest - sectionTop) / sectionHeight;
        const slideIndex = Math.min(
          Math.floor(scrollProgress * ourProfileContent.length),
          ourProfileContent.length - 1
        );

        if (slideIndex !== currentIndex) {
          api.scrollTo(slideIndex);
          setCurrentIndex(slideIndex);
        }
      }
    }
  });

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      console.log(api.selectedScrollSnap());
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section
      ref={sectionRef}
      className="w-screen flex items-start relative justify-start min-h-[300vh] bg-background py-16 md:py-16 flex-col"
    >
      <div className="flex items-center justify-center w-full h-svh top-0 left-0 sticky">
        <div className="container h-full flex items-center justify-center">
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
              "w-full flex items-center justify-center relative min-h-screen",
              className
            )}
          >
            <CarouselContent className="-mt-1 h-[100vh]">
              <CarouselItem className="flex items-center justify-center px-16 md:px-20 flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
                  <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                    <h4 className="font-paragraph text-3xl text-primary-foreground">
                      Traditional, algorithmic, 'engineering' approach
                    </h4>
                    <p className="text-extra_paragraph_heading font-paragraph text-foreground">
                      Top-down break up of problem &gt; bottom-up synthesis of
                      solution parts Interpreting organization as sum of parts
                    </p>
                    <p className="font-heading text-foreground text-extra_paragraph_heading leading-[1.1]">
                      Vs.
                    </p>
                  </div>
                  <div className="flex items-center justify-center flex-col gap-8">
                    <Button
                      className="rounded-xl min-w-52 font-paragraph"
                      size={"lg"}
                      variant={"default"}
                    >
                      Value Chain
                    </Button>
                    <Button
                      className="rounded-xl min-w-52 font-paragraph"
                      size={"lg"}
                      variant={"default"}
                    >
                      Business
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
                  <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                    <h4 className="font-paragraph text-3xl text-primary-foreground">
                      Modern, Insights centered, 'doctor' approach
                    </h4>
                    <p className="text-extra_paragraph_heading font-paragraph text-foreground">
                      Core insights about problem ;gt Reimagine Organisation +
                      enterprise around insight concentrically interpreting
                      Organisation as an engine fuelled by differentiated
                      insights
                    </p>
                    <p className="font-paragraph font-bold text-foreground text-extra_paragraph_heading leading-[1.1]">
                      Insights at the center of P&L and organisation vs insights
                      at the center of marketing, innovation, design, etc.
                    </p>
                  </div>
                  <div className="flex  items-center justify-center">
                    <Image
                      alt="Our Trrain"
                      className="w-3/4 md:w-72"
                      src="https://utfs.io/f/ZowmNmBHF7rVHVpLcCdWuQopKOivRcLqJD7x46CXtZGlw0Sh"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </CarouselItem>

              <CarouselItem className="flex items-center justify-center px-16 md:px-20 flex-col gap-6">
                <h4 className="font-paragraph text-3xl text-primary-foreground">
                  From empathy to insights to hero actions to execution Strategy
                  : choice of actions - not that of intent or directions
                </h4>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute top-[50%] left-0 translate-y-[-50%]">
              <CarouselPrevious className="z-10" />
              <motion.div
                className="flex flex-col items-center space-y-8 h-14"
                animate={{ y: -currentIndex * iconSpacing }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {ourProfileContentForStickySlider.map((item, index) => {
                  const Icon = Icons[item.icon];
                  return (
                    <motion.div
                      key={index}
                      animate={{
                        scale: currentIndex === index ? 1.2 : 1,
                        opacity: currentIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-blue-400" />
                    </motion.div>
                  );
                })}
              </motion.div>

              <CarouselNext className="z-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StickySlider;

//  {
//    ourProfileContent.map((item, index) => (
//      <CarouselItem
//        key={index}
//        className="hidden items-center justify-center px-16"
//      >
//        <div className="p-1">
//          <span className="text-subtitle_heading text-foreground font-paragraph">
//            {item}
//          </span>
//        </div>
//      </CarouselItem>
//    ));
//  }

// <CarouselItem className="flex items-center justify-center px-16 md:px-20 h-[400px]">
//                 <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
//                   <div className="flex items-start justify-center flex-col gap-4 text-foreground">
//                     <h4 className="font-paragraph text-3xl text-primary-foreground">
//                       Traditional, algorithmic, 'engineering' approach
//                     </h4>
//                     <p className="text-extra_paragraph_heading font-paragraph text-foreground">
//                       Top-down break up of problem &gt; bottom-up synthesis of
//                       solution parts Interpreting organization as sum of parts
//                     </p>
//                     <p className="font-heading text-foreground text-extra_paragraph_heading leading-[1.1]">
//                       Vs.
//                     </p>
//                   </div>
//                   <div className="flex items-center justify-center flex-col gap-8">
//                     <Button
//                       className="rounded-xl min-w-52"
//                       size={"lg"}
//                       variant={"default"}
//                     >
//                       Value Chain
//                     </Button>
//                     <Button
//                       className="rounded-xl min-w-52"
//                       size={"lg"}
//                       variant={"default"}
//                     >
//                       Business
//                     </Button>
//                   </div>
//                 </div>
//               </CarouselItem>
//               <CarouselItem className="flex items-center justify-center px-16 md:px-20 h-[400px]">
//                 <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
//                   <div className="flex items-start justify-center flex-col gap-4 text-foreground">
//                     <h4 className="font-paragraph text-3xl text-primary-foreground">
//                       Modern, Insights centered, 'doctor' approach
//                     </h4>
//                     <p className="text-extra_paragraph_heading font-paragraph text-foreground">
//                       Core insights about problem ;gt Reimagine Organisation +
//                       enterprise around insight concentrically interpreting
//                       Organisation as an engine fuelled by differentiated
//                       insights
//                     </p>
//                     <p className="font-paragraph font-bold text-foreground text-extra_paragraph_heading leading-[1.1]">
//                       Insights at the center of P&L and organisation vs insights
//                       at the center of marketing, innovation, design, etc.
//                     </p>
//                   </div>
//                 </div>
//               </CarouselItem>
