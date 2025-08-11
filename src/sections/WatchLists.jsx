import { useEffect, useState } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";
import useWatchedMovies from "../hooks/usewatchedMovie";
function WatchList() {
  const { watchedMovie } = useWatchedMovies();
  const [watchedMoviesResults, setwatchedMoviesResults] = useState([]);
  console.log(watchedMovie)
  useEffect(
    function () {
      async function getWatchedMovies() {
        const results = await Promise.all(
          watchedMovie.map(({ id }) => fetchMoviesByCategory(id))
        );
        setwatchedMoviesResults(results);
      }
      getWatchedMovies();
    },
    [watchedMovie]
  );
  return (
    <div>
      <header className="bg-[#0e0e0e] p-5 text-white flex justify-between">
        <h1 className="text-white font-bold text-md">
          Watch Later
        </h1>
        <p></p>
      </header>
      <RenderMoviesVertical
        movies={watchedMoviesResults}
        secTitle="Watched Movie "
      />
    </div>
  );
}

export default WatchList;
