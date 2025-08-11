import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function PopularMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByCategory("popular"));
  return <RenderMovies moviesResults={movies} title="Popular" />;
}
