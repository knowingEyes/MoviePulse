import { useEffect, useState } from "react";
import { fetchTodayPicks } from "../../api";
import RenderMovies from "../../components/movieRenderer";

 function TodayPicksMovies() {
      const [todayPicksMovies, setTodayPicksMovies] = useState([]);
      useEffect(
        function () {
          async function getTodayPicksMovies() {
            const todaypicks = await fetchTodayPicks()
            setTodayPicksMovies(todaypicks.results);
          }
          getTodayPicksMovies();
        },
        []
      );
  return <RenderMovies title="Today's Picks" moviesResults={todayPicksMovies} />
}

export default TodayPicksMovies