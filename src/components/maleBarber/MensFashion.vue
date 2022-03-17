<template>
  <div class="MensFashionSection" id="MensFashionSection">
    <v-row>
      <v-col cols="12" md="6" sm="12" class="imageContainer">
        <div class="animationContainer">
          <lottie-animation
            ref="anim"
            :animationData="require('../../assets/Lottie/beard.json')"
            :loop="true"
            :autoPlay="true"
            :speed="0.5"
            :class="{'myanimation': windowWidth>960, 'myanimationHandy' : windowWidth<960}"
            :loopDelayMin="4.5"
            :loopDelayMax="5"
          />
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="imageContainer">
        <div :class="{'SectionText': windowWidth>960,'SectionTextHandy': windowWidth<960 }">
          <h2
            :class="{'section-title-Alternative pt-10': windowWidth>960,'section-title-AlternativeHandy pt-0': windowWidth<960 }"
          >
            <span class="spanContainer px-3">Wusstest</span> Du ?
          </h2>

          <p
            :class="{'ServiceFilmSubTitle pt-1': windowWidth>960,'ServiceFilmSubTitleHandy pt-1': windowWidth<960 }"
          >
            <v-icon class="px-5" color="#968860" large>mdi-timer-sand</v-icon>
            <span class="spanContainer">3.350 Stunden</span>
            verbringt ein Mann im Leben mit dem Rasieren.
          </p>
          <p
            :class="{'ServiceFilmSubTitle pt-5': windowWidth>960,'ServiceFilmSubTitleHandy pt-5': windowWidth<960 }"
          >
            <v-icon class="px-5" color="#968860" large>mdi-arrow-split-horizontal</v-icon>
            <span class="spanContainer">240 Zentimeter</span>
            misst der längste lebende Bart.
          </p>
          <p
            :class="{'ServiceFilmSubTitle pt-5': windowWidth>960,'ServiceFilmSubTitleHandy pt-5': windowWidth<960 }"
          >
            <v-icon class="px-5" color="#968860" large>mdi-human-male</v-icon>
            <span class="spanContainer">30.000 Barthaare</span>
            hat durchschnittlich jeder Mann.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
export default {
  components: {
    LottieAnimation
  },
  data() {
    return {
      windowWidth: window.innerWidth
    };
  },

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

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/maleBarber.scss";

.animationContainer {
  background-color: $secondary-background-color;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 0px;
  width: 80%;
  /* border: 3px solid $primary-accent-color; */
}

.myanimation {
  width: 450px;
  height: 350px;
  margin: auto;
}
.myanimationHandy {
  padding-top: 50px;
  margin-top: 20px;
  width: 250px;
  height: 150px;
  margin: auto;
}

.MensFashionSection {
  padding-bottom: 30px;
  background-color: $secondary-background-color;
}

.MensFashionImage {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: url("../../assets/Images/beard.png");
  background-color: transparent;
  /* Set a specific height */
  height: 60vh;
  width: 70%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-right: 0px;
  margin-right: 0px;
  margin-top: 60px;
}
.MensFashionImageHandy {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: url("../../assets/Images/beard.png");
  background-color: transparent;
  /* Set a specific height */
  height: 40vh;
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-right: 0px;
  margin-right: 0px;
}

.SectionText {
  width: 100%;
  height: 70vh;
  background-color: $secondary-background-color;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20px 0px 20px;
}
.SectionTextHandy {
  width: 100%;
  height: 70vh;
  background-color: $secondary-background-color;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 15px 0px 0px;
}

.section-title-Alternative {
  text-align: center;
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: white;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
.section-title-Alternative :before {
  content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: flex;
  justify-content: center;

  position: absolute;
  text-decoration: underline;
  width: 260px;
  overflow: hidden;
  color: $primary-accent-color;
  padding: 15px;
}

.spanContainer {
  color: $primary-accent-color;
  margin-right: 9px;
}

.section-title-AlternativeHandy {
  text-align: center;
  padding-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: white;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
.section-title-AlternativeHandy :before {
  content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: flex;
  justify-content: center;

  position: absolute;
  text-decoration: underline;
  width: 260px;
  overflow: hidden;
  color: $primary-accent-color;
  padding: 15px;
}

.ServiceFilmSubTitle {
  color: $subtitle-color;
  font-size: 18px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 0px 10px 0px 10px;
}
.ServiceFilmSubTitleHandy {
  color: $subtitle-color;
  font-size: 17px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 0px 5px 0px 5px;
}

.imageContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>