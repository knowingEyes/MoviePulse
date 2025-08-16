import { createContext,  useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const SelectedMovieDetailContext = createContext();
const ActiveTabContext = createContext();
const WatchListMoviesContext = createContext();

function WatchedMovieProvider({ children }) {
  const [watchListMovies, setWatchListMovies] = useLocalStorageState(
    [],
    "watchLists"
  );
  function handleWatchListMovies(movie) {
    setWatchListMovies((prev) => [...prev, movie]);
  }

  function handleDelete(id, e) {
      e.stopPropagation()
     setWatchListMovies(watchListMovies.filter(m=> m.id !== id))
  }

  return (
    <WatchListMoviesContext value={{ handleWatchListMovies, watchListMovies, handleDelete }}>
      {children}
    </WatchListMoviesContext>
  );
}

function SelectedMovieProvider({ children }) {
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  function handleSelect(id) {
    setSelectedMovieId(id);
  }

  return (
    <SelectedMovieDetailContext.Provider
      value={{ handleSelect, selectedMovieId }}
    >
      {children}
    </SelectedMovieDetailContext.Provider>
  );
}
function ActiveTabProvider({ children }) {
  const [activeTab, setActiveTab] = useState("Home");
  function handleActiveTab(tab) {
    setActiveTab(tab);
  }

  return (
    <ActiveTabContext.Provider value={{ handleActiveTab, activeTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export {
  SelectedMovieProvider,
  ActiveTabProvider,
  WatchedMovieProvider,
  WatchListMoviesContext,
  ActiveTabContext,
  SelectedMovieDetailContext,
};
