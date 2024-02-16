<script>
import { store } from "../store/store";

import AppMovie from "./AppMovie.vue";
import AppLoader from "./AppLoader.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMovie, AppLoader },
};
</script>

<template>
  <main>
    <AppLoader v-if="store.loader.showed" />
    <div v-if="!store.loader.showed" class="app-content">
      <div class="container-fluid mb-4">
        <h2 class="display-3">MOVIES</h2>
        <div class="row g-3">
          <div
            v-for="movie in store.movies"
            class="col-lg-2 col-md-4 col-sm-6 py-2"
          >
            <AppMovie :show="movie" />
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <h2 class="display-3">TV SERIES</h2>
        <div class="row g-3">
          <div
            v-for="serie in store.tvSeries"
            class="col-lg-2 col-md-4 col-sm-6 py-2"
          >
            <AppMovie :show="serie" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  height: calc(100vh - 100px);
  padding: 2rem 0;
  background-color: #333;
  overflow: auto;

  h2 {
    color: white;
    font-weight: bold;
  }
}
</style>
