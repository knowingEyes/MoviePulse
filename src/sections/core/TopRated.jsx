import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";

export default function TopRatedMovies() {
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  useEffect(function () {
    async function getTopRatedMovies() {
      const data = await fetchMoviesByCategory("top_rated");
      setTopRatedMovies(data.results);
    }
    getTopRatedMovies();
  }, []);
  return <RenderMovies moviesResults={TopRatedMovies} title="Top-Rated" />;
}
