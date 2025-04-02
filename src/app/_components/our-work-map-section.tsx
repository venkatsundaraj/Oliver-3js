"use client";
import InfiniteMap from "@/app/_components/infinite-map";
import { FC } from "react";
import { clientData } from "@/config/marketing";
import { clientDomains } from "@/config/marketing";
import { cn } from "@/lib/utils";
import InfiniteMapWithImageInput from "./infinite-map-with-image-input";

interface OurWorkMapSectionProps {}

const colors: string[] = [
  "rgba(218, 54, 51, 0.5)",
  "rgba(158, 106, 3, 0.5)",
  "rgba(46, 160, 67, 0.5)",
  "rgba(56, 139, 253, 0.5)",
  "rgba(191, 75, 138, 0.5)",
  "rgba(55, 153, 207, 0.5)",
];

export const chooseColor = function () {
  const value = Math.floor(Math.random() * 5);
  return colors[value];
};

const OurWorkMapSection: FC<OurWorkMapSectionProps> = () => {
  return (
    <section className="flex flex-col gap-32 items-center justify-start w-screen  min-h-screen pt-40 md:py-16  md:max-h-fit  bg-repeat-x  animate-scroll-x overflow-hidden bg-fixed relative ">
      <InfiniteMap className="fixed top-0  w-screen h-screen z-0 " />
      <div className="flex flex-col items-center justify-start w-screen z-10 py-16">
        <div
          className="container flex flex-col  overflow-x-hidden mb-12 w-screen z-10 "
          id="our-client-domains"
        >
          <h2 className="flex items-center justify-center flex-col leading-[1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Client Domains
            </span>
          </h2>
          <ul className="flex flex-wrap gap-4 w-full items-center justify-center mt-8">
            {clientDomains.map((item, i) => (
              <li
                className="px-8 min-w-[16rem] max-w-md py-4 text-center border border-secondary-foreground inline-flex rounded-3xl items-center justify-center text-foreground bg-secondary-foreground font-paragraph text-extra_paragraph_heading"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <InfiniteMapWithImageInput
          src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rV4lLuKq58tCRcZbLox5S9hfdI037uwUEjeQWF"
          className="md:w-screen"
        />
        <InfiniteMapWithImageInput
          src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rV8HT0SsqKutYEbdyi5prBsLjqX1DQMJGPFINW"
          className="md:w-screen"
        />
        <h2
          className="flex items-center justify-center flex-col leading-[1]"
          id="some-of-our-clients"
        >
          <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
            Our
          </span>
          <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
            Clients
          </span>
        </h2>
        <InfiniteMapWithImageInput
          src="https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVeoIs1xXHzKF8PVfhHaR7CmudUQywI1cWtxBk"
          className="md:w-screen"
        />
      </div>
    </section>
  );
};

export default OurWorkMapSection;
