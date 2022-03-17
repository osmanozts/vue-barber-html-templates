<template>
  <div>
    <div class="widget">
      <button class id="chatme">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="chat"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="close"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
          />
        </svg>
      </button>
      <div class="socials">
        <div class="phone">
          <a href="tel:+49 176 72245869">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
              />
            </svg>
          </a>
        </div>
        <div class="email">
          <a href="mailto:28osman99@gmail.com?Subject=Anfrage Terassenüberdachung" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
              />
            </svg>
          </a>
        </div>
        <div class="instagram">
          <a href="https://api.whatsapp.com/send?phone=+49 176 72245869">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </svg>
          </a>
        </div>

        <!-- <div class="youtube">
          <a href="https://api.whatsapp.com/send?phone=+49 1577 2160132">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path
                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
              />
            </svg>
          </a>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import jQuery from "jquery";
import $ from "jquery";
export default {
  mounted() {
    $(document).ready(function() {
      $("#chatme").click(function() {
        $(".widget").toggleClass("open");
      });
    })(jQuery);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/maleBarber.scss";

body {
  background: #222;
}
.widget {
  position: fixed;
  right: 0;
  bottom: 0;
  transition: 0.6s;
}
.open.widget {
  right: 35px;
}
a {
  color: inherit;
}
#chatme {
  background-color: $primary-accent-color;
  color: white;
  border: none;
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 100%;
  transition: 0.4s;
  box-shadow: 0 0 0 0 $primary-accent-color;
  -webkit-animation: pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 3s infinite cubic-bezier(0.66, 0, 0, 1);
  z-index: 999;
  margin-bottom: 8px;
  margin-right: 8px;
}
@-webkit-keyframes pulse {
  to {
    box-shadow: 0 0 0 25px rgba(232, 76, 61, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 25px rgba(232, 76, 61, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 25px rgba(232, 76, 61, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 25px rgba(232, 76, 61, 0);
  }
}

#chatme:hover {
  animation: paused;
}
#chatme:focus {
  outline: none;
}

#chatme svg,
.socials > div svg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  fill: white;
}
.socials > div svg {
  width: 16px;
  height: 16px;
}
#chatme .close {
  opacity: 0;
  transition: 0.3s;
}
#chatme .chat {
  opacity: 1;
  transition: 0.3s;
}
.open #chatme .close {
  opacity: 1;
  transition: 0.3s;
}
.open #chatme .chat {
  opacity: 0;
  transition: 0.3s;
}
.open #chatme {
  transform: rotate(45deg);
}
.widget:not(.open) .socials {
  transform: scale(0);
}
.socials {
  position: relative;
  transition: 0.4s;
  background: rgba (0, 0, 0, 0.3);
}
.socials > div {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  color: white;
  transition: 0.3s;
}
.socials > div:hover {
  transform: scale(1.2);
}
.socials .phone {
  background: #00cc66;
  right: 80px;
  bottom: 0;
}
.socials .email {
  background: #fabc2a;
  right: 77px;
  bottom: 45px;
}
.socials .instagram {
  background: #00cc66;
  right: 45px;
  bottom: 77px;
}
.socials .youtube {
  background: #00cc66;
  right: 0px;
  bottom: 80px;
}
.socials .vk {
  background: #37515f;
  right: -35px;
  bottom: 53px;
}
</style>