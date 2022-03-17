<template>
  <div class="aboutUsSection" id="aboutUsSection">
    <v-row>
      <v-col cols="12" md="6" sm="12" class="columnContainer">
        <div class="aboutUsImage"></div>
      </v-col>
      <v-col cols="12" md="6" sm="12" class="columnContainer">
        <div class="aboutUsText">
          <h2
            :class="{'section-title-Alternative pt-10': windowWidth>960,'section-title-AlternativeHandy pt-8': windowWidth<960 }"
          >
            <span class="spanContainer px-3">Herzlich</span> Wilkommen
          </h2>
          <p
            :class="{'ServiceFilmSubTitle pt-1': windowWidth>960,'ServiceFilmSubTitleHandy pt-1': windowWidth<960 }"
          >Wir sind das Team X ! Auf mehr als X qm bieten wir dir in einer modernen und hygienischem Ambiente stunden der Verwöhnung. Seit mehr als X Jahren stehen wir für Qualität.</p>
          <p
            :class="{'ServiceFilmSubTitle pt-5': windowWidth>960,'ServiceFilmSubTitleHandy pt-5': windowWidth<960 }"
          >Wir lieben das WOW unserer Kundinnen ! Jedes Haar wird mit großer Sorgfalt, Liebe und mit besonderem Handwerk geschnitten. Gerne beraten wir dich ! DU bist einzigartig und brauchst daher auch eine typgerechte & individuelle Beratung.</p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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
@import "@/assets/scss/femaleBarber.scss";
.aboutUsSection {
  padding-bottom: 30px;
}

.columnContainer {
  padding: 0px;
}

.aboutUsImage {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.05)),
    url("https://images.pexels.com/photos/8140917/pexels-photo-8140917.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");

  /* Set a specific height */
  height: 60vh;
  width: 100%;
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding-right: 0px;
  margin-right: 0px;
}

.aboutUsText {
  width: 100%;
  height: 60vh;
  background-color: $secondary-background-color;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  color: black;
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
  color: black;
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
  font-size: 15px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 0px 30px 0px 30px;
}
.ServiceFilmSubTitleHandy {
  color: $subtitle-color;
  font-size: 15px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding: 0px 12px 0px 12px;
}
</style>