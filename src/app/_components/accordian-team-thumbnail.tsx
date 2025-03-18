"use client";
import { FC } from "react";
import { InferModel } from "drizzle-orm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/_components/ui/accordion";
import { peopleTable } from "@/server/db/schema";

type People = InferModel<typeof peopleTable>;

interface AccordianTeamThumbnailProps {
  data: People[];
}

const AccordianTeamThumbnail: FC<AccordianTeamThumbnailProps> = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-foreground "></AccordionTrigger>
        <AccordionContent></AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordianTeamThumbnail;
