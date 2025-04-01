"use client";

import { useState, useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";

import { FC } from "react";
import { workTable } from "@/server/db/schema";
import { InferModel } from "drizzle-orm";
import { slugify, splitArray } from "@/lib/utils";

type Work = InferModel<typeof workTable>;

interface WorkFilterProps {
  filteredWork: Work;
  work: Work[];
  searchParams?: string;
}

const WorkFilter: FC<WorkFilterProps> = ({
  filteredWork,
  work,
  searchParams,
}) => {
  console.log(filteredWork);
  const [projectType, setProjectType] = useState(filteredWork.type);
  const [subType, setSubType] = useState("all");
  const [location, setLocation] = useState("all");
  const [filteredData, setFilteredData] = useState<Work[]>([]);

  const [typeArray, subTypeArray, locationArray] = splitArray(work);

  useEffect(() => {
    const newFilteredData = work.filter(
      (item) =>
        (projectType === "all" || item.type === projectType) &&
        (subType === "all" || item.subType === subType) &&
        (location === "all" || item.location === location)
    );
    setFilteredData(newFilteredData);
    // console.log(newFilteredData);
  }, [projectType, subType, location]);
  return (
    <>
      <section className="w-screen  items-center justify-center bg-background py-10 md:pt-16 md:pb-16 flex ">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-background text-foreground border-gray-800">
                <SelectItem value="all">All</SelectItem>
                {Array.from(typeArray)
                  .filter((item) => item)
                  .map((item, i) => (
                    <SelectItem value={item} key={i}>
                      {item}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <Select value={subType} onValueChange={setSubType}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-800">
                <SelectItem value="all">All</SelectItem>
                {Array.from(subTypeArray)
                  .filter((item) => item)
                  .map((item, i) => (
                    <SelectItem value={item} key={i}>
                      {item}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-800">
                <SelectItem value="all">All</SelectItem>
                {Array.from(locationArray)
                  .filter((item) => item)
                  .map((item, i) => (
                    <SelectItem value={item} key={i}>
                      {item}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="w-screen  items-center justify-center  bg-background py-16 flex">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {filteredData.length
              ? filteredData.map((item, i) => (
                  <div className="flex bg-foreground/20  backdrop-blur-sm p-4 items-start justify-start flex-col min-h-[240px] gap-4">
                    <span className="font-paragraph text-subtitle_heading text-secondary-foreground font-bold">
                      {item.location}
                    </span>
                    <h4 className="font-heading text-2xl text-secondary-foreground">
                      {item.category}
                    </h4>
                    <h4 className="font-paragraph text-subtitle_heading text-foreground">
                      {item.content}
                    </h4>
                  </div>
                ))
              : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkFilter;
