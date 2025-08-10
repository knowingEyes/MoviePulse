import { useWatchedMovieContext } from "./useWatchedMoviesContext";

export default function useWatchedMovies(title, id) {
  const { handleWatchedMovie, watchedMovie } = useWatchedMovieContext();
  function setIsWatchedMovie() {
    handleWatchedMovie({ title, id });
  }
  const isWatched = watchedMovie.map(({ id }) => id).includes(id) || false;

  return [isWatched, setIsWatchedMovie];
}
