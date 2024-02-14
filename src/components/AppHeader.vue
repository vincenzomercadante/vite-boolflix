<script>
// import components
import AppSearch from "./AppSearch.vue";

export default {
  components: {
    AppSearch,
  },

  emits: ["search-button-clicked"],
};
</script>

<template>
  <header class="p-3">
    <nav class="d-flex">
      <AppSearch @search-button-clicked="$emit('search-button-clicked')" />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 100px;
  background-color: #333;
}
</style>
