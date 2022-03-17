<template>
  <div>
    <v-app id="ourSaloon">
      <navbar />

      <v-main>
        <h2 class="section-title-Alternative pt-15 my-10">
          <span class="spanContainer px-3">Unsere</span> App
        </h2>
        <div class="aboutUsSection" id="aboutUsSection">
          <v-row>
            <v-col cols="12" md="6" sm="12" class="imageContainer">
              <lottie-animation
                ref="anim"
                :animationData="require('../../assets/Lottie/mobileapp.json')"
                :loop="true"
                :autoPlay="true"
                :speed="0.6"
                class="MobileAppAnimation"
              />
            </v-col>
            <v-col cols="12" md="6" sm="12" class="imageContainer">
              <div class="aboutUsText">
                <h2
                  :class="{'AppAdvertisementTitle pt-10': windowWidth>960,'AppAdvertisementTitleHandy pt-13': windowWidth<960 }"
                >
                  <span class="spanContainer px-3">Deine</span> Vorteile
                </h2>
                <p
                  :class="{'ServiceFilmSubTitle pt-1': windowWidth>960,'ServiceFilmSubTitleHandy pt-2': windowWidth<960 }"
                >Wir sind auch nun mobil für dich erreichbar und bieten dir tolle Angebote über die App an. Lade Dir unsere App im App Store oder Play Store herunter und mache gebrauch von all den Vorteilen die auf dich warten.</p>

                <div class="d-flex storeContainer">
                  <div class="columnInputContainer">
                    <qrcode-vue :value="value" :size="size" level="H" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#0091ea"
                        d="M14.1,42h19.8c4.474,0,8.1-3.627,8.1-8.1V27H6v6.9C6,38.373,9.626,42,14.1,42z"
                      />
                      <rect width="36" height="11" x="6" y="16" fill="#00b0ff" />
                      <path
                        fill="#40c4ff"
                        d="M33.9,6H14.1C9.626,6,6,9.626,6,14.1V16h36v-1.9C42,9.626,38.374,6,33.9,6z"
                      />
                      <path
                        fill="#fff"
                        d="M22.854,18.943l1.738-2.967l-1.598-2.727c-0.418-0.715-1.337-0.954-2.052-0.536	c-0.715,0.418-0.955,1.337-0.536,2.052L22.854,18.943z"
                      />
                      <path
                        fill="#fff"
                        d="M26.786,12.714c-0.716-0.419-1.635-0.179-2.052,0.536L16.09,28h3.477l7.754-13.233	C27.74,14.052,27.5,13.133,26.786,12.714z"
                      />
                      <path
                        fill="#fff"
                        d="M34.521,32.92l-7.611-12.987l-0.763,1.303c-0.444,0.95-0.504,2.024-0.185,3.011l5.972,10.191	c0.279,0.476,0.78,0.741,1.295,0.741c0.257,0,0.519-0.066,0.757-0.206C34.701,34.554,34.94,33.635,34.521,32.92z"
                      />
                      <path
                        fill="#fff"
                        d="M25.473,27.919l-0.171-0.289c-0.148-0.224-0.312-0.434-0.498-0.621H12.3	c-0.829,0-1.5,0.665-1.5,1.484s0.671,1.484,1.5,1.484h13.394C25.888,29.324,25.835,28.595,25.473,27.919z"
                      />
                      <path
                        fill="#fff"
                        d="M16.66,32.961c-0.487-0.556-1.19-0.934-2.03-0.959l-0.004,0c-0.317-0.009-0.628,0.026-0.932,0.087	l-0.487,0.831c-0.419,0.715-0.179,1.634,0.536,2.053c0.238,0.14,0.5,0.206,0.757,0.206c0.515,0,1.017-0.266,1.295-0.741	L16.66,32.961z"
                      />
                      <path
                        fill="#fff"
                        d="M30.196,27.009H35.7c0.829,0,1.5,0.665,1.5,1.484s-0.671,1.484-1.5,1.484h-5.394	C30.112,29.324,30.01,27.196,30.196,27.009z"
                      />
                    </svg>
                  </div>

                  <div class="columnInputContainer">
                    <qrcode-vue :value="value" :size="size" level="H" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      style=" fill:#000000;"
                    >
                      <path
                        fill="#4db6ac"
                        d="M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z"
                      />
                      <path
                        fill="#dce775"
                        d="M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z"
                      />
                      <path
                        fill="#d32f2f"
                        d="M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z"
                      />
                      <path
                        fill="#fbc02d"
                        d="M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z"
                      />
                    </svg>
                  </div>
                </div>

                <!-- <p
                  :class="{'ServiceFilmSubTitle pt-5': windowWidth>960,'ServiceFilmSubTitleHandy pt-5': windowWidth<960 }"
                >
                  Wir lieben das WOW unserer Kundinnen !
                  Jedes Haar wird mit großer Sorgfalt, Liebe und mit besonderem Handwerk geschnitten.
                  Gerne beraten wir dich !
                  DU bist einzigartig und brauchst daher auch eine typgerechte & individuelle Beratung.
                </p>-->
              </div>
            </v-col>
          </v-row>
        </div>
        <h2
          :class="{'section-title-Alternative pt-10': windowWidth>960,'section-title-AlternativeHandy pt-6': windowWidth<960 }"
        >
          <span class="spanContainer px-3">Dich</span> Erwarten
        </h2>
        <v-row class="py-5">
          <v-col cols="12" md="6" sm="12">
            <div>
              <lottie-animation
                ref="anim"
                :animationData="require('../../assets/Lottie/discount.json')"
                :loop="false"
                :autoPlay="true"
                :speed="0.6"
                class="DiscountAnimation"
              />
              <h2
                :class="{'AppAdvertisementTitle pt-10': windowWidth>960,'AppAdvertisementTitleHandy pt-6': windowWidth<960 }"
              >
                <span class="spanContainer px-3">Rabatte</span>
              </h2>
            </div>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <div>
              <lottie-animation
                ref="anim"
                :animationData="require('../../assets/Lottie/congrats.json')"
                :loop="false"
                :autoPlay="true"
                :speed="0.6"
                class="CongratsAnimation"
              />
              <h2
                :class="{'AppAdvertisementTitle pt-10': windowWidth>960,'AppAdvertisementTitleHandy pt-6': windowWidth<960 }"
              >
                <span class="spanContainer px-3">Treuepunkte</span>
              </h2>
            </div>
          </v-col>
        </v-row>

        <Contact />
        <!-- <a href="https://youtu.be/7IoMG_NN7lA" target="_blank" class="link">
          Watch on youtube
          <i class="fab fa-youtube"></i>
        </a>-->
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// Components
import Navbar from "../../components/neutralBarber/NavbarHome";
import Footer from "../../components/neutralBarber/Footer";
import Contact from "../../components/neutralBarber/Contact";
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue
import QrcodeVue from "qrcode.vue"; //import qrCode

export default {
  components: {
    Navbar,
    Footer,
    Contact,
    LottieAnimation,
    QrcodeVue
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      value: "https://example.com",
      size: 50
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
@import "@/assets/scss/neutralBarber.scss";

.storeContainer {
  width: 50%;
  margin: auto;
  /* border: 1px #eee solid; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
}

.columnInputContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px #eee solid; */
  padding: 0px 20px;
}

.aboutUsSection {
  padding-bottom: 30px;
}

.aboutUsText {
  width: 100%;
  height: 60vh;
  background-color: $secondary-background-color;
  padding-left: 0px;
}

.section-title-Alternative {
  text-align: center;
  padding-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $title-color;
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
  color: $title-color;
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

#ourSaloon {
  background-color: $primary-background-color;
}

/* Lottie Animations */

.MobileAppAnimation {
  width: 100%;
  height: 60vh;
  margin: auto;
}

.DiscountAnimation {
  width: 100%;
  height: 40vh;
  margin: auto;
}
.CongratsAnimation {
  width: 100%;
  height: 40vh;
  margin: auto;
}

.spanContainer {
  color: $primary-accent-color;
}

.AppAdvertisementTitle {
  text-align: center;
  padding-bottom: 30px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $title-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
.AppAdvertisementTitleHandy {
  text-align: center;
  padding-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $title-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
</style>