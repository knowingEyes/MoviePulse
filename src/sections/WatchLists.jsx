import { useEffect, useState } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";
import useWatchListMovies from "../hooks/usewatchedMovie";
function WatchList() {
  const { watchListMovies, handleDelete } = useWatchListMovies();
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
      <header className="bg-[#0a0a0a] p-4 flex items-center space-x-2">
        <h1 className="text-white font-bold text-lg inline">Watch Later</h1> <span className="text-xs bg-[red] rounded-full px-[0.8em] ">{watchListMovies.length}</span>
        <p></p>
      </header>
      <RenderMoviesVertical movies={watchedMoviesResults} handleDelete={handleDelete}/>
        
        
    </div>
  );
}

export default WatchList;
