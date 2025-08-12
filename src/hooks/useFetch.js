import { useEffect, useState } from "react";
export default function useFetch(url) {
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();
      const { signal } = controller;
      async function fetchApi() {
        if (!url) return;
        setIsLoading(true);
      
        try {
          const res = await fetch(url, { signal });
          if (!res.ok) throw new Error("Fetched failed");
          const  data  = await res.json();
          setMovies(data["results"] ?? data);
        } catch (error) {
          setError(error.status);
        }
        setIsLoading(false);
      }
      fetchApi();
      return () => controller.abort();
    },

    [url]
  );
  return { error, movies, isLoading };
}
