"use client"

import { useState, useEffect } from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select"

import { FC } from "react"
import { blogTable, workTable } from "@/server/db/schema"
import { InferModel } from "drizzle-orm"

type Work = InferModel<typeof workTable>

interface WorkFilterProps {
  params: { workId: string }
  work: Work[]
}

const WorkFilter: FC<WorkFilterProps> = ({ params, work }) => {
  const [projectType, setProjectType] = useState("all")
  const [subType, setSubType] = useState("all")
  const [location, setLocation] = useState("all")
  const [filteredData, setFilteredData] = useState<Work[]>()
    console.log(work)
  useEffect(() => {
    const newFilteredData = work.filter(
      (item) =>
        (projectType === "all" || item.type === projectType) &&
        (subType === "all" || item.subType === subType) &&
        (location === "all" || item.location === location)
    )
    setFilteredData(newFilteredData)
    console.log(newFilteredData)
  }, [projectType, subType, location])
  return (
    <>
      <section className="w-screen  items-center justify-center bg-background py-10 md:pt-64 md:pb-16 flex ">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <Select value={projectType} onValueChange={setProjectType}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-background text-foreground border-gray-800">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Insight for future readiness">
                  Insight for future readiness
                </SelectItem>
                <SelectItem value="Insight centered strategy">
                  Insight centered strategy
                </SelectItem>
                <SelectItem value="Insight centered programmes">
                  Insight centered programmes
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={subType} onValueChange={setSubType}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-800">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Cultural Fore-sighting with business implications">
                  Cultural Fore-sighting with business implications
                </SelectItem>
                <SelectItem value="Business strategy and organisation design">
                  Business strategy and organisation design
                </SelectItem>
                <SelectItem value="Brand and Innovation">
                  Brand and Innovation
                </SelectItem>
                <SelectItem value="New business strategy">
                  New business strategy
                </SelectItem>
                <SelectItem value="Corporate brand and business">
                  Corporate brand and business
                </SelectItem>
                <SelectItem value="Value chain redesign">
                  Value chain redesign
                </SelectItem>
              </SelectContent>
            </Select>
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="w-full bg-transparent border-gray-800 text-white">
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent className="bg-black text-white border-gray-800">
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Chennai">Chennai</SelectItem>
                <SelectItem value="Mumbai">Mumbai</SelectItem>
                <SelectItem value="Delhi">Delhi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="w-screen  items-center justify-center min-h-screen bg-background py-5 flex">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {new Array(6).fill(null).map((item, i) => (
              <div className="flex bg-secondary-foreground p-4 items-start justify-center flex-col min-h-[240px] gap-4">
                <span className="font-paragraph text-subtitle_heading text-background">
                  India
                </span>
                <h4 className="font-heading text-2xl text-background">
                  Rural Consumners
                </h4>
                <h4 className="font-paragraph text-subtitle_heading text-background">
                  How can one use what Indian rural farmers think about & value,
                  distinct from urban India, for becoming more farmer centric in
                  business?
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkFilter
