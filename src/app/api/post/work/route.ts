import { contactusFormSchema } from "@/lib/validation/contact-form"
import { db } from "@/server/db"
import { NextRequest, NextResponse } from "next/server"
import { ZodError } from "zod"
import { blogTable, contactFormTable, workTable } from "@/server/db/schema"
import { blogAuthSchema, extendedBlogSchema } from "@/lib/validation/auth"
import { slugify } from "@/lib/utils"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const [work] = await db
      .insert(workTable)
      .values({
        type: "",
        content: "",
        subType: "",
        category: "",
        location: "",
      })
      .returning({ id: workTable.id })
    console.log(work)

    return NextResponse.json({
      id: JSON.stringify(work.id),
      message: "Blog Successfully Uploaded",
      status: 200,
    })
  } catch (err) {
    console.log(err)
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

    return NextResponse.json(
      {
        message: "An unexpected error occurred",
      },
      { status: 500 }
    )
  }
}
