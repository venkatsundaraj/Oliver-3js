import { FC } from "react";
import Image from "next/image";
import { valueEngineContent } from "@/config/marketing";
import { cn } from "@/lib/utils";
import OurBelieve from "@/app/_components/our-belief";
import DotAnimation from "@/app/_components/dot-animation";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import CosmicSvgAnimation from "@/app/_components/cosmic-svg-animation";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <ScrollToHash />
      {/* Hero Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 relative">
        <div className="container flex items-center justify-center relative">
          <div className="size-18 rounded-full bg-gradient-radial  from-green-500 via-gray-50 to-violet-500 w-10 h-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2" />
          <div className="container relative w-full h-full flex flex-col items-center justify-center ">
            <h1 className="text-secondary_heading text-center z-[10] font-heading text-primary-foreground mb-2 leading-tight">
              Cosmos
            </h1>
            <p className="text-foreground mb-4 leading-10 z-[10] text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              /ˈkɒzmɒs/ . Noun <br />
              An order that’s fluid & dynamic held together harmoniously by
              invisible laws or universal insights
            </p>
            <p className="text-foreground z-[10] leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              An order that symbolises the hope of light in void or darkness
            </p>
            <DotAnimation />
          </div>
        </div>
      </section>

      {/* Who are we Section */}
      <section
        id="who-are-we"
        className="w-screen flex items-center justify-center bg-background py-16 md:py-16"
      >
        <div className="container flex items-center justify-center relative">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-secondary_heading text-primary-foreground font-heading">
                  Who are we?
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading font-paragraph leading-loose text-foreground">
                We are Growth Strategists who use Insights to unlock Higher
                Profits.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-full"
                src="https://utfs.io/f/ZowmNmBHF7rVn9xfodbEDNIHoOZs906z1pPhXFwkyAuiWTxR"
                width={600}
                height={600}
              />
              {/* <CosmicSvgAnimation /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Believe Section */}
      <section
        id="our-beliefs"
        className="w-screen flex items-center justify-center bg-background py-16 md:py-36"
      >
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-0">
            <h2 className="flex items-start justify-start flex-col leading-[1.1]">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
                Our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
                Belief
              </span>
            </h2>
            <OurBelieve className="col-span-2" />
          </div>
        </div>
      </section>

      {/* Our Values Engine Section */}
      <section
        id="our-values-engine"
        className="w-screen flex items-center justify-center min-h-screen bg-background py-16 md:py-16 flex-col"
      >
        <div className="container flex items-center justify-center mb-16">
          <div className="container w-full h-full flex flex-col items-center justify-center ">
            <h2 className="flex items-center justify-center flex-col leading-[1.1]">
              <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
                Our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
                Values Engine
              </span>
            </h2>
            <p className="text-foreground mb-4 leading-10 text-center text-6xl font-paragraph text-extra_paragraph_heading md:max-w-lg">
              Our values engine ensures that our outcomes are transformative to
              our clients.
            </p>
            <p className="text-foreground leading-10 text-center mt-4 md:mt-8 font-heading text-tertiary_heading">
              Depth, Empathy, Holism, Practice, Collaboration, Joy
            </p>
          </div>
        </div>
        <div className="container">
          <div className="min-w-full max-w-6xl p-8 md:p-12 border border-foreground relative">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-12 relative ">
              {valueEngineContent.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center list-none text-foreground"
                >
                  <span
                    className={cn(
                      "inline-flex items-center justify-center px-6 py-2 bg-[#474747] text-foreground font-paragraph text-extra_paragraph_heading min-w-[300px] md:min-w-[400px] relative",
                      i % 2 === 0
                        ? `before:hidden before:md:block before:md:content-[''] before:w-0 before:md:w-2/3 before:h-[2px] before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[100%] before:bg-foreground`
                        : ""
                    )}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="absolute w-full h-full bg-transparent top-0 left-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <li
                  className={cn(
                    "w-0 h-0 absolute border-r-[14px] border-l-[14px] border-l-transparent border-r-transparent border-t-[18px] border-t-foreground left-[50%] translate-x-[-50%] hidden md:block",
                    {
                      "top-[20%]": i === 0,
                      "top-[40%]": i === 1,
                      "top-[58%]": i === 2,
                      "top-[76%]": i === 3,
                      "top-[100%]": i === 4,
                    }
                  )}
                />
              ))}
            </ul>
          </div>
          <p className="text-foreground leading-10 text-center mt-4 md:mt-16 font-heading text-tertiary_heading">
            Transformative Outcomes
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
