import { z } from "zod"

export const userAuthSchema = z.object({
  email: z
    .string()
    .email()
    .refine((val) => val === "venkatesh@firebrandlabs.in", {
      message: "Please enter correct email",
    }),
})

export type UserAuthSchema = z.infer<typeof userAuthSchema>

export const emailSchema = z.object({
  userEmail: z.string().email(),
})

// ---------------------------------------------------------------------------------------

const baseBlogSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1),
  content: z.string().min(1),
})

export const blogAuthSchema = baseBlogSchema.extend({
  file: z.custom<File[]>().superRefine((files, ctx) => {
    console.log(files[0])
    if (files.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File must be provided",
      })
      return false
    }

    if (
      ![
        "image/webp",
        "image/png",
        "image/svg",
        "image/jpg",
        "image/jpeg",
      ].includes(files[0].type)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File must be a valid image type",
      })
      return false
    }

    if (files[0].size > 1024 * 1024 * 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File must be less than 5MB",
      })
      return false
    }

    return true
  }),
})

export type BlogAuthSchema = z.infer<typeof blogAuthSchema>

export const extendedBlogSchema = baseBlogSchema.extend({
  fileUrl: z.string().url("Invalid URL format").optional(), // Optional URL field with validation
})
