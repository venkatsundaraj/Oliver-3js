"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import OfferTerrain from "@/app/_components/offer-terrain";
import OurPractices from "@/app/_components/ourpratices";
import SolutionLevels from "@/app/_components/SolutionLevels";
import FunctionalSpirals from "@/app/_components/FunctionalSpirals";
import Differentiators from "@/app/_components/Differentiators";
import StickySlider from "@/app/_components/sticky-slider";
import MobStickySlider from "@/app/_components/mob-sticky-slider";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import VerticalCarousel from "@/app/_components/vertical-carousel";
import OurSolutionLevelsNew from "@/app/_components/our-solution-levels-new";

export default function Component() {
  return (
    <>
      <ScrollToHash />
      <section
        id="our-value-for-you"
        className="min-h-[500px] md:min-h-[80vh]  flex items-center justify-center"
      >
        <div className="container">
          <div className="flex transform md:translate-y-5 mb-6 md:mb-24">
            <h2 className="flex items-start text-left justify-start flex-col leading-[1.1]">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-left">
                Our
              </span>
              <span className="text-primary-foreground mb-4 text-secondary_heading font-heading font-bold">
                Goal
              </span>
            </h2>
          </div>
          <div className="flex relative items-center justify-center    w-full py-5 min-h-[200px] md:min-h-[300px]">
            <Image
              alt="Our Trrain"
              className="w-[400px] md:w-[1000px]"
              src="https://utfs.io/f/ZowmNmBHF7rVjSZRQ6W8lWpd9eUfvNKun5Rza3Jr2k7oD6Gb"
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0">
              <p className="text-foreground text-center md:text-left text-6xl font-paragraph text-extra_paragraph_heading leading-tight">
                We unlock <br />
                <strong>
                  Business Growth
                  <br /> Spirals
                </strong>
              </p>
            </div>
            <div className="absolute bottom-[-20px] md:bottom-0  mt-4 md:mt-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0">
              <p className="text-foreground text-center md:text-left text-6xl font-paragraph text-extra_paragraph_heading leading-tight">
                that are{" "}
                <strong>
                  Transformative
                  <br /> and Profitable
                  <br />
                </strong>
                for our clients
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="relative min-h-[80vh] md:min-h-[100vh] bg-background flex items-center w-screen overflow-x-hidden justify-center p-4">
        <div className="relative bottom-[50px] w-[80vw] max-w-[600px] h-[80vw]  max-h-[600px] flex items-center justify-center">
          {/* Static Circle */}
          <div className="absolute w-[80%] h-[80%] rounded-full border-2 border-white"></div>

          {/* Animated expanding circle with smooth fade-out and no reappearance glitch */}
          <motion.div
            className="absolute rounded-full border-2  border-white"
            initial={{ width: "80%", height: "80%", opacity: 1 }}
            animate={{ width: "200%", height: "200%", opacity: [1, 1, 0] }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.1, // Small delay to prevent reappearance glitch
            }}
          />
          {/* Second animated expanding circle, triggered after the first */}
          <motion.div
            className="absolute rounded-full border-2  border-white"
            initial={{ width: "80%", height: "80%", opacity: 1 }}
            animate={{ width: "200%", height: "200%", opacity: [1, 1, 0] }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 0.1,
              delay: 2, // Delay to start after the first ripple
            }}
          />
          {/* Content container */}
          <div className="relative z-10 text-center max-w-md" id="">
            <h2 className="flex items-center text-center justify-start flex-col leading-[1.1]">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
                Our
              </span>
              <span className="text-primary-foreground mb-4 text-secondary_heading font-heading font-bold">
                Offer
              </span>
            </h2>
            <p className="text-white text-extra_paragraph_heading mb-4  font-paragraph font-[600] leading-[1.1]">
              Insight-centered business strategy & organization design
            </p>
            <p className="text-white/90 text-extra_paragraph_heading font-paragraph  font-light">
              with collaboration & accountability
            </p>
          </div>
        </div>
      </div>
      <VerticalCarousel />
      <OfferTerrain />
      <OurPractices />
      {/* <StickySlider /> */}

      {/* <SolutionLevels /> */}
      <OurSolutionLevelsNew />
      <FunctionalSpirals />
      <MobStickySlider />
      <Differentiators />
    </>
  );
}
