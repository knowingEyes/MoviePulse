import { useEffect, useState } from "react";

export default function useMoviesFetch(callback) {
  const [movies, setMovies] = useState([]);
  useEffect(function () {
    async function getMovies() {
      const { results } = await callback();
      setMovies(results);
    }
    getMovies();
  }, []);

  return [movies];
}
