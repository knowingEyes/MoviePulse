import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import {
  ActiveTabProvider,
  SelectedMovieProvider,
  WatchedMovieProvider,
} from "./context/AppContext";

import MovieDetailsModal from "./components/MovieDetails";
import AllSections from "./sections/AllSections";

function App() {
  return (
    <div className="font-sans w-full">
      <WatchedMovieProvider>
        <ActiveTabProvider>
          <SelectedMovieProvider>
            <Header />
            <HeroBanner />
            <MovieDetailsModal />
            <AllSections />
            <NavBar />
          </SelectedMovieProvider>
        </ActiveTabProvider>
      </WatchedMovieProvider>
    </div>
  );
}

export default App;
