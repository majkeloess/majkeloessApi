export type StatusType = "accepted" | "rejected";

export type RecommendationsType = {
  rec_id: number;
  status: StatusType;
  movie_id: number;
};
