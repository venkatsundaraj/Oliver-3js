import { db } from "@/server/db"
import { workTable } from "@/server/db/schema"
import { eq } from "drizzle-orm"

import { workAuthSchema } from "@/lib/validation/auth"
import { NextRequest, NextResponse } from "next/server"
import { ZodError, z } from "zod"

const routerContext = z.object({
  params: z.object({
    workId: z.string(),
  }),
})

type routerContextSchema = z.infer<typeof routerContext>

export async function PATCH(req: NextRequest, context: routerContextSchema) {
  try {
    const { params } = routerContext.parse(context)

    const body = await req.json()
    const parsedPost = workAuthSchema.parse(body)

    console.log(parsedPost)

    const work = await db
      .update(workTable)
      .set(parsedPost)
      .where(eq(workTable.id, Number(params.workId)))

    return new NextResponse(JSON.stringify(work), { status: 200 })
  } catch (err) {
    if (err instanceof ZodError) {
      return new NextResponse(JSON.stringify(err.message), { status: 422 })
    }
    return new NextResponse("Something went wrong", { status: 500 })
  }
}
