// import vue reactivity
import { reactive } from "vue";

export const store = reactive({
  textSearched: "",
  apiUri: "https://api.themoviedb.org/3/",
  apiMovie: "search/movie?",
  apiKey: "api_key=6229f116e19dd017346085b130e65f21",
});
