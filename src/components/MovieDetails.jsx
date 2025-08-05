import { useEffect, useState } from "react";
import { UseSelectedMovie } from "../context/AppContext";
import { fetchMoviesByCategory, fetchMoviesTrailer } from "../api";
import { FiArrowLeft } from "../utils/iconsLib";

export default function MovieDetailsModal() {
  const { selectedMovieId, handleSelect } = UseSelectedMovie();
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedMovieTrailer, setselectedMovieTrailer] = useState("");
  // console.log(selectedMovie);
  const {
    title: original_title,
    genre,
    overview,
    released: release_date,
    rating: vote_average,
  } = selectedMovie;
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
        <section className="bg-[#141414] fixed inset-0 text- z-50">
          <div className="relative">
          <iframe
            src={`https://www.youtube.com/embed/${selectedMovieTrailer}`}
            alt=""
            className="h-50 w-full absolute"
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
          <div className="mt-15 p-2"><h1 className="font-bold text-xl text-white">{original_title}</h1></div>
        </section>
      )}
    </>
  );
}
