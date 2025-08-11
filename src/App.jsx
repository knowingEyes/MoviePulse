import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import {
  ActiveTabProvider,
  MovieProvider,
  WatchedMovieProvider,
} from "./context/AppContext";

import MovieDetailsModal from "./components/MovieDetails";
import AllSections from "./sections/AllSections";
import LoaderSkelenton from "./components/Loader";
function App() {
  return (
    <div className="font-sans w-full">
      <LoaderSkelenton />
      {/* <WatchedMovieProvider>
        <ActiveTabProvider>
          <MovieProvider>
            <Header />
            <HeroBanner />
            <MovieDetailsModal />
            <AllSections />
            <NavBar />
          </MovieProvider>
        </ActiveTabProvider>
      </WatchedMovieProvider> */}
    </div>
  );
}

export default App;
