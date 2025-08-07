import { UseActiveTab } from "../context/AppContext"
import AllMovieLists from "./movieLists"

function AllSections() {
   const {activeTab} = UseActiveTab()
    return <>{activeTab === "Home" && <AllMovieLists key={activeTab}/>}
    {activeTab === "Search" && <p key={activeTab} className="text-3xl font bold text-center mt-10">currently working on search!! stay tuned!</p>}
    {activeTab === "Watchlist" && <p key={activeTab} className="text-3xl font bold text-center mt-10">currently working watchlist!! stay tuned!</p>}
    </>
}

export default AllSections 