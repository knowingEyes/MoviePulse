import { ApiKey } from "../api";
import { FiArrowLeft, FiCalendar, FiCheck, FiClock } from "../utils/iconsLib";
import Stars from "./RatingStars";
import { FaStar } from "../utils/iconsLib";
import MightAlsoLike from "../sections/core/MightLike";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import LoaderSkelenton from "./Loader";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useWatchListMoviesContext } from "../hooks/useWatchedMoviesContext";

export default function MovieDetailsModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clampText, setClampText] = useState(true);
  const [yourRating, setValue] = useLocalStorageState({}, "ratings", {
    render: false,
  });
  const { isLoading, movies: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`
  );
  const {
    original_title: title,
    genres,
    overview,
    release_date: released,
    vote_average: rating,
    runtime,
  } = movie ?? {};
  const  { isMovieInWatchLists , setWatchListMovies } = useWatchListMoviesContext()
  const isInWatchList = isMovieInWatchLists(+id)
  const allgenres = genres?.map((g) => g.name).join(" | ");
  const { movies: movieTrailer } = useFetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}`
  );
  const selectedMovieTrailerKey = movieTrailer.find(
    (r) => r?.type === "Trailer" && r?.site === "YouTube"
  )?.key;
  function handleYourRating(rating) {
    setValue((yourRating.current[id] = rating));
  }
  return (
    <>
      {id && !isLoading ? (
        <section
          className="bg-[#080808] w-full  text-white"
        >
          <div className="relative">
            <iframe
              src={`https://www.youtube.com/embed/${selectedMovieTrailerKey}`}
              alt="Youtube"
              className="h-70 w-full absolute top-0"
              allowFullScreen
            />
            <iframe />
            <button
              className="text-white text-2xl absolute top-3 left-5 cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <FiArrowLeft className="bg-black/70 rounded" />
            </button>
          </div>
          <div className="p-4 mt-31">
            <div>
              <h1 className="font-bold text-xl text-white 00">{title}</h1>
              <div className="flex gap-3 text-sm [&>div]:flex [&>div]:gap-1 [&>div]:items-center ">
                <div>
                  <FiCalendar />
                  <span>{released}</span>
                </div>
                <div>
                  <FiClock />
                  <span>{runtime}mins</span>
                </div>
                <div>
                  <FaStar className="text-yellow-400" />
                  <span>{Number(rating).toFixed(2) || 0} ratings</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">Genre : {allgenres}</p>
            </div>
            <div className="w-full mt-2 flex flex-col gap-3 [&>button]:h-10">
              { !isInWatchList? (
                <Button handleClick={()=> setWatchListMovies(title, id)}>
                  Add to watchlist
                </Button>
              ) : (
                <Button>
                  Added to Watchlist
                  <FiCheck size={"20px"} />
                </Button>
              )}
              <div className="rounded-xl py-3 bg-white/5 flex justify-center h-10">
                {!yourRating.current[id] ? (
                  <Stars
                    size="text-[18px]"
                    color="text-yellow-400 "
                    maxLength={10}
                    setYourRating={handleYourRating}
                  />
                ) : (
                  <p className="flex items-center font-bold gap-1 text-sm">
                    You rated this movie {yourRating.current[id]}{" "}
                    <FaStar className="text-yellow-400" />
                  </p>
                )}
              </div>
            </div>
            <div className="py-5">
            <p className="text-gray-200 text-sm my-5 inline">
              {clampText && overview?.length >= 150
                ? overview?.slice(0, 150) + ".. "
                : overview}
            </p>
            {overview?.length >= 150 && clampText && (
             <button
                onClick={() => setClampText((p) => !p)}
                className="text-[16px] text-white cursor-pointer"
              >
                showmore
              </button>
            )}
            </div>
            <MightAlsoLike genre={genres?.[0]?.id ?? 28} />
          </div>
        </section>
      ) : (
        isLoading && <LoaderSkelenton />
      )}
    </>
  );
}
