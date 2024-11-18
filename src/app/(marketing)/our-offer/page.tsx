"use client";

import { motion } from "framer-motion";
import OfferTerrain from "../../_components/offer-terrain";
import OurPractices from "../../_components/ourpratices";
import SolutionLevels from "../../_components/SolutionLevels";
import FunctionalSpirals from "../../_components/FunctionalSpirals";
import Differentiators from "../../_components/Differentiators";

export default function Component() {
  return (
    <>
      <div className="relative min-h-screen bg-zinc-900 flex items-center justify-center p-4 overflow-hidden">
        <div className="relative bottom-[50px] w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] flex items-center justify-center">
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
            <h1 className="text-sky-400 text-5xl font-light tracking-wide mb-6 font-heading">
              Proposition
            </h1>
            <p className="text-white text-2xl font-light leading-relaxed mb-4 font-[600]">
              Insight-centered business strategy & organization design
            </p>
            <p className="text-white/90 text-xl font-light">
              with collaboration & accountability
            </p>
          </div>
        </div>
      </div>
      <OfferTerrain />
      <OurPractices />
      <SolutionLevels />
      <FunctionalSpirals />
      <Differentiators />
    </>
  );
}
