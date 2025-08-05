import PopularMovies from "./core/Popular";
import TopRatedMovies from "./core/TopRated";
import TrendingMovies from "./core/Trending";
import UpcomingMovies from "./core/Upcoming";
import AnimatedMovies from "./genre/Animated";
import RomanceMovies from "./genre/Romance";
import ThrillerMovies from "./genre/Thriller";
import ComedyMovies from "./genre/Comedy";
import ActionMovies from "./genre/Action";

function AllMovieLists() {

  return (
    <section className="bg-[#141414] p-4 pb-7">
      <TrendingMovies />
      <AnimatedMovies />
      <UpcomingMovies />
      <TopRatedMovies />
      <RomanceMovies />
      <PopularMovies />
      <ThrillerMovies />
      <ComedyMovies />
      <ActionMovies />
    </section>
  );
}
export default AllMovieLists

