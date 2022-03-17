<template>
  <v-app>
    <navbar />

    <v-main>
      <hello-world />
      <Service />
      <Team class="py-15" />
      <Brands />

      <Reviews />
      <Contact />
      <a
        href="#"
        target="_blank"
        :class="{'smartBannerApp white--text':windowWidth>960,'smartBannerAppHandy white--text':windowWidth<960,}"
      >
        Unsere App
        <i class="fas fa-mobile"></i>
      </a>
      <CtabuttonNeutralBarber />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import jQuery from "jquery";

// Components
import Navbar from "../../components/neutralBarber/Navbar";
import HelloWorld from "../../components/neutralBarber/HelloWorld";
import Team from "../../components/neutralBarber/Team";
import Contact from "../../components/neutralBarber/Contact";
import Footer from "../../components/neutralBarber/Footer";
import Brands from "../../components/neutralBarber/Brands";
import Service from "../../components/neutralBarber/Service";
import Reviews from "../../components/neutralBarber/Reviews";
import CtabuttonNeutralBarber from "../../components/neutralBarber/ChatWidget";

export default {
  name: "App",
  components: {
    Navbar,
    HelloWorld,
    Contact,
    Footer,
    Brands,
    Service,
    Reviews,
    Team,
    CtabuttonNeutralBarber
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

<style lang="scss" scoped>
@import "~bootstrap/dist/css/bootstrap.css";
@import "@/assets/scss/neutralBarber.scss";
/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
.spanContainer {
  color: $primary-accent-color;
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
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-family: "Montserrat", sans-serif;
  /* color: #5f5950; */
  color: white;
  position: relative;
  line-height: 1.2em;
}
.section-title :before {
  content: "\a0\a0\a0\a0\a0\a0\a0\a0";
  display: flex;
  justify-content: center;

  position: absolute;
  text-decoration: underline;
  width: 290px;
  overflow: hidden;
  color: $primary-accent-color;
  padding: 15px;
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

/* App SmartbannerApp */
.smartBannerApp {
  position: fixed;
  background-color: $primary-accent-color;
  padding: 16px 40px;
  right: -84px;
  border-radius: 5px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(-90deg);
  font-size: 18px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}

.smartBannerApp i {
  padding-left: 10px;
}

.smartBannerApp:hover {
  right: -74px;
}
.smartBannerAppHandy {
  position: fixed;
  background-color: $primary-accent-color;
  padding: 14px 30px;
  right: -62px;
  border-radius: 5px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(-90deg);
  font-size: 13px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease-in-out;
}

.smartBannerAppHandy i {
  padding-left: 10px;
}

/* .smartBannerAppHandy:hover {
  text-decoration: none;
  background-color: $primary-background-color;
  color: $primary-accent-color;
} */
</style>