import { notFound } from "next/navigation"
import { FC } from "react"
import Link from "next/link"
import Image from "next/image"
import FeaturedBlogs from "@/app/_components/featured-blogs"
import { db } from "@/server/db"

import { blogTable } from "@/server/db/schema"
import { eq } from "drizzle-orm"
import { slugify } from "@/lib/utils"

interface pageProps {
  params: { workId: string }
}

const page = async ({ params }: pageProps) => {
  console.log(params)
  return (
    <>
      <section className="w-screen  items-center justify-center bg-background py-10 md:pt-64 md:pb-16 flex ">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="font-heading text-secondary_heading text-secondary-foreground leading-tight md:leading-[55px]">
                Questions we have loved something
              </h2>
            </div>
            <div className="hidden items-center justify-center"></div>
          </div>
          <div className="hidden items-center justify-between">
            <div className="flex items-center justify-center gap-4 md:gap-8">
              <span className="uppercase text-foreground font-paragraph bg-transparent border border-foreground px-6 py-3">
                Category 1
              </span>
              <span className="uppercase text-foreground font-paragraph bg-transparent">
                01/02/2024
              </span>
            </div>
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

export default page
