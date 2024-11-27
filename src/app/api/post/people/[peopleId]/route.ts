import { db } from "@/server/db";
import { workTable, peopleTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

import { workAuthSchema, peopleAuthSchema } from "@/lib/validation/auth";
import { NextRequest, NextResponse } from "next/server";
import { ZodError, z } from "zod";

const routerContext = z.object({
  params: z.object({
    peopleId: z.string(),
  }),
});

type routerContextSchema = z.infer<typeof routerContext>;

export async function PATCH(req: NextRequest, context: routerContextSchema) {
  try {
    const { params } = routerContext.parse(context);

    const body = await req.json();
    const parsedPost = peopleAuthSchema.parse(body);

    console.log(parsedPost);

    const work = await db
      .update(peopleTable)
      .set(parsedPost)
      .where(eq(peopleTable.id, Number(params.peopleId)));

    return new NextResponse(JSON.stringify(work), { status: 200 });
  } catch (err) {
    if (err instanceof ZodError) {
      return new NextResponse(JSON.stringify(err.message), { status: 422 });
    }
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
