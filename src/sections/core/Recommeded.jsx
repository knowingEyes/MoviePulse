import { fetchRecommededMovie } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";
import { useEffect, useState } from "react";

function RecommendedMovies() {
  const [recommendMovies, setRecommendedMovies] = useState([]);

  useEffect(function () {
    async function getRecommededMovies() {
      const recommeded = await fetchRecommededMovie();
      setRecommendedMovies(recommeded.results);
    }
    getRecommededMovies();
  }, []);

  return (
    <RenderMoviesVertical
      movies={recommendMovies}
      secTitle="Reccomended Movies and Shows for you"
    />
  );
}

export default RecommendedMovies;
