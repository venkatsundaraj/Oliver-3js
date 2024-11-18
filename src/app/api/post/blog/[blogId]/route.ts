import { db } from "@/server/db"
import { blogTable } from "@/server/db/schema"
import { eq } from "drizzle-orm"

import { extendedBlogSchema } from "@/lib/validation/auth"
import { NextRequest, NextResponse } from "next/server"
import { ZodError, z } from "zod"

const routerContext = z.object({
  params: z.object({
    blogId: z.string(),
  }),
})

type routerContextSchema = z.infer<typeof routerContext>

export async function PATCH(req: NextRequest, context: routerContextSchema) {
  try {
    const { params } = routerContext.parse(context)

    const body = await req.json()
    const parsedPost = extendedBlogSchema.parse(body)

    console.log(parsedPost)

    const blog = await db
      .update(blogTable)
      .set(parsedPost)
      .where(eq(blogTable.id, Number(params.blogId)))

    return new NextResponse(JSON.stringify(blog), { status: 200 })
  } catch (err) {
    if (err instanceof ZodError) {
      return new NextResponse(JSON.stringify(err.message), { status: 422 })
    }
    return new NextResponse("Something went wrong", { status: 500 })
  }
}
