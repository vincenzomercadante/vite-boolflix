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
      films: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  computed: {
    apiRequestMovies() {
      return `${store.apiUri}${apiKey}`;
    },
  },

  props: {},

  methods: {
    sendSearch() {
      axios
        .get(
          `${store.apiUri}${store.apiMovie}${store.apiKey}&query=${store.textSearched}`
        )
        .then((res) => {
          this.films = res.data.results;
        });
    },
  },
};
</script>

<template>
  <AppHeader @search-button-clicked="sendSearch" />
  <AppMain :films="films" />
</template>

<style lang="scss">
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
