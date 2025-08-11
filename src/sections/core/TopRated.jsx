import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function TopRatedMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByCategory("top_rated"));
  return <RenderMovies moviesResults={movies} title="Top-Rated" />;
}
