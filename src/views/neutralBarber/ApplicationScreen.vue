<template>
  <div>
    <v-app id="application">
      <navbar />

      <v-main class="pt-15">
        <div class="applicationContainer mt-15">
          <h2
            :class="{'section-title-Alternative pt-15 my-5 pr-15' : windowWidth>960,'section-title-AlternativeHandy pt-15 my-5' : windowWidth<960 }"
          >
            <v-row>
              <v-col
                cols="12"
                md="6"
                sm="12"
                :class="{'textLeft' : windowWidth > 960, 'textLeftHandy' : windowWidth<960}"
              >
                <span class="spanContainer white--text">Interessiert ?</span>
              </v-col>
              <v-col
                cols="12"
                md="6"
                sm="12"
                :class="{'textRight' : windowWidth > 960, 'textRightHandy' : windowWidth<960}"
              >Bewirb dich JETZT</v-col>
            </v-row>
          </h2>

          <v-row>
            <v-col
              cols="12"
              md="4"
              sm="6"
              xs="12"
              v-for="(item,i) in 3 "
              :key="i"
              class="charts_orb"
            >
              <article class="orb">
                <div class="orb_graphic">
                  <svg>
                    <circle class="fill" />
                    <circle class="progress" />
                  </svg>
                  <div class="orb_value count">
                    <v-icon x-large color="white" class="mt-1">mdi-badge-account-horizontal-outline</v-icon>
                  </div>
                </div>
                <div class="orb_label">Lorem Ipsum</div>
              </article>
            </v-col>
          </v-row>
          <!-- <p
            :class="{'ServiceFilmSubTitle px-15 pt-5' : windowWidth>960,'ServiceFilmSubTitleHandy px-14 pt-5' : windowWidth<960 }"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod.</p>-->

          <v-row justify="center" class="btnRowContainer pt-10">
            <v-col
              cols="12"
              sm="12"
              md="1"
              :class="{'btnColumnContainerLeft'  : windowWidth > 960}"
            >
              <div class="d-flex justify-center">
                <a id="btn" href="#">Schicke eine Bewerbung</a>
              </div>
            </v-col>
            <!-- <v-col
              cols="12"
              sm="12"
              md="6"
              :class="{'btnColumnContainerRight' : windowWidth > 960  }"
            >
              <div class="d-flex justify-center">
                <a id="btn" href="#contact" v-smooth-scroll>Kontaktiere Uns</a>
              </div>
            </v-col>-->
          </v-row>
        </div>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// Components
import Navbar from "../../components/neutralBarber/NavbarHome";
import Footer from "../../components/neutralBarber/Footer";

export default {
  components: {
    Navbar,

    Footer
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
@import "@/assets/scss/neutralBarber.scss";
#application {
  background-color: $primary-background-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.applicationContainer {
  /* height: 65vh; */
  width: 80%;
  padding-top: 10px;
  padding-bottom: 130px;
  margin: auto;

  background-color: $primary-accent-color;
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
  color: $primary-background-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
.section-title-AlternativeHandy {
  text-align: center;
  padding-bottom: 25px;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $primary-background-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
}
.section-title-Alternative :before {
  /* content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: flex;
  justify-content: center;

  position: absolute;
  text-decoration: underline;
  width: 260px;
  overflow: hidden;
  color: white;
  padding: 15px; */
}
.textLeft {
  text-align: right;
}
.textRight {
  text-align: left;
}
.textLeftHandy {
  text-align: center;
}
.textRightHandy {
  text-align: center;
}

.ServiceFilmSubTitle {
  color: $primary-background-color;
  font-size: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  padding-left: 100px;
}
.ServiceFilmSubTitleHandy {
  color: $primary-background-color;
  font-size: 17px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

#btn {
  /* border: 2px solid #42a5f5; */
  padding: 5px 1px;
  color: white;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  transition: all 0.5s;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 0px 0px 8px white;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: white 4px solid;
  font-weight: bold;
  text-align: center;
  color: black;
  background: #eee;
}

#btn:before {
  width: 100%;
  height: 100%;
  content: "";
  margin: auto;
  position: absolute;
  top: -100%;
  left: -100%;
  background: #eee;
  transition: ease-in-out 0.5s;
  z-index: -1;
  border-radius: 0px;
}

#btn:hover {
  /* color: $primary-accent-color; */
  color: black;
  transform: scale(1.2);
}
#btn:hover:before {
  top: 0;
  left: 0;
}

/* The hero image */
.btnRowContainer {
  /* border: 10px solid black; */
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
.btnColumnContainerLeft {
  /* border: 10px solid black; */
  position: relative;
  /* right: -20px; */
}
.btnColumnContainerRight {
  /* border: 10px solid black; */
  position: relative;
  /* left: -20px; */
}

/* orbs */

.charts_orb {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;

  color: white;

  .orb {
    /* padding: 20px; */

    .orb_graphic {
      position: relative;

      .orb_value {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5em;
        font-weight: bold;
        padding-right: 8px;
      }
    } //.orb_graphic

    .orb_label {
      text-transform: uppercase;
      text-align: center;
      margin-top: 1em;
    } //.orb_label
  } //.orb

  svg {
    width: 110px;
    height: 110px;

    circle {
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      stroke-dasharray: 314.16, 314.16;
      stroke-width: 5;
      fill: transparent;
      r: 50;
      cx: 55;
      cy: 55;

      &.fill {
        stroke: #b23850;
      }

      &.progress {
        stroke: $secondary-background-color;
        transition: stroke-dashoffset 0.35s;
        stroke-dashoffset: 214.16;
        -webkit-animation: NAME-YOUR-ANIMATION 1.5s forwards;
        -webkit-animation-timing-function: linear;

        @-webkit-keyframes NAME-YOUR-ANIMATION {
          0% {
            stroke-dashoffset: 314.16;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
      }
    }
  }
}
</style>