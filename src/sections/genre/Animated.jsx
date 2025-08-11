import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function AnimatedMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByGenry(16, 10));
  return <RenderMovies moviesResults={movies} title="Animated" />;
}
