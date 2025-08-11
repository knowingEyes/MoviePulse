import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function RomanceMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByGenry(10749, 2));
  return <RenderMovies moviesResults={movies} title="Romance" />;
}
