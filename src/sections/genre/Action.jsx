import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function ActionMovies() {
  const [movies] = useMovies(() => fetchMoviesByGenry(28, 3));
  return <RenderMovies moviesResults={movies} title="Action" />;
}
