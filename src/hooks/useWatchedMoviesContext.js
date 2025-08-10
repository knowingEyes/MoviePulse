import { useContext } from "react";
import { WatchedMovieContext } from "../context/AppContext";
 
export  function useWatchedMovieContext() {
  const watchedMovie = useContext(WatchedMovieContext);
  return watchedMovie;
}

