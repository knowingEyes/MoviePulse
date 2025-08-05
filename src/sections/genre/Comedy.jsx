import { useEffect, useState } from "react";
import RenderMovies from "../../components/movieRenderer";
import { fetchMoviesByGenry } from "../../api";


export default function ComedyMovies() {
  const [ComedyMovies, setComedyMovies] = useState([]);
  useEffect(function () {
    async function getComedyMovies() {
      const data = await fetchMoviesByGenry(35,5);
     setComedyMovies(data.results);
    }
    getComedyMovies();
  }, []);

  return <RenderMovies moviesResults={ComedyMovies} title="Comedy" />;
}