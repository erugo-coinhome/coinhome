<template>
  <div>
    <Header />
    <q-layout class="whitepaper">
      <div class="whitepaper-title">WHITE PAPER</div>
      <p class="whitepaper-content text-h4">
        ERUGO WORLD COIN, <br />
        The new concept of digital assets.
      </p>
      <p class="whitepaper-content2 text-h5">{{ whitepaper.content }}</p>
      <div class="whitepaper-file">
        <q-img
          class="whitepaper-img"
          src="assets/images/wp_01.png"
          @mouseover="hover"
          @mouseleave="leave"
        >
          <p class="img-text">
            WHITE PAPER <br />
            (KOR)
          </p>
        </q-img>
        <q-img src="assets/images/wp_02.png">
          <p class="img-text">
            WHITE PAPER <br />
            (ENG)
          </p>
        </q-img>
      </div>
      <div class="whitepaper-file">
        <q-img src="assets/images/wp_03.png">
          <p class="img-text">
            LEGAL REVIEW <br />
            (Wins)
          </p>
        </q-img>
        <q-img src="assets/images/wp_04.png">
          <p class="img-text">
            LEGAL REVIEW <br />
            (J.W)
          </p>
        </q-img>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
export default {
  data() {
    return {
      whitepaper: {
        content:
          ' "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",',
      },
    };
  },
  components: { Header, PageController },
  methods: {
    hover() {
      var whitepaper = document.querySelector(".whitepaper-img");
      // whitepaper.style.setProperty("background-color", "#ffa1a1");

      // for (var i = 1; i < 5; i++) {
      //   document.querySelector(".whitepaper-img").removeAttribute("src");
      //   // .setAttribute("src", "assets/images/wp_01_2.png");
      // }
    },
    leave() {
      for (var i = 1; i < 5; i++) {
        document.querySelector(".img-text");
        // .setAttribute("src", `"assets/images/wp_0${i}.png"`);
      }
    },
  },
};
</script>
<style lang="scss" scope>
.whitepaper {
  width: 100%;
  height: 100%;
  position: relative;
}
.whitepaper-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.whitepaper-content,
.whitepaper-content2 {
  width: 60%;
  margin: 3% auto;
  line-height: 3rem;
  text-align: center;
  font-family: "S-CoreDream6";
  color: #363636;
}
.whitepaper-content2 {
  font-family: "S-CoreDream4";
  color: #727272;
}
.whitepaper-file {
  position: relative;
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
.whitepaper-file > .q-img {
  width: 40vw;
  margin: 0;
}
.img-text {
  position: absolute;
  font-size: 2vw;
  top: 51%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-family: "S-CoreDream7";
}
</style>
