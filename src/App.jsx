import NavBar from "./NavBar";
import HeroBanner from "./HeroBanner";
import Header from "./components/AppHeader";

function App() {
  return (
    <div className="bg-[#121212] h-screen">
      <Header />
      <HeroBanner />
      <NavBar />
    </div>
  );
}

export default App;
