import { z } from "zod";

//Schem for inserting Mouse
export const insertMouseSchema = z.object({
  name: z.string().min(1, "Name must be at least 1 character"),
  slug: z.string().min(1, "Slug must contain at least 1 character"),
  company: z.string().min(1, "Company must be at least 1 character"),
  rank: z.coerce.number(),
});
