<script>
import { store } from "../store/store";

// import components
import AppSearch from "./AppSearch.vue";

export default {
  components: {
    AppSearch,
  },

  emits: ["search-button-clicked"],

  methods: {
    handleQuery(query) {
      store.textSearched = query;
      this.$emit("search-button-clicked");
    },
  },
};
</script>

<template>
  <header class="p-3">
    <nav class="d-flex justify-content-between align-items-center">
      <h1>BOOLFLIX</h1>
      <div>
        <AppSearch @search-button-clicked="handleQuery" />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #111;

  h1 {
    height: 65px;
    color: rgb(177, 35, 35);
    font-weight: bold;
    margin: 0;
  }
}
</style>
