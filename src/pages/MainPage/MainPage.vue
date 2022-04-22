<template>
  <div>
    <Header />

    <div class="mainBg">
      <div class="container">
        <div class="cardBoxs">
          <div
            class="my-card"
            v-for="(m, i) in mainBox"
            :key="i"
            @mouseover="hover(m.key)"
            @mouseleave="leave(m.key)"
          >
            <img
              :src="m.src"
              style="width: 90%"
              :id="m.key"
              @click="$router.push(`/${m.key}`)"
            />
            <div class="absolute-center text-center mainTitle">
              {{ m.name }}
            </div>
            <div class="bottomBtn" :id="m.name">
              <img :src="m.src2" @click="$router.push(`/${m.key}`)" />
            </div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrowRight" @click="toLeft()">
            <img src="assets/images/leftBtn.png" />
          </div>
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
      var cardBoxs = document.querySelector(".cardBoxs");
      cardBoxs.style.setProperty("transform", `translateX(-50%)`);
    },
    toLeft() {
      var cardBoxs = document.querySelector(".cardBoxs");
      cardBoxs.style.setProperty("transform", `translateX(0%)`);
    },
    hover(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      name.style.setProperty("transform", "scale(1.2, 1.2)");
      bottomBtn.style.setProperty("transform", "scale(1.4, 1.4)");
    },
    leave(e) {
      var name = document.querySelector(`#${e}`);
      var bottomBtn = document.querySelector(`#${e} ~ .bottomBtn`);
      name.style.setProperty("transform", "scale(1, 1)");
      bottomBtn.style.setProperty("transform", "scale(1, 1)");
    },
  },
};
</script>
<style lang="scss" scope>
.absolute-center {
  top: 47%;
  left: 45%;
}
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
  background: url(./images/mainBg.png) no-repeat center;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
  opacity: 0.6;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.container {
  top: 20%;
  z-index: 5;
  position: absolute;
}
.cardBoxs {
  display: flex;
  width: 200%;
}
.my-card {
  position: relative;
}
.cardBoxs > .my-card:first-child {
  margin-left: 3%;
}
.cardBoxs > .my-card:nth-child(5) {
  margin-left: 5.736%;
}
.mainTitle {
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
  bottom: -18vw;
}
.arrows {
  position: relative;
  display: flex;
  justify-content: space-around;
  .arrowRight,
  .arrowLeft {
    margin-top: 10%;
  }
}
// #ABOUT {
//   animation: name duration timing-function delay iteration-count direction
//     fill-mode;
// }
// @keyframes about {
//   0% {
//     transform: scale(1, 1);
//   }
//   50% {
//     transform: scale(1.2, 1.2);
//   }
//   100% {
//     transform: scale(1, 1);
//   }
// }

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
</style>
