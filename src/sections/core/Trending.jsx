import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchTrendingMovies }  from "../../api";

export default function TrendingMovies() {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  useEffect(function () {
    async function getTrendingMovies() {
      const data = await fetchTrendingMovies(2);
      setTrendingMovies(data.results);
    }
    getTrendingMovies();
  }, []);
  return <RenderMovies moviesResults={TrendingMovies} title="Trending" />;
}
