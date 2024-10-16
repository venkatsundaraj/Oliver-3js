"use client";

import { Button, buttonVariants } from "@/app/_components/button";
import { cn } from "@/lib/utils";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  functionalSpiralContent,
  domainsData,
  differentiatorData,
} from "@/config/marketing";
import InfiniteMap from "@/app/_components/infinite-map";

interface pageProps {}

const Model = dynamic(() => import("@/app/_components/model"), {
  loading: () => <p>Loading</p>,
  ssr: false,
});

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Model />

      {/* Our Terrain Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  Terrain
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading text-foreground">
                Operating Contexts that are Complex, or Represent
                discontinuities, or have a history of failure. Across
                Industries, & Geographies Categories, & Domains.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                src="https://utfs.io/f/ZowmNmBHF7rVfjRd73PCmXPz69iKdAF7rv2Qs8klLYWEecnx"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* Our Practices Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  Practices
                </span>
              </h2>
              <div className="grid grid-cols-1 w-full md:grid-cols-3 border-t border-foreground relative mt-8">
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-extra_paragraph_heading ">
                    Nu.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Transportation
                  </p>
                </div>
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-extra_paragraph_heading ">
                    Qst.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Business Entry
                  </p>
                </div>
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-extra_paragraph_heading ">
                    Flr.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Capability
                  </p>
                </div>
                <Link
                  href={"/know-more"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-background absolute top-0 translate-y-[-50%] right-0 text-foreground rounded-none uppercase"
                  )}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functional Spiral Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5 bg-[url('https://utfs.io/f/ZowmNmBHF7rV60Iee5hbQOfRazMg3kr4BxVuqK1noU7SLJGE')] bg-center bg-no-repeat bg-contain">
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

      {/* Client Domains */}
      <section className="w-screen flex flex-col items-center justify-center bg-background py-5">
        <div className="container flex flex-col items-center justify-center">
          <h2 className="flex justify-start flex-col text-center">
            <span className="text-extra_paragraph_heading text-foreground font-paragraph">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-normal">
              Client Domains
            </span>
          </h2>
          <ul className="flex flex-wrap gap-4 w-full items-center justify-center mt-8">
            {domainsData.map((item, i) => (
              <li
                className="px-8 min-w-[24rem] max-w-md py-4 border border-secondary-foreground inline-flex rounded-2xl items-center justify-center text-foreground bg-background font-paragraph text-extra_paragraph_heading"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <InfiniteMap />
      </section>

      {/* People Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Some of our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  People
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading text-foreground">
                The leadership team at Cosmos comprises senior professionals,
                with more than 500 years of Cumulative experience in building,
                managing & growing large businesses across various geographies
                globally.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                src="https://utfs.io/f/ZowmNmBHF7rVKZnxLUILRN7EY2f498lBm1DhqtyXeHvZVid5"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projectjs Section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-5">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col">
                <span className="text-extra_paragraph_heading text-foreground font-paragraph">
                  Some of our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal">
                  Projects
                </span>
              </h2>
              <p className="max-w-4xl text-extra_paragraph_heading text-foreground">
                Our Team of Leaders has particularly enjoyed collaborating on &
                answering some really complex yet exciting questions, resulting
                in real project experience across more than 80 projects in
                recent past.
              </p>
              <Link
                href={"/know-more"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-2"
                )}
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
