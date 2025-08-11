import { fetchMoviesByGenry } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import useMoviesFetch from "../../hooks/useMoviesFetch";

function MightAlsoLike({ genre }) {
  const [movies] = useMoviesFetch(() =>
    fetchMoviesByGenry(genre, Math.round(Math.random() + 1 * 50))
  );
  return (
    <RenderMoviesVertical movies={movies} secTitle="You might also like" />
  );
}

export default MightAlsoLike;
