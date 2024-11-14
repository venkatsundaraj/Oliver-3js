import { FC } from "react"
import AddBlog from "@/app/_components/add-blog"
import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { blogTable } from "@/server/db/schema"
import { notFound } from "next/navigation"

interface pageProps {
  params: { blogId: string }
}

const page = async ({ params }: pageProps) => {
  if (!params.blogId) notFound()

  const [blog] = await db
    .select()
    .from(blogTable)
    .where(eq(blogTable.id, Number(params.blogId)))
    .limit(1)
  console.log(blog)
  if (!blog) notFound()

  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <AddBlog blog={blog} />
    </main>
  )
}

export default page
