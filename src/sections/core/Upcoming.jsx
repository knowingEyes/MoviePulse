import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByCategory } from "../../api";

export default function UpcomingMovies() {
  const [UpcomingMovies, setUpcomingMovies] = useState([]);
  useEffect(function () {
    async function getUpcomingMovies() {
      const data = await fetchMoviesByCategory("upcoming");
      setUpcomingMovies(data.results);
    }
    getUpcomingMovies();
  }, []);
  return <RenderMovies moviesResults={UpcomingMovies} title="Upcoming" />;
}
