import fetchMovies from "./api";
import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [popularMovie, setPoularMovie] = useState("");
  const imgUrl = `https://image.tmdb.org/t/p/w500${popularMovie.poster_path}`;
  useEffect(function () {
    async function getTrendingMovie() {
      const trendingMovie = await fetchMovies();
      setPoularMovie(trendingMovie.results[7]);
    }
    getTrendingMovie();
  }, []);

  return (
    <section
      className="relative  w-full h-[70vh]"
      style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
    >
      <div className="absolute bg-gradient-to-t from-[#0f172a] to-transparent inset-0"></div>
      <div className=" absolute bottom-10 text-center w-full">
        <h1 className="text-2xl text-white font-bold mb-2">
          {popularMovie.original_title}
        </h1>
        <p className="text-sm text-gray-300 "> {popularMovie.release_date}</p>
        <div className="flex justify-center gap-3 mt-5">
          <button className="bg-[#ef4444] text-white px-6 rounded-md py-1">
            Wathch Trailer
          </button>{" "}
          <button className="bg-white/20 text-white px-6 py-1 rounded-md">
            Add to watch list.
          </button>
        </div>
      </div>
    </section>
  );
}
