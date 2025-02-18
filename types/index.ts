import { z } from "zod";
import { insertMouseSchema } from "@/lib/validators";

export type Mouse = z.infer<typeof insertMouseSchema> & {
  id: string;
};
