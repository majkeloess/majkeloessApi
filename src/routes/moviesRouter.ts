import { Router } from "express";
import { updateRecommendation } from "../controller/matchflix/recommendationController";
import {
  getAllMovies,
  getMoviesByGenre,
} from "../controller/matchflix/moviesConroller";

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:genre", getMoviesByGenre);

moviesRouter.post("/:id/:status", updateRecommendation);

export default moviesRouter;
