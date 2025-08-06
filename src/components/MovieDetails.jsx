import { useEffect, useState } from "react";
import { UseSelectedMovie } from "../context/AppContext";
import { fetchMoviesByCategory, fetchMoviesTrailer } from "../api";
import { FiArrowLeft, FiCalendar, FiClock } from "../utils/iconsLib";
import Stars from "./RatingStars";

export default function MovieDetailsModal() {
  const { selectedMovieId, handleSelect } = UseSelectedMovie();
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedMovieTrailer, setselectedMovieTrailer] = useState("");
  const {
    original_title: title,
    genres,
    overview,
    release_date: released,
    vote_average: rating,
    runtime,
  } = selectedMovie;
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
          (r) => r.type === "Trailer" && r.site === "YouTube"
        ).key;
        setSelectedMovie(selectedMovieDetails);
        setselectedMovieTrailer(movieTrailerKey);
      }
      getSeltedMovieDetails();
    },
    [selectedMovieId]
  );

  return (
    <>
      {selectedMovieId && (
        <section className="bg-[#141414] fixed inset-0 text- z-50 text-white">
          <div className="relative">
            <iframe
              src={`https://www.youtube.com/embed/${selectedMovieTrailer}`}
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
              </div>
              <p>Genre : {allgenres}</p>
            </div>
            <div className="w-full mt-2 flex flex-col gap-3">
              <button className="bg-[#ef4444] rounded-xl text-[18px]  h-10 ">
                Add to watchlist
              </button>
              <div className="rounded-xl py-3 bg-white/5 flex justify-center h-10">
                <Stars size="text-[18px]" color="text-yellow-400 " maxLength={10} defaultRating={0}/>
              </div>
            </div>
            <p className="text-gray-300 text-sm mt-5">{overview}</p>
          </div>
        </section>
      )}
    </>
  );
}
