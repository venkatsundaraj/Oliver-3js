import Image from "next/image"
import { FC } from "react"
import { db } from "@/server/db"
import { peopleTable } from "@/server/db/schema"
import { notFound } from "next/navigation"
import { eq } from "drizzle-orm"
import CountryFlags from "@/app/_components/country-flags"

interface PageProps {
  params: { peopleId: string }
}

const page = async ({ params }: PageProps) => {
  const { peopleId } = params

  // Find the team member based on the slug
  const [member] = await db
    .select()
    .from(peopleTable)
    .where(eq(peopleTable.slug, params.peopleId))
    .limit(1)

  // Display message if member not found
  if (!member) notFound()

  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col justify-center items-center md:flex-row h-screen md:h-[90vh] ">
            {/* Left image section */}
            <div className="w-full md:w-[300px] ">
              <Image
                src={member.fileUrl}
                width={300}
                height={200}
                alt={member.name}
                className="w-full h-auto"
              />
            </div>

            {/* Main content area */}
            <div className=" bg-black flex flex-col justify-center items-center md:items-start px-6 md:px-10 text-white">
              <h1 className="text-secondary_heading font-heading text-secondary-foreground leading-[1.1]">
                {member.name}
              </h1>
              <p className="text-extra_paragraph_heading font-light font-heading">
                {member.role}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start items-center md:flex-row  gap-8 mt-8 mb-8  md:py-8">
            {/* Left image section */}
            <section className="w-screen  items-center justify-center min-h-screen bg-background py-5 flex">
              <div className="container flex items-start justify-center flex-col">
                <div
                  className="ProseMirror text-foreground border-slate-700 py-4 rounded-lg"
                  style={{ whiteSpace: "pre-line" }}
                  dangerouslySetInnerHTML={{ __html: member.content }}
                />
              </div>
            </section>

            {/* Main content area */}
            <div className=" bg-black hidden flex-col justify-center items-center md:items-start px-6 md:px-10 text-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-8 bg-background gap-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg md:max-w-2xl ">
              <CountryFlags data={member.companyProfiles} />
            </div>
            <div className="flex flex-col gap-4 items-start justify-center">
              <h2 className="font-heading text-secondary-foreground text-secondary_heading">
                Domains
              </h2>
              <ul className="text-white font-paragraph flex-col flex items-start justify-center gap-4">
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

          {/* Centered Countries Section */}
          <div className="flex flex-col justify-start items-start md:flex-col  gap-8 mt-8 mb-8 md:py-8">
            <div>
              <h2 className="text-secondary-foreground font-heading text-secondary_heading  mb-2">
                Countries
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg md:max-w-2xl ">
              <CountryFlags data={member.countryFlags} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
