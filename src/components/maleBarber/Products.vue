<template>
  <div>
    <div class="serviceSection">
      <h2 class="section-title pt-15">
        <span class="spanContainer">Unser</span> Service
      </h2>
      <!-- <v-container v-if="windowWidth>960"> -->
      <v-row
        justify="center"
        :class="{'productContainer container' : windowWidth > 960,  'productContainer' : windowWidth < 960}"
      >
        <v-col
          cols="12"
          md="4"
          sm="6"
          xs="12"
          class="columnContainer"
          v-for="(item,i) in services"
          :key="i"
          @mouseover="flipTrue(item)"
          @mouseleave="flipFalse(item)"
        >
          <div :class="{serviceBox : windowWidth > 960 ,serviceBoxHandy  :windowWidth<960}">
            <div class="serviceBoxTop" v-if="item.flip==false">
              <a
                href="#"
                :style="{background:'url(' + item.url + ')', backgroundSize: 'cover',position: 'relative',width: '45px',height: '45px',marginLeft: '0px',  }"
                class="icoCut"
              ></a>
              <h4 class="ServiceTitle">{{item.name}}</h4>
            </div>

            <!-- Text Wenn Flip False  -->
            <p
              class="ServiceSubTitle px-7 pt-3"
              v-if="item.flip==false"
            >{{item.text.substring(0,150)}}...</p>

            <!-- Text Wenn Flip True  -->
            <p class="ServiceSubTitle px-7 pt-3" v-if="item.flip==true">{{item.text}}</p>

            <div class="d-flex bookingContainer">
              <!-- <v-icon large color="#968860" class="mt-1" v-if="item.flip==true">mdi-chevron-left</v-icon> -->
              <p
                :class="{'DateSubTitle pt-5 px-2': windowWidth > 960,'DateSubTitleHandy pt-5 px-2': windowWidth < 960}"
              >Termin Buchen</p>
              <p
                :class="{'DateSubTitle pt-5 px-2': windowWidth > 960,'DateSubTitleHandy pt-5 px-2': windowWidth < 960}"
              >Preisliste</p>
              <!-- <v-icon large color="#968860" class="mt-1" v-if="item.flip==false">mdi-chevron-right</v-icon> -->
            </div>
          </div>
        </v-col>
      </v-row>
      <!-- </v-container> -->

      <div class="animationContainer">
        <lottie-animation
          ref="anim"
          :animationData="require('../../assets/Lottie/like.json')"
          :loop="true"
          :autoPlay="true"
          :speed="0.6"
          class="myanimation"
        />
        <p
          :class="{'BottomText px-7 pt-5':windowWidth>960,'BottomTextHandy px-3 pt-5':windowWidth<960 }"
        >Nach deinem Besuch wirst du dein wertvollstes Accouseurs mehr lieben als vorher, versprochen !</p>
      </div>

      <!-- <div id="my-animation"></div> -->

      <!-- <div>
        <lottie-animation
          path="https://assets7.lottiefiles.com/packages/lf20_jtrE7U.json"
          :loop="true"
          :autoPlay="true"
          :loopDelayMin="2.5"
          :loopDelayMax="5"
          :speed="1"
          :width="256"
          :height="256"
          class="animationContainer"
        />
      </div>-->
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue"; // import lottie-web-vue

export default {
  components: {
    LottieAnimation
  },

  computed: {
    services() {
      return this.$store.state.shop.services;
    }
  },

  data: () => ({
    windowWidth: window.innerWidth,
    txt: "",

    options: {
      rewind: true,
      perPage: 3,
      gap: "1rem",
      autoplay: false,
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
    },

    flipTrue(item) {
      setTimeout(function() {
        item.flip = true;
      }, 100);
    },
    flipFalse(item) {
      setTimeout(function() {
        item.flip = false;
      }, 100);
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
@import "@/assets/scss/maleBarber.scss";

.productContainer {
  display: flex;
  justify-content: center;
  margin: auto;
}
.columnContainer {
  display: flex;
  justify-content: center;
  margin: auto;
}
.section-title {
  text-align: center;
  padding-bottom: 30px;
  font-size: 40px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: white;
  position: relative;
  line-height: 1.2em;
}

.section-title :before {
  content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: block;
  position: absolute;
  /* text-decoration: underline; */
  width: 0px;
  overflow: hidden;
  color: $primary-background-color;
  padding: 15px;
  margin-bottom: 20px;
}

.spanContainer {
  color: $primary-accent-color;
  margin-bottom: 10px;
}
.animationContainer {
  background-color: $secondary-background-color;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 35px;
  width: 80%;
  border: 3px solid $primary-accent-color;
}

.myanimation {
  width: 250px;
  height: 150px;
  margin: auto;
}

.BottomText {
  color: white;
  font-size: 35px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  /* border: #8d8d8d 1px solid; */

  padding-bottom: 20px;
  text-align: center;
  margin: auto;
}
.BottomTextHandy {
  color: white;
  font-size: 25px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  /* border: #8d8d8d 1px solid; */
  width: 95%;
  padding-bottom: 20px;
}

$color: #eee;
.splide {
  &__autoplay {
    margin-top: 1em;
    text-align: center;
  }
  &__play,
  &__pause {
    border: none;
    background: $color;
    color: white;
    transition: background-color 0.2s linear;
    cursor: pointer;
    padding: 0.3em 1em;
    border-radius: 2em;
    outline: none;
    &:hover {
      background: darken($color, 20%);
    }
  }
}

.iconContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px white solid; */
}

//Icon
.icoCut {
  width: 100px;
  display: block;
  height: 40px;
  background: $secondary-background-color;
  color: white;
  text-decoration: none;
  padding-left: 20px;
  /* border: 1px white solid; */
  display: flex;
  justify-content: center;

  margin-bottom: 3px;
  margin-left: 10px;
}
.icoCut:before {
  content: "";
  /* background: url("https://image.flaticon.com/icons/png/128/4163/4163601.png"); */
  background-size: cover;
  position: absolute;
  width: 45px;
  height: 45px;
  margin-left: -20px;
}

.serviceSection {
  background-color: $primary-background-color;
  width: 100%;
  /* height: 70vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
  padding-bottom: 50px;
  font-family: "Montserrat", sans-serif;
}

.serviceBox {
  background-color: $secondary-background-color;
  /* margin-top: 100px;
  margin-left: 100px; */
  border-radius: 1px;
  width: 310px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  margin-top: 15px;
  margin-bottom: 20px;
  border: 3px solid $primary-accent-color;
  transition: ease-in-out 0.5s;
  margin: auto;
  padding-top: 20px;
  padding-bottom: 10px;
}
.serviceBox:hover {
  background-color: $secondary-background-color;
  /* margin-top: 100px;
  margin-left: 100px; */
  border-radius: 1px;
  width: 315px;
  height: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  margin-top: 15px;
  margin-bottom: 20px;
  border: 5px solid $primary-accent-color;
  transition: ease-in-out 0.5s;
  margin: auto;
}

.columnContainer:hover {
  .serviceBox {
    transform: rotateY(180deg);
  }
  .serviceBoxHandy {
    transform: rotateY(180deg);
  }

  .ServiceSubTitle {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    -ms-filter: "FlipH";
    filter: FlipH;
  }
  .DateSubTitle {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    -ms-filter: "FlipH";
    filter: FlipH;
  }
  .DateSubTitleHandy {
    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    -ms-filter: "FlipH";
    filter: FlipH;
  }
}

.serviceBoxHandy {
  background-color: $secondary-background-color;
  /* margin-top: 100px;
  margin-left: 100px; */
  border-radius: 3px;
  width: 270px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 0px;
  border: 2px solid $primary-accent-color;
  transition: ease-in-out 0.3s;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.serviceBoxHandy:hover {
  background-color: $secondary-background-color;
  /* margin-top: 100px;
  margin-left: 100px; */
  border-radius: 3px;
  width: 270px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* margin: auto; */
  margin-top: 15px;
  margin-bottom: 20px;
  margin-left: 0px;
  border: 2px solid $primary-accent-color;
  transition: ease-in-out 0.3s;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
}

.serviceBoxTop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ServiceTitle {
  color: $primary-accent-color;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  margin-top: 10px;
  display: flex;
}

.ServiceTitle:hover {
  color: $primary-accent-color;
  text-transform: uppercase;
}

.ServiceSubTitle {
  color: #8d8d8d;
  font-size: 14px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  white-space: break-spaces;
}

.DateSubTitle {
  color: $primary-accent-color;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: ease-in-out 0.3s;
}

.DateSubTitleHandy {
  color: $primary-accent-color;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: ease-in-out 0.3s;
}

.DateSubTitle:hover {
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  transition: ease-in-out 0.3s;
  font-family: "Montserrat", sans-serif;
}

.serviceRow {
  padding-left: 50px;
  width: 100%;
  bottom: #ffffff 10px solid;
}

.serviceBox:hover::after {
  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, 0.5);
}

.bounceAnimation {
  animation: bounce 4s ease-out 0.5s 1 forwards;
}
</style>