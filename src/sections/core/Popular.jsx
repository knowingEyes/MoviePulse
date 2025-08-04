import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";

export default function PopularMovies() {
  const [PopularMovies, setPopularMovies] = useState([]);
  useEffect(function () {
    async function getPopularMovies() {
      const data = await fetchMoviesByCategory("popular");
      setPopularMovies(data.results);
    }
    getPopularMovies();
  }, []);
  return <RenderMovies moviesResults={PopularMovies} title="Popular" />;
}
