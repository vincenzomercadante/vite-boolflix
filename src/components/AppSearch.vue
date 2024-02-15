<script>
// import store file
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
      textSearched: "",
    };
  },
  props: {},

  emits: ["search-button-clicked"],
};
</script>

<template>
  <div class="d-flex">
    <input
      type="text"
      name=""
      id=""
      class="form-control"
      placeholder="Find here your films!"
      v-model="textSearched"
    />
    <button
      class="btn btn-primary ms-3"
      @click="$emit('search-button-clicked', textSearched)"
    >
      Search
    </button>
  </div>
</template>

<style lang="scss" scoped>
input {
  min-width: 400px;
}
</style>
