import RenderMovies from "../../components/movieRenderer";
import { fetchTrendingMovies }  from "../../api";
import useMovies from "../../hooks/useMovies";

export default function TrendingMovies() {
  const [movies] = useMovies(() => fetchTrendingMovies(2))
  return <RenderMovies moviesResults={movies} title="Trending" />;
}
