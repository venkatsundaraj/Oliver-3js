import Image from "next/image";
import { FC } from "react";
import { db } from "@/server/db";
import { peopleTable } from "@/server/db/schema";
import { notFound } from "next/navigation";
import { eq } from "drizzle-orm";
import CountryFlags from "@/app/_components/country-flags";

interface PageProps {
  params: { peopleId: string };
}

const EMPTY_VALUE = [
  "https://utfs.io/f/ZowmNmBHF7rV84mXkPqKutYEbdyi5prBsLjqX1DQMJGPFINW",
  "https://utfs.io/f/ZowmNmBHF7rVI8p9Q7B68J3F67djWLVkcNPZneu0vAlKHYBC",
];

const page = async ({ params }: PageProps) => {
  const { peopleId } = params;

  // Find the team member based on the slug
  const [member] = await db
    .select()
    .from(peopleTable)
    .where(eq(peopleTable.slug, params.peopleId))
    .limit(1);

  // Display message if member not found
  console.log(member);
  if (!member) notFound();

  return (
    <>
      <section className="w-screen flex flex-col items-center justify-center">
        <div className="container flex flex-col ">
          <article className="grid grid-cols-1 md:grid-cols-3 p-2 items-center justify-center border border-muted-foreground gap-4 w-full mt-40 pb-2">
            <Image
              src={member.fileUrl}
              alt={member.name}
              className="w-full object-cover grayscale md:p-8"
              width={200}
              height={400}
            />
            <div className="flex items-start justify-start flex-col p-2 gap-4 md:col-start-2 md:col-end-4 md:p-8">
              <div className="flex flex-wrap md:flex-nowrap items-center justify-start md:justify-center gap-2 md:gap-4">
                <h4 className="font-heading text-left text-tertiary_heading font-normal text-primary-foreground leading-tight">
                  {member.name}
                </h4>
                {member.role === "Founder" || member.role === "Co-Founder" ? (
                  <span className="bg-muted-foreground font-paragraph text-[16px] rounded-xl text-foreground px-3 py-1">
                    {member.role}
                  </span>
                ) : null}
              </div>
              <p className="text-secondary-foreground text-subtitle_heading font-paragraph leading-tight text-left">
                {member.skills}
              </p>

              <div className="flex items-start justify-start flex-col gap-4 py-2">
                <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                  <h4 className="flex gap-4">
                    <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                      Location
                    </span>
                    <span className="text-foreground">:</span>
                  </h4>
                  <p className="text-foreground text-extra_subtitle_heading">
                    {member.location}
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                  <h4 className="flex gap-4">
                    <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                      Core
                    </span>
                    <span className="text-foreground">:</span>
                  </h4>
                  <p className="text-foreground text-extra_subtitle_heading">
                    {member.core}
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                  <h4 className="flex gap-4">
                    <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                      Lead Domain
                    </span>
                    <span className="text-foreground">:</span>
                  </h4>

                  <p className="text-foreground text-extra_subtitle_heading">
                    {member.leadDomain}
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                  <h4 className="flex gap-4">
                    <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                      Support Domains
                    </span>
                    <span className="text-foreground">:</span>
                  </h4>
                  <div
                    className="ProseMirror-supplydomain text-foreground border-slate-700  rounded-lg "
                    style={{ whiteSpace: "pre-line" }}
                    dangerouslySetInnerHTML={{
                      __html: member.supportDomains,
                    }}
                  />
                </div>
              </div>
              <p className="font-paragraph text-left text-extra_subtitle_heading font-normal leading-normal text-secondary-foreground">
                {member.experience}
              </p>
              <p className="font-paragraph text-left text-extra_subtitle_heading font-normal leading-normal text-foreground">
                {member.industries}
              </p>
            </div>
          </article>

          <div className="flex flex-col justify-start items-center md:flex-row  gap-8 mb-8  md:py-8">
            {/* Left image section */}
            <section className="w-screen  items-center justify-center  bg-background py-5 flex">
              <div className="container flex items-start justify-center flex-col">
                <div
                  className="ProseMirror text-foreground border-slate-700 py-4 rounded-lg "
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: member.content }}
                />
              </div>
            </section>

            {/* Main content area */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center py-8 bg-background gap-10">
            <div className="gap-4 w-full ">
              <div className="flex flex-col justify-start items-start md:flex-col w-full gap-8 mb-8 ">
                <div>
                  {member.companyProfiles.length ? (
                    <h2 className="text-secondary-foreground font-heading text-secondary_heading  mb-2">
                      Global Client Portfolio
                    </h2>
                  ) : null}
                </div>
                <div className="gap-4 w-full ">
                  <CountryFlags data={member.companyProfiles} />
                </div>
              </div>
            </div>
            <div className="flex items-start justify-start flex-col w-full">
              {!member.countryFlags ||
              EMPTY_VALUE.includes(member.countryFlags[0]) ? null : (
                <div className="w-full">
                  <div className="flex flex-col justify-start items-start md:flex-col w-full gap-8 mb-8 ">
                    <div>
                      {member.countryFlags.length ? (
                        <h2 className="text-secondary-foreground font-heading text-secondary_heading  mb-2">
                          Countries
                        </h2>
                      ) : null}
                    </div>
                    <div className="gap-4 w-full ">
                      <CountryFlags data={member.countryFlags} />
                    </div>
                  </div>
                </div>
              )}
              <div className="flex flex-col items-start">
                {member.domains !== "<p></p>" ? (
                  <h2 className="font-heading text-secondary-foreground text-secondary_heading">
                    Domains
                  </h2>
                ) : null}
                <div
                  className="ProseMirror text-foreground border-slate-700 py-4 rounded-lg "
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: member.domains }}
                />
              </div>
            </div>
          </div>

          {/* Centered Countries Section */}
          {member.countryFlags ||
          member.countryFlags[0] === EMPTY_VALUE ? null : (
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center py-8 bg-background gap-10">
              <div className="flex flex-col justify-start items-start md:flex-col  gap-8 mt-8 mb-8 md:py-8">
                <div>
                  {member.countryFlags[0] ? (
                    <h2 className="text-secondary-foreground font-heading text-secondary_heading  mb-2">
                      Countries
                    </h2>
                  ) : null}
                </div>
                <div className="gap-4 w-full ">
                  <CountryFlags data={member.countryFlags} />
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
