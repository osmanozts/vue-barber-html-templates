<template>
  <div id="home" class="hero-image">
    <div class="hero-text">
      <h1
        :class="{'heroTextTitle' : windowWidth > 960 , 'heroTextTitleHandy' : windowWidth < 960 , }"
      >STAY SHARP</h1>

      <!-- <p>Edle Designs und einzigartige Profile die nur von sns vertrieben werden, diese erhalten Sie nur bei uns - nicht bei Mittbewerbern</p> -->

      <v-row
        justify="center"
        :class="{'btnRowContainer': windowWidth>960 , 'btnRowContainerHandy':windowWidth<960}"
      >
        <v-col
          cols="12"
          sm="12"
          md="6"
          xs="12"
          :class="{'btnColumnContainerLeft'  : windowWidth > 960}"
        >
          <div class="d-flex justify-center">
            <a id="btn" href="#">Buche einen Termin</a>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          xs="12"
          :class="{'btnColumnContainerRight' : windowWidth > 960  }"
        >
          <div class="d-flex justify-center">
            <a id="btn" href="#contact" v-smooth-scroll>Kontaktiere Uns</a>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",

  data: () => ({ windowWidth: window.innerWidth }),

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
.heroTextTitle {
  font-size: 75px;
  color: $hero-title-color;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
.heroTextTitleHandy {
  font-size: 45px;
  color: #ffffff;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
/* The hero image */
.btnRowContainer {
  /* border: 10px solid black; */
  margin: auto;
  width: 50%;
}
.btnRowContainerHandy {
  /* border: 10px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 10%;
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
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.76), rgba(0, 0, 0, 0.5)),
    url("https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");

  /* Set a specific height */
  height: 100vh;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;

  width: 80%;
}

#btn {
  /* border: 2px solid #42a5f5; */
  background: $primary-accent-color;
  padding: 5px 10px;
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
  box-shadow: 0px 0px 8px $primary-accent-color;
  text-transform: uppercase;
  text-decoration: none;
  min-width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: $primary-accent-color 1px solid;
  font-weight: bold;
}

#btn:before {
  width: 100%;
  height: 100%;
  content: "";
  margin: auto;
  position: absolute;
  top: -100%;
  left: -100%;
  background: $primary-accent-color;
  transition: ease-in-out 0.5s;
  z-index: -1;
  border-radius: 5px;
}

#btn:hover {
  color: white;
  transform: scale(1.2);
}
#btn:hover:before {
  top: 0;
  left: 0;
} /**
	#btn:hover:after{
			transform: rotateY(90deg);

	}**/
</style>
