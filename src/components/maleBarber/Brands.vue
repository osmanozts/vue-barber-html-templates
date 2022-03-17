<template>
  <div :class="{'brandsBG': windowWidth>960, 'brandsBGHandy': windowWidth<960}">
    <horizontal-scroll class="horizontal-scroll">
      <div class="outer">
        <v-img
          v-for="(item,i) in brands"
          :key="i"
          :class="{'inner-content': windowWidth>960, 'inner-contentHandy': windowWidth<960}"
          :lazy-src="item.image"
          max-height="100"
          max-width="150"
          :src="item.image"
        ></v-img>
      </div>
    </horizontal-scroll>

    <!-- <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar"></div>
        </div>

        <div class="splide__autoplay">
          <button class="splide__play">Play</button>
          <button class="splide__pause">Pause</button>
        </div>
    </template>-->
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  components: {
    HorizontalScroll
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      brands: [
        {
          image:
            "https://www.henkel.com/resource/image/214622/1x1/670/670/6aac5b37116440b0eb2c8b883ea367f4/Vr/schwarzkopf-corporate.png"
        },
        {
          image:
            "https://www.klarna.com/assets/sites/2/2020/05/29150448/Sephora.png"
        },
        {
          image:
            "https://i0.wp.com/beautybusinessjournal.com/wp-content/uploads/2020/12/MAC-logo-added-canvas-3.png"
        },
        {
          image:
            "https://www.facapackaging.com/wp-content/uploads/2021/07/sus-icon-1.png"
        }
      ]
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
$color: #20b2aa;

.brandsBG {
  height: 50vh;
  width: auto;
  background: linear-gradient(rgba(60, 60, 60, 0.26), rgba(111, 111, 111, 0.1)),
    url("https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.brandsBGHandy {
  height: 25vh;
  width: 100%;
  background: linear-gradient(
      rgba(196, 196, 196, 0.46),
      rgba(220, 220, 220, 0.3)
    ),
    url("https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.horizontal-scroll {
  overflow-y: scroll;
  overflow: hidden;
}

.inner-content {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: calc(100% - 40px);
  /* border: solid 1px #2c3e50; */
  border-radius: 5px;
}
.inner-content:not(:first-of-type) {
  margin-left: 100px;
}
.inner-contentHandy {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 105px;
  height: calc(100% - 60px);
  /* border: solid 1px #2c3e50; */
  border-radius: 5px;
}
.inner-contentHandy:not(:first-of-type) {
  margin-left: 40px;
}

.outer {
  display: flex;
  flex: 1;
  width: auto;
  height: 100%;
  padding: 0 20px;
  flex-flow: row nowrap;
  align-items: center;
}
.brandRow {
}
</style>