import { fetchTodayPicks } from "../../api";
import RenderMovies from "../../components/movieRenderer";
import useMoviesFetch from "../../hooks/useMoviesFetch";

function TodayPicksMovies() {
  const [movies] = useMoviesFetch(() => fetchTodayPicks());
  return <RenderMovies title="Today's Picks" moviesResults={movies} />;
}

export default TodayPicksMovies;
