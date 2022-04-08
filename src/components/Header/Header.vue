<template>
  <div>
    <div class="Bigcontainer">
      <div class="headBar row justify-center">
        <h1 class="logo col-9" @click="$router.push('/main')">
          erugoworldcoin logo
        </h1>
        <div class="btnWrapper col-2">
          <!-- back 버튼 -->
          <div class="webMenu row justify-center">
            <div class="col" @click="$router.back()">BACK</div>
            <div class="col" @click="dialog = true">MENU</div>
          </div>
          <q-btn
            flat
            rounded
            color="bg-white"
            icon="fas fa-chevron-left"
            class="menuBtn"
            size="xl"
            @click="$router.back()"
          />
          <!-- 메뉴버튼 -->
          <q-btn
            flat
            rounded
            color="bg-white"
            icon="fas fa-bars"
            class="menuBtn"
            size="xl"
            @click="dialog = true"
          />
        </div>
        <!-- 화면 전체 메뉴 dialog -->
        <q-dialog
          v-model="dialog"
          persistent
          :maximized="maximizedToggle"
          transition-show="scale"
          transition-hide="scale"
          transition-duration="1000"
        >
          <q-card class="bg-black text-white q-pt-lg">
            <q-bar>
              <q-space></q-space>

              <!-- 조건부 렌더링 : 최소화 vs 최대화 -->
              <!-- <q-btn
                v-if="maximizedToggle"
                size="xl"
                dense
                flat
                icon="minimize"
                @click="maximizedToggle = false"
                :disable="!maximizedToggle"
              >
                <q-tooltip v-if="maximizedToggle" class="bg-white text-black"
                  >최소화</q-tooltip
                >
              </q-btn>
              <q-btn
                v-else
                size="xl"
                dense
                flat
                icon="crop_square"
                @click="maximizedToggle = true"
                :disable="maximizedToggle"
              >
                <q-tooltip v-if="!maximizedToggle" class="bg-white text-black"
                  >최대화</q-tooltip
                >
              </q-btn> -->
              <!-- 조건부 렌더링 : 최소화 vs 최대화 -->

              <q-btn size="xl" dense flat icon="close" v-close-popup>
                <q-tooltip class="bg-white text-black">닫기</q-tooltip>
              </q-btn>
            </q-bar>

            <q-card-section class="fixed-center">
              <!-- <div class="text-h2 q-pt-lg">About</div>
              <div class="text-h2 q-pt-lg">Eco System</div>
              <div class="text-h2 q-pt-lg">Partner</div>
              <div class="text-h2 q-pt-lg">Road Map</div>
              <div class="text-h2 q-pt-lg">Staking</div>
              <div class="text-h2 q-pt-lg">Team Advisor</div>
              <div class="text-h2 q-pt-lg">White Paper</div>
              <div class="text-h2 q-pt-lg">Contact</div> -->
              <div
                class="text-h2 q-pt-lg menuLink"
                v-for="(m, i) in mainMenu"
                :key="i"
              >
                <router-link :to="m.path">{{ m.name }}</router-link>
              </div>
            </q-card-section>

            <!-- <q-card-section class="q-pt-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
              perferendis totam, ea at omnis vel numquam exercitationem aut,
              natus minima, porro labore.
            </q-card-section> -->
          </q-card>
        </q-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      mainMenu: [
        { name: "About", path: "/about" },
        { name: "Eco System", path: "/ecosystem" },
        { name: "Partner", path: "/partner" },
        { name: "Road Map", path: "/roadmap" },
        { name: "Staking", path: "/staking" },
        { name: "Team Advisor", path: "/teamadvisor" },
        { name: "Announcement", path: "/announcement" },
        { name: "White Paper", path: "/whitepaper" },
        { name: "Contact", path: "/contact" },
      ],
    };
  },
  setup() {
    return {
      dialog: ref(false),
      maximizedToggle: ref(true),
    };
  },
};
</script>
<style lang="scss" scope>
.headBar {
  background-color: rgba($color: #fff, $alpha: 0.5);
  padding: 15px 0;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: 0;
}
.logo,
.btnWrapper {
  line-height: 3vw;
}
.logo {
  background: url("mainLogo.png") no-repeat;
  background-size: contain;
  text-indent: -99999999999999px;
}
.btnWrapper {
  font-size: 1vw;
}
.menuLink {
  font-family: "S-CoreDream";
  font-weight: 700;
  text-align: center;
}
.menuLink:hover {
  color: #ff6906;
}
.webMenu {
  letter-spacing: 5px;
  text-align: center;
  font-family: "S-CoreDream";
  font-weight: 800;
}
.webMenu > div {
  position: relative;
  margin-right: 5%;
}
.webMenu > div::after {
  content: "";
  display: block;
  border: 1px solid #707070;
  position: absolute;
  width: 2vw;
  height: 2vw;
  top: 50%;
  transform: translateY(-50%);
  right: 12%;
  border-radius: 50%;
}
.menuBtn {
  display: none;
}
// 가로
@media only screen and (orientation: portrait) {
}
@media only screen and (orientation: landscape) {
}
@media screen and (max-width: 800px) {
  .logo {
    font-size: 45px;
  }
  .menuBtn {
    display: block;
  }
}
</style>
