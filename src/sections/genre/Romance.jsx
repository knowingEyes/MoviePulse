import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";

export default function RomanceMovies() {
  const [RomanceMovies, setRomanceMovies] = useState([]);
  useEffect(function () {
    async function getRomanceMovies() {
      const data = await fetchMoviesByGenry(10749,2);
     setRomanceMovies(data.results);
    }
    getRomanceMovies();
  }, []);

  return <RenderMovies moviesResults={RomanceMovies} title="Romance" />;
}