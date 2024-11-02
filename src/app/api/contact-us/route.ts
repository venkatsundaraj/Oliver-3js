import { contactusFormSchema } from "@/lib/validation/contact-form";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const body = await req.json();

    const validatedBody = contactusFormSchema.parse(body);

    return NextResponse.json({
      message: "Message Received Successfully",
      status: 200,
    });
  } catch (err) {
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
  }
}
