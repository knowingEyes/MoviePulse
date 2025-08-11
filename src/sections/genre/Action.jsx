import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function ActionMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByGenry(28, 3));
  return <RenderMovies moviesResults={movies} title="Action" />;
}
