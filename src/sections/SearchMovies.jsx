import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import RecommendedMovies from "./core/Recommeded";
import TodayPicksMovies from "./core/TodaysPicks";
import { ApiKey } from "../api";
import RenderMovies from "../components/movieRenderer";
import useFetch from "../hooks/useFetch";

function SearchForMovies() {
  const [query, setQuery] = useState("");
  const { movies, isLoading } = useFetch(
    query.length < 3
      ? null
      : `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}&page=1`
  );
  useEffect(function () {});
  return (
    <div className=" bg-[#080808] text-white w-full ">
      <header className="fixed w-full top-0 z-90  bg-[#080808]  left-0 p-3">
        <SearchInput query={query} setQuery={(val) => setQuery(val)} />
      </header>

      <div className="pt-20 px-4">
        {query.length < 3 ? (
          <>
            <TodayPicksMovies />
            <RecommendedMovies />
          </>
        ) : isLoading ? (
          <p className="text-center text-md mt-10">Loading search result...</p>
        ) : (
          <RenderMovies
            moviesResults={movies}
            title="Top matches"
            wrap="flex-wrap justify-center"
            clas="top-results"
          />
        )}
        {query.length > 3 && !movies.length && !isLoading && (
          <p className="text-center text-md mt-10">No Results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchForMovies;
