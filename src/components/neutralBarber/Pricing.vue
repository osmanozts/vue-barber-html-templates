<template>
  <div class="pricingSection">
    <section id="menu-list" class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center marb-35">
            <h2 class="section-title-Alternative pt-0 my-10">
              <span class="spanContainer px-3">Unsere</span> Preise
            </h2>
          </div>

          <div class="menuContainer">
            <div class="col-md-12 text-center" id="menu-filters">
              <ul>
                <v-row justify="center" class="categoryRow">
                  <v-col cols="12" md="2" sm="4" xs="4">
                    <li>
                      <a class="filter active" data-filter=".menu-restaurant">Alle Preise</a>
                    </li>
                  </v-col>
                  <v-col cols="12" md="2" sm="6" xs="6">
                    <li>
                      <a class="filter" data-filter=".herren">Herren</a>
                    </li>
                  </v-col>
                  <v-col cols="12" md="2" sm="6" xs="6">
                    <li>
                      <a class="filter" data-filter=".damen">Damen</a>
                    </li>
                  </v-col>
                  <v-col cols="12" md="2" sm="6" xs="6">
                    <li>
                      <a class="filter" data-filter=".kinder">Kinder</a>
                    </li>
                  </v-col>
                  <!-- <v-col cols="12" md="2" sm="6" xs="6">
                    <li>
                      <a class="filter" data-filter=".damen">damen</a>
                    </li>
                  </v-col>
                  <v-col cols="12" md="2" sm="6" xs="6">
                    <li>
                      <a class="filter" data-filter=".kinder">kinder</a>
                    </li>
                  </v-col>-->
                </v-row>
              </ul>
            </div>

            <div id="menu-wrapper">
              <div class="herren menu-restaurant">
                <span class="clearfix">
                  <a class="menu-title" href="#" data-meal-img=".jpg">Basic Paket</a>
                  <span style="left:166px;right:44px;" class="menu-line"></span>
                  <span class="menu-price">40€</span>
                </span>
                <span
                  class="menu-subtitle"
                >Verwöhnhaarwäsche mit Massage · Haarschnitt · Styling · heiße Gesichtskompresse</span>
              </div>
              <div class="herren menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Premium Paket</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">45€</span>
                </span>
                <span
                  class="menu-subtitle"
                >+ 2. Haarwäsche · Kopfhaut-Ampulle und intensive Kopfmassage</span>
              </div>

              <div class="damen menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Haardesign & Styling</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">65€</span>
                </span>
                <span class="menu-subtitle">Verwöhnhaarwäsche mit Massage · Haarschnitt · Styling</span>
              </div>

              <div class="damen menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Haardesign & Styling</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">40€</span>
                </span>
                <span class="menu-subtitle">Verwöhnhaarwäsche mit Massage · Styling</span>
              </div>
              <div class="damen menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >GHD-Styling</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">ab 55€</span>
                </span>
                <span
                  class="menu-subtitle"
                >Verwöhnhaarwäsche mit Massage · Glätten (Grundpreis variiert nach Haarlänge)</span>
              </div>

              <div class="damen menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Hochstecken</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">ab 80€</span>
                </span>
                <span class="menu-subtitle">nach individuellem Wunsch & Typ</span>
              </div>

              <div class="damen menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Haarverlängerung</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price"></span>
                </span>
                <span class="menu-subtitle">Preis auf Anfrage</span>
              </div>

              <div class="kinder menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Mädchen bis 16 Jahren</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">34€</span>
                </span>
              </div>

              <div class="kinder menu-restaurant">
                <span class="clearfix">
                  <a
                    class="menu-title"
                    href="#"
                    data-meal-img="assets/img/restaurant/rib.jpg"
                  >Junge bis 16 Jahren</a>
                  <span style="left: 166px; right: 44px;" class="menu-line"></span>
                  <span class="menu-price">26€</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import jQuery from "jquery";

export default {
  mounted() {
    (function($) {
      // Menu filter
      $("#menu-filters li a").click(function() {
        $("#menu-filters li a").removeClass("active");
        $(this).addClass("active");

        var selectedFilter = $(this).data("filter");
        //  $("#menu-wrapper").fadeTo(100, 0);

        $(".menu-restaurant").fadeOut();

        setTimeout(function() {
          $(selectedFilter).slideDown();
          //$("#menu-wrapper").fadeTo(300, 1);
        }, 300);
      });
    })(jQuery);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/neutralBarber.scss";
.categoryRow {
  /* border: #eee solid 1px; */
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
}

.menuContainer {
  background-color: $secondary-background-color;
  padding-top: 30px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0px 0px 20px rgba(227, 235, 246, 0.15);
}
html iframe .header-h {
  font-size: 35px;
  color: $primary-accent-color;
  font-size: 46px;
  font-family: "Satisfy", sans-serif;
  font-weight: 300;
}
.pricingSection {
  height: 100%;
  background-color: $primary-background-color;
}
ul {
  list-style: none;
  background-color: $secondary-background-color;
}
.header-p {
  color: $primary-accent-color;
  font-size: 30px;
}
.section-padding {
  padding: 60px 0px;
}
.marb-35 {
  margin-bottom: 35px;
}
.menu-restaurant {
  width: 50%;
  float: left;
  padding: 15px;
  position: realtive;
  background-color: $secondary-background-color;
}
.menu-restaurant .menu-title {
  float: left;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: $primary-accent-color;
  text-decoration: none;
}
.menu-restaurant .menu-line {
  /* position: absolute;
  bottom: 6px;
  border-bottom: 2px dotted rgba(255, 255, 255, 0.3);
  margin-left: 4.8em;
  margin-right: 0.6em;
  color: #eee; */
}
.menu-restaurant .menu-price {
  font-weight: 600;
  position: absolute;
  right: 0;
  top: 0;
  color: $primary-accent-color;
  text-decoration: none;
}
.menu-restaurant .menu-subtitle {
  display: block;
  float: left;
  color: #b1b1b1;
  font-family: Satisfy, "Open Sans", arial;
  font-size: 1rem;
}
.menu-restaurant span.clearfix {
  position: relative;
  display: block;
}
#menu-filters ul li a {
  background: $secondary-background-color;
  color: $primary-accent-color;
  border: 1px solid $primary-accent-color;
  margin-right: 10px;
}
#menu-filters ul li a.active,
#menu-filters ul li a:hover {
  background: $primary-accent-color;
  color: #fff;
  border: 1px solid $primary-accent-color;
}
#menu-filters ul li {
  display: inline-block;
  color: #fff;
  text-transform: capitalize;
  letter-spacing: 1px;
  margin-botttom: 40px;
}
#menu-filters ul li a {
  padding: 10px 20px;
  font-size: 14px;
  color: #565656;
  border-radius: 0px;
  border: 1px solid #bbbbbb;
  text-decoration: none;
  cursor: pointer;
}
@media (min-width: 20px) and (max-width: 450px) {
  .menu-restaurant {
    width: 100%;
  }
  .header-h {
    font-size: 35px;
  }
  .header-p {
    font-size: 14px;
  }
}

.msg-row {
  margin-top: 56px;
}
.media-body,
.media-left,
.media-right {
  display: table-cell;
  vertical-align: top;
}

.bg-1 {
  background-color: #fecc17;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.bg-14 {
  background-color: #ccdb38;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.dark-blue {
  color: #31364c;
  font-size: 24px;
  margin-top: 0;
}
.light-blue {
  color: #9699a6;
  font-size: 16px;
  margin-bottom: 1px;
}
.media-body {
  margin-left: 10px;
  padding-left: 13px;
}
.media-2 {
  margin-top: 30px;
}
.form-group {
  margin: 8px 0 9px !important;
  padding-bottom: 10px;
}
.contact-form .form-control {
  color: #000 !important;
  font-size: 16px;
  font-weight: normal;
  height: 38px;
  line-height: 1.42857;
  padding: 7px 0;
}
.form-control,
.form-group .form-control {
  border: 0;
  background-image: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#009688),
      to(#009688)
    ),
    -webkit-gradient(linear, left top, left bottom, from(#d2d2d2), to(#d2d2d2));
  background-image: -webkit-linear-gradient(#009688, #009688),
    -webkit-linear-gradient(#d2d2d2, #d2d2d2);
  background-image: -o-linear-gradient(#009688, #009688),
    -o-linear-gradient(#d2d2d2, #d2d2d2);
  background-image: linear-gradient(#009688, #009688),
    linear-gradient(#d2d2d2, #d2d2d2);
  -webkit-background-size: 0 2px, 100% 1px;
  background-size: 0 2px, 100% 1px;
  background-repeat: no-repeat;
  background-position: center bottom, center -webkit-calc(100% - 1px);
  background-position: center bottom, center calc(100% - 1px);
  background-color: rgba(0, 0, 0, 0);
  -webkit-transition: background 0s ease-out;
  -o-transition: background 0s ease-out;
  transition: background 0s ease-out;
  float: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-radius: 0;
}
.contact-form {
  margin: 8px 0 9px !important;
  padding-bottom: 10px;
}
.phone-in-talk,
.hour-icon {
  font-size: 35px;
  line-height: 70px;
  color: rgb(255, 255, 255);
}

.contact-form textarea.form-control {
  color: #000 !important;
  height: auto;
}
.contacts-btn {
  background-color: #ffb03b !important;
  color: #ffffff !important;
  width: 170px;
  height: 54px;
  border-radius: 3px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  text-transform: capitalize;
  border: 0px;
  color: #000 !important;
}

.validation {
  color: red;
  display: none;
  margin: 0 0 20px;
  font-weight: 400;
  font-size: 13px;
}

#sendmessage {
  color: green;
  border: 1px solid green;
  display: none;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#errormessage {
  color: red;
  display: none;
  border: 1px solid red;
  text-align: center;
  padding: 15px;
  font-weight: 600;
  margin-bottom: 15px;
}

#sendmessage.show,
#errormessage.show,
.show {
  display: block;
}
</style>