import { Router } from "express";
import { getQuestionsForGame } from "../controller/techmilionerzy/questionController";

const techMilionerzyRouter = Router();

techMilionerzyRouter.get("/questions", getQuestionsForGame);

export default techMilionerzyRouter;

