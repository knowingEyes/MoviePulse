import { useContext } from "react";
import { SelectedMovieDetailContext } from "../context/AppContext";

export function useSelectedMovieContext() {
  const selectedMovie = useContext(SelectedMovieDetailContext);
  if (selectedMovie === undefined)
    throw new Error("Cannot use this out side its provider");
  return selectedMovie;
}