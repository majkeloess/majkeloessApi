import { Request, Response } from "express";
import { fetchQuestions } from "../../services/techmilionerzy/questionsService";

export const getQuestionsForGame = async (req: Request, res: Response) => {
  try {
    const questions = await fetchQuestions();
    console.log("Questions fetched successfully.");
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
