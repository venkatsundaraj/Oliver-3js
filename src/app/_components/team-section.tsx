"use client";
import React from "react";
import teamMembers from "../(marketing)/data";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { Icons } from "@/app/_components/icons";
import { InferModel } from "drizzle-orm";
import { FC } from "react";
import { peopleTable } from "@/server/db/schema";
import Link from "next/link";

type People = InferModel<typeof peopleTable>;

interface pageProps {
  data: People[];
}

const TeamSection: FC<pageProps> = ({ data }) => {
  return (
    <section
      id="#team"
      className="bg-black text-white text-center py-12 w-screen"
    >
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data.length
            ? data.map((member, index) => (
                <Link
                  key={index}
                  href={`/our-people/${member.slug}`}
                  className="team-member flex flex-col items-start justify-center gap-1 cursor-pointer group"
                >
                  <img
                    src={member.fileUrl}
                    alt={`${member.name}, ${member.role}`}
                    className="w-full h-72 object-cover  bg-gray-400"
                  />
                  <div className="flex flex-col items-start justify-center gap-2 relative w-full">
                    <div className="flex items-center flex-row justify-between w-full">
                      <h3 className="text-[#00aeef] text-[30px] text-left font-heading">
                        {member.name}
                      </h3>
                      <Icons.ArrowRight className="group-hover:translate-x-[25%] group-hover:-translate-y-[25%] duration-200 -rotate-45" />
                    </div>
                    <p className=" text-left font-paragraph">{member.role}</p>
                  </div>
                </Link>
              ))
            : null}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
