<script>
// import components
import AppSearch from "./AppSearch.vue";

export default {
  data() {},

  components: {
    AppSearch,
  },
};
</script>

<template>
  <header class="p-3">
    <nav class="d-flex">
      <AppSearch />
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 100px;
  background-color: #333;
}
</style>
