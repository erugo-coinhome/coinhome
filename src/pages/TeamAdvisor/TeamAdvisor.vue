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
        prev-icon="img:assets/images/team_btn_02.png"
        next-icon="img:assets/images/team_btn_01.png"
        class="team-carousel"
      >
        <q-carousel-slide :name="1" class="teamadvisor-carousel">
          <div
            class="team-card"
            v-for="(t, i) in 3"
            :key="i"
            :id="`team-card${i + 1}`"
          >
            <div class="front">
              <img
                :src="`assets/images/team0${i + 1}.png`"
                alt="team name"
                style="width: 90%"
              />
              <h4 class="title">{{ card[i].title }}</h4>
              <p class="content">{{ card[i].name }}</p>
              <button class="teamadvisor-arrow" @click="flipCardFun(i + 1)">
                <img
                  src="assets/images/team-arrow-01.png"
                  style="width: 100%"
                />
              </button>
            </div>
            <div class="back">
              <img
                src="assets/images/team07.png"
                alt="team content"
                style="width: 90%"
              />
              <div class="content-text">
                <div class="cardtitle">
                  {{ card[i].title }} <br />
                  <p class="cardtitle2">{{ card[i].name }} <br /></p>
                </div>
                {{ card[i].content }}
              </div>
              <button class="teamadvisor-arrow" @click="flipCardBack(i + 1)">
                <img
                  src="assets/images/teamadvisor-back.png"
                  style="width: 100%"
                />
              </button>
            </div>
          </div>
        </q-carousel-slide>

        <!-- 두번쨰 -->
        <q-carousel-slide :name="2" class="teamadvisor-carousel">
          <div
            class="team-card"
            v-for="(t, i) in 3"
            :key="i"
            :id="`team-card${i + 3}`"
          >
            <div class="front">
              <img
                :src="`assets/images/team0${i + 4}.png`"
                alt="team name"
                style="width: 90%"
              />
              <h4 class="title">{{ card[i + 3].title }}</h4>
              <p class="content">{{ card[i + 3].name }}</p>
              <button class="teamadvisor-arrow" @click="flipCardFun(i + 3)">
                <img
                  src="assets/images/team-arrow-01.png"
                  style="width: 100%"
                />
              </button>
            </div>
            <div class="back">
              <img
                src="assets/images/team07.png"
                alt="team content"
                style="width: 90%"
              />
              <div class="content-text">
                <div class="cardtitle">
                  {{ card[i + 3].title }} <br />
                  <p class="cardtitle2">{{ card[i + 3].name }} <br /></p>
                </div>
                {{ card[i + 3].content }}
              </div>
              <button class="teamadvisor-arrow" @click="flipCardBack(i + 3)">
                <img
                  src="assets/images/teamadvisor-back.png"
                  style="width: 100%"
                />
              </button>
            </div>
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
import { ref } from "vue";
export default {
  components: { Header, PageController },
  data() {
    return {
      card: [
        {
          key: "ceo",
          title: "CEO",
          name: "Jung su Kim",
          content:
            "I started my career at a law firm and grew my career at an asset management firm. When I worked for a law firm, I was interested in IT business while developing web software to optimize my work. I learned how money moves while working for an asset management company. These two thing naturally served as an opportunity for me to participate in the cryptocurrency business. I am currently leading the development of metaverse 'ErugoWorld' suitable for Web 3.0. I believe I am the most reasonable in this job.",
        },
        {
          key: "techadvisor",
          title: "TECH ADVISOR",
          name: "Gyeong su Ham",
          content:
            "Erugoworld: Apr. 2022 ~ Tech Adviser KoreaHudiLab: Sep. 2021 ~Director or R&D institute DataCommand Inc.: Jun. 2017 ~ Aug. 2021 Director or R&D institute AgileSoDA: Mar. 2016 ~ May. 2017 Director or R&D institute the world's best design team for 'ErugoWorld.' Datastreamst: Jun. 2013 ~ Feb. 2016 Director or R&D institute",
        },
        {
          key: "techadvisor",
          title: "TECH ADVISOR",
          name: "Kwang je Cho",
          content:
            "Erugoworld: Apr. 2022 ~  Tech Adviser INNORULES CO.,LTD: Apr. 2018 ~  Development Project Leader DataCommand Inc: May. 2017 ~ Mar. 2018 Development of solutions Codelab: Jan. 2015 ~ Jan. 2017 Development Team Leader JDF: Sep. 2009 ~ Dec. 2014 Development Team Leader",
        },
        {
          key: "design",
          title: "DESIGN TEAM",
          name: "",
          content:
            "Our design team is currently recruiting. The team is working on various and unique designs for 'ErugoWorld.' In addition, the team is participating in EWC and all related design works. We are confident that we are the world's best design team for 'ErugoWorld.' Please cheer for the developing 'ErugoWorld' design team.",
        },
        {
          key: "development",
          title: "DEVELOPMENT TEAM",
          name: "",
          content:
            "Our design team is currently recruiting. The team is working on various and unique designs for 'ErugoWorld.' In addition, the team is participating in EWC and all related design works. We are confident that we are the world's best design team for 'ErugoWorld.' Please cheer for the developing 'ErugoWorld' design team.",
        },
        {
          key: "you",
          title: "... & YOU",
          name: "",
          content: "you are the next member of our team",
        },
      ],
    };
  },
  methods: {
    flipCardFun(e) {
      var card = document.querySelector(`#team-card${e}`);
      console.log(card);
      card.classList.add("cardRotate");
      card.classList.remove("backRotate");
    },
    flipCardBack(e) {
      var card = document.querySelector(`#team-card${e}`);
      card.classList.add("backRotate");
      card.classList.remove("cardRotate");
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
h1,
h2,
h3,
h4,
* {
  line-height: 1;
}
.teamadvisor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.team-carousel {
  width: 90%;
  margin: 0 auto;
  height: 30vmax;
}

.teamadvisor-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.teamadvisor-carousel {
  overflow: hidden;
  display: flex;
}
.team-card {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  .teamadvisor-arrow {
    width: 15%;
    z-index: 10;
    position: absolute;
    bottom: 5%;
    right: 10%;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .front {
    position: absolute;
    text-align: center;
  }
  .back {
    position: absolute;
    transform: rotateY(90deg);
    .teamadvisor-arrow {
      right: 15%;
    }
  }
}
.cardRotate .front {
  opacity: 1;
  animation: rotateAni 0.5s 1;
  transform: rotateY(90deg);
}

.cardRotate .back {
  opacity: 1;
  animation: rotateAni2 0.5s 0.5s backwards;
  transform: rotateY(0);
}

.backRotate .front {
  opacity: 1;
  animation: rotateAni2 0.5s 0.5s backwards;
  transform: rotateY(0);
}

.backRotate .back {
  opacity: 1;
  animation: rotateAni 0.5s 1;
  transform: rotateY(90deg);
}

@keyframes rotateAni {
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(90deg);
  }
}

@keyframes rotateAni2 {
  0% {
    transform: rotateY(90deg);
  }

  100% {
    transform: rotateY(0);
  }
}
.q-panel > div {
  width: 85%;
  margin: 0 auto;
}
.q-img__image {
  position: relative;
  object-fit: contain;
}
.title,
.content {
  position: absolute;
  width: 80%;
  left: 50%;
  top: 65%;
  transform: translate(-50%, -40%);
}
.title {
  font-family: "S-coreDream7";
  font-size: 2vmax;
}
.content {
  font-size: 1vmax;
  top: 75%;
  font-family: "S-coreDream4";
}
.content-text {
  position: absolute;
  width: 80%;
  height: 100%;
  left: 45%;
  transform: translateX(-50%);
  top: 10%;
  font-size: 0.7vmax;
  overflow: scroll;
  font-family: "S-coreDream4";
  color: #707070;
  text-align: start !important;
  line-height: 2;
  .cardtitle {
    color: #000;
    font-family: "S-coreDream7";
    font-size: 1vmax;
    line-height: 1.5;
    .cardtitle2 {
      font-family: "S-coreDream4";
    }
  }
}
.q-carousel__arrow .q-icon {
  font-size: 4vmax;
}
.q-carousel__slide {
  padding: 0;
}
.q-img__content > div {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 0;
}
.advisor,
.partner {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  img {
    width: 25vw;
  }
}

@media all and (max-width: 1024px) {
  .teamadvisor-title {
    font-size: 5vmax;
  }
  .advisor,
  .partner {
    img {
      width: 30vw;
    }
  }
  .title {
    font-size: 1.5vmax;
  }
  .content-text {
    line-height: 1;
    .cardtitle {
      font-size: 1vmax;
      line-height: 1.5;
      .cardtitle2 {
        font-family: "S-coreDream4";
      }
    }
  }
}
@media all and (max-width: 768px) {
  .content-text {
    height: 80%;
  }
}
@media all and (max-width: 420px) {
  .team-carousel {
    width: 100%;
  }
  .q-carousel__prev-arrow--horizontal {
    left: 0;
  }
  .q-carousel__next-arrow--horizontal {
    right: 0;
  }
  .teamadvisor-title {
    font-size: 4vmax;
    margin-top: 15%;
  }
  .title {
    width: 80%;
    font-size: 1.7vw;
    line-height: 3vw;
    font-family: "S-coreDream6";
  }
  .content {
    font-size: 1.2vw;
    font-family: "S-coreDream4";
  }
  .q-carousel__arrow .q-icon img {
    width: 5vw;
    height: 5vw;
  }
}
</style>
