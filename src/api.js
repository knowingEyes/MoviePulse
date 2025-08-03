const ApiKey = import.meta.env.VITE_TMDB_API_KEY;

export default async function fetchMovies(
  url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`
) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Fetched failed");
  const data = await res.json();
  return data;
}
