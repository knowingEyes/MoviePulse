import { useActiveTabContext } from "../hooks/useActiveTabContext";
import AllMovieLists from "./movieLists";
import SearchForMovies from "./SearchMovies";
import WatchList from "./WatchLists";

function AllSections() {
  const { activeTab } = useActiveTabContext();
  return (
    <>
      {activeTab === "Home" && <AllMovieLists key={activeTab} />}
      {activeTab === "Search" && <SearchForMovies />}
      {activeTab === "Watchlist" && <WatchList />}
    </>
  );
}

export default AllSections;
