<script>
export default {
  props: {
    show: Object,
  },

  methods: {
    changeTextFlag(text) {
      let flag;
      switch (text) {
        case "ja":
          flag = "https://flagsapi.com/JP/flat/64.png";
          break;
        case "fr":
          flag = "https://flagsapi.com/FR/flat/64.png";
          break;
        case "it":
          flag = "https://flagsapi.com/IT/flat/64.png";
          break;
        case "en":
          flag = "https://flagsapi.com/US/flat/64.png";
          break;
        case "de":
          flag = "https://flagsapi.com/DE/flat/64.png";
          break;
        case "pt":
          flag = "https://flagsapi.com/PT/flat/64.png";
          break;

        default:
          flag = "";
      }
      return flag;
    },
  },
};
</script>

<template>
  <div class="p-3">
    <ul>
      <li><b class="me-2">Title:</b>{{ show.title }}</li>
      <li><b class="me-2">Original Title:</b>{{ show.originalTitle }}</li>
      <li>
        <b class="me-2">Original Language:</b>
        <img
          v-if="changeTextFlag(show.language)"
          :src="changeTextFlag(show.language)"
          alt=""
        />
        <span v-else>{{ show.language }}</span>
      </li>
      <li>
        <b class="me-2">Vote:</b>{{ show.vote.toFixed(0) || "not inserted" }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: lightcyan;
  border-radius: 20px;
  box-shadow: 0px 0px 15px 5px #000000;

  li {
    margin-bottom: 10px;

    img {
      width: 30px;
    }
  }
}
</style>
