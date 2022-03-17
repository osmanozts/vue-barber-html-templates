import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    category: 'Damen Friseur',
    shop: {
      services: [
        {
          name: "Schneiden",
          url: "https://image.flaticon.com/icons/png/128/3499/3499102.png",
          text:
            "Nach einer typgerechten und individuellen Beratung. Fangen wir mit der Waschung der Haare an, anschließend kommt der Schnitt. Nachdem du mit dem Endergebnis zufrieden bist, werden deine Haare gestylt und geföhnt. Gerne kannst du die Kopfmassage dazu buchen.",
          flip: false
        },
        {
          name: "Styling",
          url: "https://image.flaticon.com/icons/png/512/3163/3163203.png",
          text:
            "Du hast ein speziellen Termin und deine Frisur ist soweit in Ordnung brauchst aber dennoch den letzten Feinschliff ? Kein Problem gerne beraten wir dich zum Styling deiner Haare. Nach dem definieren eines klaren Stylingwunsches, waschen wir zuerst deine Haare danach werden deine Haare geföhnt und nach deinen Wünschen zurecht gestylt.",
          flip: false
        },
        {
          name: "Farbe",
          url: " https://image.flaticon.com/icons/png/128/1658/1658257.png",
          text:
            "Für die perfekte Haarfarbe sprechen wir mit dir über diese Punkte: -Gesichtszüge -Persönlichkeit -Den natürlichen Fall deiner Haare -Haarlänge. Eine individuelle und typgerechte Beratung ist undenkbar. Wir benutzen außschließlich die hochwertigsten  und qualitativsten Produkte zur Färbung. Besondere",
          flip: false
        },
        {
          name: "Dauerwelle",
          url: " https://image.flaticon.com/icons/png/128/3461/3461338.png",
          text:
            "Wir benutzen ausschließlich die besten und hochwertigsten Produkte bei der Behandlungen. Das Ergebnis ist nicht zu unterscheiden von Naturlocken!",
          flip: false
        },
        {
          name: "Tönen",
          url: " https://image.flaticon.com/icons/png/128/4337/4337683.png",
          text:
            "Du liebst es mit deiner Haarfarbe zu spielen? Kein Problem! Unsere Produkte schädigen deine Haare nicht, ganz im Gegenteil! Durch besondere Schulungen können unsere Coloristen dabei auch deine Haare pflegen.",
          flip: false
        },
        {
          name: "Strähnen",
          url: " https://image.flaticon.com/icons/png/512/3791/3791210.png",
          text:
            "Folie für Folie werden, so genannte Highlights, sorgsam ins Haar gesetzt. So wirken die Strähnen besonders natürlich.",
          flip: false
        },
        {
          name: "Pflege",
          url: " https://image.flaticon.com/icons/png/512/5388/5388966.png",
          text:
            "- Gesichtsbehandlung\n- Maniküre\n- Pediküre",
          flip: false
        },
        {
          name: "Kopfmasage",
          url: " https://image.flaticon.com/icons/png/512/4337/4337653.png",
          text:
            "Es ist nicht einfach zu leben, wenn Sie nicht wissen, wie Sie sich entspannen können. Genießen sie unsere ausgezeichneten Kopfmassagen.",
          flip: false
        },
        {
          name: "Haarkur",
          url: " https://image.flaticon.com/icons/png/512/3273/3273110.png",
          text:
            "Wir bieten verschiedene Haarkuren an. Gerne beraten wir Dich. Sprich uns doch einfach oder schreib uns eine Nachricht.",
          flip: false
        }
      ],
      reviews: [
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
        {
          author: "Max Mustermann",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia accusantium eos neque incidunt cum aperiam vel quod."
        },
      ],
      teamMember: {
        femaleBarber: [
          {
            name: "Max Mustermann",
            job: "Gründer",
            image:
              "https://images.pexels.com/photos/7538806/pexels-photo-7538806.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Max Mustermann",
            job: "Inhaber",
            image:
              "https://images.pexels.com/photos/7538808/pexels-photo-7538808.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Max Mustermann",
            job: "Stylist",
            image:
              "https://images.pexels.com/photos/7179053/pexels-photo-7179053.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        ],
        maleBarber: [
          {
            name: "Maria Wilson",
            job: "Gründer",
            image:
              "https://images.pexels.com/photos/2040189/pexels-photo-2040189.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Maria Wilson",
            job: "Inhaber",
            image:
              "https://images.pexels.com/photos/2775269/pexels-photo-2775269.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Maria Wilson",
            job: "Stylist",
            image:
              "https://images.pexels.com/photos/2068672/pexels-photo-2068672.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        ],
        neutralBarber: [
          {
            name: "Maria Wilson",
            job: "Gründer",
            image:
              "https://images.pexels.com/photos/5704720/pexels-photo-5704720.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Maria Wilson",
            job: "Inhaber",
            image:
              "https://images.pexels.com/photos/7518766/pexels-photo-7518766.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          },
          {
            name: "Maria Wilson",
            job: "Stylist",
            image:
              "https://images.pexels.com/photos/5337960/pexels-photo-5337960.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          }
        ]
      },
      gallery: {
        femaleBarberImages: [
          "https://images.pexels.com/photos/3268732/pexels-photo-3268732.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/1536356/pexels-photo-1536356.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/3993320/pexels-photo-3993320.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/5368626/pexels-photo-5368626.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/3992866/pexels-photo-3992866.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ],
        maleBarberImages: [
          "https://images.pexels.com/photos/7697390/pexels-photo-7697390.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/7697433/pexels-photo-7697433.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/7697448/pexels-photo-7697448.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/7697283/pexels-photo-7697283.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/7697232/pexels-photo-7697232.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/7697673/pexels-photo-7697673.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ],
        neutralBarberImages: [
          "https://images.pexels.com/photos/4197701/pexels-photo-4197701.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/3998400/pexels-photo-3998400.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/6954163/pexels-photo-6954163.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          "https://images.pexels.com/photos/4969838/pexels-photo-4969838.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        ],
      }
    }
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default store