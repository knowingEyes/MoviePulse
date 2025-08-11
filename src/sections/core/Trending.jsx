import RenderMovies from "../../components/movieRenderer";
import { fetchTrendingMovies } from "../../api";
import useMoviesFetch from "../../hooks/useMoviesFetch";

export default function TrendingMovies() {
  const [movies] = useMoviesFetch(() => fetchTrendingMovies(2));
  return <RenderMovies moviesResults={movies} title="Trending" />;
}
