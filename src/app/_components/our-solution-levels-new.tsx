import { ourSolutionLevelsData } from "@/config/marketing";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface OurSolutionLevelsNewProps {}

const OurSolutionLevelsNew: FC<OurSolutionLevelsNewProps> = () => {
  return (
    <section className="relative flex items-center justify-center py-8 md:py-16 w-full ">
      <div className="container flex items-center justify-center flex-col gap-8">
        <h2 className="flex items-start justify-start flex-col leading-[1.1] text-center">
          <span className="text-extra_paragraph_heading text-foreground font-heading text-center w-full">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading text-center font-normal font-heading">
            Solution Levels
          </span>
        </h2>
        <ul className="flex flex-col items-center justify-between gap-6 w-full">
          {ourSolutionLevelsData.map((item, i) => (
            <li
              key={i}
              className={cn(
                "flex items-center flex-col justify-center gap-2 bg-background py-4 px-8 border border-foreground relative w-full", // w-full for mobile
                {
                  "md:w-[20%]": i === 0,
                  "md:w-[40%]": i === 1,
                  "md:w-[60%]": i === 2,
                  "md:w-[80%]": i === 3,
                  "md:w-[100%]": i >= 4,
                },
                "group" // Add any other classes you need
              )}
            >
              <p className="text-subtitle_heading font-normal text-primary-foreground font-heading">
                {item.text}
              </p>
              <h3 className="font-heading text-center text-tertiary_heading text-foreground leading-[0.8]">
                {item.subText}
              </h3>
              <p className="text-subtitle_heading text-center font-normal text-secondary-foreground font-paragraph uppercase">
                {item.text}
              </p>
              <div className="absolute w-full h-full  items-center justify-center bg-white hidden group-hover:flex p-2 md:p-4">
                <p className="text-subtitle_heading font-normal text-popover-foreground/60 text-center font-paragraph">
                  {item.hoverText}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurSolutionLevelsNew;
