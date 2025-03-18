import { FC } from "react";
import OurWorkMapSection from "@/app/_components/our-work-map-section";
import IpSuitsAccordian from "@/app/_components/ip-suits-accordian";
import Image from "next/image";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";

interface OurClientDomainsProps {}

const OurClientDomains: FC<OurClientDomainsProps> = () => {
  return (
    <>
      <ScrollToHash />
      <OurWorkMapSection />

      <section
        id="our-projects"
        className="w-screen flex items-center justify-center  bg-background py-8 md:py-12"
      >
        <div className="container flex flex-col items-center justify-between gap-4">
          <h2 className="flex text-center items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our approach
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Operating pillars & IPs
            </span>
          </h2>
          <div className="flex items-center justify-center relative w-full py-14">
            <Image
              className="w-[40px] md:w-[120px] lg:w-[165px] absolute animate-float "
              src={
                "https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVvjzpfJUjC7oDNRSq9wYtBZEIGKyc2bfVPnzX"
              }
              width={400}
              alt="Operating pillars & IPs"
              draggable="false"
              height={300}
            />

            <Image
              className="w-3/4"
              src={
                "https://zkok4chdpn.ufs.sh/f/ZowmNmBHF7rVeigN9bHzKF8PVfhHaR7CmudUQywI1cWtxBk2"
              }
              width={400}
              alt="Operating pillars & IPs"
              height={300}
            />
          </div>

          <p className="text-foreground text-subtitle_heading text-center max-w-prose">
            We push ourselves to have distinctively relevant points of view on
            business. Converting those points of view into proprietary IPs or
            thereafter into client specific processes or further deploying
            interactive, digital solutions modelled around them helps our
            clients. They continue to take advantage of our collaboration long
            after we have completed the projects.
          </p>

          <IpSuitsAccordian />
        </div>
      </section>
    </>
  );
};

export default OurClientDomains;
