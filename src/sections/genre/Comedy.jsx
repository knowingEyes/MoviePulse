import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function ComedyMovies() {
  const [movies] = useMovies(() => fetchMoviesByGenry(35, 1));
  return <RenderMovies moviesResults={movies} title="Comedy" />;
}
