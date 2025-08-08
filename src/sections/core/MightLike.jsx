import { useEffect, useState } from "react";
import { fetchMoviesByGenry } from "../../api";
import { RenderMoviesVertical } from "../../components/movieRenderer";

function MightAlsoLike({ genre }) {
  const [mightLikeMovies, setMightLikeMovies] = useState([]);
  useEffect(
    function () {
      async function getMightLikeMovies() {
        const mightLike = await fetchMoviesByGenry(
          genre,
          Math.round(Math.random() + 1 * 50)
        );
        setMightLikeMovies(mightLike.results);
      }
      getMightLikeMovies();
    },
    [genre]
  );
  return (
    <RenderMoviesVertical
      movies={mightLikeMovies}
      secTitle="You might also like"
    />
  );
}

export default MightAlsoLike;
