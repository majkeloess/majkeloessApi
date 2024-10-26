import { Router } from "express";
import { getAllMovies, getMoviesByGenre } from "../controller/moviesConroller";
import { updateRecommendation } from "../controller/recommendationController";

const recRouter = Router();

recRouter.get("/", getAllMovies);
recRouter.get("/:genre", getMoviesByGenre);

recRouter.post("/:id/:status", updateRecommendation);

export default recRouter;
