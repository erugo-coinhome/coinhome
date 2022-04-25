<template>
  <div>
    <div class="Bigcontainer">
      <div class="headBar row justify-center">
        <h2 class="logo col-9" @click="$router.push('/main')"></h2>
        <div class="btnWrapper col-2">
          <!-- back 버튼 -->
          <div class="webMenu row">
            <div class="col-5" @click="$router.back()">BACK</div>
            <div class="col-5" @click="dialog = true">MENU</div>
          </div>
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
              <q-btn size="xl" dense flat icon="close" v-close-popup>
                <div class="closeBtn"></div>
              </q-btn>
            </q-bar>

            <q-card-section class="fixed-center">
              <div
                class="text-h2 q-pt-lg menuLink"
                v-for="(m, i) in mainMenu"
                :key="i"
              >
                <router-link :to="m.path">{{ m.name }}</router-link>
              </div>

              <div class="row q-mt-xl">
                <div
                  v-for="(h, i) in sns"
                  :key="i"
                  class="col-2"
                  @click="outlink(i)"
                >
                  <img
                    :src="`assets/images/${h.path}`"
                    style="width: 9vmin; padding: 0 1%"
                  />
                </div>
              </div>
            </q-card-section>
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
        { name: "Ecosystem", path: "/ecosystem" },
        { name: "Team Advisor", path: "/teamadvisor" },
        { name: "White Paper", path: "/whitepaper" },
        // { name: "Partner", path: "/partner" },
        { name: "Road Map", path: "/roadmap" },
        { name: "Staking", path: "/staking" },
        { name: "Announcement", path: "/announcement" },
        { name: "Contact", path: "/contact" },
      ],
      sns: [
        {
          name: "naver",
          path: "header_sns_01.png",
          link: "https://blog.naver.com/erugocoin_official",
        },
        {
          name: "kakaotalk",
          path: "header_sns_02.png",
          link: "https://open.kakao.com/o/gCeEqVzd",
        },
        {
          name: "telegram",
          path: "header_sns_03.png",
          link: "https://www.securitywallet.co.kr/auth/login?gourl=%2Foverview",
        },
        {
          name: "telegram2",
          path: "header_sns_04.png",
          link: "https://t.me/erugo",
        },
        {
          name: "twitter",
          path: "header_sns_05.png",
          link: "https://twitter.com/ErugoWorldCoin",
        },
        {
          name: "youtube",
          path: "header_sns_06.png",
          link: "https://www.youtube.com/channel/UCj-Hyp1afwEgmSJ6gTYx4wA",
        },
      ],
    };
  },
  methods: {
    outlink(e) {
      open(this.sns[e].link);
    },
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
  padding: 2% 0;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  border-bottom: 0.5px solid #707070;
}
.logo,
.btnWrapper {
  line-height: 4vw;
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
  font-family: "S-CoreDream8";
  text-align: center;
  line-height: 7vmin;
}
.menuLink:hover {
  color: #ff6906;
}
.closeBtn::after {
  content: "";
  display: block;
  border: 1px solid #fff;
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  right: 10%;
  border-radius: 50%;
}
.webMenu {
  letter-spacing: 5px;
  font-size: 2vmax;
  text-align: center;
  font-family: "S-CoreDream8";
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
  width: 3vw;
  height: 3vw;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  border-radius: 50%;
}

// 미디어쿼리
@media screen and (max-width: 1280px) {
  .logo,
  .btnWrapper {
    line-height: 5vw;
  }
  .headBar {
    justify-content: space-around;
  }
  .webMenu {
    font-size: 2.2vmax;
    :first-child {
      right: 30%;
    }
    :nth-child(2) {
      right: 10%;
    }
  }
}
@media screen and (max-width: 1024px) {
  .webMenu {
    font-size: 2vmax;
    :first-child {
      right: 30%;
    }
    :nth-child(2) {
      right: 10%;
    }
  }
}
@media screen and (max-width: 768px) {
  .menuLink {
    font-size: 8vmin;
    line-height: 10vmin;
  }
  .logo,
  .btnWrapper {
    line-height: 6vw;
  }
  .webMenu {
    font-size: 1.7vmax;
    letter-spacing: 2.5px;
    div::after {
      width: 4vw;
      height: 4vw;
    }
    :first-child {
      right: 40%;
    }
    :nth-child(2) {
      right: 10%;
    }
  }
}
@media screen and (max-width: 596px) {
  .headBar {
    justify-content: space-around;
  }
  .q-btn {
    position: relative;
  }

  .webMenu {
    font-size: 1.5vmax;
    letter-spacing: 1.2px;
    font-family: "S-CoreDream7";
    div::after {
      left: 90%;
    }
    :first-child {
      right: 50%;
    }
    :nth-child(2) {
      right: 15%;
    }
  }
  @media screen and (max-width: 420px) {
    .webMenu {
      font-size: 1vmax;
      letter-spacing: 1.1px;
      font-family: "S-CoreDream6";
      div::after {
        left: 90%;
      }
      :first-child {
        right: 60%;
      }
      :nth-child(2) {
        right: 20%;
      }
    }
  }
}
</style>
