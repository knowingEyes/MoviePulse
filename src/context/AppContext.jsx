import { createContext, useState } from "react";

const SelectedMovieDetailContext = createContext();
const ActiveTabContext = createContext();
const WatchListMoviesContext = createContext();

function WatchedMovieProvider({ children }) {
  const [watchListMovies, setWatchListMovies] = useState([]);
  function handleWatchListMovies(movie) {
    setWatchListMovies((prev) => [...prev, movie]);
  }
  return (
    <WatchListMoviesContext value={{ handleWatchListMovies, watchListMovies }}>
      {children}
    </WatchListMoviesContext>
  );
}

function MovieProvider({ children }) {
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
  MovieProvider,
  ActiveTabProvider,
  WatchedMovieProvider,
  WatchListMoviesContext,
  ActiveTabContext,
  SelectedMovieDetailContext,
};
