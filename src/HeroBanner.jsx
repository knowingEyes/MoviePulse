import { fetchMoviesByCategory } from "./api";
import { useEffect, useState } from "react";
import { UseActiveTab, UseSelectedMovie, UseWatchedMovie } from "./context/AppContext";
import { FaPlay, FaPlus, FiCheck } from "./utils/iconsLib";
import Button from "./components/Button";

export default function HeroBanner() {
  const { activeTab } = UseActiveTab();
  const { handleWatchedMovie, watchedMovie } = UseWatchedMovie();
  const [nowPlaying, setPoularMovie] = useState("");
  const {id, title, poster_path, release_date} = nowPlaying
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const { handleSelect } = UseSelectedMovie();
  const watchedMovieid = watchedMovie.map(({id})=> id).includes(id)

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
          {nowPlaying.original_title}
        </h1>
        <p className="text-sm text-gray-300 "> {release_date}</p>
        <div className="flex justify-center gap-3 mt-5">
          <Button handleClick={() => handleSelect(id)}>
            <FaPlay /> Watch Trailer
          </Button>
          {!watchedMovieid ? <Button bg="bg-white/20" handleClick={()=> handleWatchedMovie({ title , id})}>
            <FaPlus /> Add to watch list.
          </Button> :<Button bg="bg-white/20">
            <FiCheck size={"20px"}/>Already Watched
          </Button>}
        </div>
      </div>
    </section>
  );
}
