import { contactusFormSchema } from "@/lib/validation/contact-form";
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { blogTable, contactFormTable, peopleTable } from "@/server/db/schema";
import { blogAuthSchema, extendedBlogSchema } from "@/lib/validation/auth";
import { slugify } from "@/lib/utils";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const [people] = await db
      .insert(peopleTable)
      .values({
        fileUrl: "",
        content: "",
        name: "",
        role: "",
        slug: "",
      })
      .returning({ id: peopleTable.id });
    console.log(people);

    return NextResponse.json({
      id: JSON.stringify(people.id),
      message: "Blog Successfully Uploaded",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    if (err instanceof ZodError) {
      // Handle Zod validation errors
      const errorMessages = err.errors.map((error) => ({
        field: error.path.join("."),
        message: error.message,
      }));

      return NextResponse.json(
        {
          message: "Validation failed",
          errors: errorMessages,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message: "An unexpected error occurred",
      },
      { status: 500 }
    );
  }
}
