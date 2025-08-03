const ApiKey = import.meta.env.VITE_TMDB_API_KEY;

export default async function fetchMovies(categories = "popular", pages = 1) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${categories}?api_key=${ApiKey}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
