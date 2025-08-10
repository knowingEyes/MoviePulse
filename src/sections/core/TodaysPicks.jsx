import { fetchTodayPicks } from "../../api";
import RenderMovies from "../../components/movieRenderer";
import useMovies from "../../hooks/useMovies";

function TodayPicksMovies() {
  const [movies] = useMovies(() => fetchTodayPicks());
  return <RenderMovies title="Today's Picks" moviesResults={movies} />;
}

export default TodayPicksMovies;
