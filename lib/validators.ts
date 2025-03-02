import { z } from "zod";

export const insertMouseSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character"),
  slug: z.string().min(1, "Slug must contain at least 1 character"),
  company: z.string().min(1, "Company must be at least 1 character"),
  rank: z.coerce.number(),
});

export const signInFormSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "confirm password must be at least 6 characters"),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );
