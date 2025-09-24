// src/modules/providers/validation/serviceSchema.ts
import { z } from "zod";

export const authorSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long." }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long." }),
    requires_approval: z.boolean(),
});

// We create a TypeScript type from the schema to use in our components.
export type AuthorFormData = z.infer<typeof authorSchema>;