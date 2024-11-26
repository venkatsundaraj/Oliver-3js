"use client";
import React from "react";
import teamMembers from "../(marketing)/data";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { Icons } from "./icons";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

const TeamSection = () => {
  const router = useRouter();

  const handleProfileClick = (slug: string) => {
    router.push(`/our-people/${encodeURIComponent(slug)}`);
  };
  return (
    <section
      id="#team"
      className="bg-black text-white text-center py-12 w-screen"
    >
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => handleProfileClick(member.slug)}
              className="team-member flex flex-col items-start justify-center gap-1 cursor-pointer group"
            >
              <img
                src={member.imageUrl}
                alt={`${member.name}, ${member.role}`}
                className="w-full h-72 object-cover  bg-gray-400"
              />
              <div className="flex flex-col items-start justify-center gap-2 relative w-full">
                <h3 className="text-[#00aeef] text-[30px] text-left font-heading">
                  {member.name}
                </h3>
                <p className=" text-left font-paragraph">{member.role}</p>
                <Icons.ArrowRight className="absolute right-0 top-[50%] translate-y-[-50%] group-hover:translate-x-[25%] duration-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
