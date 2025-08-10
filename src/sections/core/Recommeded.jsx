import { fetchRecommededMovie } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import useMovies from "../../hooks/useMovies";

function RecommendedMovies() {
  const [movies] = useMovies(() => fetchRecommededMovie());
  return (
    <RenderMoviesVertical
      movies={movies}
      secTitle="Recomended Movies and Shows for you"
    />
  );
}

export default RecommendedMovies;
