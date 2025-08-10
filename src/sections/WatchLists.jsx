import { useEffect } from "react";
import { RenderMoviesVertical } from "../components/movieRenderer";
import { fetchMoviesByCategory } from "../api";

function WatchList() {
  // const { watchedMovie } = useWatchedMovieContextMovie();
  // useEffect(
  //   function () {
  //     async function getWatchedMovies() {
  //       const { results } = await fetchMoviesByCategory();
  //       console.log(results);
  //     }
  //     getWatchedMovies();
  //   },
  //   [watchedMovie]
  // );
  return (
    <>
      <div className="bg-[#1a1a1a] p-5">
        <h1 className="text-white font-bold text-md">Movies you've watched</h1>
      </div>
      {/* <RenderMoviesVertical movies={watchedMovies} /> */}
    </>
  );
}

export default WatchList;
