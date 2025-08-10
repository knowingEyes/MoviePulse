import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";
import useMovies from "../../hooks/useMovies";

export default function UpcomingMovies() {
  const [movies] = useMovies(() => fetchMoviesByCategory("upcoming"));
return <RenderMovies moviesResults={movies} title="Upcoming" />;
}
