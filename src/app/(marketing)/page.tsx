"use client";

import { Button, buttonVariants } from "@/app/_components/button";
import { cn } from "@/lib/utils";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FC, Suspense } from "react";
import {
  functionalSpiralContent,
  domainsData,
  differentiatorData,
  ourDifferentiatorContent,
} from "@/config/marketing";
import InfiniteMap from "@/app/_components/infinite-map";
import { clientDomains } from "@/config/marketing";
import { clientData } from "@/config/marketing";
import { chooseColor } from "@/app/_components/our-work-map-section";
import InfiniteMapWithImageInput from "@/app/_components/infinite-map-with-image-input";

interface pageProps {}

const Model = dynamic(() => import("@/app/_components/model"), {
  loading: () => <p>Loading</p>,
  ssr: false,
});

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <Model />
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      {/* Our Terrain Section */}
      <section
        id="our-terrain"
        className="w-screen flex items-center justify-center bg-background py-16 md:py-24 z-[16] relative"
      >
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-12 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col leading-[1]">
                <span className="text-extra_paragraph_heading text-foreground font-heading">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
                  Terrain
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading font-paragraph leading-loose text-foreground">
                Operating contexts that are complex, or represent
                discontinuities, or have a history of failure.
              </p>
              <p className="max-w-md text-extra_paragraph_heading font-paragraph leading-loose text-foreground">
                {" "}
                Across industries, & geographies categories, & domains.
              </p>
              <Link
                href={"/our-offer#our-terrain"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground rounded-none mt-4 uppercase"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-3/4 md:w-96"
                src="https://utfs.io/f/ZowmNmBHF7rVfjRd73PCmXPz69iKdAF7rv2Qs8klLYWEecnx"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Practices Section */}
      <section className="w-screen flex items-center justify-center  bg-background py-16 md:py-24 z-[16] relative">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col leading-[1.1]">
                <span className="text-extra_paragraph_heading text-foreground font-heading">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
                  Practices
                </span>
              </h2>
              <div className="grid grid-cols-2 w-full md:grid-cols-3 md:border-t border-foreground relative mt-8">
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-our_text_heading ">
                    Nu.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Transformation
                  </p>
                </div>
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-our_text_heading ">
                    Qst.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Business Entry
                  </p>
                </div>
                <div className="flex items-start flex-col justify-center py-8 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:rounded-full before:bg-background before:translate-y-[-50%] before:border before:border-foreground">
                  <h4 className="text-secondary-foreground font-heading text-our_text_heading ">
                    Flr.
                  </h4>
                  <p className="text-foreground font-paragraph text-subtitle_heading ">
                    Capability
                  </p>
                </div>
                <Link
                  href={"/our-offer#our-practices"}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "bg-background w-[180px] md:w-auto uppercase mt-4 md:mt-0 md:absolute top-0 md:translate-y-[-50%] right-0 text-foreground rounded-none"
                  )}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Differentiator Section */}
      <section
        id="our-differentiators"
        className="w-screen flex items-center justify-center min-h-screen bg-background py-5 z-[16] relative"
      >
        <div className="container flex flex-col items-start justify-center gap-8">
          <h2 className="flex items-start justify-start flex-col leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
              Differentiators
            </span>
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3  w-full gap-y-8 gap-x-4 md:gap-x-0">
            {ourDifferentiatorContent.map((item, i) => (
              <li
                key={i}
                className="flex items-start justify-center flex-col gap-4"
              >
                <Image
                  src={item.imgPath}
                  width={100}
                  height={100}
                  alt={item.title}
                  className="w-[60px] md:w-[100px]"
                />
                <span className="font-paragraph text-extra_subtitle_heading text-foreground">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Client Domains */}
      <section className="w-screen flex flex-col items-center justify-center bg-background relative py-5 z-[16]">
        <div className="container flex flex-col items-center justify-center absolute py-8 md:py-0 md:top-[50%] z-10 md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%]">
          <h2 className="flex justify-start flex-col text-center leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-normal font-heading">
              Client Domains
            </span>
          </h2>

          <ul className="flex flex-wrap gap-x-6  gap-y-8 w-full items-center justify-center mt-8">
            <ul className="flex flex-wrap gap-4 w-full items-center justify-center mt-8">
              {clientDomains.map((item, i) => (
                <li
                  className="px-8 min-w-[16rem] max-w-md py-4 border border-secondary-foreground inline-flex rounded-3xl items-center justify-center text-foreground bg-secondary-foreground font-paragraph text-extra_paragraph_heading"
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </ul>
          <Link
            href={"/our-client-domains"}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "text-foreground rounded-none mt-8 uppercase "
            )}
          >
            Know More
          </Link>
        </div>
        <InfiniteMap />
      </section>

      {/* People Section */}
      <section className="w-screen flex items-center justify-center bg-background py-16 md:py-16 z-[16] relative">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col leading-[1.1]">
                <span className="text-extra_paragraph_heading text-foreground font-heading">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal font-heading">
                  People
                </span>
              </h2>
              <p className="max-w-md text-extra_paragraph_heading leading-loose text-foreground">
                The leadership team at Cosmos comprises senior professionals,
                with more than 500 years of cumulative experience in building,
                managing & growing large businesses across various geographies
                globally.
              </p>
              <Link
                href={"/our-people#team"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground uppercase rounded-none mt-4"
                )}
              >
                Know More
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-3/4 md:w-96"
                src="https://utfs.io/f/ZowmNmBHF7rVZpsputBHF7rVAK6CWauMPjmJlROdkngGeUw2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projectjs Section */}
      <section className="w-screen flex items-center justify-center bg-background py-16 md:pb-32 md:py-16 z-[16] relative">
        <div className="container flex items-center justify-center">
          <div className="grid grid-cols-1  w-full">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="flex items-start justify-start flex-col leading-[1.1]">
                <span className="text-extra_paragraph_heading text-foreground font-heading">
                  Our
                </span>
                <span className="text-primary-foreground text-secondary_heading font-normal font-heading">
                  Engagements
                </span>
              </h2>
              <p className="max-w-4xl font-bold text-extra_paragraph_heading text-foreground ">
                Questions we have loved answering
              </p>
              <p className="max-w-4xl text-extra_paragraph_heading leading-loose text-foreground ">
                What would be the optimal turnaround strategy for a struggling
                hair retail venture in South Africa? How should a leading 110
                years old multi category Indian brand re-energize it’s
                relationship with youth through digital natives?
              </p>
              <Link
                href={"/our-work"}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "text-foreground uppercase rounded-none mt-4"
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
