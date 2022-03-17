<template>
  <div>
    <v-app id="ourSaloon">
      <navbar />

      <v-main>
        <h2 class="section-title-Alternative pt-15 my-10">
          <span class="spanContainer px-3">Unser</span> Salon
        </h2>
        <!-- AboutUs Section -->
        <AboutUs class="pb-15" />
        <Team />
        <Gallery id="gallery" />
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
import Navbar from "../../components/femaleBarber/Navbar";
import AboutUs from "../../components/femaleBarber/AboutUs";
import Team from "../../components/femaleBarber/Team";
import Gallery from "../../components/femaleBarber/Gallery";
import Footer from "../../components/femaleBarber/Footer";
import Contact from "../../components/femaleBarber/Contact";

export default {
  components: {
    Navbar,
    Gallery,
    Footer,
    AboutUs,
    Team,
    Contact
  },
  mounted() {
    setTimeout(() => {
      this.goto("gallery");
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/femaleBarber.scss";

#ourSaloon {
  background-color: $primary-background-color;
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #e2e6eb;
  font-family: "Montserrat", sans-serif;
  width: 100%;
  min-height: 100vh;
  color: #1b1c34;
  display: flex;
  align-items: center;
}

.container {
  max-width: 1320px;
  padding: 0 2rem;
  margin: 0 auto;
  /* height: 100%; */
}

.grid {
  display: grid;
  grid-template-columns: 30% 30% 30%;
  gap: 5%;
  margin: 5% 0;
}

.card {
  overflow: hidden;
  padding: 20px 20px 0px 20px;
  background: linear-gradient(171.38deg, #2c2c2c 3.36%, #2c2c2c 95.69%);
  box-shadow: 0px 0px 20px rgba(227, 235, 246, 0.15);
  border-radius: 3px;
  text-align: center;
}

.card_img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.card_img img {
  width: 100%;
  height: auto;
  max-height: 350px;
  border-radius: 20px;
  /* Position and center the image to scale nicely on all screens */
  object-fit: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.card_body {
  padding: 26px 10px 36px 10px;
}

.card_title {
  font-weight: 800;
  text-transform: capitalize;
  color: black;
  font-size: 32px;
  padding-bottom: 15px;
}

.designation {
  font-weight: 700;
  font-size: 22px;
  color: #959eaf;
}

.call_btn {
  margin: 140px 0 40px;
  position: relative;
  display: inline-block;
  z-index: 99;
}

.btn_icon i {
  position: relative;
  font-size: 22px;
  color: #1f83fe;
  transition: all 0.3s ease-in-out;
}

.btn_icon i:after {
  content: "";
  position: absolute;
  height: 55px;
  width: 55px;
  background-color: white;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  left: -17px;
  top: -18px;
  z-index: -1;
  transition: all 0.3s ease-in-out;
}

.circle {
  position: absolute;
  background: radial-gradient(
    45.14% 45.14% at 50% 50%,
    #bfdaff 0%,
    #bdd9fd 26.59%,
    #d4e5ff 46.99%,
    #cce0ff 71.36%,
    #a7ccff 100%
  );
  box-shadow: 0px 4px 107px rgba(179, 211, 255, 0.5);
  border-radius: 50%;
  left: -46px;
  top: -46px;
  height: 110px;
  width: 110px;
  display: block;
  z-index: -2;
  transition: all 0.3s ease-in-out;
}

.btn_icon:hover i {
  color: #0050b1;
}

.btn_icon:hover .circle {
  box-shadow: 0px 4px 97px rgba(44, 134, 255, 0.8);
}

.link {
  position: fixed;
  background-color: #d12322;
  padding: 23px 40px;
  right: -110px;
  border-radius: 5px;
  top: 50%;
  transform: translateY(-50%);
  transform: rotate(-90deg);
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.1s ease-in-out;
}

.link i {
  padding-left: 7px;
}

.link:hover {
  text-decoration: underline;
  background-color: black;
}

@media only screen and (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2%;
  }
}

@media only screen and (max-width: 425px) {
  .container {
    padding: 0 1rem;
  }

  .card {
    padding: 12px;
  }

  .card_title {
    font-size: 26px;
  }

  .designation {
    font-size: 18px;
  }

  .call_btn {
    margin: 100px 0 25px;
  }
}

/* SVGS */
/* -----
SVG Icons - svgicons.sparkk.fr
----- */

.svg-icon {
  width: 3em;
  height: 3em;
  margin-top: 20px;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
  fill: $primary-accent-color;
}

.svg-icon circle {
  stroke: $primary-accent-color;
  stroke-width: 1;
}
</style>