import { useContext } from "react";
import { WatchListMoviesContext } from "../context/AppContext";
 
export  function useWatchListMoviesContext() {
  const watchListMovies = useContext(WatchListMoviesContext);
  return watchListMovies;
}

