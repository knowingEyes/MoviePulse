import { useEffect, useState } from "react";
import { useSelectedMovieContext } from "../hooks/useSelectedMovieContext";
import { fetchMoviesByCategory, fetchMoviesTrailer } from "../api";
import { FiArrowLeft, FiCalendar, FiCheck, FiClock } from "../utils/iconsLib";
import Stars from "./RatingStars";
import { FaStar } from "../utils/iconsLib";
import MightAlsoLike from "../sections/core/MightLike";
import Button from "./Button";
import useWatchedMovies from "../hooks/usewatchedMovie";

export default function MovieDetailsModal() {
  const { selectedMovieId, handleSelect } = useSelectedMovieContext();
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedMovieTrailer, setselectedMovieTrailer] = useState("");
  const {
    original_title: title,
    genres,
    overview,
    release_date: released,
    vote_average: rating,
    runtime,
    id,
  } = selectedMovie;
  const [isWatched, setIsWatchedMovie] = useWatchedMovies(title, id);
  const allgenres = genres?.map((g) => g.name).join(" | ");
  useEffect(
    function () {
      async function getSeltedMovieDetails() {
        if (!selectedMovieId) return;
        const selectedMovieDetails = await fetchMoviesByCategory(
          selectedMovieId
        );
        const movieTrailer = await fetchMoviesTrailer(selectedMovieId);
        const movieTrailerKey = movieTrailer.results?.find(
          (r) => r?.type === "Trailer" && r?.site === "YouTube"
        ).key;
        setSelectedMovie(selectedMovieDetails);
        setselectedMovieTrailer(
          `https://www.youtube.com/embed/${movieTrailerKey}`
        );
      }
      getSeltedMovieDetails();
    },
    [selectedMovieId]
  );

  return (
    <>
      {selectedMovieId && (
        <section className="bg-[#141414] fixed inset-0 text- z-50 text-white overflow-auto">
          <div className="relative">
            <iframe
              src={selectedMovieTrailer}
              alt=""
              className="h-70 w-full absolute"
              allowFullScreen
            />
            <iframe />
            <button
              className="text-white text-2xl absolute top-2.5 left-2 cursor-pointer"
              onClick={() => handleSelect(null)}
            >
              <FiArrowLeft />
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
                  <span>{Number(rating).toFixed(2)} ratings</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">Genre : {allgenres}</p>
            </div>
            <div className="w-full mt-2 flex flex-col gap-3 [&>button]:h-10">
              {!isWatched ? (
                <Button handleClick={setIsWatchedMovie}>
                  Add to watchlist
                </Button>
              ) : (
                <Button>
                  <FiCheck size={"20px"} /> Yov've watched this movie
                </Button>
              )}
              <div className="rounded-xl py-3 bg-white/5 flex justify-center h-10">
                <Stars
                  size="text-[18px]"
                  color="text-yellow-400 "
                  maxLength={10}
                  defaultRating={0}
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-5">{overview}</p>
            <MightAlsoLike genre={genres?.[0]?.id ?? 28} />
          </div>
        </section>
      )}
    </>
  );
}
