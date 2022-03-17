<template>
  <div class="teamsection">
    <!-- Team Section -->
    <div class="container pb-15">
      <h2 class="section-title-Alternative pt-15 my-5">
        <span class="spanContainer px-3">Unser</span> Team
      </h2>
      <h6
        class="subtitleContainer"
      >DU KANNST BEI DEINEM LIEBLINGSFRISEUR JETZT DEINEN TERMIN BUCHEN !</h6>
      <div class="grid">
        <div class="card" v-for="(item,i) in teamMember" :key="i">
          <div class="card_img">
            <img :src="item.image" alt />
          </div>
          <div class="card_body">
            <h2 class="card_title">{{item.name}}</h2>

            <div class="d-flex cardButtonContainer">
              <h6 class="cardButton px-3 py-3">Termin Buchen</h6>
              <h6 class="cardButton px-3 py-3" @click="dialog=true">Bewerten</h6>
            </div>
            <h6 class="designation">{{item.job}}</h6>

            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>

            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                fill="none"
                d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"
              />
            </svg>
            <!-- <div class="call_btn">
                  <a href="#" class="btn_icon">
                    <i class="fas fa-phone-alt"></i>
                    <span class="circle"></span>
                  </a>
            </div>-->
          </div>
        </div>
      </div>

      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-title class="text-h6 lighten-2">Gib deine Bewertung ab</v-card-title>

          <v-card-text class="py-10">
            <v-text-field label="Name"></v-text-field>
            <v-text-field label="Bewertung"></v-text-field>
            <star-rating class="pt-5" @rating-selected="setRating"></star-rating>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">Fertig</v-btn>
            <v-btn color="primary" text @click="dialog = false">Abbrechen</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- Team Ende -->
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: {
    StarRating
  },

  computed: {
    teamMember() {
      return this.$store.state.shop.teamMember.maleBarber;
    }
  },

  methods: {
    setRating: function(rating) {
      this.rating = rating;
    }
  },
  data() {
    return {
      rating: 0,
      dialog: false
    };
  }
};
</script>


<style lang="scss" scoped >
@import "@/assets/scss/maleBarber.scss";

.teamsection {
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
  color: white;
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
  color: $primary-accent-color;
  position: relative;
  line-height: 1.2em;
  display: flex;
  justify-content: center;
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
.spanContainer {
  color: $primary-accent-color;
}

.subtitleContainer {
  text-align: center;
  padding-bottom: 30px;
  font-size: 20px;
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
  max-width: 1220px;
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
  background: linear-gradient(
    171.38deg,
    $secondary-background-color 3.36%,
    $secondary-background-color 95.69%
  );
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
  border-radius: 3px;
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
  color: #eee;
  font-size: 32px;
  padding-bottom: 15px;
}

.designation {
  font-weight: 700;
  font-size: 22px;
  color: $primary-accent-color;
  padding-top: 10px;
  padding-bottom: 10px;
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
.cardButton {
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
  color: $primary-accent-color;
  cursor: pointer;
}
.cardButtonContainer {
  display: flex;
  justify-content: center;
}
</style>
