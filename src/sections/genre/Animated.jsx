import { ApiKey } from "../../api";
import RenderMovies from "../../components/movieRenderer";
import useFetch from "../../hooks/useFetch";

export default function AnimatedMovies() {
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=16&page=10`
  );
  return <RenderMovies moviesResults={movies} title="Animated" />;
}
