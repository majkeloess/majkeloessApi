import { Request, Response } from "express";
import { createRecommendation } from "../../services/matchlix/recommendationsService";

export const updateRecommendation = async (req: Request, res: Response) => {
  const { id, status } = req.params;

  await createRecommendation(parseInt(id), status);
  res.status(201).json(req.body);
};
