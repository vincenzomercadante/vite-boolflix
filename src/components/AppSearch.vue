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

  methods: {
    buttonClicked() {
      this.$emit("search-button-clicked", this.textSearched);
      this.textSearched = "";
    },
  },
};
</script>

<template>
  <div class="d-flex align-items-center">
    <div class="input-custom">
      <label for="search-query" class="form-label">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="mx-3" />
      </label>
      <input
        type="text"
        name="query"
        id="search-query"
        class=""
        placeholder="Find here your films!"
        v-model="textSearched"
        @keyup.enter="buttonClicked()"
      />
    </div>
    <button class="btn btn-danger ms-3" @click="buttonClicked()">Search</button>
  </div>
</template>

<style lang="scss" scoped>
div {
  color: white;

  label {
    margin: 0;
  }

  .input-custom {
    border-bottom: 2px solid white;
    padding: 10px 5px;
    margin-right: 20px;
    input {
      background-color: transparent;
      color: white !important;
      border: 0;
    }

    input:focus-visible {
      outline: none;
    }
  }
}
</style>
