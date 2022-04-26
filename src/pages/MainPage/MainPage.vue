<template>
  <div>
    <Header />

    <div class="mainBg">
      <div class="container">
        <div class="cardBoxs">
          <div
            class="my-card q-gutter-xs justify-center menu-card"
            v-for="(m, i) in mainBox"
            :key="i"
            @mouseover="hover(m.key)"
            @mouseleave="leave(m.key)"
          >
            <img :src="m.src" :id="m.key" @click="$router.push(`/${m.key}`)" />
            <div
              class="absolute-center text-center mainTitle"
              @click="$router.push(`/${m.key}`)"
            >
              {{ m.name }}
            </div>
            <div class="bottomBtn" :id="m.name">
              <img :src="m.src2" @click="$router.push(`/${m.key}`)" />
            </div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrowLeft" @click="toLeft()">
            <img src="assets/images/leftBtn.png" />
          </div>
          <div class="arrowLine"></div>
          <div class="arrowRight" @click="toRight()">
            <img src="assets/images/rightBtn.png" />
          </div>
        </div>
      </div>
      <TotalCursor />
    </div>
  </div>
</template>
<script>
import TotalCursor from "@/components/Cursor/TotalCursor.vue";
import Header from "../../components/Header/Header.vue";
import { ref } from "vue";

const screenWidth = screen.availWidth;
const screenHeight = screen.availHeight;

export default {
  data() {
    return {
      mainBox: [
        {
          key: "about",
          name: "ABOUT",
          src: "assets/images/menu01.png",
          src2: "assets/images/01.png",
        },
        {
          key: "ecosystem",
          name: "ECOSYSTEM",
          src: "assets/images/menu02.png",
          src2: "assets/images/02.png",
        },
        {
          key: "teamadvisor",
          name: "TEAM",
          src: "assets/images/menu03.png",
          src2: "assets/images/03.png",
        },
        {
          key: "whitepaper",
          name: "WHITE PAPER",
          src: "assets/images/menu04.png",
          src2: "assets/images/04.png",
        },
        {
          key: "roadmap",
          name: "ROADMAP",
          src: "assets/images/menu05.png",
          src2: "assets/images/05.png",
        },
        {
          key: "staking",
          name: "STAKING",
          src: "assets/images/menu06.png",
          src2: "assets/images/06.png",
        },
        {
          key: "announcement",
          name: "ANNOUNCEMENT",
          src: "assets/images/menu07.png",
          src2: "assets/images/07.png",
        },
        {
          key: "contact",
          name: "CONTACT",
          src: "assets/images/menu08.png",
          src2: "assets/images/08.png",
        },
      ],
    };
  },
  setup() {
    return { slide: ref(1) };
  },
  components: { Header, TotalCursor },
  methods: {
    toRight() {
      var arrowRight = document.querySelector(".arrowRight");
      var arrowLeft = document.querySelector(".arrowLeft");
      var cardBoxs = document.querySelector(".cardBoxs");
      if (screenWidth > 1024) {
        cardBoxs.style.setProperty("transform", `translateX(-50%)`);
        cardBoxs.style.setProperty("transition", `1.3s`);
        arrowRight.style.setProperty("opacity", "0.3");
        arrowLeft.style.setProperty("opacity", "1");
      }
    },
    toLeft() {
      var arrowRight = document.querySelector(".arrowRight");
      var arrowLeft = document.querySelector(".arrowLeft");
      var cardBoxs = document.querySelector(".cardBoxs");
      if (screenWidth > 1024) {
        cardBoxs.style.setProperty("transform", `translateX(0%)`);
        cardBoxs.style.setProperty("transition", `1.3s`);
        arrowLeft.style.setProperty("opacity", "0.3");
        arrowRight.style.setProperty("opacity", "1");
      }
    },
    hover(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      if (screenWidth > 1024) {
        name.style.setProperty("transform", "scale(1.1)");
        bottomBtn.style.setProperty("width", "40%");
      }
    },
    leave(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      if (screenWidth > 1024) {
        name.style.setProperty("transform", "scale(1)");
        bottomBtn.style.setProperty("width", "30%");
      }
    },
  },
};
</script>
<style lang="scss" scope>
.mainBg {
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #c5e0c4, #86b7b9, #aa7ccd, #947acf);
  background-size: 400% 400%;
  animation: gradient 8s ease infinite;
  position: relative;
  overflow: hidden;
}
.mainBg::after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  background: url(./images/mainBg.png) no-repeat center;
  top: 0;
  background-size: cover;
  opacity: 0.5;
  z-index: 0;
}
.container {
  top: 45%;
  transform: translateY(-50%);
  z-index: 5;
  position: absolute;
}
.menu-card {
  height: 100%;
  position: relative;
}
.menu-card img {
  width: 90%;
  margin: 0;
  transition: 0.4s;
}
.cardBoxs {
  display: flex;
  width: 200%;
  justify-content: space-around;
}
.my-card {
  position: relative;
}
.my-card:first-child,
.my-card:nth-child(5) {
  margin-left: 1%;
}

.mainTitle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-55%, -50%);
  padding: 0;
  font-family: "vitro";
  font-weight: 200;
  font-size: 2.2vw;
  color: white;
  width: 100%;
}
.bottomBtn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -100%;
  width: 30%;
  transition: 0.4s;
  img {
    width: 100%;
  }
}
.arrows {
  display: flex;
  position: relative;
  justify-content: space-evenly;
  margin-top: 5%;
  .arrowRight > img,
  .arrowLeft > img {
    width: 10vw;
    right: 50%;
  }
}
.arrowLine {
  position: absolute;
  top: 47%;
  width: 47%;
  border-bottom: 5px solid rgba($color: #ffffff, $alpha: 0.5);
  z-index: -1s;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

// 미디어쿼리
@media screen and (max-width: 1920px) {
}
@media screen and (max-width: 1770px) {
}
@media screen and (max-width: 1280px) {
}
@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
  .mainBg {
    height: 450vh;
  }
  .container {
    top: 2%;
  }
  .cardBoxs {
    width: 100%;
    display: block;
    text-align: center;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .cardBoxs > .my-card {
    width: 100vw;
    margin: 0;
    padding-top: 10%;
  }

  .mainTitle {
    font-size: 9vw;
    color: white;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .arrows,
  .bottomBtn {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .mainBg {
    height: 400vh;
  }
}
@media screen and (max-width: 420px) {
  .mainBg {
    height: 450vh;
  }
}
</style>
