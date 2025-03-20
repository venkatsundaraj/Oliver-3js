import React from "react";
import { ourDomainSpiral } from "@/config/marketing";
import { cn } from "@/lib/utils";

const FunctionalSpirals = () => {
  const spirals = [
    { title: "Enterprise", titletwo: "-Spiral", description: "Business" },
    { title: "Brand", titletwo: "-Spiral", description: "Brand & Marketing" },
    { title: "Innovation", titletwo: "-Spiral", description: "Innovation" },
    {
      title: "Human Capital",
      titletwo: "-Spiral",
      description: "Human Resources",
    },
    {
      title: "Sales",
      titletwo: "-Spiral",
      description: "Sales, Business Development & Distribution",
    },
    {
      title: "Finance",
      titletwo: "-Spiral",
      description: "Financial Management, Management Accountancy",
    },
    {
      title: "Operations",
      titletwo: "-Spiral",
      description: "Operations & Supply Chain",
    },
    {
      title: "Synthesis",
      titletwo: "-Spiral",
      description: "Data Analytics, Synthesis & Reasoning",
    },
    { title: "Tech", titletwo: "-Spiral", description: "Technology" },
    { title: "Design", titletwo: "-Spiral", description: "Digital & Social" },
    { title: "Digital", titletwo: "-Spiral", description: "Design" },
  ];
  return (
    <section
      id="our-functional-spirals"
      className="bg-background text-white py-16 md:py-24 flex items-center justify-center bg-[url('https://utfs.io/f/ZowmNmBHF7rV60Iee5hbQOfRazMg3kr4BxVuqK1noU7SLJGE')] bg-center bg-no-repeat bg-contain"
    >
      <div className="container mx-auto  px-4 md:px-8 lg:px-16">
        {/* Title */}
        <div className="text-start mb-12">
          <h2 className="flex items-center justify-center flex-col leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Domain spirals
            </span>
          </h2>
        </div>
        <ul className="grid grid-cols-2 max-w-xl items-start gap-x-3 md:gap-x-10 gap-y-2 justify-center relative ">
          <li className="absolute h-full w-[1px] top-0 bg-[#ED7D31] left-1/2 -translate-x-1/2" />
          <li className="text-secondary-foreground font-heading font-normal text-[clamp(18px,1.7vw,30px)] leading-tight text-right">
            Cosmos-Spirals
          </li>
          <li className="text-secondary-foreground font-heading font-normal text-[clamp(18px,1.7vw,30px)] leading-tight">
            Strategy & Program Spirals
          </li>
          {ourDomainSpiral.map((item, i) => (
            <li
              key={i}
              className={cn(
                "text-foreground font-heading font-normal text-[clamp(18px,1.7vw,30px)] leading-tight",
                i % 2 == 0 ? "text-right " : ""
              )}
            >
              {item}
              <span className="text-secondary-foreground font-heading">
                {i % 2 === 1 ? "" : "-Spiral"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FunctionalSpirals;
