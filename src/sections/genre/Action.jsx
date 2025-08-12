import { ApiKey } from "../../api";
import RenderMovies from "../../components/movieRenderer";
import useFetch from "../../hooks/useFetch";

export default function ActionMovies() {
   const { movies } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=28&page=3`)
  return <RenderMovies moviesResults={movies} title="Action" />;
}
