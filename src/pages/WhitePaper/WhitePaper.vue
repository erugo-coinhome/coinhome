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
          class="whitepaper-img1"
          @click="
            pdfDownload('/assets/pdf/220421_EWC_WHITEPAPER_ver_2.2(KOR).pdf')
          "
        >
          <p class="img-text">
            WHITE PAPER <br />
            (KOR)
          </p>
        </q-img>
        <q-img
          class="whitepaper-img2"
          @click="
            pdfDownload('/assets/pdf/220421_EWC_WHITEPAPER_ver_2.2(ENG).pdf')
          "
        >
          <p class="img-text">
            WHITE PAPER <br />
            (ENG)
          </p>
        </q-img>
      </div>
      <div class="whitepaper-file">
        <q-img
          class="whitepaper-img3"
          @click="pdfDownload('/assets/pdf/210930+WC(Wins).pdf')"
        >
          <p class="img-text">
            LEGAL REVIEW <br />
            (Wins)
          </p>
        </q-img>
        <q-img class="whitepaper-img4">
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
    pdfDownload(url) {
      fetch(url, {
        method: "get",
      })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          let a = document.createElement("a");
          a.href = window.URL.createObjectURL(blob);
          a.download = url.split("/assets/")[1];
          a.click();
          window.URL.revokeObjectURL(a.href);
        });
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
@for $i from 1 to 5 {
  .whitepaper-img#{$i} {
    background: url("asset/images/wp_0#{$i}.png") no-repeat center;
    background-size: cover;
  }
  .whitepaper-img#{$i}:hover {
    background: url("asset/images/wp_0#{$i}_2.png") no-repeat center;
    background-size: cover;
  }
}

// .whitepaper-file:hover .whitepaper-img {
//   background: url("images/wp_01_2.png") no-repeat center;
//   background-size: cover;
// }
</style>
