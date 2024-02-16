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
      const posterPath = this.show.imgPath
        ? store.showPoster + this.show.imgPath
        : "https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFound.jpg";
      return posterPath;
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
    <div class="card-content">
      <div class="card-front">
        <img :src="getPath()" alt="show image" />
      </div>
      <div class="card-back">
        <ul>
          <li><span class="info-title">Title:</span>{{ show.title }}</li>
          <li>
            <span class="info-title">Original Title:</span
            >{{ show.originalTitle }}
          </li>
          <li>
            <span class="info-title">Original Language: </span>
            <img
              v-if="changeTextFlag(show.language)"
              :src="changeTextFlag(show.language)"
              alt=""
            />

            <span v-else>{{ show.language }}</span>
          </li>
          <li>
            <span class="info-title">Vote:</span>
            <font-awesome-icon
              v-for="i in 5"
              :icon="
                i <= getVoted(show.vote)
                  ? 'fa-solid fa-star'
                  : 'fa-regular fa-star'
              "
              class="vote-icon"
            />
          </li>
          <li>
            <span class="info-title">Overview:</span>
            <p class="overview">
              {{ show.overview }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie-card {
  height: 468px;
  perspective: 1000px;

  .card-content {
    position: relative;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .card-front {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .card-back {
    padding: 1rem;
    background-color: rgba($color: #111, $alpha: 1);
    color: white;
    overflow: auto;
    transform: rotateY(180deg);

    ul {
      list-style: none;
      padding: 0;
      li {
        margin-bottom: 12px;
        text-align: center;
        .info-title {
          display: inline-block;
          font-weight: bold;
          margin-right: 12px;
          text-transform: uppercase;
        }

        img {
          width: 24px;
        }

        .vote-icon {
          color: goldenrod;
        }
      }
    }
  }

  .card-back,
  .card-front {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    backface-visibility: hidden;
  }

  &:hover .card-content {
    transform: rotateY(180deg);
  }
}
</style>
