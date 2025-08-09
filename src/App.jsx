import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import AllMovieLists from "./sections/movieLists";
import {
  ActiveTabProvider,
  MovieProvider,
  WatchedMovieProvider,
} from "./context/AppContext";

import MovieDetailsModal from "./components/MovieDetails";
import AllSections from "./sections/AllSections";

function App() {
  return (
    <div className="font-sans w-full">
      <WatchedMovieProvider>
        <ActiveTabProvider>
          <MovieProvider>
            <Header />
            <HeroBanner />
            <MovieDetailsModal />
            <AllSections />
            <NavBar />
          </MovieProvider>
        </ActiveTabProvider>
      </WatchedMovieProvider>
    </div>
  );
}

export default App;
