export const API_KEY = "91d50113d9780c43604b87bae4d5a5e3";

export const requests = {
  trending: `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  genre: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US`,
  discover: `https://api.themoviedb.org/3/movie/`,
  search: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1`,
};
