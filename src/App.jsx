import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import AllMovieLists from "./sections/movieLists";
import { ActiveTabProvider, MovieProvider } from "./context/AppContext";
import { useContext } from "react";
import MovieDetailsModal from "./components/MovieDetails";
import AllSections from "./sections/AllSections";

function App() {
  return (
    <div className="font-sans w-full">
      <ActiveTabProvider>
        <MovieProvider>
          <Header />
          <HeroBanner />
          <MovieDetailsModal />
          <AllSections/>
          <NavBar />
        </MovieProvider>
      </ActiveTabProvider>
    </div>
  );
}

export default App;
