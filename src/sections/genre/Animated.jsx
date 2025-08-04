import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";

export default function AnimatedMovies() {
  const [animatedMovies, setAnimatedMovies] = useState([]);
  useEffect(function () {
    async function getAnimatedMovies() {
      const data = await fetchMoviesByGenry(16,5);
     setAnimatedMovies(data.results);
    }
    getAnimatedMovies();
  }, []);

  return <RenderMovies moviesResults={animatedMovies} title="Animated" />;
}
