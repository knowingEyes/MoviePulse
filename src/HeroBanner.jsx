import { fetchMoviesByCategory } from "./api";
import { useEffect, useState } from "react";
import { UseActiveTab, UseSelectedMovie } from "./context/AppContext";

export default function HeroBanner() {
  const { activeTab } = UseActiveTab();

  const [popularMovie, setPoularMovie] = useState("");
  const imgUrl = `https://image.tmdb.org/t/p/original${popularMovie.poster_path}`;
  const { handleSelect } = UseSelectedMovie();
  useEffect(function () {
    async function getTrendingMovie() {
      const trendingMovie = await fetchMoviesByCategory("now_playing");
      setPoularMovie(trendingMovie?.results[9]);
    }
    getTrendingMovie();
  }, []);
  if (activeTab !== "Home") return null;
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
        <div className="flex justify-center gap-3 mt-5 ">
          <button
            className="bg-[#ef4444] text-white px-6 rounded-md py-1 cursor-pointer"
            onClick={() => handleSelect(popularMovie.id)}
          >
            Watch Trailer
          </button>{" "}
          <button className="bg-white/20 text-white px-6 py-1 rounded-md">
            Add to watch list.
          </button>
        </div>
      </div>
    </section>
  );
}
