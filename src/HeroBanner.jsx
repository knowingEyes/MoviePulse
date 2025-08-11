import { fetchMoviesByCategory } from "./api";
import { useEffect, useState } from "react";
import { useActiveTabContext } from "./hooks/useActiveTabContext";
import { FaPlay, FaPlus, FiCheck } from "./utils/iconsLib";
import Button from "./components/Button";
import useWatchedMovies from "./hooks/usewatchedMovie";
import { useSelectedMovieContext } from "./hooks/useSelectedMovieContext";

export default function HeroBanner() {
  const { activeTab } = useActiveTabContext();
  const [nowPlaying, setPoularMovie] = useState("");
  const { id, title, poster_path, release_date } = nowPlaying;
  const {isWatched, setIsWatchedMovie} = useWatchedMovies(title, id);
  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const { handleSelect } = useSelectedMovieContext();

  useEffect(function () {
    async function getTrendingMovie() {
      const trendingMovie = await fetchMoviesByCategory("now_playing");
      setPoularMovie(trendingMovie?.results[9]);
    }
    getTrendingMovie();
  }, []);
  if (activeTab !== "Home") return;
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
          {!isWatched ? (
            <Button bg="bg-white/20" handleClick={setIsWatchedMovie}>
              <FaPlus /> Add to watch list.
            </Button>
          ) : (
            <Button bg="bg-white/20">
              Added to Watchlist
              <FiCheck size={"18px"} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
