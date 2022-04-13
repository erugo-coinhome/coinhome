<template>
  <div>
    <Header />
    <q-layout class="roadmap">
      <div class="roadmap-title">ROAD MAP</div>
      <div class="line" />
      <div class="roadmap-subtitle text-h2">OF LISTING</div>
      <div class="roadmaplist" @mousewheel="$refs.carousel.next()">
        <div class="line-vertical" />

        <q-carousel
          swipeable
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          draggable
          v-model="slide"
          ref="carousel"
          infinite
          height="50vh"
          transition-duration="1200"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div
              class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="(r, i) in 3"
                :key="i + 1"
                :name="i + 1"
                class="roadmap-img col-3"
                :id="r.title"
                :src="`assets/images/roadmap_0${i + 1}.png`"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">2022</div>
              </q-img>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap">
            <div
              class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="(r, i) in 4"
                :key="i + 4"
                :name="i + 4"
                class="roadmap-img col-3"
                :id="r.title"
                :src="`assets/images/roadmap_0${i + 4}.png`"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">2022</div>
              </q-img>
            </div>
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control
              position="bottom"
              :offset="[0, 0]"
              class="carousel-ctrl"
            >
              <!-- 좌우 버튼 -->
              <q-btn flat @click="$refs.carousel.previous()">
                <img
                  src="assets/images/roadmap_arrow_01.png"
                  style="width: 75px"
                />
              </q-btn>
              <q-btn flat @click="$refs.carousel.next()">
                <img
                  src="assets/images/roadmap_arrow_02.png"
                  style="width: 75px"
                />
              </q-btn>
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
// :img-src="`assets/images/roadmap_0${i + 1}.png`"
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import { ref } from "vue";

export default {
  data() {
    return {
      roadmap: [
        { title: "LBANK", src: "assets/images/roadmap_01.png" },
        { title: "CONSBIT", src: "assets/images/roadmap_02.png" },
        { title: "BITTREX", src: "assets/images/roadmap_03.png" },
        { title: "coinUtop", src: "assets/images/roadmap_04.png" },
        { title: "TENNTEN", src: "assets/images/roadmap_05.png" },
        { title: "Btrade", src: "assets/images/roadmap_06.png" },
        { title: "XTCOM", src: "assets/images/roadmap_07.png" },
      ],
    };
  },
  components: { Header, PageController },

  setup() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style lang="scss" scope>
.roadmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.roadmap-title,
.roadmap-title2 {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.roadmap-title2 {
  font-size: 2rem;
}
.roadmap-subtitle {
  font-family: "S-CoreDream6";
  margin: 2% auto;
  text-align: center;
  width: 100%;
}
.test {
  background-color: red;
}
.line,
.line-vertical {
  border-right: 1px solid #363636;
}
.line {
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
.line-vertical {
  position: absolute;
  width: 100vw;
  top: 50%;
  z-index: 1;
}

.roadmaplist {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin: 0 auto;
  width: 100%;
  top: 50%;
  border-bottom: 1px solid #363636;
  overflow: hidden;
}
.q-panel {
  width: 100vw;
}
.carousel-ctrl {
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
}
.q-img__content > div {
  background: transparent;
  color: #363636;
  font-family: "S-CoreDream6";
  left: 50%;
  transform: translateX(-50%);
}
</style>
