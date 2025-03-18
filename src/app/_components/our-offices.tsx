"use client";
import { addressData, partnersContents } from "@/config/marketing";
import { FC } from "react";
import InfiniteMap from "@/app/_components/infinite-map";

interface OurOfficesProps {}

const OurOffices: FC<OurOfficesProps> = () => {
  return (
    <section className="w-screen flex items-center justify-center bg-background py-16 md:pt-16 md:pb-16 relative">
      <InfiniteMap className="absolute z-0" />
      <div className="container flex items-start justify-center flex-col gap-4 z-10">
        <h2 className="flex items-start justify-start flex-col leading-[1.1]">
          <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
            Offices
          </span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {addressData.map((item, i) => (
            <li
              key={i}
              className="flex bg-primary-foreground/70 items-start justify-start flex-col gap-4 md:gap-6 p-8 "
            >
              <p className="font-paragraph text-extra_paragraph_heading text-background leading-normal">
                {item.location}
              </p>
              <p className="font-paragraph text-extra_paragraph_heading text-foreground leading-normal">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-center flex-wrap gap-4 py-6">
          {partnersContents.map((item, i) => (
            <li
              key={i}
              className="flex bg-secondary-foreground/70 items-center justify-center flex-col gap-4 md:gap-6 px-8 py-2 md:min-w-[300px] "
            >
              <p className="font-paragraph text-extra_paragraph_heading text-foreground leading-normal">
                {item.locationCount}
              </p>
            </li>
          ))}
        </ul>
        <div className="w-full flex items-center justify-center">
          <p className="bg-muted-foreground/60 text-foreground text-extra_paragraph_heading flex items-center justify-center w-full max-w-prose text-center px-4 py-2">
            Our Geographies : South Asia | Far East Asia | Sub Saharan Africa |
            UK | US
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurOffices;
