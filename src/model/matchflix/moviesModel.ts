import { z } from "zod";

export const MovieSchema = z.object({
  id: z.number(),
  imageURL: z.string(),
  title: z.string(),
  summary: z.string(),
  rating: z.number(),
  genre: z.string(),
});

export type MovieType = z.infer<typeof MovieSchema>;
