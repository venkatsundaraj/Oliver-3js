import { FC } from "react";
import { Button } from "./button";
import Image from "next/image";
import { insightCenteredContent } from "@/config/marketing";

interface MobStickySliderProps {}

const MobStickySlider: FC<MobStickySliderProps> = ({}) => {
  return (
    <section
      id="our-differentiators"
      className="w-screen flex flex-col md:hidden overflow-x-hidden items-center justify-center bg-background py-16 md:py-16 z-[16] relative"
    >
      <div className="container flex gap-8 flex-col items-center justify-center">
        <h2 className="flex self-start items-start justify-start flex-col ">
          <span className="text-subtitle_heading text-foreground font-heading">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
            Differentiators
          </span>
        </h2>
        <div className="flex items-center justify-center px-2 md:px-20 flex-col gap12">
          <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
            <div className="flex items-start justify-center flex-col gap-4 text-foreground">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Traditional, algorithmic, 'engineering' approach
              </h4>
              <p className="text-subtitle_heading font-paragraph text-foreground">
                Top-down break up of problem &gt; bottom-up synthesis of
                solution parts Interpreting organization as sum of parts
              </p>
              <p className="font-paragraph text-foreground text-subtitle_heading ">
                Vs.
              </p>
            </div>
            <div className="flex items-start mt-8 justify-center flex-col gap-8 mb-8">
              <Button
                className="rounded-xl min-w-52 font-paragraph bg-secondary-foreground text-foreground"
                size={"lg"}
                variant={"default"}
              >
                Value Chain
              </Button>
              <Button
                className="rounded-xl min-w-52 font-paragraph bg-secondary-foreground text-foreground"
                size={"lg"}
                variant={"default"}
              >
                Business
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 px-0 md:px-16">
            <div className="flex items-start justify-center flex-col gap-4 text-foreground">
              <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
                Modern, Insights centered, 'doctor' approach
              </h4>
              <p className="text-subtitle_heading font-paragraph text-foreground">
                Core insights about problem ;gt Reimagine Organisation +
                enterprise around insight concentrically interpreting
                Organisation as an engine fuelled by differentiated insights
              </p>
              <p className="font-paragraph font-bold text-foreground text-subtitle_heading ">
                Insights at the center of P&L and organisation vs insights at
                the center of marketing, innovation, design, etc.
              </p>
            </div>
            <div className="flex  items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-3/4 md:w-72 mt-10"
                src="https://utfs.io/f/ZowmNmBHF7rVHVpLcCdWuQopKOivRcLqJD7x46CXtZGlw0Sh"
                width={300}
                height={300}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-6">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            From empathy to insights to hero actions to execution Strategy :
            choice of actions - not that of intent or directions
          </h4>
          {insightCenteredContent.map((item) => (
            <Button
              className="rounded-xl w-full md:min-w-80 font-paragraph bg-secondary-foreground text-foreground"
              // size={"lg"}
              variant={"default"}
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-2">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            Intensive 360 degree solution co-creation & collaboration workshops
          </h4>
          <p className="font-paragraph text-foreground text-subtitle_heading">
            With organization employees, customers, stakeholders
          </p>
        </div>

        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-6">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            Only senior industry leaders as collaborative consultants working
            across all levels
          </h4>
        </div>

        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-6">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            500+ years of experience : 70% client side, practitioner experience
          </h4>
        </div>
        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-2">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            Tremendous diversity of experience
          </h4>
          <ul className="text-foreground font-paragraph text-subtitle_heading flex flex-col items-start gap-2 list-none">
            <li>Across 60+ b2c, b2b, b2p industries</li>
            <li>Across all inhabited continents </li>
            <li>Across diverse scales & management types</li>
            <li className="text-foreground/30">
              Multinational, Regional or local giants, MSME's, start ups,
            </li>
            <li>NFPs Across all functions</li>
          </ul>
        </div>
        <div className="flex items-start justify-center px-2 md:px-20 flex-col gap-6">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            Strategy + Plan + Execution Oversight + On Job Capability Building
          </h4>
        </div>
        <div className="flex items-start justify-start px-2 md:px-20 flex-col gap-6 self-start">
          <h4 className="font-paragraph text-extra_paragraph_heading text-primary-foreground">
            Customized Renumeration
          </h4>
        </div>
      </div>
    </section>
  );
};

export default MobStickySlider;
