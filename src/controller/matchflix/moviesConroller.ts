import { Request, Response } from "express";
import fetchMovies from "../../services/matchlix/moviesService";
export const getMoviesByGenre = async (req: Request, res: Response) => {
  const movies = await fetchMovies(req.params.genre);
  res.json(movies);
};

export const getAllMovies = async (req: Request, res: Response) => {
  const movies = await fetchMovies();
  res.json(movies);
};
