<template>
  <div class="contact py-10" id="contact">
    <h2 class="section-title pt-1">Kontakt</h2>
    <iframe
      class="mb-7"
      id="Mapframe"
      style="border: 0; width: 100%; height: 350px"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.5251255714034!2d6.986874915771869!3d51.55860617964366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8e92b246229c5%3A0x73f0736e811a6bb5!2sPh%C3%B6nixstra%C3%9Fe%2024%2C%2045968%20Gladbeck!5e0!3m2!1sde!2sde!4v1624632521268!5m2!1sde!2sde"
      frameborder="0"
      allowfullscreen
      loading="lazy"
    ></iframe>

    <div class="container infoWrapper pb-15">
      <v-row>
        <v-col cols="12" md="3" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#968860" class="ficon" size="40">mdi-map-marker</v-icon>
            <div>
              <h4 class="title">Adresse:</h4>
              <p class="subTitle">
                Phönxstraße 24,
                <br />45968 Gladbeck
              </p>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon large color="#968860" class="ficon">mdi-clock-time-eight</v-icon>
            <div>
              <h4 class="title mr-5">Öffnungszeiten:</h4>

              <!-- 
              <v-dialog v-model="dialog" max-width="80%">
                <div class="modalA">
                  <h2 class="py-5">Öffnungszeiten</h2>
                  <div
                    id="Wednesday"
                    class="dateTime"
                    v-for="x in contact.openingHours"
                    :key="x.day"
                  >
                    <div class="day">{{x.day.substring(0,2)}}</div>
                    <div
                      class="time"
                    >{{ x.isClosed == false ? x.from + " - " + x.to : "Geschlossen" }}</div>
                    <br />
                  </div>
                  <br />
                </div>
              </v-dialog>-->
              <div>
                <div
                  class="viewOpenIsOpen px-3"
                  v-if="isOpen"
                >{{currentDay()}} {{from}}:00 : {{to}}:00</div>
                <div
                  class="viewOpenIsClosed px-3"
                  v-if="isOpen == false"
                >{{currentDay()}} Geschlossen</div>

                <label class="viewOpen px-3" for="modal-state" @click="dialog=true">
                  Alle Tage&nbsp;&nbsp;
                  <v-icon small color="grey" class="pl-2 pr-3">mdi-clock</v-icon>
                </label>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="3" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#968860" class="ficon" size="40">mdi-email</v-icon>
            <div>
              <h4 class="title">E-mail:</h4>
              <p class="subTitle">info@mail.de</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="3" xs="12" class="my-3">
          <div class="d-flex">
            <v-icon xLarge color="#968860" class="ficon" size="40">mdi-phone</v-icon>
            <div>
              <h4 class="title">Telefonnummer:</h4>
              <p class="subTitle">+49 1111 11111</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from: "12",
      to: "18"
    };
  },

  computed: {
    currentHours() {
      return new Date().getHours();
    },
    isOpen() {
      if (
        parseInt(this.currentHours) >= parseInt(this.from) &&
        parseInt(this.currentHours) < parseInt(this.to)
      ) {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    currentDay() {
      var jetzt = new Date(),
        tag = jetzt.getDate(),
        tagZahl = jetzt.getDay(),
        wochentag = [
          "Sonntag",
          "Montag",
          "Dienstag",
          "Mittwoch",
          "Donnerstag",
          "Freitag",
          "Samstag"
        ],
        monatZahl = jetzt.getMonth(),
        monat = [
          "Januar",
          "Februar",
          "März",
          "April",
          "Mai",
          "Juni",
          "Juli",
          "August",
          "September",
          "Oktober",
          "November",
          "Dezember"
        ],
        text;
      text = wochentag[tagZahl].slice(0, 2) + ": ";
      console.log(tag + tagZahl + wochentag + monatZahl + monat + text);
      return text;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/maleBarber.scss";
.contact {
  background-color: $primary-background-color;
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
  color: white;
  margin-right: 9px;
}

.infoWrapper {
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.99);
  padding: 30px;
  /* background: #eee; */
}

.ficon {
  font-size: 40px;
  float: left;
  width: 44px;
  height: 44px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  padding: 30px;
  box-shadow: 0px 0px 5px $primary-accent-color;
}

.title {
  padding: 0 0 0 40px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #eee;
  font-family: "Poppins", sans-serif;
}
.subTitle {
  padding: 0 0 0 40px;
  margin-bottom: 0;
  font-size: 14px;
  color: #eee;
}

/* openingHours */
.viewOpen {
  text-align: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  position: relative;
  display: flex;
  font-weight: bold;
  // max-width: 130px;
  background: #fff;
  width: 165px;
  color: rgba(70, 70, 70, 0.8);
  padding-left: 0px;
  padding: 5px;
  border-radius: 23px;
  -webkit-box-shadow: 0 8px 16px -8px #adadad;
  -moz-box-shadow: 0 8px 16px -8px #adadad;
  box-shadow: 0px 0px 5px silver;
  cursor: pointer;
  margin: 20px 0px 0px 25px;
}
.viewOpenIsOpen {
  text-align: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  position: relative;
  display: flex;
  font-weight: bold;
  // max-width: 165px;
  background: #fff;
  width: 165px;
  color: rgba(70, 70, 70, 0.8);
  padding-left: 20px;
  padding: 5px;
  border-radius: 23px;
  -webkit-box-shadow: 0 8px 16px -8px #adadad;
  -moz-box-shadow: 0 8px 16px -8px #adadad;
  box-shadow: 0px 0px 15px green;
  margin: 10px 0px 0px 25px;
}
.viewOpenIsClosed {
  text-align: center;
  justify-content: center;
  font-size: 12px;
  text-transform: uppercase;
  position: relative;
  display: flex;
  font-weight: bold;
  // max-width: 120px;
  background: #fff;
  width: 165px;
  color: rgba(70, 70, 70, 0.8);
  padding-left: 20px;
  padding: 5px;
  border-radius: 23px;
  -webkit-box-shadow: 0 8px 16px -8px #adadad;
  -moz-box-shadow: 0 8px 16px -8px #adadad;
  box-shadow: 0px 0px 15px red;
  margin: 10px 0px 0px 25px;
}

.viewOpen i {
  color: rgba(70, 70, 70, 0.6);
}
</style>