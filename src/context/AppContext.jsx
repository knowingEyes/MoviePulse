import { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
const WatchListMoviesContext = createContext();

function WatchedMovieProvider({ children }) {
  const [watchListMovies, setWatchListMovie] = useLocalStorageState(
    [],
    "watchLists"
  );
  function setWatchListMovies(title, id) {
    setWatchListMovie((prev) => [
      ...prev,
      { title, id : +id  , dateAdded: new Date().toISOString() },
    ]);
  }

  function handleDelete(id) {
    setWatchListMovie(watchListMovies.filter((m) => m.id !== id));
  }
  const isMovieInWatchLists = (id) => {
    return watchListMovies?.map(({ id }) => id).includes(id);
  };
  return (
    <WatchListMoviesContext
      value={{
        setWatchListMovies,
        watchListMovies,
        handleDelete,
        isMovieInWatchLists,
      }}
    >
      {children}
    </WatchListMoviesContext>
  );
}

export { WatchedMovieProvider, WatchListMoviesContext };
