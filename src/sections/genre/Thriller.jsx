
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function ThrillerMovies() {
  const [movies] = useMovies(() => fetchMoviesByGenry(53, 3));
  return <RenderMovies moviesResults={movies} title="Thriller" />;
}
