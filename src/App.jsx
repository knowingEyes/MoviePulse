import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";
import AllMovieLists from "./sections/movieLists";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <Header />
      <HeroBanner />
      <AllMovieLists />
      <NavBar />
    </div>
  );
}

export default App;
