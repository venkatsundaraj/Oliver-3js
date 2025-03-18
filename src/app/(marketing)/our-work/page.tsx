import ProjectCard from "@/app/_components/project-card";
import {
  domainsData,
  tailSectionData,
  clientDomains,
  clientData,
  ourProjects,
} from "@/config/marketing";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { db } from "@/server/db";
import { workTable } from "@/server/db/schema";
import InfiniteMap from "@/app/_components/infinite-map";
import Image from "next/image";
import IpSuitsAccordian from "@/app/_components/ip-suits-accordian";
import OurWorkMapSection from "@/app/_components/our-work-map-section";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";

interface pageProps {}

const colors: string[] = [
  "rgba(218, 54, 51, 0.5)",
  "rgba(158, 106, 3, 0.5)",
  "rgba(46, 160, 67, 0.5)",
  "rgba(56, 139, 253, 0.5)",
  "rgba(191, 75, 138, 0.5)",
  "rgba(55, 153, 207, 0.5)",
];

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(workTable);
  return data;
}

const chooseColor = function () {
  const value = Math.floor(Math.random() * 5);
  return colors[value];
};

const page = async ({}: pageProps) => {
  const data = await getData();

  return (
    <>
      {/* // Hero section */}
      <ScrollToHash />
      <section className="w-screen flex items-center justify-center h-screen bg-background py-8 md:py-16">
        <div className="container flex items-center justify-center flex-col">
          <h2 className="flex items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Work
            </span>
          </h2>
          <p className="text-foreground font-paragraph text-extra_paragraph_heading text-center max-w-prose">
            Our leadership team has particularly enjoying collaborating on &
            answering some complex yet exciting questions, resulting in real
            project experience across more than 80 projects in recent past.
          </p>
        </div>
      </section>

      {/* // Map section */}

      <section
        id="our-projects"
        className="w-screen flex items-center justify-center  bg-background py-8 md:py-2"
      >
        <div className="container flex flex-col items-start justify-center">
          <div className="py-10 w-full flex flex-col gap-10">
            <h3 className="font-heading text-tertiary_heading text-foreground">
              Insight for future readiness
            </h3>
            <ProjectCard projects={data} type="Insight for future readiness" />
          </div>
        </div>
      </section>

      <section className="w-screen flex items-center justify-center  bg-background py-8 md:py-2">
        <div className="container flex flex-col items-start justify-center">
          <div className="py-10 w-full flex flex-col gap-10">
            <h3 className="font-heading text-tertiary_heading text-foreground">
              Insight centered strategy
            </h3>
            <ProjectCard projects={data} type="Insight centered strategy" />
          </div>
        </div>
      </section>

      <section className="w-screen flex items-center justify-center  bg-background py-8 md:py-2">
        <div className="container flex flex-col items-start justify-center">
          <div className="py-10 flex w-full flex-col gap-10">
            <h3 className="font-heading text-tertiary_heading text-foreground">
              Insight centered programs
            </h3>
            <ProjectCard projects={data} type="Insight centered programs" />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
