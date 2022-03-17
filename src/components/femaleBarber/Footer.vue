<template>
  <footer class="footer">
    <div class="container">
      <div class="row justify-center">
        <div class="footer-col" id="footer-col">
          <h4>Links</h4>
          <ul>
            <!-- <li>
              <a href="#home" v-smooth-scroll>Home</a>
            </li>
            <li>
              <a href="#terassen" v-smooth-scroll>Terassen</a>
            </li>
            <li>
              <a href="#Mapframe" v-smooth-scroll>Kontakt</a>
            </li>-->
            <li>
              <a href="#">Datenschutz</a>
            </li>
            <li>
              <a href="#footer-col" @click="dialog=true">Impressum</a>
            </li>
          </ul>
        </div>

        <!-- <div class="footer-col mx-15">
          <h4>Addresse</h4>
          <ul>
            <li>
              <a href="#">
                Phönixstraße 24,
                <br />45968 Gladbeck
              </a>
            </li>
          </ul>
        </div>-->
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <div class="footer-col">
          <h4>Folge Uns</h4>
          <div class="social-links">
            <!-- <a target="_blank" href="https://www.facebook.com/AluKNG/">
              <i class="fab fa-facebook-f"></i>
            </a>-->
            <a target="_blank" href="https://www.instagram.com/smarthanem/">
              <i class="fab fa-instagram"></i>
            </a>
            <!-- <a target="_blank" href="https://api.whatsapp.com/send?phone=+49 1577 2160132">
              <i class="fab fa-whatsapp"></i>
            </a>-->
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <v-dialog v-model="dialog" width="500">
        <v-card>
          <v-card-text
            class="py-10"
          >Diese Seite ist momentan inaktiv und wird nur zum testen benutzt.</v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">Verstanden</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/scss/femaleBarber.scss";

body {
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1170px;
  margin: auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
ul {
  list-style: none;
}
li {
  text-align: justify;
}
.footer {
  background-color: $primary-background-color;
  padding: 70px 0;
}
.footer-col {
  width: 25%;
  padding: 0 15px;
}
.footer-col h4 {
  font-size: 18px;
  color: $primary-accent-color;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col ul li:not(:last-child) {
  margin-bottom: 10px;
}
.footer-col ul li a {
  font-size: 16px;
  text-transform: capitalize;
  color: $primary-accent-color;
  text-decoration: none;
  font-weight: 300;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover {
  color: $primary-accent-color;
  padding-left: 8px;
}
.footer-col .social-links a {
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: $primary-accent-color;
  transition: all 0.5s ease;
  font-size: 30px;
}
.footer-col .social-links a:hover {
  color: $primary-accent-color;
  /* background-color: rgb(201, 201, 201);  */
  padding-left: 8px;
}

@media (max-width: 767px) {
  .footer-col {
    width: 50%;
    margin-bottom: 30px;
  }
}
@media (max-width: 574px) {
  .footer-col {
    width: 100%;
  }
}
</style>