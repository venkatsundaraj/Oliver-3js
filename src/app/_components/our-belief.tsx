"use client";

import { ourProfileContent } from "@/config/marketing";
import React, { type FC, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/app/_components/ui/button";
import { ChevronUp, ChevronDown } from "lucide-react";

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
    <div className="flex flex-col items-center space-y-2">
      {Array.from({ length: itemCount }).map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={cn(
            "w-[10px] h-[10px] rounded-full p-0",
            currentIndex === index ? "bg-foreground" : "bg-foreground/45"
          )}
          onClick={() => onDotClick(index)}
        />
      ))}
    </div>
  );
};

const OurBelieve: FC<OurBelieveProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === ourProfileContent.length - 1 ? 0 : prev + 1
    );
  }, []);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? ourProfileContent.length - 1 : prev - 1
    );
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
      className={cn("w-full relative", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="h-[250px] md:h-[240px] relative flex items-center justify-center px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <span className="text-subtitle_heading text-foreground font-paragraph text-left max-w-2xl">
              {ourProfileContent[currentIndex]}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 md:bottom-[initial] md:top-[50%] md:left-0 rotate-90 origin-bottom-left md:rotate-0 md:translate-y-[-50%] flex flex-col items-center gap-4 ">
        <Button
          variant="outline"
          size="icon"
          onClick={previousSlide}
          className="rounded-full"
        >
          <ChevronUp className="h-4 w-4 text-primary-foreground" />
        </Button>

        <CarouselDots
          itemCount={ourProfileContent.length}
          currentIndex={currentIndex}
          onDotClick={onDotClick}
        />
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full"
        >
          <ChevronDown className="h-4 w-4 text-primary-foreground" />
        </Button>
      </div>
    </div>
  );
};

export default OurBelieve;
