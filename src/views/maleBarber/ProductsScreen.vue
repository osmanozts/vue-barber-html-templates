<template>
  <div>
    <v-app id="pricing">
      <navbar />

      <v-main>
        <Products />
        <Contact />
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>

<script>
// Components
import Navbar from "../../components/maleBarber/Navbar";
import Products from "../../components/maleBarber/Products";
import Contact from "../../components/maleBarber/Contact";
import Footer from "../../components/maleBarber/Footer";

export default {
  components: {
    Navbar,
    Products,
    Contact,
    Footer
  }
};
</script>

<style lang="scss" scoped>
</style>