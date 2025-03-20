"use client";
import { FC } from "react";
import { InferModel } from "drizzle-orm";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { peopleTable } from "@/server/db/schema";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./button";

type People = InferModel<typeof peopleTable>;

interface AccordianTeamThumbnailProps {
  data: People[];
}

const AccordianTeamThumbnail: FC<AccordianTeamThumbnailProps> = ({ data }) => {
  return (
    <section
      id="#team"
      className="bg-black text-white text-center py-12 w-screen"
    >
      <div className="container">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-foreground [&>svg]:w-14 [&>svg]:h-14 md:[&>svg]:w-28 md:[&>svg]:h-28 [&>svg]:stroke-1">
              <h3 className="text-secondary_heading text-primary-foreground font-heading font-semibold w-full text-left leading-[0.9]">
                Our People | <span className="text-foreground">Core</span>
              </h3>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col w-full ">
              {data.length ? (
                data
                  .filter((item) => item.type === "Core")
                  .map((item, i) => (
                    <article
                      key={i}
                      className="grid grid-cols-1 md:grid-cols-3 items-start justify-center gap-4 w-full"
                    >
                      <Image
                        src={item.fileUrl}
                        alt={item.name}
                        className="w-full object-cover  md:p-8"
                        width={200}
                        height={400}
                      />
                      <div className="flex items-start justify-start flex-col gap-4 md:col-start-2 md:col-end-4">
                        <div className="flex flex-wrap md:flex-nowrap items-center justify-start md:justify-center gap-2 md:gap-4">
                          <h4 className="font-heading text-left text-tertiary_heading font-normal text-primary-foreground leading-tight">
                            {item.name}
                          </h4>
                          <span className="bg-[#ED7D31] font-paragraph text-[16px] rounded-xl text-background px-3 py-1">
                            {item.role}
                          </span>
                        </div>
                        <p className="text-secondary-foreground text-subtitle_heading font-paragraph leading-tight text-left">
                          {item.skills}
                        </p>
                        <span className="text-foreground font-paragraph text-extra_subtitle_heading leading-tight">
                          {item.location}
                        </span>
                        <div className="flex items-start justify-start flex-col gap-4 py-2">
                          <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                            <h4 className="flex gap-4">
                              <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                                Core
                              </span>
                              :
                            </h4>
                            <p className="text-foreground text-extra_subtitle_heading">
                              {item.core}
                            </p>
                          </div>
                          <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                            <h4 className="flex gap-4">
                              <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                                Lead Domain
                              </span>
                              :
                            </h4>

                            <p className="text-foreground text-extra_subtitle_heading">
                              {item.leadDomain}
                            </p>
                          </div>
                          <div className="flex flex-wrap md:flex-nowrap items-start justify-start md:justify-center gap-2 md:gap-4">
                            <h4 className="flex gap-4">
                              <span className="flex md:min-w-40 text-extra_subtitle_heading text-primary-foreground">
                                Support Domains
                              </span>
                              :
                            </h4>
                            <p className="text-foreground text-extra_subtitle_heading text-left leading-normal">
                              {item.supportDomains}
                            </p>
                          </div>
                        </div>
                        <p className="font-paragraph text-left text-extra_subtitle_heading font-normal leading-normal text-secondary-foreground">
                          {item.experience}
                        </p>
                        <p className="font-paragraph text-left text-extra_subtitle_heading font-normal leading-normal text-foreground">
                          {item.industries}
                        </p>
                        <Link
                          href={`/our-people/${item.slug}`}
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "lg",
                            }),
                            "text-foreground rounded-none mt-4 uppercase"
                          )}
                        >
                          Read More
                        </Link>
                      </div>
                    </article>
                  ))
              ) : (
                <p>No profiles are updated yet.</p>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default AccordianTeamThumbnail;
