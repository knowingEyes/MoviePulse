import { fetchRecommededMovie } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import useMoviesFetch from "../../hooks/useMoviesFetch";

function RecommendedMovies() {
  const [movies] = useMoviesFetch(() => fetchRecommededMovie());
  return (
    <RenderMoviesVertical
      movies={movies}
      secTitle="Recomended Movies and Shows for you"
    />
  );
}

export default RecommendedMovies;
