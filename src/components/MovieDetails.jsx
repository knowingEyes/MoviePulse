import { useSelectedMovieContext } from "../hooks/useSelectedMovieContext";
import { ApiKey } from "../api";
import { FiArrowLeft, FiCalendar, FiCheck, FiClock } from "../utils/iconsLib";
import Stars from "./RatingStars";
import { FaStar } from "../utils/iconsLib";
import MightAlsoLike from "../sections/core/MightLike";
import Button from "./Button";
import useFetch from "../hooks/useFetch";
import LoaderSkelenton from "./Loader";
import useWatchListMovies from "../hooks/usewatchedMovie";

import { useActiveTabContext } from "../hooks/useActiveTabContext";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { useState } from "react";

export default function MovieDetailsModal() {
  const { handleActiveTab, activeTab } = useActiveTabContext();
  const [clampText, setClampText] = useState(true);
  const [yourRating, setValue] = useLocalStorageState({}, "ratings", {
    render: false,
  });
  const { selectedMovieId, handleSelect } = useSelectedMovieContext();
  const { isLoading, movies: movie } = useFetch(
    `https://api.themoviedb.org/3/movie/${selectedMovieId}?api_key=${ApiKey}`
  );
  const {
    original_title: title,
    genres,
    overview,
    release_date: released,
    vote_average: rating,
    runtime,
    id,
  } = movie ?? {};
  const { iswatchListMovies, setWatchListMovies } = useWatchListMovies(
    title,
    id
  );
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
  // function navigate() {
  //   handleSelect(null)
  //   handleActiveTab(activeTab)
  // }

  // const truncate = (text, num = 150)=> {
  //   if(text.length < 50) {
  //     text.split(" ").splice
  //   }
  // }
  return (
    <>
      {selectedMovieId && !isLoading ? (
        <section className="bg-[#080808] fixed  text- z-90 text-white
         overflow-y-auto inset-0 overflow-x-hidden">
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
              onClick={() => handleSelect(null)}
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
              {!iswatchListMovies ? (
                <Button handleClick={setWatchListMovies}>
                  Add to watchlist
                </Button>
              ) : (
                <Button>
                  Added to WatchList
                  <FiCheck size={"20px"} />
                </Button>
              )}
              <div className="rounded-xl py-3 bg-white/5 flex justify-center h-10">
                {!yourRating.current[id] ? (
                  <Stars
                    size="text-[18px]"
                    color="text-yellow-400 "
                    maxLength={10}
                    // defaultRating={yourRating}
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
            <p className="text-gray-200 text-sm my-5 inline-block">
              {clampText && overview?.length >= 150
                ? overview?.slice(0, 150) + ".. "
                : overview}
            </p>
            {overview?.length >= 150 && (
              <button
                onClick={() => setClampText((p) => !p)}
                className="text-[16px] text-white cursor-pointer"

              >
                {clampText ? "showmore" : "showless"}
              </button>
            )}
            <MightAlsoLike genre={genres?.[0]?.id ?? 28} />
          </div>
        </section>
      ) : (
        selectedMovieId && <LoaderSkelenton />
      )}
    </>
  );
}
