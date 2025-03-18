import { workSubType, workType } from "@/config/marketing";
import { z } from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  // .refine((val) => val === "venkatesh@firebrandlabs.in", {
  //   message: "Please enter correct email",
  // }),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;

export const emailSchema = z.object({
  userEmail: z.string().email(),
});

// ---------------------------------------------------------------------------------------

const baseBlogSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1),
  content: z.string().min(1),
  slug: z.string().optional(),
});

export const blogAuthSchema = baseBlogSchema.extend({
  file: z.custom<File[]>().superRefine((files, ctx) => {
    console.log(files[0], this);
    if (files.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File must be provided",
      });
      return false;
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
      });
      return false;
    }

    if (files[0].size > 1024 * 1024 * 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "File must be less than 5MB",
      });
      return false;
    }

    return true;
  }),
});

export type BlogAuthSchema = z.infer<typeof blogAuthSchema>;

export const extendedBlogSchema = baseBlogSchema.extend({
  fileUrl: z.string().url("Invalid URL format"), // Optional URL field with validation
});

export type ExtendedBlogSchema = z.infer<typeof extendedBlogSchema>;

// ----------------------------------------------------------------------

export const workAuthSchema = z.object({
  type: z.string().refine((value) => workType.includes(value), {
    message: "Invalid option selected",
  }),
  subType: z.string().refine((value) => workSubType.includes(value), {
    message: "Invalid option selected",
  }),
  location: z.string().min(1),
  category: z.string().min(1),
  content: z.string().min(1),
  slug: z.string().optional(),
});

export type workAuthSchemaType = z.infer<typeof workAuthSchema>;

// ---------------------------------------------------------------------------

export const peopleAuthSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  location: z.string(),
  core: z.string(),
  skills: z.string(),
  leadDomain: z.string(),
  supportDomains: z.string(),
  experience: z.string(),
  industries: z.string(),
  fileUrl: z.string().url("Invalid URL format"),
  content: z.string().min(1),
  slug: z.string().optional(),
  companyProfiles: z
    .array(z.string().url())
    .min(1, "At least one file must be uploaded")
    .optional(),
  countryFlags: z
    .array(z.string().url())
    .min(1, "At least one file must be uploaded")
    .optional(),
});
