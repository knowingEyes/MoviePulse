import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import { useActiveTabContext } from "../hooks/useActiveTabContext";
import RecommendedMovies from "./core/Recommeded";
import TodayPicksMovies from "./core/TodaysPicks";
import { ApiKey } from "../api";
import RenderMovies from "../components/movieRenderer";
import useFetch from "../hooks/useFetch";

function SearchForMovies() {
  const [query, setQuery] = useState("");
  const { handleActiveTab } = useActiveTabContext();
  const { movies, isLoading, error } = useFetch(
    query.length < 3
      ? null
      : `https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}&page=1`
  );
  useEffect(function() {
    
  })
  return (
    <div className="fixed z-50 bg-[#080808] text-white overflow-y-scroll w-full inset-0">
      <header className="fixed w-full top-0 z-90  bg-[#080808]  left-0 p-3">
        <SearchInput
          query={query}
          setQuery={(val) => setQuery(val)}
          handleClick={() => handleActiveTab("Home")}
        />
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
