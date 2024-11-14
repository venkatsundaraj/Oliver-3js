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
  params: { blogId: string }
}

const page = async ({ params }: pageProps) => {
  const [post] = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.slug, params.blogId))
    .limit(1)

  if (!post) notFound()

  return (
    <>
      <section className="w-screen  items-center justify-center bg-background py-10 md:py-16 flex">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="font-heading text-secondary_heading text-secondary-foreground leading-tight md:leading-[55px]">
                {post.title ? post.title : ""}
              </h2>
            </div>
            <div className="flex items-center justify-center">
              {post.fileUrl ? (
                <Image
                  alt={post.category}
                  src={post.fileUrl}
                  className="w-[300px] h-[300px] object-cover overflow-hidden"
                  width="280"
                  height="280"
                />
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-between">
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
          <div
            className="ProseMirror text-foreground border-slate-700 px-6 py-4 rounded-lg"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <section className="w-screen flex items-center justify-center bg-background py-16 ">
        <div className="container flex items-start justify-center flex-col">
          <FeaturedBlogs />
        </div>
      </section>
    </>
  )
}

export default page
