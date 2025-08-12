import { ApiKey } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import useFetch from "../../hooks/useFetch";

function MightAlsoLike({ genre }) {
  const { movies } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=${genre}&page=${Math.round(Math.random() + 1 * 50 )}`)
 
  return (
    <RenderMoviesVertical movies={movies} secTitle="You might also like" />
  );
}

export default MightAlsoLike;
    // fetchMoviesByGenry(
    //   genre,
    //   Math.round(
    //     Math.random() + 1 * 50