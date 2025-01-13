import { z } from "zod";

export const StatusSchema = z.enum(["accepted", "rejected"]);
export type StatusType = z.infer<typeof StatusSchema>;

export const RecommendationSchema = z.object({
  rec_id: z.number(),
  status: StatusSchema,
  movie_id: z.number(),
});
export type RecommendationsType = z.infer<typeof RecommendationSchema>;
