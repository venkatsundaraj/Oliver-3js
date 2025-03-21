import { FC } from "react";
import TeamSection from "@/app/_components/team-section";
import { db } from "@/server/db";
import { peopleTable } from "@/server/db/schema";
import AccordianTeamThumbnail from "@/app/_components/accordian-team-thumbnail";
import { ScrollToHash } from "@/app/_components/scroll-to-hash";
import { Suspense } from "react";

interface pageProps {}

export const revalidate = 0; // This forces the page to be dynamic

async function getData() {
  const data = await db.select().from(peopleTable);
  return data;
}

const page = async ({}: pageProps) => {
  const data = await getData();

  return (
    <>
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
      <section className="bg-background text-foreground text-center py-16 md:pb-16 min-h-screen flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-4 ">
          {/* OUR text */}
          <h2 className="flex items-center justify-start flex-col leading-[1.1]">
            <span className="text-extra_paragraph_heading text-foreground font-heading text-center">
              Our
            </span>
            <span className="text-primary-foreground text-secondary_heading font-heading font-bold">
              People
            </span>
          </h2>
          {/* Paragraph */}
          <p className="text-extra_paragraph_heading max-w-prose mx-auto mt-5 leading-normal font-paragraph text-foreground">
            We are senior professionals, with more than 500 years of Cumulative
            experience in building, managing & growing large businesses across
            various geographies globally.
          </p>{" "}
          <p className="text-extra_paragraph_heading max-w-prose mx-auto mt-5 md:mt-7 leading-normal font-paragraph text-foreground">
            We stay with you right from proposals to solutions to execution.{" "}
          </p>{" "}
          <p className="text-extra_paragraph_heading max-w-prose mx-auto mt-5 md:mt-7 leading-normal font-paragraph text-foreground">
            We are based across India, Singapore, Australia, UAE, Sub Saharan
            Africa, Europe, North America.
          </p>
        </div>
      </section>
      {/* <TeamSection data={data} /> */}
      <AccordianTeamThumbnail data={data} />
    </>
  );
};

export default page;
