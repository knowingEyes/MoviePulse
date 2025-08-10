import { createContext, useContext, useState } from "react";

const SelectedMovieDetailContext = createContext();
const ActiveTabContext = createContext();
const WatchedMovieContext = createContext();

function WatchedMovieProvider({ children }) {
  const [watchedMovie, setWachedMovie] = useState([]);
  function handleWatchedMovie(movie) {
    setWachedMovie((prev) => [...prev, movie]);
  }
  return (
    <WatchedMovieContext value={{ handleWatchedMovie, watchedMovie }}>
      {children}
    </WatchedMovieContext>
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
  WatchedMovieContext,
  ActiveTabContext,
  SelectedMovieDetailContext
};
