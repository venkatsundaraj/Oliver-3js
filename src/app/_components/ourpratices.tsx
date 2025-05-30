import React from "react";
import practicedot from "../../../public/our practices dots.svg";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}
const ourpractices: FC<pageProps> = function () {
  return (
    <section
      id="our-practices"
      className="w-screen flex items-center justify-center bg-background py-16 md:py-16 z-[16] relative"
    >
      <div className="container flex gap-8 flex-col justify-start">
        <h2 className="flex items-start justify-start flex-col leading-[1.1]">
          <span className="text-extra_paragraph_heading text-foreground font-heading">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-normal font-heading">
            Practices
          </span>
        </h2>
        <div className="grid grid-cols-2  w-full md:grid-cols-3 gap-6 md:gap-0 relative">
          <div className="flex items-start gap-8 md:border-t border-foreground flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-foreground font-heading text-tertiary_heading leading-[1]">
                <span className="text-primary-foreground">Nu.</span>Cosmos
              </h4>
              <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                Transformation Practice
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Turnaround
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  P&L and Growth Turnarounds
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Scale
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  Ramp it, Business Scale-ups
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Nu.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Op-Culture
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  Complex Operating Culture Transformations
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-8 md:border-t border-foreground flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-foreground font-heading text-tertiary_heading leading-[1]">
                <span className="text-primary-foreground">Qst.</span>Cosmos
              </h4>
              <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                Business Entry Practice
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Qst.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Geography
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  New Countries or Continents
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Qst.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Category
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  New Category or Industries
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-8 flex-col justify-start py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
            <div className="flex flex-col items-start justify-start gap-2">
              <h4 className="text-foreground font-heading text-tertiary_heading leading-[1]">
                <span className="text-primary-foreground">Flr.</span>Cosmos
              </h4>
              <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                Capability Practice
              </p>
            </div>

            <div className="flex flex-col items-start justify-center gap-8 mt-6 md:mt-10">
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Flr.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Innate
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  Potential Solutions
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-2">
                <h4 className="text-primary-foreground font-heading text-our_text_heading leading-[1] ">
                  Flr.
                  <span className="text-foreground text-our_text_heading leading-[1.1] ">
                    Manifest
                  </span>
                </h4>
                <p className="text-muted-foreground font-paragraph text-extra_paragraph_heading ">
                  Skill Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourpractices;
