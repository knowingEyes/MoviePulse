import { createContext, useContext, useState } from "react";

const SelectedMovieDetailContext = createContext();

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

function UseSelectedMovie() {
  const selectedMovie = useContext(SelectedMovieDetailContext);
  if (selectedMovie === undefined)
    throw new Error("Cannot use this out side its provider");
  return selectedMovie;
}

export { MovieProvider, UseSelectedMovie };
