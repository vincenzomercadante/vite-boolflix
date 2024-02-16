// import vue reactivity
import { reactive } from "vue";

export const store = reactive({
  textSearched: "",
  api: {
    apiUri: "https://api.themoviedb.org/3/",
    apiMovie: "search/movie",
    apiTvSeries: "search/tv",
    apiKey: "6229f116e19dd017346085b130e65f21",
  },
  showPoster: "https://image.tmdb.org/t/p/w342",

  movies: [],
  tvSeries: [],

  loader: {
    showed: false,
  },
});
