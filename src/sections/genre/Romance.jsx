import { ApiKey } from "../../api";
import RenderMovies from "../../components/movieRenderer";
import useFetch from "../../hooks/useFetch";

export default function RomanceMovies() {
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=10749&page=2`
  );
  return <RenderMovies moviesResults={movies} title="Romance" />;
}
