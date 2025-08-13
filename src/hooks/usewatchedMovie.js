import { useWatchListMoviesContext } from "./useWatchedMoviesContext";

export default function useWatchListMovies(title, id) {
  const { handleWatchListMovies, watchListMovies } =
    useWatchListMoviesContext();
  function setWatchListMovies() {
    handleWatchListMovies({ title, id });
  }
  const iswatchListMovies =
    watchListMovies?.map(({ id }) => id).includes(id) || false;

  return { iswatchListMovies, setWatchListMovies, watchListMovies };
}
