import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import AllMovieLists from "./sections/movieLists";
import { createContext, useState } from "react";
const MovieLists = createContext()
function App() {

  return (
    <div className="bg-[#121212] h-screen">
      <Header />
      <HeroBanner />
      <MovieLists.Provider>
      <AllMovieLists />
      </MovieLists.Provider>
      <NavBar />
    </div>
  );
}

export default App;
