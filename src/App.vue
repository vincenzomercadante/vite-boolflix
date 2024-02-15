<script>
// import axios
import axios from "axios";

// import store file
import { store } from "./store/store.js";

// import components
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  data() {
    return {
      store,
      movies: [],
      tvSeries: [],
      shows: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  props: {},

  methods: {
    fetchMovies() {
      axios
        .get(
          // `${store.apiUri}${store.apiMovie}${store.apiKey}&query=${store.textSearched}`
          `${store.api.apiUri}${store.api.apiMovie}`,
          {
            params: {
              api_key: store.api.apiKey,
              query: store.textSearched,
            },
          }
        )
        .then((res) => {
          this.movies = res.data.results.map((movie) => {
            return {
              title: movie.title,
              originalTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
            };
          });
        });
    },

    fetchTvSeries() {
      axios
        .get(
          // `${store.apiUri}${store.apiMovie}${store.apiKey}&query=${store.textSearched}`
          `${store.api.apiUri}${store.api.apiTvSeries}`,
          {
            params: {
              api_key: store.api.apiKey,
              query: store.textSearched,
            },
          }
        )
        .then((res) => {
          this.tvSeries = res.data.results.map((movie) => {
            return {
              title: movie.name,
              originalTitle: movie.original_name,
              language: movie.original_language,
              vote: movie.vote_average,
            };
          });
        });
    },

    searchResults() {
      this.fetchMovies();
      this.fetchTvSeries();
    },
  },
};
</script>

<template>
  <AppHeader @search-button-clicked="searchResults" />
  <AppMain :films="movies" :series="tvSeries" />
</template>

<style lang="scss">
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
