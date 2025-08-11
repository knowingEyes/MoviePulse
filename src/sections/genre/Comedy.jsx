import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function ComedyMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByGenry(35, 1));
  return <RenderMovies moviesResults={movies} title="Comedy" />;
}
