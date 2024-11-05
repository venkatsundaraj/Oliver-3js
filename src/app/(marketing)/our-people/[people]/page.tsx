"use client";

import { FC } from "react";
import teamMembers from "../../data"; // Adjust the path if necessary

interface PageProps {
  params: { people: string };
}

const Page: FC<PageProps> = ({ params }) => {
  const { people } = params;

  // Find the team member based on the slug
  const member = teamMembers.find((member) => member.slug === people);

  // Display message if member not found
  if (!member) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-3xl text-white font-bold">Team member not found</p>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col justify-center items-center md:flex-row h-screen ">
            {/* Left image section */}
            <div className="w-full md:w-2/5 ">
              <img
                src={member.detailedinfo.imageUrltwo}
                alt={member.name}
                className="object-cover w-full "
              />
            </div>

            {/* Main content area */}
            <div className=" bg-black flex flex-col justify-center items-center md:items-start px-6 md:px-10 text-white">
              <h1 className="text-4xl md:text-5xl font-heading text-[#00aeef] mb-4">
                {member.name}
              </h1>
              <p className="text-lg md:text-xl font-light font-heading">
                {member.role}
              </p>
            </div>
          </div>
          <div className="md:px-12 md:py-8">
            <p className="text-[white] font-paragraph">
              {member.detailedinfo.para}
            </p>
            <p className="text-[white] font-paragraph">
              {member.detailedinfo.paratwo}
            </p>
          </div>

          <div className="flex flex-col justify-start items-center md:flex-row  gap-8 mt-8 mb-8 md:px-12 md:py-8">
            {/* Left image section */}
            <div className="w-full md:w-3/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg md:max-w-2xl mx-auto">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="bg-[#00aeef] h-20 md:h-32"></div>
                ))}
              </div>
            </div>

            {/* Main content area */}
            <div className=" bg-black flex flex-col justify-center items-center md:items-start px-6 md:px-10 text-white">
              <div className=" text-center md:text-left mx-auto">
                <h2 className="text-[#00aeef] font-heading text-[30px] mb-2">
                  Domains
                </h2>
                <ul className="text-white font-paragraph space-y-1">
                  <li>FMCG</li>
                  <li>Consumer Durables</li>
                  <li>Retail</li>
                  <li>Real Estate</li>
                  <li>Fashion</li>
                  <li>Agri Products</li>
                  <li>Media</li>
                  <li>Logistics</li>
                  <li>Textile</li>
                  <li>Automotive</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Centered Countries Section */}
          <div className="flex flex-col justify-start items-start md:flex-col  gap-8 mt-8 mb-8 md:px-12 md:py-8">
            <div>
              <h2 className="text-[#00aeef] font-heading text-[30px]  mb-2">
                Countries
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg md:max-w-2xl ">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-[#00aeef] h-20 md:h-32"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
