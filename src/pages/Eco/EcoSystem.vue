<template>
  <div>
    <Header />
    <q-layout class="eco">
      <div class="eco-title">ECOSYSTEM</div>
      <p class="eco-content text-h5">{{ content }}</p>
      <div>
        <img
          src="assets/images/eco-img2.png"
          class="eco-img"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
        />
        <img
          src="assets/images/eco-img.png"
          class="eco-img"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
export default {
  components: { Header, PageController },
  data() {
    return {
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    };
  },
};
</script>
<style lang="scss" scope>
.eco {
  width: 100%;
  height: 100%;
  position: relative;
}
.eco-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 15% auto;
  margin-bottom: 3%;
  text-align: center;
}
.eco-content {
  width: 60%;
  margin: 3% auto;
  line-height: 3rem;
  text-align: center;
  font-family: "S-CoreDream4";
  color: #727272;
}
.eco-img,
.eco-img2 {
  position: relative;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .eco-title {
    margin-top: 20%;
  }
  .eco-content {
    font-size: 1.8vmax;
    width: 70%;
  }
}
</style>
