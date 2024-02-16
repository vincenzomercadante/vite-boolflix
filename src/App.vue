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
              language: "it-IT",
            },
          }
        )
        .then((res) => {
          store.movies = res.data.results.map((movie) => {
            return {
              title: movie.title,
              originalTitle: movie.original_title,
              language: movie.original_language,
              vote: movie.vote_average,
              imgPath: movie.poster_path,
              showedInfo: false,
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
              language: "it-IT",
            },
          }
        )
        .then((res) => {
          console.log("ciao");
          store.tvSeries = res.data.results.map((movie) => {
            return ({
              title,
              originalTitle,
              language,
              vote,
              imgPath,
              showedInfo,
            } = movie);
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
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
