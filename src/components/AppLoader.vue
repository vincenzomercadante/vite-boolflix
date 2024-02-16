<script>
export default {};
</script>

<template>
  <div class="app-loader">
    <h2 class="display-1">boolflix</h2>
    <font-awesome-icon icon="fa-solid fa-spinner" spin class="spinner" />
  </div>
</template>

<style lang="scss" scoped>
.app-loader {
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  background-color: #333;

  h2 {
    color: #b12323;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .spinner {
    color: #b12323;
    font-size: 3rem;
  }
}
</style>
