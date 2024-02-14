<script>
import AppMovie from "./AppMovie.vue";

export default {
  data() {},

  props: {
    films: Array,
  },

  components: { AppMovie },
};
</script>

<template>
  <main class="p-5">
    <div class="container">
      <div class="row g-5">
        <div v-for="film in films" class="col-4">
          <AppMovie
            :title="film.title"
            :originalTitle="film.original_title"
            :originalLanguage="film.original_language"
            :vote="film.vote_average"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
