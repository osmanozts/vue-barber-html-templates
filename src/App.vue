<template>
  <div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script>
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import jQuery from "jquery";

// Components

export default {
  name: "App",
  components: {},
  computed: {
    getCategory() {
      return this.$store.state.category;
    }
  },

  data: () => ({
    //
    apiKey: "AIzaSyC8nQ4Jxd93iQ-QAxwRemeDEhRbOuXnu4E",
    windowWidth: window.innerWidth,
    txt: ""
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

    !(function($) {
      "use strict";

      $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
          $(".animationBox").addClass("bounceAnimation");
        } else {
          $(".animationBox").removeClass("bounceAnimation");
        }
      });
    })(jQuery);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss" >
@import "~bootstrap/dist/css/bootstrap.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
@import "@/assets/scss/maleBarber.scss";

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
.spanContainer {
  color: $primary-accent-color;
  margin-bottom: 10px;
}
.carouselContainer {
  border: 1px white solid;
}

section {
  padding: 60px 0;
}

.section-bg {
  background-color: #f8fbfe;
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
  text-decoration: underline;
  width: 290px;
  overflow: hidden;
  color: $primary-accent-color;
  padding: 15px;
  margin-bottom: 20px;
}

/* .section-title h2 {
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #5f5950;
}

.section-title h2::before {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 1px;
  background: #ddd;
  bottom: 1px;
  left: calc(50% - 60px);
} */

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 40px;
  height: 3px;
  background: #ffb03b;
  bottom: 0;
  left: calc(50% - 20px);
}

.section-title h2 span {
  color: #ffb03b;
}

.section-title p {
  margin: 15px auto 0 auto;
  font-weight: 300;
}

@media (min-width: 1024px) {
  .section-title p {
    width: 50%;
  }
}
</style>