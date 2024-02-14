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
      shows: [],
    };
  },

  components: {
    AppHeader,
    AppMain,
  },

  props: {},

  methods: {
    sendSearch() {
      axios
        .get(
          // `${store.apiUri}${store.apiMovie}${store.apiKey}&query=${store.textSearched}`
          `${store.apiUri}${store.apiMulti}`,
          {
            params: {
              api_key: store.apiKey,
              query: store.textSearched,
            },
          }
        )
        .then((res) => {
          const results = res.data.results;
          this.shows = results.filter(
            (result) => result.media_type !== "person"
          );
        });
    },
  },
};
</script>

<template>
  <AppHeader @search-button-clicked="sendSearch" />
  <AppMain :films="shows" />
</template>

<style lang="scss">
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
</style>
