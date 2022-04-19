<template>
  <div style="background: url(images/announcement_bg.png)">
    <Header />
    <q-layout class="announcement">
      <div class="announcement-title">ANNOUNCEMENT</div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
export default {
  components: { Header, PageController },
};
</script>
<style lang="scss" scope>
.announcement {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("images/announcement_bg.png") 100% 100% no-repeat;
  animation: gradient 4s ease-in-out infinite;
}
.announcement-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
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
