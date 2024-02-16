<script>
import { store } from "../store/store";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    show: Object,
  },

  methods: {
    getPath() {
      return store.showPoster + this.show.imgPath;
    },

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

    getVoted(vote) {
      if (
        parseFloat((vote / 2).toFixed(1)) >=
        parseFloat((vote / 2).toFixed(0)) + 0.5
      ) {
        vote = Math.ceil(vote / 2);
      } else {
        vote = Math.round(vote / 2);
      }
      return vote;
    },
  },
};
</script>

<template>
  <div class="movie-card">
    <div class="movie-image">
      <img :src="getPath()" alt="show image" />
    </div>
    <div class="movie-info">
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
          <b class="me-2">Vote:</b>
          <font-awesome-icon
            v-for="i in 5"
            :icon="
              i <= getVoted(show.vote)
                ? 'fa-solid fa-star'
                : 'fa-regular fa-star'
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  height: 468px;
  position: relative;

  .movie-image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .movie-info {
    display: none;
    padding: 2rem 1rem;
    height: 100%;
    background-color: rgba($color: #111, $alpha: 0.6);
    color: white;
  }

  &:hover .movie-image {
    display: none;
  }
  &:hover .movie-info {
    display: block;
  }
}
</style>
