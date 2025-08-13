import { useActiveTabContext } from "../hooks/useActiveTabContext";
import { FaStar } from "react-icons/fa6";
import { useSelectedMovieContext } from "../hooks/useSelectedMovieContext";

export function RenderMovies({ moviesResults, title, wrap = "" }) {
  const { handleSelect, selectedMovieId } = useSelectedMovieContext();
  const { handleActiveTab } = useActiveTabContext();
  function handleTabSwitchAndSelect(id) {
    handleSelect(id);
    handleActiveTab("Home");
  }
  const baseImdbUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <section className="mb-5">
      <h1 className="text-white font-bold mb-2 text-lg">{title}</h1>
      <ul
        className={`flex ${wrap} gap-2 overflow-x-auto  items-center  [&::-webkit-scrollbar]:bg-transparent relative 
      [&::-webkit-scrollbar-thumb]:bg-[rgba(255,255,255,0.1)] [&::-webkit-scrollbar]:w-[6px]
       [&::-webkit-scrollbar-thumb]:rounded-2xl  [&::-webkit-scrollbar]:h-[7px] pb-1`}
      >
        {(moviesResults ?? []).map(({ poster_path, title, id }) => (
          <li
            key={id}
            className="cursor-pointer relative"
            // onMouseEnter={() => handleSelect(id)}
            onClick={() => handleTabSwitchAndSelect(id)}
            // onMouseLeave={() => handleSelect(null)}
          >
            <div
              className={` min-[321px]:w-[150px] w-[135px] rounded-md overflow-hidden h-56 bg-gradient-to-t from-[#141414]/50 to-transparent`}
            >
              {id === selectedMovieId && (
                <div className="bg-[#1a1a1a]/40 absolute inset-0 flex items-center justify-center text-center z-20">
                  <p className=" text-white font-extrabold">{title}</p>
                </div>
              )}
              <div className="h-full">
                <img
                  loading="lazy"
                  src={`${baseImdbUrl}${poster_path} `}
                  alt=""
                  className={`w-full h-full  object-cover${
                    id && id === selectedMovieId && "scale-[1.1]"
                  } transition-all ease-in-out duration-200 object-cover`}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RenderMoviesVertical({ movies, secTitle }) {
  const { handleSelect } = useSelectedMovieContext();
  const { handleActiveTab } = useActiveTabContext();
  function handleTabSwitchAndSelect(id) {
    handleSelect(id);
    handleActiveTab("Home");
  }
  return (
    <section>
      <h1 className="font-bold text-lg">{secTitle}</h1>
      <ul  className="text-white">
        {(movies ?? []).map(
          ({ poster_path, title, vote_average, release_date, id }) => (
            <li
              key={id}
              onClick={() => handleTabSwitchAndSelect(id)}
              className="flex gap-3 items-center hover:bg-[#121212] rounded-md transition-all ease-in-out cursor-pointer p-2"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt=""
                className="w-20 rounde-md rounded-md"
                loading="lazy"
              />
              <div>
                <h2 className="text-sm font-bold">{title}</h2>
                <p className="text-xs my-1">{release_date}</p>
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

export default RenderMovies;
