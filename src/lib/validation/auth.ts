import { z } from "zod";

export const userAuthSchema = z.object({
  email: z
    .string()
    .email()
    .refine((val) => val === "venkatesh@firebrandlabs.in", {
      message: "Please enter correct email",
    }),
});

export type UserAuthSchema = z.infer<typeof userAuthSchema>;

export const emailSchema = z.object({
  userEmail: z.string().email(),
});

const isValidDate = (dateStr: string) => !isNaN(new Date(dateStr).getTime());

export const blogAuthSchema = z.object({
  title: z.string().min(1),
  category: z.string().min(1),
  date: z.string().min(1),
  content: z.string().min(1),
});

export type BlogAuthSchema = z.infer<typeof blogAuthSchema>;
