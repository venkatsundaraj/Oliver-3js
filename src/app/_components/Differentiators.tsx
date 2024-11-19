"use client";

import { ChevronUp, ChevronDown, Lightbulb, Zap, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { ourDifferentiatorContent } from "@/config/marketing";
import Image from "next/image";

type Topic = {
  title: string;
  imgPath: string;
  icon: React.ElementType;
  content: {
    title: string;
    description: string;
    flowItems: string[];
  };
};

const topics: Topic[] = [
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVS7N3l6RkTnuUMoapyhGFmg9lwIYORcVixtW1",
    title: "Insightsaaaa centered strategy",
    icon: Lightbulb,
    content: {
      title: "Traditional, algorithmic, 'engineering' approach",
      description:
        "Top-down break up of problem > bottom-up synthesis of solution parts Interpreting organization as sum of parts",
      flowItems: ["Value Chain", "Business"],
    },
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
    title: "Data-driven decisions",
    icon: Zap,
    content: {
      title: "Leveraging big data and analytics",
      description:
        "Utilizing advanced analytics to derive actionable insights and drive strategic decision-making processes",
      flowItems: ["Data Collection", "Analysis", "Decision"],
    },
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
    title: "Customer-centric focus",
    icon: Target,
    content: {
      title: "Prioritizing customer experience",
      description:
        "Aligning all aspects of the business to meet and exceed customer expectations, fostering loyalty and growth",
      flowItems: ["Customer Needs", "Product Development", "Service Delivery"],
    },
  },
];

export default function Differentiators() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const newIndex = Math.min(
        Math.max(
          Math.floor((scrollPosition - sectionTop) / window.innerHeight),
          0
        ),
        topics.length - 1
      );

      setCurrentTopicIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateTopic = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? Math.max(0, currentTopicIndex - 1)
        : Math.min(topics.length - 1, currentTopicIndex + 1);

    setCurrentTopicIndex(newIndex); // Update the content immediately

    const targetOffset = sectionRef.current?.offsetTop ?? 0;
    window.scrollTo({
      top: targetOffset + newIndex * window.innerHeight,
      behavior: "smooth",
    });
  };

  const prevTopic = topics[currentTopicIndex - 1];
  const nextTopic = topics[currentTopicIndex + 1];

  return (
    <div ref={sectionRef} className="relative">
      {/* Scrollable Container */}
      <div className="h-[400vh] bg-zinc-900 text-white">
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 p-8">
            <h2 className="text-gray-300 text-xl font-light">Our</h2>
            <h1 className="text-sky-400 text-5xl md:text-7xl font-light tracking-wider">
              Differentiators
            </h1>
          </div>

          {/* Main Content */}
          <div className="flex-grow flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-[auto,1px,1fr] gap-8 items-center px-8">
              {/* Left Navigation */}
              <div className="flex flex-col items-center gap-4">
                {/* Previous Topic */}

                <button
                  onClick={() => navigateTopic("prev")} // Navigate to the previous topic
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                  aria-label="Go to previous topic"
                  disabled={currentTopicIndex === 0}
                >
                  <ChevronUp
                    className={`w-6 h-6 ${
                      currentTopicIndex === 0
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                {prevTopic && (
                  <div className="text-center text-sm md:text-base text-gray-500 opacity-50">
                    <Image
                      src={prevTopic.imgPath}
                      width={70}
                      height={70}
                      alt="image"
                    />
                  </div>
                )}
                {/* Current Topic Icon */}
                <div className="relative flex flex-col items-center gap-2 text-center">
                  <div className="text-sm md:text-base flex flex-row justify-center items-center	 gap-6 ">
                    <Image
                      src={topics[currentTopicIndex].imgPath}
                      width={80}
                      height={80}
                      alt="image"
                    />
                    <p>{topics[currentTopicIndex].title}</p>
                  </div>
                </div>
                {nextTopic && (
                  <div className="text-center text-sm md:text-base text-gray-500 opacity-50">
                    <Image
                      src={nextTopic.imgPath}
                      width={70}
                      height={70}
                      alt="image"
                    />
                  </div>
                )}
                <button
                  onClick={() => navigateTopic("next")} // Navigate to the next topic
                  className="p-2 hover:bg-zinc-800 rounded-full transition-colors"
                  aria-label="Go to next topic"
                  disabled={currentTopicIndex === topics.length - 1}
                >
                  <ChevronDown
                    className={`w-6 h-6 ${
                      currentTopicIndex === topics.length - 1
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  />
                </button>

                {/* Next Topic */}
              </div>

              {/* Divider */}
              <div className="hidden md:block w-px bg-gray-700" />

              {/* Right Content */}
              <div className="space-y-6">
                <div>
                  <p className="text-[#5CB7E3] ">
                    From empathy to insights to hero actions to execution
                  </p>
                  <p className="text-[#5CB7E3] ">
                    Strategy: choice of actions - not that of intent or
                    directions
                  </p>
                  <p className="text-[white] bg-[#0077B9] w-[80%] p-[3%] text-center rounded-[12px]">
                    Insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
