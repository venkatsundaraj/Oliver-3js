import React, { useRef } from "react";

const SolutionLevels = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    startX = e.pageX - scrollContainerRef.current!.offsetLeft;
    scrollLeft = scrollContainerRef.current!.scrollLeft;
    scrollContainerRef.current!.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown = false;
    scrollContainerRef.current!.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollContainerRef.current!.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current!.offsetLeft;
    const walk = (x - startX) * 1; // scroll-fastness
    scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-black-900 text-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto  px-4 md:px-8 lg:px-16">
        {/* Title */}
        <div className="text-start mb-12">
          <h2 className="text-lg font-light">Our</h2>
          <h1 className="text-5xl font-bold text-blue-500">Solution Levels</h1>
        </div>

        {/* Scrollable Container with Events */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto space-x-8 px-4 py-6 scrollbar-hide"
          style={{ cursor: "grab" }}
        >
          {/* Solution Cards */}
          {[
            {
              title: "Premier",
              description:
                "Client Specific Solutions led by Consultants ahead of industry curve",
            },
            {
              title: "Professional",
              description:
                "Client Specific Solutions led by Industry Class Consultants",
            },
            {
              title: "Elemental",
              description:
                "Client Specific Solutions led by young and energetic Consultants",
            },
            {
              title: "Atelier",
              description:
                "Group Learning, Workshops & Seminars for knowledge sharing",
            },
            {
              title: "Atelier",
              description:
                "Group Learning, Workshops & Seminars for knowledge sharing",
            },
            {
              title: "Atelier",
              description:
                "Group Learning, Workshops & Seminars for knowledge sharing",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white text-black p-6  shadow-md min-w-[350px] cursor-pointer h-[350px]"
            >
              <h3 className="text-xs font-semibold text-gray-600 mb-2">
                COSMOS STRATEGY
              </h3>
              <h2 className="text-xl font-bold text-blue-500 mb-4">
                {card.title}
              </h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionLevels;
