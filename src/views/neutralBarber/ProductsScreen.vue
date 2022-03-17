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
import Navbar from "../../components/neutralBarber/NavbarHome";
import Products from "../../components/neutralBarber/Products";
import Contact from "../../components/neutralBarber/Contact";
import Footer from "../../components/neutralBarber/Footer";

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