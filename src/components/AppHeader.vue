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
    <nav class="d-flex">
      <AppSearch @search-button-clicked="handleQuery" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 100px;
  background-color: #333;
}
</style>
