import { useState } from "react";
import SearchInput from "../components/SearchInput";
import { useActiveTabContext } from "../hooks/useActiveTabContext";
import RecommendedMovies from "./core/Recommeded";
import TodayPicksMovies from "./core/TodaysPicks";
import { useEffect } from "react";
import { searchForMovies } from "../api";
import RenderMovies from "../components/movieRenderer";

function SearchForMovies() {
  const [query, setQuery] = useState("");
  const { handleActiveTab } = useActiveTabContext();
  const [searchResults, setSearchResults] = useState([]);
  const controller = new AbortController();
  const { signal } = controller;
  const [isloading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function getSearchedMovies() {
        if (query.length <= 3) return;
        // setIsLoading(true);
        const { results } = await searchForMovies(query, signal);
        setSearchResults(results);
        console.log(results)
        // setIsLoading(false);
      }
      getSearchedMovies();

      return () => controller.abort();
    },
    [query]
  );

  return (
    <div className="fixed z-50 bg-[#080808] text-white overflow-y-scroll p-3 w-full inset-0">
      <header>
        <SearchInput
          query={query}
          setQuery={(val) => setQuery(val)}
          handleClick={() => handleActiveTab("Home")}
        />
      </header>

      <div className="pt-20">
        {query.length < 3 ? (
          <>
            <TodayPicksMovies />
            <RecommendedMovies />
          </>
        ) : isloading ? (
          <p className="text-center text-md mt-5">loading...</p>
        ) : (
          <RenderMovies
            moviesResults={searchResults}
            title="Top matches"
            wrap="flex-wrap justify-center"
          />
        )}
      </div>
    </div>
  );
}

export default SearchForMovies;
