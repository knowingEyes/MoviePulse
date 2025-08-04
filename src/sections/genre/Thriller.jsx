import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";

export default function ThrillerMovies() {
  const [ThrillerMovies, setThrillerMovies] = useState([]);
  useEffect(function () {
    async function getThrillerMovies() {
      const data = await fetchMoviesByGenry(53,2);
     setThrillerMovies(data.results);
    }
    getThrillerMovies();
  }, []);

  return <RenderMovies moviesResults={ThrillerMovies} title="Thriller" />;
}