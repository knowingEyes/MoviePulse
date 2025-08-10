import { fetchMoviesByGenry } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import useMovies from "../../hooks/useMovies";

function MightAlsoLike({ genre }) {
  const [movies] = useMovies(() =>
    fetchMoviesByGenry(genre, Math.round(Math.random() + 1 * 50))
  );
  return (
    <RenderMoviesVertical movies={movies} secTitle="You might also like" />
  );
}

export default MightAlsoLike;
