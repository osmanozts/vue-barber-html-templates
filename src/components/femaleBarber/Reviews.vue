<template>
  <div>
    <div class="reviewSection">
      <h2 class="section-title pt-15">
        <span class="spanContainer">Unsere</span> Kunden
      </h2>

      <splide :options="windowWidth > 500 ? options : optionsHandy" class="splideContainer">
        <splide-slide v-for="(item,i) in reviews " :key="i">
          <div class="reviewContainer mt-15">
            <!-- <v-icon x-large color="#9E49A4" class="mb-7">mdi-chat-processing-outline</v-icon> -->
            <lottie-animation
              ref="anim"
              :animationData="require('../../assets/Lottie/customer.json')"
              :loop="true"
              :autoPlay="true"
              :speed="0.6"
              class="myanimation"
            />
            <p class="reviewSubTitle px-7 pt-1">{{item.review}}</p>
            <p class="reviewAuthor px-7 pt-5">{{item.author}}</p>
          </div>
        </splide-slide>
      </splide>

      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
// import carousel from "vue-owl-carousel";

import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";
// or
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue

export default {
  components: {
    // carousel
    Splide,
    SplideSlide,
    LottieAnimation
  },

  computed: {
    reviews() {
      return this.$store.state.shop.reviews;
    }
  },

  data: () => ({
    windowWidth: window.innerWidth,
    txt: "",
    options: {
      rewind: true,
      perPage: 3,
      gap: "1rem",
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      width: "100%",
      pagination: false
    },
    optionsHandy: {
      rewind: true,
      perPage: 1,
      gap: "1rem",
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      width: "100%",
      pagination: false
    }
  }),

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  },

  watch: {
    windowWidth(newHeight, oldHeight) {
      this.txt = `it changed to ${newHeight} from ${oldHeight}`;
    }
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/scss/femaleBarber.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");

.section-title {
  text-align: center;
  padding-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $primary-accent-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}

.myanimation {
  width: 80px;
  height: 80px;
  margin: auto;
  margin-bottom: 30px;
}

.spanContainer {
  color: black;
  margin-right: 9px;
}

.reviewSection {
  background-color: $primary-background-color;
  width: 100%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 0px;
}

.splideContainer {
  border: 0px solid black;
}

.reviewContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  /* border: 1px solid black; */
}

.reviewSubTitle {
  color: $subtitle-color;
  font-size: 15px;
  text-align: center;
}
.reviewAuthor {
  color: $primary-accent-color;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
}
</style>