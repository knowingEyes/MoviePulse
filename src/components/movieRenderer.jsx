
export default function RenderMovies({ maxLength = 5, moviesResults, title }) {
  // const [onHoverId, setIsHoverId] = useState(574475);
  const baseImdbUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <section className="mb-5">
      <h1 className="text-white font-bold mb-2">{title}</h1>
      <ul className=" flex overflow-auto gap-2">
        {moviesResults.map((result) => (
          <li
            key={result.id}
            className="cursor-pointer relative"
            // onMouseLeave={()=> setIsHoverId(null)}
          >
            <div className="w-[150px] rounded-md overflow-hidden">
              {/* {result?.id === onHoverId && (
                <div className="bg-[#1a1a1a]/40 absolute inset-0 flex items-center justify-center text-center">
                  <p className=" text-white font-extrabold">{result.title}</p>
                </div>
              )} */}
              <div>
                <img
                  src={`${baseImdbUrl}${result.poster_path}`}
                  alt=""
                  className="h-[100%] block hover:scale-[1.13] transition-all duration-300 ease-in-out"
                  // onClick={() =>
                  //   setIsHoverId(onHoverId !== null ?  null : result.id )
                  // }
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
