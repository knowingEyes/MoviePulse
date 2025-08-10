import { useEffect, useState } from "react";
import { ApiKey } from "../api";
export default function useFetch() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function () {
    async function fetchApi() {

        setIsLoading(true)
      try {
        const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`);
        if (!res.ok) throw new Error("Fetched failed");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false)
    }
    fetchApi();
  },[]);
  return { error, data, isLoading };
}
