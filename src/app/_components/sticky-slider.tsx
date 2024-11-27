"use client";

import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import {
  insightCenteredContent,
  ourDifferentiatorContent,
  tailSectionData,
} from "@/config/marketing";

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
import Image from "next/image";
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
          Math.floor(scrollProgress * ourProfileContentForStickySlider.length),
          ourProfileContentForStickySlider.length - 1
        );
        console.log(slideIndex, ourProfileContentForStickySlider.length);
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
      id="our-differentiators"
      className="w-screen hidden md:flex items-start relative justify-start min-h-[600vh] bg-background py-16 md:py-16 flex-col"
    >
      <div className="flex items-center justify-center w-full h-svh top-0 left-0 sticky">
        <div className="container h-full flex flex-col items-center justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              //   loop: true,
              active: true,
            }}
            plugins={[]}
            orientation="vertical"
            className={cn(
              "w-full bg-background relative grid grid-cols-1 md:grid-cols-5 min-h-screen items-center justify-center",
              className
            )}
          >
            <h2 className="flex self-start items-start justify-start flex-col leading-[1.1] absolute left-0 top-[125px]">
              <span className="text-extra_paragraph_heading text-foreground font-heading">
                Our
              </span>
              <span className="text-primary-foreground text-tertiary_heading font-heading font-normal">
                Differentiators
              </span>
            </h2>
            <div className="col-start-1 col-end-2 flex items-start justify-center flex-col gap-12">
              <CarouselPrevious className="z-10 static translate-x-0 translate-y-0" />
              <motion.div
                className="flex flex-col items-center  h-[60px] translate-x-0 w-full"
                animate={{ y: -currentIndex * iconSpacing }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {ourDifferentiatorContent.map((item, index) => {
                  return (
                    <motion.div
                      key={index}
                      className="flex flex-row items-center justify-start gap-6 h-[60px] w-full"
                      animate={{
                        scale: currentIndex === index ? 1 : 1,
                        opacity: currentIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        alt="Our Trrain"
                        className="h-[60px] object-contain"
                        src={item.imgPath}
                        width={38}
                        height={38}
                      />
                      <p className="text-foreground">
                        Insights centered strategy
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>

              <CarouselNext className="z-10 static translate-x-0 translate-y-0" />
            </div>
            <div className="col-start-2 col-end-6">
              <CarouselContent className="-mt-1 h-[100vh]">
                <CarouselItem className="flex items-center justify-center px-16 md:px-20 flex-col gap-6">
                  <div className="flex items-start justify-top flex-col max-h-[500px] overflow-y-scroll scrollbar-hide">
                    <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16 ">
                      <div className="flex items-start justify-center flex-col gap-4 text-foreground">
                        <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                          Traditional, algorithmic, 'engineering' approach
                        </h4>
                        <p className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Top-down break up of problem &gt; bottom-up synthesis
                          of solution parts Interpreting organization as sum of
                          parts
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
                        <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                          Modern, Insights centered, 'doctor' approach
                        </h4>
                        <p className="text-extra_subtitle_heading font-paragraph text-foreground">
                          Core insights about problem ;gt Reimagine Organisation
                          + enterprise around insight concentrically
                          interpreting Organisation as an engine fuelled by
                          differentiated insights
                        </p>
                        <p className="font-paragraph font-bold text-foreground text-extra_subtitle_heading">
                          Insights at the center of P&L and organisation vs
                          insights at the center of marketing, innovation,
                          design, etc.
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
                  </div>
                </CarouselItem>

                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <div className="flex items-start justify-top flex-col max-h-[500px] overflow-y-scroll scrollbar-hide">
                    <h4 className="font-paragraph text-subtitle_heading text-primary-foreground mb-4">
                      From empathy to insights to hero actions to execution
                      Strategy : choice of actions - not that of intent or
                      directions
                    </h4>
                    <div className="flex items-center justify-start gap-4 flex-col relative py-8">
                      {insightCenteredContent.map((item) => (
                        <Button
                          className="rounded-xl min-w-52 md:min-w-80 font-paragraph static z-[1]"
                          size={"lg"}
                          variant={"default"}
                        >
                          {item}
                        </Button>
                      ))}
                      <Image
                        className="w-full object-contain z-0 h-full absolute left-0 top-0"
                        src={
                          "https://utfs.io/f/ZowmNmBHF7rVi72fZMu12L9SrhBkonyJq4Z8l0ANjKH7a5eu"
                        }
                        alt="Arrow"
                        width={200}
                        height={200}
                      />
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    Intensive 360 degree solution co-creation & collaboration
                    workshops
                  </h4>
                  <p className="font-paragraph text-foreground text-extra_paragraph_heading">
                    With organization employees, customers, stakeholders
                  </p>
                </CarouselItem>

                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    Only senior industry leaders as collaborative consultants
                    working across all levels
                  </h4>
                </CarouselItem>

                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    500+ years of experience : 70% client side, practitioner
                    experience
                  </h4>
                </CarouselItem>
                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    Tremendous diversity of experience
                  </h4>
                  <ul className="text-foreground font-paragraph text-extra_paragraph_heading flex flex-col items-start gap-2 list-none">
                    <li>Across 60+ b2c, b2b, b2p industries</li>
                    <li>Across all inhabited continents </li>
                    <li>Across diverse scales & management types</li>
                    <li className="text-foreground/30">
                      Multinational, Regional or local giants, MSME's, start
                      ups,
                    </li>
                    <li>NFPs Across all functions</li>
                  </ul>
                </CarouselItem>
                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    Strategy + Plan + Execution Oversight + On Job Capability
                    Building
                  </h4>
                </CarouselItem>
                <CarouselItem className="flex items-start justify-center px-16 md:px-20 flex-col gap-6">
                  <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                    Customized Renumeration
                  </h4>
                </CarouselItem>
              </CarouselContent>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default StickySlider;
