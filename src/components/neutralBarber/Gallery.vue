<template>
  <div id="gallery">
    <h6
      :class="{'subtitleContainer container': windowWidth>960,'subtitleContainerHandy pt-15 container': windowWidth<960}"
    >Schau dir unsere Meisterwerke an und lass dich inspirieren. Wir beraten dich gerne!</h6>
    <a
      :class="{'subtitleContainer container pb-5': windowWidth>960,'subtitleContainerHandy pt-0 container': windowWidth<960}"
    >Jetzt Beratungsgespräch vereinbaren</a>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <v-row
      justify="center"
      :class="{'imageRow' : windowWidth>960, 'imageRowHandy' : windowWidth<960}"
    >
      <v-col
        cols="12"
        md="4"
        sm="6"
        xs="12"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        class="ImageContainer"
      >
        <div
          class="galleryImage"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  name: "Gallery",
  components: {
    gallery: VueGallery
  },
  computed: {
    images() {
      return this.$store.state.shop.gallery.neutralBarberImages;
    }
  },
  data: function() {
    return {
      index: null,
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

.subtitleContainer {
  text-align: center;
  padding-bottom: 30px;
  font-size: 25px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: $primary-accent-color;
  position: relative;
  line-height: 1em;
  display: flex;
  justify-content: center;
}
.subtitleContainerHandy {
  text-align: center;
  padding-bottom: 30px;
  font-size: 16px;
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

.galleryImage {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 0px solid #ebebeb;
  margin: 5px 20px;
  border-radius: 3px;
  transition: 0.3s ease-in-out;
}
.galleryImage:hover {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 6px solid $primary-accent-color;
  margin: 5px 20px;
  border-radius: 3px;
  transform: scale(1.15);
  transition: 0.4s ease-in-out;
}

.ImageContainer {
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.imageRow {
  padding: 10px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 80px;
}
.imageRowHandy {
  padding-top: 50px;
}
</style>
