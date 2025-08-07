import { useEffect, useState } from "react";
import { fetchMoviesByGenry } from "../../api";
import { FaStar } from "react-icons/fa6";
import { useRef } from "react";
// const movieGenreIds = {
//   Action: 28,
//   Adventure: 12,
//   Animation: 16,
//   Comedy: 35,
//   Crime: 80,
//   Documentry: 99,
//   Drama: 18,
//   Family: 10751,
//   Fantasy: 14,
//   History: 36,
//   Horror: 27,
//   Music: 10402,
//   Mystery: 9648,
//   Romance: 10402,
//   "Science Fiction": 878,
//   "TV Movie": 10770,
//   Thriller: 53,
//   War: 10752,
//   Western: 37,
//   "Random page": ,
// };

function MightAlsoLike({ genre }) {
  const [mightLikeMovies, setMightLikeMovies] = useState([]);
  useEffect(function () {
    async function getMightLikeMovies() {
      const mightLike = await fetchMoviesByGenry(
        (genre),
        Math.round(Math.random() + 1 * 50)
      );
      setMightLikeMovies(mightLike.results);
    }
    getMightLikeMovies();
  }, [genre]);
  return (
    <section className="mt-10 text-white">
      <h1 className="font-bold text-lg mb-3">You might also like</h1>
      <ul className="flex flex-col gap-3">
        {mightLikeMovies?.map(
          ({ title, poster_path, runtime, vote_average, release_date, id }) => (
            <li className="flex gap-3 items-center" key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="w-20 rounde-md rounded-md"
              />
              <div>
                <h2 className="text-sm font-bold">{title}</h2>
                <p className="text-xs my-1">{release_date}</p>
                <span>{runtime}</span>{" "}
                <div className="flex items-center gap-1 text-sm ">
                  <FaStar className="text-yellow-400" />
                  <span>{Number(vote_average).toFixed(2)}</span>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </section>
  );
}

export default MightAlsoLike;
