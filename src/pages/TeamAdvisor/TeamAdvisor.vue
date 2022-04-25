<template>
  <div>
    <Header />
    <q-layout class="teamadvisor">
      <div class="teamadvisor-title">TEAM</div>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        infinite
        height="30vw"
        prev-icon="img:assets/images/team_btn_02.png"
        next-icon="img:assets/images/team_btn_01.png"
      >
        <q-carousel-slide
          :name="1"
          class="teamadvisor-carousel teamadvisor-card"
        >
          <div class="row fit no-wrap">
            <q-img
              v-for="(q, i) in 3"
              :key="i"
              class="rounded-borders full-height"
              :src="`assets/images/team0${i + 1}.png`"
              @click="flipCardFun(i)"
            >
              <img
                :id="i"
                src="assets/images/team-arrow-01.png"
                class="teamadvisor-arrow"
              />
              <h4 class="title">{{ card[i].title }}</h4>
              <!-- v-show -->
              <div class="row fit no-wrap" v-show="flipCard">
                <q-img
                  class="rounded-borders full-height flipCard-img"
                  src="assets/images/team07.png"
                >
                </q-img>
              </div>
              <!-- v-show -->
            </q-img>
          </div>
        </q-carousel-slide>
        <q-carousel-slide :name="2" class="teamadvisor-carousel">
          <div class="row fit no-wrap">
            <q-img
              v-for="(q, i) in 3"
              :key="i"
              class="rounded-borders full-height"
              :src="`assets/images/team0${i + 4}.png`"
              @click="flipCardFun(i + 3)"
            >
              <img
                src="assets/images/team-arrow-01.png"
                class="teamadvisor-arrow"
              />
              <h4 class="title">{{ card[i + 3].title }}</h4>
              <!-- v-show -->
              <div class="row fit no-wrap" v-show="flipCard">
                <q-img
                  class="rounded-borders full-height flipCard-img"
                  src="assets/images/team07.png"
                >
                </q-img>
              </div>
              <!-- v-show -->
            </q-img>
          </div>
        </q-carousel-slide>
      </q-carousel>
      <div class="teamadvisor-title">ADVISOR</div>
      <div class="advisor">
        <img src="assets/images/advisor_01.png" />
        <img src="assets/images/advisor_02.png" />
        <img src="assets/images/advisor_03.png" />
      </div>
      <div class="teamadvisor-title">PARTNER</div>
      <div class="partner">
        <img src="assets/images/partner_01.png" />
        <img src="assets/images/partner_02.png" />
        <img src="assets/images/partner_03.png" />
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import TACard from "../../components/TACard/TACard.vue";
import { ref } from "vue";
export default {
  components: { Header, PageController, TACard },
  data() {
    return {
      card: [
        { key: "ceo", title: "CEO", name: "Jung su Kim" },
        { key: "design", title: "DESIGN TEAM", name: "" },
        { key: "development", title: "DEVELOPMENT TEAM", name: "" },
        { key: "techadvisor", title: "TECH ADVISOR", name: "Gyeong su Ham" },
        { key: "techadvisor", title: "TECH ADVISOR", name: "Kwang je Cho" },
        { key: "development", title: "DEVELOPMENT TEAM", name: "" },
      ],
    };
  },
  methods: {
    flipCardFun(e) {
      console.log(e);
      // 자기자신
    },
  },
  setup() {
    const flipCard = ref(false);
    return {
      flipCard,
      slide: ref(1),
    };
  },
  mounted() {},
};
</script>
<style lang="scss" scope>
.teamadvisor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.teamadvisor-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.teamadvisor-carousel {
  overflow: hidden;
  div {
    text-align: center;
  }
}
.q-icon > img {
  width: 100px;
  height: 100px;
}

.teamadvisor-arrow {
  width: 20%;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
}
.q-panel > div {
  width: 85%;
  margin: 0 auto;
}
.q-img__image {
  position: relative;
  object-fit: contain;
  height: 100%;
}
.title {
  position: absolute;
  font-family: "S-coreDream7";
  font-size: 2vw;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -40%);
  line-height: 2vw;
}
.q-img__content > div {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0;
}
.advisor {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
.partner {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
}
</style>
