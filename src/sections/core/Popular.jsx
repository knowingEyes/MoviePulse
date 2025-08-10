import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function PopularMovies() {
  const [movies] = useMovies(() => fetchMoviesByCategory("popular"));
  return <RenderMovies moviesResults={movies} title="Popular" />;
}
