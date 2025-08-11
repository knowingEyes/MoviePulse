export const ApiKey = import.meta.env.VITE_TMDB_API_KEY;

export async function fetchMoviesByCategory(options) {
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

export async function fetchMoviesTrailer(movieId) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${ApiKey}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchRecommededMovie() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=35,28,53&sort_by=popularity.desc&page=${Math.floor(
        Math.random() * 28 + 1
      )}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function fetchTodayPicks() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}`
    );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function searchForMovies(query, signal) {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${ApiKey}&query=${query}&page=1`, { signal } );
    if (!res.ok) throw new Error("Fetched failed");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}
