const ApiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchMoviesByCategory(options, pages) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${options}?api_key=${ApiKey}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchMoviesByGenry(genre, page) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&page=${page}&api_key=${ApiKey}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchTrendingMovies(page = 2) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${ApiKey}&page=${page}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
