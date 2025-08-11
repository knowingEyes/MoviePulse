import { useWatchedMovieContext } from "./useWatchedMoviesContext";

export default function useWatchedMovies(title, id, runtime) {
  const { handleWatchedMovie, watchedMovie } = useWatchedMovieContext();
  function setIsWatchedMovie() {
    handleWatchedMovie({ title, id , runtime});
  }
  const isWatched = watchedMovie.map(({ id }) => id).includes(id) || false;

  return {isWatched, setIsWatchedMovie, watchedMovie};
}
