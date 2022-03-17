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
import Navbar from "../../components/femaleBarber/Navbar";
import Products from "../../components/femaleBarber/Products";
import Contact from "../../components/femaleBarber/Contact";
import Footer from "../../components/femaleBarber/Footer";

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