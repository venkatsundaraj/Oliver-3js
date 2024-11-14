import { contactusFormSchema } from "@/lib/validation/contact-form"
import { db } from "@/server/db"
import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"
import { blogTable, contactFormTable } from "@/server/db/schema"
import { blogAuthSchema, extendedBlogSchema } from "@/lib/validation/auth"
import { slugify } from "@/lib/utils"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json()

    const validatedBody = extendedBlogSchema.parse(body)

    const tableData = { ...validatedBody, slug: slugify(validatedBody.title) }

    const returnedValue = await db.insert(blogTable).values(tableData)

    return NextResponse.json({
      message: "Message Received Successfully",
      status: 200,
      data: returnedValue,
    })
  } catch (err) {
    if (err instanceof ZodError) {
      // Handle Zod validation errors
      const errorMessages = err.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      }))

      return NextResponse.json(
        {
          message: "Validation failed",
          errors: errorMessages,
        },
        { status: 400 }
      )
    }
  }
}
