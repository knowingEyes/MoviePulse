import { UseActiveTab } from "../context/AppContext";
import AllMovieLists from "./movieLists";
import SearchForMovies from "./SearchMovies";

function AllSections() {
  const { activeTab } = UseActiveTab();
  return (
    <>
      {activeTab === "Home" && <AllMovieLists key={activeTab} />}
      {activeTab === "Search" && <SearchForMovies />}
      {activeTab === "Watchlist" && (
        <p key={activeTab} className="text-3xl font bold text-center mt-10">
          currently working watchlist!! stay tuned!
        </p>
      )}
    </>
  );
}

export default AllSections;
