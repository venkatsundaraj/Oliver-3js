import { FC } from "react"
import AddBlog from "@/app/_components/add-blog"
import { db } from "@/server/db"
import { eq } from "drizzle-orm"
import { blogTable, workTable } from "@/server/db/schema"
import AddWork from "@/app/_components/add-work"
import { notFound } from "next/navigation"

interface pageProps {
  params: { workId: string }
}

const page = async ({ params }: pageProps) => {
  if (!params.workId) notFound()

  const [work] = await db
    .select()
    .from(workTable)
    .where(eq(workTable.id, Number(params.workId)))
    .limit(1)
  console.log(work)
  if (!work) notFound()

  return (
    <main className="bg-background min-h-screen w-full flex items-center justify-center">
      <AddWork work={work} />
    </main>
  )
}

export default page
