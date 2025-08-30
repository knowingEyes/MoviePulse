import { WatchedMovieProvider } from "./context/AppContext";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import SearchForMovies from "./sections/SearchMovies";
import WatchList from "./sections/WatchLists";
import { AppLayout } from "./components/AppLayout";
import MovieDetailsModal from "./components/MovieDetails";

function App() {
  return (
    <div className="font-sans w-full">
      <WatchedMovieProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="homepage" replace />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="watchlists" element={<WatchList />} />
          </Route>
          <Route path="searchmovies" element={<SearchForMovies />} />
          <Route path="movie/:id" element={<MovieDetailsModal />} />
        </Routes>
      </WatchedMovieProvider>
    </div>
  );
}

export default App;
