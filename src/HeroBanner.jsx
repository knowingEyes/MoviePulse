import { ApiKey } from "./api";
import { FaPlay, FaPlus, FiCheck } from "./utils/iconsLib";
import Button from "./components/Button";
import { useSelectedMovieContext } from "./hooks/useSelectedMovieContext";
import useFetch from "./hooks/useFetch";
import useWatchListMovies from "./hooks/usewatchedMovie";

export default function HeroBanner() {
  const { handleSelect } = useSelectedMovieContext();
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}`
  );
  const { id, title, poster_path, release_date } = movies[17] ?? {};
  const {  setWatchListMovies , iswatchListMovies} = useWatchListMovies(title, id);

  const imgUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  return (
    <section
      className="relative  w-full h-[70vh]"
      style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
    >
      <div className="absolute bg-gradient-to-t from-[#0f172a] to-transparent inset-0"></div>
      <div className=" absolute bottom-10 text-center w-full">
        <h1 className="text-2xl text-white font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-300 "> {release_date}</p>
        <div className="flex justify-center gap-3 mt-5">
          <Button handleClick={() => handleSelect(id)}>
            <FaPlay /> Watch Trailer
          </Button>
          {!iswatchListMovies ? (
            <Button bg="bg-white/20" handleClick={setWatchListMovies}>
              <FaPlus /> Add to watch list
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
