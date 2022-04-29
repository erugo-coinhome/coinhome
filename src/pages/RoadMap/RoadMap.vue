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
          height="40vh"
          transition-duration="1200"
          style="background-color: transparent; margin: 5% auto"
        >
          <q-carousel-slide :name="1" class="column no-wrap list-container">
            <div
              class="row justify-center items-center q-col-gutter no-wrap listing"
            >
              <q-img
                v-for="(r, i) in roadmap"
                :key="i"
                :name="i"
                class="col-3 list-item"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">2022</div>
                <div class="roadmap-title3">({{ r.title }})</div>
              </q-img>
            </div>
          </q-carousel-slide>

          <q-carousel-slide :name="2" class="column no-wrap list-container">
            <div
              class="row justify-center items-center q-col-gutter no-wrap listing"
            >
              <q-img
                v-for="(r, i) in roadmap2"
                :key="i + 4"
                :name="i + 4"
                class="col-3 list-item"
                :id="r.title"
                :src="r.src"
              >
                <div class="roadmap-title2">{{ r.year }}</div>
                <div class="roadmap-title3">({{ r.title }})</div>
              </q-img>
            </div>
          </q-carousel-slide>
          <template v-slot:control>
            <q-carousel-control
              position="bottom"
              :offset="[0, 30]"
              class="carousel-ctrl"
            >
              <div>
                <!-- 좌우 버튼 -->
                <q-btn flat @click="$refs.carousel.previous()">
                  <img
                    src="assets/images/roadmap_arrow_01.png"
                    style="width: 75px"
                  />
                </q-btn>

                <q-btn flat>
                  <img
                    src="assets/images/roadmap_btn.png"
                    style="width: 75px"
                  />
                </q-btn>

                <q-btn flat @click="$refs.carousel.next()">
                  <img
                    src="assets/images/roadmap_arrow_02.png"
                    style="width: 75px"
                  />
                </q-btn>
              </div>
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
            height="100vh"
            transition-duration="1200"
            style="background-color: transparent"
          >
            <q-carousel-slide v-model="model" :name="1" class="column no-wrap">
              <div class="row flex-center items-center q-col-gutter no-wrap">
                <q-img class="col-2 meta-top" :src="roadmap3[0].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap3[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap3[1].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap3[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap3[2].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap3[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap3[3].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap3[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap3[4].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_05.png"
                  />
                  <p class="meta-text">{{ roadmap3[4].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="2" class="column no-wrap">
              <div class="row flex-center items-centerq-col-gutter no-wrap">
                <q-img class="col-2 meta-down" :src="roadmap4[0].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_06.png"
                  />
                  <p class="meta-text">{{ roadmap4[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap4[1].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap4[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap4[2].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap4[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap4[3].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap4[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap4[4].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap4[4].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>

            <q-carousel-slide :name="3" class="column no-wrap">
              <div class="row flex-center items-center q-col-gutter no-wrap">
                <q-img class="col-2 meta-top" :src="roadmap5[0].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_05.png"
                  />
                  <p class="meta-text">{{ roadmap5[0].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[1].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_06.png"
                  />
                  <p class="meta-text">{{ roadmap5[1].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap5[2].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_01.png"
                  />
                  <p class="meta-text">{{ roadmap5[2].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[3].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_02.png"
                  />
                  <p class="meta-text">{{ roadmap5[3].text }}</p>
                </q-img>
                <q-img class="col-2 meta-top" :src="roadmap5[4].src">
                  <img
                    class="meta-arrow-top"
                    src="assets/images/roadmap_btn_03.png"
                  />
                  <p class="meta-text">{{ roadmap5[4].text }}</p>
                </q-img>
                <q-img class="col-2 meta-down" :src="roadmap5[5].src">
                  <img
                    class="meta-arrow-down"
                    src="assets/images/roadmap_btn_04.png"
                  />
                  <p class="meta-text">{{ roadmap5[5].text }}</p>
                </q-img>
              </div>
            </q-carousel-slide>
            <template v-slot:control>
              <q-carousel-control
                position="bottom"
                :offset="[0, 20]"
                class="carousel-ctr2"
              >
                <div>
                  <!-- 좌우 버튼 -->
                  <q-btn flat @click="$refs.metaverse.previous()">
                    <img
                      src="assets/images/roadmap_arrow_01.png"
                      style="width: 75px"
                    />
                  </q-btn>

                  <q-btn flat>
                    <img
                      src="assets/images/roadmap_btn.png"
                      style="width: 75px"
                    />
                  </q-btn>

                  <q-btn flat @click="$refs.metaverse.next()">
                    <img
                      src="assets/images/roadmap_arrow_02.png"
                      style="width: 75px"
                    />
                  </q-btn>
                </div>
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
        { title: "XEXC", src: "assets/images/roadmap_01.png", year: "2022" },
        { title: "LBANK", src: "assets/images/roadmap_02.jpg", year: "2022" },
        { title: "CONSBIT", src: "assets/images/roadmap_03.jpg", year: "2022" },
        { title: "BITTREX", src: "assets/images/roadmap_04.jpg", year: "2022" },
      ],
      roadmap2: [
        {
          title: "coinUtop",
          src: "assets/images/roadmap_05.jpg",
          year: "2022",
        },
        { title: "TENNTEN", src: "assets/images/roadmap_06.jpg", year: "2021" },
        { title: "Btrade", src: "assets/images/roadmap_07.jpg", year: "2021" },
        { title: "XTCOM", src: "assets/images/roadmap_08.jpg", year: "2021" },
      ],
      roadmap3: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_0.png",
          text: "Concept design development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_1.png",
          text: "Concept design Open",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_2.png",
          text: "Main character production and confirmation",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_3.png",
          text: "Main character open",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_4.png",
          text: "Background concept, character, 3D build(3D, Making a model)",
        },
      ],
      roadmap4: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_5.png",
          text: "Write a storyboard for the alpha test",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_6.png",
          text: "Alpha test technology demonstration._Movie clip",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_7.png",
          text: "Alpha test Prototype production",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_8.png",
          text: "Alpha version prototype test",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_9.png",
          text: "Alpha version prototype revealed",
        },
      ],
      roadmap5: [
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_10.png",
          text: "Planning the revised version of Alpha(storyboard)",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_11.png",
          text: "Alpha version revision development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_12.png",
          text: "Developing Alpha User Playable version development",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_13.png",
          text: "Alpha User Playable version revealed",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_14.png",
          text: "Write a storyboard for the Beta version",
        },
        {
          content: "dd",
          src: "assets/images/roadmap_metabtn_15.png",
          text: "'ErugoWorld' will participate in the G-Star in 2022.",
        },
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
.roadmap-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.roadmap-title2 {
  font-size: 1vmin;
  text-align: center;
}
.roadmap-title3 {
  font-family: "S-CoreDream6";
  bottom: 0;
  text-align: center;
}
.roadmap-subtitle,
.roadmap-subtitle2 {
  font-family: "S-CoreDream6";
  margin: 0% auto;
  font-size: 4.5vmax;
  text-align: center;
  width: 100%;
}
.roadmap-subtitle2 {
  margin: 5% auto;
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
.line-vertical {
  position: relative;
  border-top: 0.5px solid #c9c9c9;
  position: absolute;
  width: 100vw;
  top: 50%;
  z-index: 1;
}
.roadmaplist {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
}
.list-container {
  position: relative;
  padding: 0;
}
.listing {
  position: relative;

  .list-item {
    width: 25%;
    height: 20vw;
    left: 2%;

    div {
      position: absolute;
      width: 80%;
    }
    img {
      position: absolute;
      z-index: 100;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: contain !important;
      object-position: 50% 50%;
      width: 60%;
      height: 60%;
      background-color: #fff;
      border-radius: 50%;
      text-align: center;
      padding: 5%;
      box-shadow: 0 0 50px 0 rgba(252, 16, 104, 0.5);
    }
  }
}
#LBANK {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(255, 128, 43, 0.5);
    }
  }
}
#CONSBIT {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(82, 43, 255, 0.5);
    }
  }
}
#coinUtop {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(47, 255, 43, 0.5);
    }
  }
}
#Btrade {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(82, 43, 255, 0.5);
    }
  }
}
#TENNTEN {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(228, 58, 39, 0.5);
    }
  }
}
#XTCOM {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(39, 215, 228, 0.5);
    }
  }
}
#XEXC {
  div {
    img {
      box-shadow: 0 0 50px 0 rgba(39, 228, 149, 0.5);
    }
  }
}

.listing::before {
  content: "";
  display: block;
  border-bottom: 25px solid #c9c9c9;
  opacity: 0.15;
  width: 100%;
  position: absolute;
}
.listing::after {
  content: "";
  display: block;
  border-bottom: 1px solid #c9c9c9;
  width: 100%;
  position: absolute;
}
// 메타버스
.roadmapmeta {
  display: grid;
  width: 100%;
  height: 100%;
  grid-area: span 10;
}
.q-panel {
  width: 100vw;
  overflow: hidden;
}
.carousel-ctrl,
.carousel-ctr2 {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}
.carousel-ctr2 {
  position: fixed;
}
.q-img__content > div {
  position: absolute;
  background: transparent;
  color: #363636;
  font-family: "S-CoreDream6";
  left: 50%;
  transform: translateX(-50%);
}
.meta-arrow-top,
.meta-arrow-down {
  position: absolute;
  width: 8%;
  left: 50%;
  top: 90%;
  transform: translate(-50%, -50%);
}
.meta-arrow-down {
  top: 10%;
}
.meta-top {
  top: 50%;
  transform: translateY(-15%);
  p {
    width: 90%;
    text-align: center;
    margin-top: 100%;
  }
}
.meta-down {
  top: 90%;
  p {
    width: 90%;
    text-align: center;
  }
}
@media all and (max-width: 768px) {
  .roadmap-title {
    font-size: 4vmax;
    margin: 15% auto;
    margin-bottom: 0;
  }
  .roadmap-subtitle,
  .roadmap-subtitle2 {
    font-size: 3vmax;
  }
  .line {
    border-right: 1px solid #363636;
    height: 50px;
    width: 50%;
    margin: 3% 0;
  }

  .roadmap-title2 {
    font-size: 0.5vmin;
  }
  .roadmap-title3 {
    font-size: 0.3vmin;
  }
  .listing::before {
    border-bottom: 10px solid #c9c9c9;
  }
  .listing {
    .list-item {
      div {
      }
      img {
        box-shadow: 0 0 20px 0 rgba(252, 16, 104, 0.5);
      }
    }
  }
  #LBANK {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(255, 128, 43, 0.5);
      }
    }
  }
  #CONSBIT {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(82, 43, 255, 0.5);
      }
    }
  }
  #coinUtop {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(47, 255, 43, 0.5);
      }
    }
  }
  #Btrade {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(82, 43, 255, 0.5);
      }
    }
  }
  #TENNTEN {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(228, 58, 39, 0.5);
      }
    }
  }
  #XTCOM {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(39, 215, 228, 0.5);
      }
    }
  }
  #XEXC {
    div {
      img {
        box-shadow: 0 0 20px 0 rgba(39, 228, 149, 0.5);
      }
    }
  }
  .carousel-ctrl {
    height: 100px;
    margin: 0;
  }
  .carousel-ctrl > div > button > span,
  .carousel-ctr2 > div > button > span {
    width: 7vmin;
    img {
      height: 7vmin;
    }
  }
}
@media all and (max-width: 610px) {
  .roadmap-title {
    font-size: 3.5vmax;
    margin: 15% auto;
    margin-bottom: 0;
    padding: 0;
  }
  .roadmap-title2,
  .roadmap-title3 {
    margin: -10% 0;
  }
}
@media all and (max-width: 440px) {
  .q-carousel > div {
    height: 15vh;
  }
  // .carousel-ctrl {
  //   height: 5%;
  //   margin: 0;
  // }
  .q-img__container > img {
    width: 100%;
  }
  .roadmap-title {
    font-size: 3vmax;
    margin: 15% auto;
    margin-bottom: 0;
    padding: 0;
  }
  .roadmap-subtitle,
  .roadmap-subtitle2 {
    font-size: 2vmax;
    line-height: 0;
  }
  .roadmap-title2,
  .roadmap-title3 {
    margin: -20% 0;
  }
}
</style>
