<template>
  <div>
    <Header />

    <div class="mainBg">
      <div class="container">
        <div class="cardBoxs">
          <div class="my-card" v-for="(m, i) in mainBox" :key="i">
            <img
              :src="m.src"
              style="width: 90%"
              :id="m.name"
              @mouseover="hover(m.name)"
            />
            <div class="absolute-center text-center mainTitle">
              {{ m.name }}
            </div>
            <div>하단 버튼</div>
          </div>
        </div>
        <div class="arrows">
          <div class="arrowRight" @click="toRight()">화살표 오</div>
          <div class="arrowRight" @click="toLeft()">왼 화살표</div>
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

// arrowRight.addEventListener("click", function () {
//
// });

export default {
  data() {
    return {
      mainBox: [
        { name: "ABOUT", src: "assets/images/menu01.png" },
        { name: "ECOSYSTEM", src: "assets/images/menu02.png" },
        { name: "TEAM", src: "assets/images/menu03.png" },
        { name: "WHITE PAPER", src: "assets/images/menu04.png" },
        { name: "ROADMAP", src: "assets/images/menu05.png" },
        { name: "STAKING", src: "assets/images/menu06.png" },
        { name: "ANNOUNCEMENT", src: "assets/images/menu07.png" },
        { name: "CONTACT", src: "assets/images/menu08.png" },
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
    hover(name) {
      console.log(name);
    },
  },
};
</script>
<style lang="scss" scoped>
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
#ABOUT {
}
#ECOSYSTEM {
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
</style>
