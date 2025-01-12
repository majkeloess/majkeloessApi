import { client } from "../../database";
import { MovieType } from "../../model/matchflix/moviesModel";

const fetchMovies = async (
  genre: string = "all"
): Promise<MovieType[] | null> => {
  let res: MovieType[] | null = null;

  try {
    const text =
      genre === "all"
        ? "SELECT * FROM matchflix.movies"
        : "SELECT * FROM matchflix.movies WHERE genre = $1";

    const genreProcessed = genre[0].toUpperCase() + genre.slice(1);
    const values = genre === "all" ? [] : [genreProcessed];

    const queryResult = await client.query(text, values);
    res = queryResult.rows;
  } catch (error) {
    console.error(`Error fetching movies with genre "${genre}":`, error);
  }

  return res;
};

export default fetchMovies;
