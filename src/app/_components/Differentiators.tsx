"use client";

import { ChevronUp, ChevronDown, Lightbulb, Zap, Target } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import rightcirclespir from "../../../public/rightcirclespir.svg";

type Topic = {
  title: string;
  imgPath: string;
  icon: React.ElementType;
};

const topics: Topic[] = [
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVS7N3l6RkTnuUMoapyhGFmg9lwIYORcVixtW1",
    title: "Insights-centered strategy",
    icon: Lightbulb,
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7",
    title: "Data-driven decisions",
    icon: Zap,
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
    title: "Customer-centric focus",
    icon: Target,
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
    title: "Customer-centric focus",
    icon: Target,
  },
  {
    imgPath:
      "https://utfs.io/f/ZowmNmBHF7rVerDO2THzKF8PVfhHaR7CmudUQywI1cWtxBk2",
    title: "Customer-centric focus",
    icon: Target,
  },
];

export default function Component() {
  return (
    <>
      <section className="sec-scroll-sec text-white min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-16 max-w-[100vw]">
          <div className="over-sec grid grid-cols-1 md:grid-cols-12 gap-4 bg-white ">
            {/* left icons */}
            <div className="over-sec-top bg-red-900 col-span-1">
              <div className="le-over-sec flex flex-col items-center justify-center gap-6 h-[100%]">
                <ChevronUp />
                <div className="flex flex-col gap-6 overflow-hidden h-[45%]">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className={` ${
                        index === 0 || index === 2
                          ? "opacity-50"
                          : "opacity-100"
                      }`}
                    >
                      <Image
                        src={topic.imgPath}
                        alt={topic.title}
                        className=""
                        width={60}
                        height={60}
                      />
                    </div>
                  ))}
                </div>
                <ChevronDown />
              </div>
            </div>
            {/* left text */}
            <div className="col-span-2  flex justify-center items-center bg-red-900">
              <p>asddsa</p>
            </div>
            {/* right text */}
            <div className="ri-over-sec col-span-9 bg-red-500 h-[492px] px-8 py-12 overflow-y-auto">
              <div className="sect-one grid grid-cols-1 md:grid-cols-2 gap-8  mb-8  items-center">
                <div className="">
                  <p className="text-[#5CB7E3]">
                    Traditional, algorithmic, 'engineering' approach
                  </p>
                  <p>
                    Top-down break up of problem bottom-up synthesis of solution
                    parts Interpreting organization as sum of parts
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-fit">
                    <p className="text-center bg-[#0077B9] px-12 py-4 rounded-[12px]">
                      Value Chain
                    </p>
                    <p className="text-center bg-[#0077B9] px-12 py-4 mt-8 rounded-[12px]">
                      Business
                    </p>
                  </div>
                </div>
              </div>
              <p>Vs</p>
              <div className="sect-two grid grid-cols-1 md:grid-cols-2 gap-8  mt-8">
                <div className="">
                  <p className="text-[#5CB7E3]">
                    Modern, insights centered, 'doctor' approach
                  </p>
                  <p>
                    Core insights about problem Reimagine organization +
                    enterprise around insights concentrically Interpreting
                    Organization as an engine fueled by differentiated insights
                  </p>
                  <p>
                    Insights at the center of P L and organization vs Insights
                    at the center of marketing, innovation, design etc.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-fit">
                    <p className="text-center bg-[#0077B9] px-12 py-4 rounded-[12px]">
                      Value Chain
                    </p>
                    <p className="text-center bg-[#0077B9] px-12 py-4 mt-8 rounded-[12px]">
                      Business
                    </p>
                  </div>
                </div>
              </div>
              <div className="sect-three grid grid-cols-1 md:grid-cols-2 gap-8  mt-8 items-center">
                <div className="">
                  <p className="text-[#5CB7E3]">
                    Modern, insights centered, 'doctor' approach
                  </p>
                  <p>
                    Core insights about problem Reimagine organization +
                    enterprise around insights concentrically Interpreting
                    Organization as an engine fueled by differentiated insights
                  </p>
                  <p>
                    Insights at the center of P L and organization vs Insights
                    at the center of marketing, innovation, design etc.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-fit flex justify-center items-center">
                    <Image
                      src={rightcirclespir}
                      alt="Entry Icon"
                      className="w-[60%] "
                    />
                  </div>
                </div>
              </div>
              <div className="sect-four grid grid-cols-1 md:grid-cols-1 gap-8  mt-8 items-center">
                <div className="w-[50%]">
                  <p className="text-[#5CB7E3]">
                    From empathy to insights to hero actions to execution
                  </p>
                  <p className="text-[#5CB7E3]">
                    Strategy: choice of actions - not that of intent or
                    directions
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Insights
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Imperatives
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Strategy: Hero Actions - Front Back
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Obj. | Goals | Metrics
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Mission | Purpose | Vision | Definition
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Star Shifts: Start | Stop | Continue
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    PoC & Execution Oversight
                  </p>
                  <p className="bg-[#0077B9] px-12 py-4 rounded-[12px] mt-6">
                    Assured Success
                  </p>
                </div>
              </div>
              <div className="sect-five grid grid-cols-1 md:grid-cols-1 gap-8  mt-8 items-center">
                <div className="">
                  <p className="text-[#5CB7E3] font-bold">
                    Intensive 360 degree solution co-creation & collaboration
                    workshops
                  </p>
                  <p className="text-gray-300">
                    With organization employees, customers, stakeholders
                  </p>

                  <p className="text-[#5CB7E3] font-bold mt-4">
                    Only senior industry leaders as collaborative consultants
                    working across all levels
                  </p>

                  <p className="text-[#5CB7E3] font-bold mt-4">
                    500+ years of experience: 70% client side, practitioner
                    experience
                  </p>
                  <p className="text-[#5CB7E3] font-bold">
                    Tremendous diversity of experience
                  </p>
                  <p className="text-gray-300">
                    Across 60+ b2c, b2b, b2p industries
                  </p>
                  <p className="text-gray-300">
                    Across all inhabited continents
                  </p>
                  <p className="text-gray-300">
                    Across diverse scales & management types
                  </p>
                  <p className="text-gray-500">
                    Multinational, Regional or local giants, MSME's, start ups,
                    NFPs
                  </p>
                  <p className="text-gray-300">Across all functions</p>

                  <p className="text-[#5CB7E3] font-bold mt-4">
                    Strategy + Plan + Execution Oversight + On Job Capability
                    Building
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
