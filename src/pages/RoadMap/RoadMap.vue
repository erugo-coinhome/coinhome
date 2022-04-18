<template>
  <div>
    <Header />
    <q-layout class="roadmap">
      <div class="roadmap-title">ROAD MAP</div>
      <div class="line" />
      <div class="roadmap-subtitle text-h2">OF LISTING</div>
      <!-- Listing -->
      <div class="roadmaplist" @mousewheel="$refs.carousel.next()">
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
          style="background-color: transparent"
        >
          <q-carousel-slide :name="1" class="column no-wrap">
            <div
              class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="(r, i) in roadmap"
                :key="i"
                :name="i"
                class="col-3"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">({{ r.title }})</div>
              </q-img>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap">
            <div
              class="row fit justify-center items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="(r, i) in roadmap2"
                :key="i + 4"
                :name="i + 4"
                class="col-3"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">({{ r.title }})</div>
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

              <q-btn flat>
                <img src="assets/images/roadmap_btn.png" style="width: 75px" />
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
      <!-- Listing -->
      <div class="roadmap-subtitle2 text-h2">OF METAVERSE</div>
      <q-img src="assets/images/roadmap_map.png">
        <div class="line-vertical" />

        <!-- Metaverse -->
        <div class="roadmapmeta">
          <q-carousel
            swipeable
            transition-prev="slide-right"
            transition-next="slide-left"
            animated
            draggable
            v-model="slide"
            ref="metaverse"
            infinite
            height="50vh"
            transition-duration="1200"
            style="background-color: transparent"
          >
            <q-carousel-slide v-model="model" :name="1" class="column no-wrap">
              <div
                class="row fit flex-center items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <!-- <q-img
                  v-for="(r, i) in roadmap3"
                  :key="i"
                  :name="i"
                  class="meta-img col-1"
                  :id="r.content"
                  :src="r.src"
                > -->
                <q-img class="col-2" :src="roadmap3[0].src"> </q-img>
                <q-img class="col-2" :src="roadmap3[1].src"></q-img>
                <q-img class="col-2" :src="roadmap3[2].src"> </q-img>
                <q-img class="col-2" :src="roadmap3[3].src"></q-img>
                <q-img class="col-2" :src="roadmap3[4].src"> </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" class="column no-wrap">
              <div
                class="row fit flex-center items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img class="col-2" :src="roadmap4[0].src"> </q-img>
                <q-img class="col-2" :src="roadmap4[1].src"></q-img>
                <q-img class="col-2" :src="roadmap4[2].src"> </q-img>
                <q-img class="col-2" :src="roadmap4[3].src"></q-img>
                <q-img class="col-2" :src="roadmap4[4].src"> </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3" class="column no-wrap">
              <div
                class="row fit flex-center items-center q-gutter-xs q-col-gutter no-wrap"
              >
                <q-img class="col-2" :src="roadmap5[0].src"> </q-img>
                <q-img class="col-2" :src="roadmap5[1].src"></q-img>
                <q-img class="col-2" :src="roadmap5[2].src"> </q-img>
                <q-img class="col-2" :src="roadmap5[3].src"></q-img>
                <q-img class="col-2" :src="roadmap5[4].src"> </q-img>
                <q-img class="col-2" :src="roadmap5[5].src"> </q-img>
              </div>
            </q-carousel-slide>
            <template v-slot:control>
              <!-- <q-carousel-control
                position="bottom"
                :offset="[0, 0]"
                class="carousel-ctrl2"
              >
              
                <q-btn flat @mousewheel="$refs.carousel.next()">
                  <img
                    src="assets/images/roadmap_arrow_01.png"
                    style="width: 75px"
                  />
                </q-btn>

                <q-slider
                  v-model="model"
                  :name="1"
                  :min="0"
                  :max="3"
                  color="grey-4"
                  thumb-color="grey-1"
                  track-color="grey-3"
                  track-size="1px"
                  class="slider"
                  thumb-size="75px"
                  dense
                />
                <q-btn flat>
                  <img
                    src="assets/images/roadmap_arrow_02.png"
                    style="width: 75px"
                  />
                </q-btn>
              </q-carousel-control> -->
              <q-carousel-control
                position="bottom"
                :offset="[18, 18]"
                class="carousel-ctr2"
              >
                <!-- 좌우 버튼 -->
                <q-btn flat @click="$refs.metaverse.previous()">
                  <img
                    src="assets/images/roadmap_arrow_01.png"
                    style="width: 75px"
                  />
                </q-btn>

                <q-slider
                  v-model="model"
                  :name="1"
                  :min="0"
                  :max="3"
                  color="grey-4"
                  thumb-color="grey-1"
                  track-color="grey-3"
                  track-size="1px"
                  class="slider"
                  thumb-size="75px"
                  dense
                />

                <q-btn flat @click="$refs.metaverse.next()">
                  <img
                    src="assets/images/roadmap_arrow_02.png"
                    style="width: 75px"
                  />
                </q-btn>
              </q-carousel-control>
            </template>
          </q-carousel>
        </div>
        <!-- Metaverse -->
      </q-img>
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
      ],
      roadmap2: [
        { title: "coinUtop", src: "assets/images/roadmap_04.png" },
        { title: "TENNTEN", src: "assets/images/roadmap_05.png" },
        { title: "Btrade", src: "assets/images/roadmap_06.png" },
        { title: "XTCOM", src: "assets/images/roadmap_07.png" },
      ],
      roadmap3: [
        { content: "dd", src: "assets/images/roadmap_metabtn_0.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_1.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_2.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_3.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_4.png" },
      ],

      roadmap4: [
        { content: "dd", src: "assets/images/roadmap_metabtn_5.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_6.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_7.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_8.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_9.png" },
      ],
      roadmap5: [
        { content: "dd", src: "assets/images/roadmap_metabtn_10.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_11.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_12.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_13.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_14.png" },
        { content: "dd", src: "assets/images/roadmap_metabtn_15.png" },
      ],
    };
  },
  components: { Header, PageController },

  setup() {
    return {
      slide: ref(1),
      model: ref(8),
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
.roadmap-title3 {
  font-family: "S-CoreDream6";
  top: 85%;
}
.roadmap-subtitle,
.roadmap-subtitle2 {
  font-family: "S-CoreDream6";
  margin: 2% auto;
  text-align: center;
  width: 100%;
}
.roadmap-subtitle2 {
  margin: 10% auto;
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
.line-vertical {
  position: relative;
  border-top: 0.5px solid #cfcfcf;
  position: absolute;
  width: 100vw;
  top: 50%;
  z-index: 1;
}

.roadmaplist {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  top: 50%;
  overflow: hidden;
}
.roadmapmeta {
  display: grid;
  width: 100%;
  grid-area: span 10;
}
.q-panel {
  width: 100vw;
}
.carousel-ctrl,
.carousel-ctrl2 {
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  width: 100%;
  bottom: 0;
}
.carousel-ctrl2 {
  width: 50%;
  height: 0;
  justify-content: center;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
}
.q-img__content > div {
  background: transparent;
  color: #363636;
  font-family: "S-CoreDream6";
  left: 50%;
  transform: translateX(-50%);
}
// .slider {
//   text-align: center;
//   padding: 1% auto;
// }
</style>
