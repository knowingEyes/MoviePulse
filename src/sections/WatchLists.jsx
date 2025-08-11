import { useEffect, useState } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";
import useWatchedMovies from "../hooks/usewatchedMovie";
function WatchList() {
  const { watchedMovie } = useWatchedMovies();
  const [watchedMoviesResults, setwatchedMoviesResults] = useState([]);
  console.log(watchedMovie);
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
    <div className="bg-[#080808] text-white">
      <header className="bg-[#0a0a0a] p-5 flex justify-between">
        <h1 className="text-white font-bold text-lg">Watch Later</h1>
        <p></p>
      </header>
      <RenderMoviesVertical movies={watchedMoviesResults} />
    </div>
  );
}

export default WatchList;
