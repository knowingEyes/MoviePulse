import { useWatchListMoviesContext } from "./useWatchedMoviesContext";

export default function useWatchListMovies(title, id) {
  const { handleWatchListMovies, watchListMovies, handleDelete } =
    useWatchListMoviesContext();
    const dateAdded = new Date().toISOString()
  function setWatchListMovies() {
    handleWatchListMovies({ title, id,  dateAdded });
  }
  const iswatchListMovies =
   watchListMovies?.map(({ id }) => id).includes(id) || false;

  return {
    iswatchListMovies,
    setWatchListMovies,
    watchListMovies,
    handleDelete,
  };
}
