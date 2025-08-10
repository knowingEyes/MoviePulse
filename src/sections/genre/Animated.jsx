
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function AnimatedMovies() {
  const [movies] = useMovies(()=> fetchMoviesByGenry(16, 10))
  return <RenderMovies moviesResults={movies} title="Animated" />;
}


