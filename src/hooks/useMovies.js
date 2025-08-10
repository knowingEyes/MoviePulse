import { useEffect, useState } from "react";


export default function useMovies(callback) {
  const [movies, setMovies] = useState([]);
  useEffect(
    function () {
      async function getMovies() {
        const { results } = await callback();
        setMovies(results);
      }
      getMovies();
    },
    []
  );

  return [movies, callback];
}