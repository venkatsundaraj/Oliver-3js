import { FC } from "react";
import Image from "next/image";
import {
  locationContents,
  contactUsBody,
  partnersContents,
} from "@/config/marketing";
import Link from "next/link";
import { buttonVariants } from "./button";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="flex items-center justify-center z-[16] relative">
      <div className="grid  w-full grid-cols-1 md:grid-cols-2 border-t border-t-foreground">
        <div className="flex items-start justify-between flex-col gap-4 p-2 md:p-4 ps-4 md:ps-10 pt-4 md:pt-10">
          <div className="flex items-start justify-between flex-col gap-4 ">
            <h3 className="text-foreground font-heading text-our_text_heading">
              Our Offices
            </h3>
            <ul className="flex items-start justify-start gap-4  flex-wrap md:flex-nowrap md:gap-10 md:max-w-lg">
              {locationContents.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center flex-col md:basis-1/3"
                >
                  <h5 className="font-heading text-primary-foreground text-subtitle_heading">
                    {item.locationCount}
                  </h5>
                  <p className="text-subtitle_heading font-paragraph text-foreground hidden">
                    {item.location}
                  </p>
                </li>
              ))}
            </ul>

            <ul className="flex items-start justify-start gap-3  flex-wrap md:flex-nowrap md:gap-10 md:max-w-lg">
              {partnersContents.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center flex-col md:basis-1/3"
                >
                  <h5 className="font-paragraph text-foreground text-[14px]">
                    {item.locationCount}
                  </h5>
                  <p className="text-subtitle_heading font-paragraph text-foreground hidden">
                    {item.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-extra_subtitle_heading font-paragraph text-foreground mt-8 justify-items-end hidden md:block">
            ©2024 Cosmos Strategy · Built with love by Firebrand Labs
          </span>
        </div>
        <div className="flex items-start justify-start flex-col gap-4 bg-secondary-foreground p-2 md:p-4 ps-4 md:ps-10 pe-4 md:pe-10 pt-4 md:pt-10 border-l border-l-foreground">
          <h3 className="text-foreground font-heading text-our_text_heading mb-2 md:mb-4">
            Contact Us
          </h3>
          <ul className="flex flex-col items-start justify-center gap-6 md:gap-8">
            {contactUsBody.map((item, i) => (
              <li key={i} className="flex gap-6 items-center justify-center">
                <Image src={item.icon} alt={item.name} width={35} height={35} />
                <Link
                  className="font-paragraph text-foreground text-subtitle_heading"
                  href={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <span className="text-extra_subtitle_heading font-paragraph text-foreground mt-8 justify-items-end block md:hidden">
            ©2024 Cosmos Strategy · Built with love by Firebrand Labs
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
