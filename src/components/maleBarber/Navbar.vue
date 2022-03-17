<template>
  <nav class="navbar navbar-default navbar-fixed-top fixed-top">
    <div class="container">
      <div class="navbar-header">
        <!-- <a class="navbar-brand" href="#">Test Friseur</a> -->
        <router-link to="/">
          <img src="../../assets/Images/logo.png" class="logoNavbar ml-5 mb-2" alt />
        </router-link>
      </div>
      <v-spacer v-if="windowWidth>960"></v-spacer>
      <div>
        <ul class="nav d-flex navbarListItems" v-if="windowWidth>960">
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/">Home</a>
          </li>
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/UnserSalonA">Unser Salon</a>
          </li>
          <!-- <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#">Produkte</a>
          </li>-->
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/PreiseA">Preise</a>
          </li>
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/ProdukteA">Service</a>
          </li>
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#">Termin Buchen</a>
          </li>
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/BewerbungA">Jobs</a>
          </li>
          <li class="mx-4 navbarLinkContainer">
            <a class="navbarLink" href="#/AppA">App</a>
          </li>
        </ul>
        <ul class="nav navbar-right d-flex" v-else>
          <li class="navbarLinkContainer" v-if="windowWidth<960">
            <NavHamburger />
          </li>
        </ul>
      </div>
      <!-- <v-spacer v-if="windowWidth>960"></v-spacer> -->

      <!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import jQuery from "jquery";
import $ from "jquery";
import NavHamburger from "./NavHamburger";

export default {
  components: { NavHamburger },
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

    $(document).ready(function() {
      // Smooth scroll for the navigation menu and links with .scrollto classes
      var scrolltoOffset = $("#header").outerHeight() - 1;

      // Activate smooth scroll on page load with hash links in the url
      $(document).ready(function() {
        if (window.location.hash) {
          var initial_nav = window.location.hash;
          if ($(initial_nav).length) {
            var scrollto = $(initial_nav).offset().top - scrolltoOffset;
            $("html, body").animate(
              {
                scrollTop: scrollto
              },
              1500,
              "easeInOutExpo"
            );
          }
        }
      });

      // Transition effect for navbar
      // checks if window is scrolled more than 500px, adds/removes solid class
      $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
          $(".navbar").addClass("solid");
        } else {
          $(".navbar").removeClass("solid");
          // $(".navbar").removeClass("navbar-dark bg-dark");
          // $(".navbar").addClass("navbar-light bg-light");
        }
      });
    })(jQuery);
  }
};
</script>

<style lang="scss" scoped>
/*!
* Based on Bootstrap v4.0.0 (https://getbootstrap.com) 
*/
@import url("https://fonts.googleapis.com/css?family=Montserrat:200,400,700");
/*!
 * Bootstrap v4.0.0 (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

@import "@/assets/scss/maleBarber.scss";

.navbarBG {
  color: red;
  background-color: red;
  transition: 1s ease-in-out;
}

.navbarListItems {
  display: flex;
  justify-content: center;
}

.image {
  background-color: #490d40;
  background: url(https://sonorangirl.github.io/Earth-Quotes/img/google-earth-view-South-Iceland3.jpg)
    no-repeat center center;
  background-size: cover;
  height: 570px;
  margin-top: -20px;

  .heading {
    color: white;
    text-align: center;
    padding-top: 200px;
  }

  p {
    text-align: center;
    padding: 20px 60px;

    .btn {
      background-color: transparent;
      color: white;
      border: 1px solid white;
      padding: 10px;
      font-size: 1.2em;

      &:hover {
        color: #c57ed3;
        border-color: #c57ed3;
      }
    }
  }
}

.navbar {
  height: 80px;
  background-color: transparent;
  border: none;
  color: white;
  z-index: 100;
  transition: background-color 1s ease 0s;
}

/* navbar Transparent */
.navbar-default {
  .navbar-brand {
    text-align: center;
    padding-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;

    font-family: "Montserrat", sans-serif;
    /* color: #5f5950; */
    color: white;
    position: relative;
    line-height: 1.2em;
    color: $primary-accent-color;
    transition: color 1s ease 0s;

    /* &:hover {
      color: $primary-accent-color;
      border: 1px solid $primary-accent-color;
    } */
  }

  .navbar-nav {
    display: flex;
    justify-content: center;
    > li {
      > a {
        color: white;
        margin: 10px 5px 5px 5px;
      }
      > a:hover,
      > a:active,
      > a:focus {
        color: #c57ed3;
        border: 1px solid #c57ed3;
      }
      > a:visited {
        color: #c57ed3;
        text-decoration: none;
      }
    } //end li

    > .active {
      > a,
      > a:hover,
      > a:focus {
        background-color: transparent;
        color: #c57ed3;
      }
    }
  } //end .navbar-nav

  //Collapsed styles
  .navbar-toggle {
    border-color: #c57ed3;

    &:hover,
    &:focus {
      background-color: #490d40;
    }

    .icon-bar {
      color: #c57ed3;
      background-color: #c57ed3;
    }
  }

  .navbar-collapse.collapse.in ul {
    background-color: #490d40;
  }
} //end .navbar-default

/* Navbar Non-Transparent */
.navbar.solid {
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 1s ease 0s;
  box-shadow: 0 0 4px grey;

  .navbar-brand {
    text-align: center;
    padding-bottom: 30px;
    font-size: 25px;
    font-weight: bold;
    text-transform: uppercase;

    font-family: "Montserrat", sans-serif;
    /* color: #5f5950; */
    color: white;
    position: relative;
    line-height: 1.2em;
    color: $primary-accent-color;
    transition: color 1s ease 0s;
  }

  .navbar-nav {
    display: flex;
    justify-content: center;
    > li {
      > a {
        color: #c57ed3;
        transition: color 1s ease 0s;
      }
    } //end li
  } //end .navbar-nav
}

.about {
  background-color: #c57ed3;
  color: #490d40;
  height: 600px;
  text-align: center;
  margin-top: -20px;

  h2 {
    padding-top: 220px;
  }
  p {
    padding: 20px 80px;
  }
}

.logoNavbar {
  max-height: 45px;
  cursor: pointer;
}

.navbarLink {
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  transition: 0.35s ease-in-out;
}
.navbarLink:hover {
  text-decoration: none;
  color: $primary-accent-color;
  transition: 0.35s ease-in-out;
}

.dropdownbtn {
  background-color: rgba(0, 0, 0, 0.00005);
  color: black;
}
/* *********** /ROO ADDED CONTENT ***********  */
</style>