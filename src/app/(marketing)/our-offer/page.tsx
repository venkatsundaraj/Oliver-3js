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

export default function Component() {
  return (
    <>
      <ScrollToHash />
      <div className="relative min-h-[100vh] md:min-h-[120vh] bg-background flex items-center justify-center p-4 overflow-hidden">
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
          <div className="relative z-10 text-center max-w-md">
            <p className="text-gray-200 text-[30px] mb-2 font-heading">Our</p>
            <h1 className="text-primary-foreground leading-[1.1] text-secondary_heading font-light tracking-wide mb-6 font-heading">
              Proposition
            </h1>
            <p className="text-white text-extra_paragraph_heading leading-relaxed mb-4 font-[600]">
              Insight-centered business strategy & organization design
            </p>
            <p className="text-white/90 text-extra_paragraph_heading font-light">
              with collaboration & accountability
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-0 left-[50%] translate-x-[-50%]  w-full container py-5 min-h-[200px] md:min-h-[300px]">
          <Image
            alt="Our Trrain"
            className="w-[400px] md:w-[1000px]"
            src="https://utfs.io/f/ZowmNmBHF7rVjSZRQ6W8lWpd9eUfvNKun5Rza3Jr2k7oD6Gb"
            width={500}
            height={500}
          />
          <div className="absolute top-0 left-8 md:left-0">
            <span className="text-foreground text-center text-6xl font-paragraph text-extra_paragraph_heading leading-tight">
              We unlock <br />
              <strong>
                Business Growth
                <br /> Spirals
              </strong>
            </span>
          </div>
          <div className="absolute bottom-0 right-8 md:right-0">
            <span className="text-foreground text-center text-6xl font-paragraph text-extra_paragraph_heading leading-tight">
              that are{" "}
              <strong>
                Transformative
                <br /> and Profitable
                <br />
              </strong>
              for our clients
            </span>
          </div>
        </div>
      </div>
      <OfferTerrain />
      <OurPractices />
      <StickySlider />
      <SolutionLevels />
      <FunctionalSpirals />
      <MobStickySlider />
      <Differentiators />
    </>
  );
}
