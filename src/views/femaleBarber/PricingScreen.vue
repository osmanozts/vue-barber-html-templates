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
import Navbar from "../../components/femaleBarber/Navbar";
import Pricing from "../../components/femaleBarber/Pricing";
import Footer from "../../components/femaleBarber/Footer";
// import Contact from "../../components/maleBarber/Contact";

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