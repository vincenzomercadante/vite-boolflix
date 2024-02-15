<script>
import AppMovie from "./AppMovie.vue";

export default {
  props: {
    films: Array,
    series: Array,
  },

  components: { AppMovie },
};
</script>

<template>
  <main class="p-5">
    <div class="container">
      <div class="row g-5">
        <div v-for="film in films" class="col-4">
          <AppMovie :show="film" />
        </div>
        <div v-for="serie in series" class="col-4">
          <AppMovie :show="serie" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
