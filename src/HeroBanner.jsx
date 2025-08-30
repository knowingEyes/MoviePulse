import { ApiKey } from "./api";
import { FaPlay, FaPlus, FiCheck } from "./utils/iconsLib";
import Button from "./components/Button";
import useFetch from "./hooks/useFetch";
import { Link } from "react-router-dom";
import { useWatchListMoviesContext } from "./hooks/useWatchedMoviesContext";

export default function HeroBanner() {
  const { movies } = useFetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${ApiKey}`
  );
  const { id, title, poster_path, release_date } = movies[17] ?? {};
  const { setWatchListMovies, isMovieInWatchLists, handleDelete } =
    useWatchListMoviesContext();
  const isInWatchList = isMovieInWatchLists(id);
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
          <Link
            to={`/movie/${id}`}
            className="text-white px-6 rounded-md py-2 cursor-pointer font-bold text-sm flex  items-center-safe justify-center gap-1 hover:scale-[1.01] transition-all ease-in-out bg-[#ef4444]"
          >
            <FaPlay /> <span className="text-[0.75rem]">Watch Trailer</span>
          </Link>
          {!isInWatchList ? (
            <Button bg="bg-white/20" handleClick={()=> setWatchListMovies(title, id)}>
              <FaPlus />{" "}
              <span className="text-[0.75rem]">Add to Watchlist</span>
            </Button>
          ) : (
            <Button bg="bg-white/20" handleClick={(e) => handleDelete(id,e)}>
              <span className="text-[0.75rem]">Added to Watchlist</span>
              <FiCheck size={"18px"} />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
