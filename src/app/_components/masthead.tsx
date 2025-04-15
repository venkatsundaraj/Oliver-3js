"use client";

import { ourProfileContent } from "@/config/marketing";
import React, { type FC, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const cityNames = [
  "Singapore",
  "Mumbai",
  "Nairobi",
  "London",
  "Bengaluru",
  "Delhi",
  "Nagpur",
  "Dubai",
  "Toronto",
  "Sydney",
  "Barcelona",
];

interface MasTheadProps {}

const MasThead: FC<MasTheadProps> = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === cityNames.length - 1 ? 0 : prev + 1));
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? cityNames.length - 1 : prev - 1));
  }, []);

  const onDotClick = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play functionality
  React.useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          nextSlide();
        }
      }, 3000); // Change slide every 3 seconds
    };

    startInterval();

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  return (
    <div
      className={cn("w-full relative py-2 hidden xl:flex")}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-start ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className=" flex items-center justify-center"
          >
            <p
              className={cn(
                "ms-4 flex font-paragraph text-left  min-w-[210px] text-[20px] md:text-[23px]",
                `${
                  currentIndex > 3
                    ? "text-secondary-foreground"
                    : "text-primary-foreground"
                }`
              )}
            >
              {cityNames[currentIndex]}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MasThead;
