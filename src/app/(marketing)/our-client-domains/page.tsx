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
    </>
  );
};

export default OurClientDomains;
