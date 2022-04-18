<template>
  <div>
    <Header />
    <q-layout class="staking">
      <div class="staking-title">STAKING</div>
      <div class="staking-num">
        <q-img class="staking-img">
          <p id="stakingNum">2,487,267</p>
          <span>Total Staking</span>
        </q-img>
        <q-img class="staking-img">
          <p id="interestNum">164,923</p>
          <span>Total Interest</span>
        </q-img>
      </div>
      <div class="staking-subtitle text-h3">Introducing EWC Staking</div>
      <p class="staking-content text-h5">{{ staking.content }}</p>
      <div class="line" />
      <div
        class="q-pb-md row q-gutter-sm"
        style="width: 85%; margin: 0 auto; text-align: start"
      >
        <div class="col">
          <div class="staking-subtitle2 text-h3">
            Precautions upon Staking Option Selection
          </div>
          <p class="staking-content2 text-h5">{{ staking.content }}</p>
          <ul>
            <li>{{ staking.content }}</li>
            <li>{{ staking.content }}</li>
            <li>{{ staking.content }}</li>
          </ul>
          <div class="row q-col-gutter-lg">
            <q-img class="staking-btn"></q-img>
            <q-img class="staking-btn2"></q-img>
          </div>
        </div>
        <div class="col staking-box">
          <BarChart style="width: 90%; height: 500px; margin: auto" />
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import BarChart from "../../components/BarChart/BarChart.vue";
export default {
  data() {
    return {
      staking: {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
    };
  },
  components: { Header, PageController, BarChart },
  methods: {
    numberCount() {
      // number count
      let animationStartLine = 4.5;
      let animationEndLine = 5.3;
      let isAnimationPlay = false;
      var left = 0;
      const stakingMaxCount = 2487267;
      const interestMaxCount = 164923;
      const stackingInitialValue = 1800000;
      const interestInitialValue = 120000;
      let stacking = stackingInitialValue;
      let interest = interestInitialValue;
      let previousTime = 0;

      document.addEventListener(
        "scroll",
        (e) => {
          e.preventDefault();
          e.stopPropagation();
          var afterposition = document.documentElement.scrollTop;
          let height = Math.floor(window.innerWidth / 10);
          let transparent = 0;
          let scrollRatio = afterposition / window.innerWidth;
          if (
            scrollRatio > animationStartLine &&
            scrollRatio < animationEndLine
          ) {
            if (!isAnimationPlay) {
              interest = interestInitialValue;
              stacking = stackingInitialValue;
              isAnimationPlay = true;
              previousTime = new Date().getTime();
            }
          } else {
            interest = interestInitialValue;
            stacking = stackingInitialValue;
            isAnimationPlay = false;
          }
          if (afterposition > height) {
            transparent = 1;
            document.querySelectorAll(".staking-img").forEach((menu, idx) => {
              menu.style.color = "black";
            });
            document.getElementById("stakingNum").style.color = "black";
            document.getElementById("interestNum").style.color = "black";
          } else {
            document.querySelectorAll(".staking-img").forEach((menu, idx) => {
              menu.style.color = "white";
            });
            document.getElementById("stakingNum").style.color = "white";
            transparent = (afterposition / height).toFixed(2);
          }
          //document.getElementById('floating-area').style.backgroundColor = `rgba(255,255,255,${transparent})`
        },
        false
      );
    },
  },
  mounted() {
    this.numberCount();
  },
};
</script>
<style lang="scss" scope>
.staking {
  width: 100%;
  height: 100%;
  position: relative;
}
.staking-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.staking-subtitle,
.staking-subtitle2 {
  font-family: "S-CoreDream6";
  margin: auto;
  margin-top: 10%;
  text-align: center;
  width: 100%;
}
.staking-subtitle2 {
  text-align: start;
}
.staking-content,
.staking-content2 {
  width: 60%;
  margin: 3% auto;
  line-height: 3rem;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #727272;
}
.staking-content2 {
  width: 100%;
  text-align: start;
  color: #363636;
}
.staking-num {
  position: relative;
  width: 75%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.staking-img {
  width: 35%;
  background: url("images/staking_btn_01.png") no-repeat center center;
  background-size: contain;
  height: 20vw;
  p,
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: "S-CoreDream6";
  }
  p {
    font-size: 3vw;
  }
  span {
    font-family: "S-CoreDream4";
    font-size: 2.1vw;
    top: 85%;
    height: 20%;
  }
}
.line {
  border-right: 1px solid #363636;
  height: 150px;
  width: 50%;
  margin: 3% 0;
}
li,
ul {
  list-style: disc;
  color: #727272;
  margin-bottom: 2vw;
}
.staking-btn,
.staking-btn2 {
  height: 12vw;
}
.staking-btn {
  background: url("images/staking_btn_03.png") no-repeat center center;
  background-size: contain;
}
.staking-btn2 {
  background: url("images/staking_btn_04.png") no-repeat center center;
  background-size: contain;
}
.staking-box {
  margin: auto;
}
</style>
