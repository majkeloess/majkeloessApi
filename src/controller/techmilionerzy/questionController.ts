import { Request, Response } from "express";
import { fetchQuestions } from "../../services/techmilionerzy/questionsService";

export const getQuestionsForGame = async (req: Request, res: Response) => {
  const questions = await fetchQuestions();
  res.json(questions);
};
