<script>
import { store } from "../store/store";

import AppMovie from "./AppMovie.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMovie },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row g-3">
        <div v-for="movie in store.movies" class="col-3">
          <AppMovie :show="movie" />
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
}
</style>
