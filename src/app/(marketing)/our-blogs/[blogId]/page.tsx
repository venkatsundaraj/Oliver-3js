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
      <section className="w-screen  items-center justify-center h-screen bg-background py-5 flex">
        <div className="container flex items-start justify-center flex-col">
          <div
            className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
            style={{ whiteSpace: "pre-line" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>
      <section className="w-screen  items-center justify-center h-screen bg-background py-5 hidden">
        <div className="container flex items-start justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 md:gap-0">
            <div className="flex items-start flex-col justify-center gap-4">
              <h2 className="font-heading text-secondary_heading text-secondary-foreground leading-tight md:leading-[55px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Our Trrain"
                className="w-3/4 md:w-96"
                src="https://utfs.io/f/ZowmNmBHF7rVbWDCKXkH2jDYzO9VfQms1UPwlxZdI8GBNqX7"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-4">
              <span className="uppercase text-foreground font-paragraph bg-transparent border border-foreground px-8 py-4">
                Category 1
              </span>
              <span className="uppercase text-foreground font-paragraph bg-transparent">
                01/02/2024
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen  items-center justify-center bg-background py-16 hidden">
        <div className="container flex items-center justify-center flex-col">
          <h4 className="font-heading text-tertiary_heading text-foreground mb-8 leading-tight md:leading-[45px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <p className="text-foreground font-paragraph text-extra_paragraph_heading mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>{" "}
          <p className="text-foreground font-paragraph text-extra_paragraph_heading ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
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
