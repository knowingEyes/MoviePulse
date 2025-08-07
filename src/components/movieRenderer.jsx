import { UseSelectedMovie } from "../context/AppContext";
 
export default function RenderMovies({ moviesResults, title }) {
  const { handleSelect, selectedMovieId } = UseSelectedMovie();
   const baseImdbUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <section className="mb-5">
      <h1 className="text-white font-bold mb-2">{title}</h1>
      <ul className=" flex overflow-auto gap-2">
        {moviesResults.map((result) => (
          <li
            key={result.id}
            className="cursor-pointer relative"
            // onMouseEnter={() => handleSelect(result.id)}
            onClick={() => handleSelect(result.id)}
            // onMouseLeave={() => handleSelect(null)}
          >
            <div className="w-[150px] rounded-md overflow-hidden">
              {result?.id === selectedMovieId && (
                <div className="bg-[#1a1a1a]/40 absolute inset-0 flex items-center justify-center text-center z-20">
                  <p className=" text-white font-extrabold">{result.title}</p>
                </div>
              )}
              <div className="overflow-hidden">
                <img
                  src={`${baseImdbUrl}${result.poster_path}`}
                  alt=""
                  className={`block ${
                    result.id && result?.id === selectedMovieId && "scale-[1.1]"
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
