import { useEffect, useState } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";
import useWatchListMovies from "../hooks/usewatchedMovie";
function WatchList() {
  const { watchListMovies } = useWatchListMovies();
  const [watchedMoviesResults, setwatchedMoviesResults] = useState([]);

  useEffect(
    function () {
      async function getWatchedMovies() {
        const results = await Promise.all(
          watchListMovies.map(({ id }) => fetchMoviesByCategory(id))
        );
        setwatchedMoviesResults(results);
      }
      getWatchedMovies();
    },
    [watchListMovies]
  );
  return (
    <div className="bg-[#080808] text-white fixed inset-0 overflow-y-auto [&_ul]:mx-2">
      <header className="bg-[#0a0a0a] p-4 flex justify-between">
        <h1 className="text-white font-bold text-lg">Watch Later</h1>
        <p></p>
      </header>
      <RenderMoviesVertical movies={watchedMoviesResults} />
    </div>
  );
}

export default WatchList;
