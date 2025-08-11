import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function UpcomingMovies() {
  const [movies] = useMoviesFetch(() => fetchMoviesByCategory("upcoming"));
  return <RenderMovies moviesResults={movies} title="Upcoming" />;
}
