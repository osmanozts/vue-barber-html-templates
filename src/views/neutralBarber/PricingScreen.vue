<template>
  <div>
    <v-app id="pricing">
      <navbar />
      <v-main>
        <Pricing />
        <!-- <Contact /> -->
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// Components
import Navbar from "../../components/neutralBarber/NavbarHome";
import Pricing from "../../components/neutralBarber/Pricing";
import Footer from "../../components/neutralBarber/Footer";
// import Contact from "../../components/neutralBarber/Contact";

export default {
  components: {
    Navbar,
    Pricing,
    Footer
    // Contact
  }
};
</script>

<style lang="scss" scoped>
</style>