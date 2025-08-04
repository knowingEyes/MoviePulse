import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";

export default function ActionMovies() {
  const [ActionMovies, setActionMovies] = useState([]);
  useEffect(function () {
    async function getActionMovies() {
      const data = await fetchMoviesByGenry(28,5);
     setActionMovies(data.results);
    }
    getActionMovies();
  }, []);

  return <RenderMovies moviesResults={ActionMovies} title="Action" />;
}