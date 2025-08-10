import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function TopRatedMovies() {
  const [movies] = useMovies(() => fetchMoviesByCategory("top_rated"));
  return <RenderMovies moviesResults={movies} title="Top-Rated" />;
}
