import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function RomanceMovies() {
  const [movies] = useMovies(() => fetchMoviesByGenry(10749, 2));
  return <RenderMovies moviesResults={movies} title="Romance" />;
}
