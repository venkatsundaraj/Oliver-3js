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

interface pageProps {}

const colors: string[] = [
  "#3799CF4D",
  "#9E6A03",
  "#DA3633",
  "#2EA043",
  "#388BFD",
  "#BF4B8A",
];

const chooseColor = function () {
  const value = Math.floor(Math.random() * 5);
  return colors[value];
};

const page: FC<pageProps> = ({}) => {
  return (
    <>
      {/* // Hero section */}
      <section className="w-screen flex items-center justify-center h-screen bg-background py-8 md:py-16">
        <div className="container flex items-center justify-center flex-col">
          <h2 className="flex items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Works
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
      <section className="flex flex-col gap-32 items-center justify-center w-screen overflow-x-hidden min-h-screen py-8 md:py-16 bg-[url('https://utfs.io/f/ZowmNmBHF7rVnFERspbEDNIHoOZs906z1pPhXFwkyAuiWTxR')] bg-no-repeat bg-fixed bg-cover bg-center md:bg-contain">
        <div className="container flex flex-col w-full">
          <h2 className="flex items-center justify-center flex-col">
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
                className="px-8 min-w-[24rem] max-w-md py-4 border border-secondary-foreground inline-flex rounded-2xl items-center justify-center text-foreground bg-background font-paragraph text-extra_paragraph_heading"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="container flex flex-col w-full">
          <h2 className="flex items-center justify-center flex-col">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Some of our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-normal">
              Clients
            </span>
          </h2>
          <ul className="flex flex-wrap gap-x-6  gap-y-8 w-full items-center justify-center mt-8">
            {clientData.map((item, i) => (
              <li
                style={{ backgroundColor: `${chooseColor()}` }}
                className={cn(
                  "min-w-[24rem] px-2 py-2 text-subtitle_heading inline-flex items-center justify-center text-foreground font-paragraph text-wrap text-center md:text-nowrap",
                  `bg-[${item.color}]`
                )}
                key={i}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-screen flex items-center justify-center min-h-screen bg-background py-8 md:py-16">
        <div className="container flex flex-col items-start justify-center">
          <div className="py-10 flex flex-col gap-10">
            <h3 className="font-heading text-tertiary_heading text-foreground">
              Insights for future readiness
            </h3>
            <ProjectCard projects={ourProjects} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
