import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import AllMovieLists from "./sections/movieLists";
import {
  MovieProvider,
} from "./context/AppContext";
import { useContext } from "react";
import MovieDetailsModal from "./components/MovieDetails";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <MovieProvider>
        <Header />
        <HeroBanner />
        <MovieDetailsModal/>
        <AllMovieLists />
        <NavBar />
      </MovieProvider>
    </div>
  );
}

export default App;
