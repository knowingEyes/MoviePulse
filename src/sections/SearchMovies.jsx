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
  useEffect(
    function () {
      async function getSearchedMovies() {
        if (query.length <= 3) return;
        const { results } = await searchForMovies(query);
        setSearchResults(results);
      }
      getSearchedMovies();
    },
    [query]
  );
  return (
    <div className="relative z-50 bg-[#0e0e0e] text-white overflow-y-scroll p-3 w-full">
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
