import {
  differentiatorData,
  functionalSpiralContent,
} from "@/config/marketing";
import { cn } from "@/lib/utils";
import { FC } from "react";
import Image from "next/image";

interface ovDifferentiatorSpiralProps {}

const ovDifferentiatorSpiral: FC<ovDifferentiatorSpiralProps> = ({}) => {
  return (
    <>
      {/* Our Differentiator Section */}
      <section className="w-screen hidden items-start justify-center bg-background py-5">
        <div className="container flex items-start justify-center flex-col relative">
          <div className="flex items-start flex-col justify-center gap-2 sticky bg-background w-full top-0">
            <h2 className="flex items-start justify-start flex-col">
              <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                our
              </span>
              <span className="text-primary-foreground text-secondary_heading font-normal">
                Differentiators
              </span>
            </h2>
            <h4 className="text-foreground font-paragraph  mb-4 text-extra_paragraph_heading ">
              Cosmos approach vs Traditional approach
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="grid grid-cols-2 gap-12 mt-8">
              {differentiatorData.map((item, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-full flex-col bg-background flex items-start justify-start "
                  )}
                >
                  <span className="text-subtitle_heading font-heading text-primary-foreground">
                    {item.serialNumber}
                  </span>
                  <p className="text-extra_paragraph_heading font-heading text-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center w-full  aspect-square md:h-screen bg-transparent static md:sticky  top-0">
              <Image
                src={
                  "https://utfs.io/f/ZowmNmBHF7rVZzAeYmBHF7rVAK6CWauMPjmJlROdkngGeUw2"
                }
                width={300}
                height={300}
                alt="Sphere Image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Functional Spiral Section */}
      <section className="w-screen hidden items-center justify-center h-screen bg-background py-5 bg-[url('https://utfs.io/f/ZowmNmBHF7rV60Iee5hbQOfRazMg3kr4BxVuqK1noU7SLJGE')] bg-center bg-no-repeat bg-contain">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  Functional Spirals
                </span>
              </h2>
              <ul className="list-none flex items-start justify-center flex-col gap-4">
                {functionalSpiralContent.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start justify-start text-foreground"
                  >
                    <span className="text-foreground min-w-[300px] font-paragraph text-extra_paragraph_heading">
                      {item.data}
                      <span className="text-secondary-foreground">
                        {"-Spiral"}
                      </span>
                    </span>
                    <span className="text-foreground font-paragraph text-extra_paragraph_heading">
                      {" - "} {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ovDifferentiatorSpiral;
