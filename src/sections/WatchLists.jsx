import { useEffect, useMemo, useState } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";
import useWatchListMovies from "../hooks/usewatchedMovie";
import useLocalStorageState from "../hooks/useLocalStorageState";
function WatchList() {
  const { watchListMovies, handleDelete } = useWatchListMovies();
  const [watchedMoviesResults, setwatchedMoviesResults] = useState([]);
  const [sortBy, setSortBy] = useLocalStorageState("added", "sort");
  let sortedMovies = useMemo(() => {
    if (sortBy === "release") {
      return watchedMoviesResults.sort(
        (a, b) => +a?.release_date?.localeCompare(+b?.release_date)
      );
    }
    if (sortBy === "added") {
      return watchedMoviesResults.sort((a, b) =>
        a?.dateAdded?.localeCompare(b?.dateAdded)
      );
    }
    if (sortBy === "alphabet") {
      return watchedMoviesResults.sort((a, b) =>
        a?.title?.localeCompare(b?.title)
      );
    } else {
      return watchedMoviesResults;
    }
  }, [sortBy, watchedMoviesResults]);
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
      <header className="bg-[#0a0a0a] p-4 flex items-center space-x-2">
        <h1 className="text-white font-bold text-lg inline">Watch Later</h1>{" "}
        <span className="text-xs bg-[red] rounded-full px-[0.8em] ">
          {watchListMovies.length}
        </span>
      </header>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="cursor-pointer bg-white/8  rounded-full p-1 shadow-xl
       [&>option]:bg-black/90 text-sm m-4"
      >
        <option value="release">Sort by Date Released</option>
        <option value="alphabet">Sort by Alphabet (A-Z)</option>
        <option value="added">Sort by Date Added</option>
      </select>
      <RenderMoviesVertical movies={sortedMovies} handleDelete={handleDelete} />
    </div>
  );
}

export default WatchList;
