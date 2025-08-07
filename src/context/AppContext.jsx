import { createContext, useContext, useState } from "react";

const SelectedMovieDetailContext = createContext();
const ActiveTabContext = createContext();

function MovieProvider({ children }) {
  // const [hoveredMovieId, sethoveredMovieId] = useState(null);
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

function UseSelectedMovie() {
  const selectedMovie = useContext(SelectedMovieDetailContext);
  if (selectedMovie === undefined)
    throw new Error("Cannot use this out side its provider");
  return selectedMovie;
}
function UseActiveTab() {
  const activeTab = useContext(ActiveTabContext);
  return activeTab;
}

export { MovieProvider, UseSelectedMovie , ActiveTabProvider, UseActiveTab};
