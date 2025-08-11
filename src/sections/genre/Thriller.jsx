import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function ThrillerMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByGenry(53, 3));
  return <RenderMovies moviesResults={movies} title="Thriller" />;
}
