<script>
export default {
  data() {},

  props: {
    title: String,
    originalTitle: String,
    originalLanguage: String,
    vote: Number,
  },
};
</script>

<template>
  <div class="p-3">
    <ul>
      <li><b class="me-2">Title:</b>{{ title }}</li>
      <li><b class="me-2">Original Title:</b>{{ originalTitle }}</li>
      <li><b class="me-2">Original Language:</b>{{ originalLanguage }}</li>
      <li><b class="me-2">Vote:</b>{{ vote.toFixed(0) }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: lightcyan;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px #000000;
}
</style>
