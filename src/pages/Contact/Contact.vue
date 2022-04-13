<template>
  <div>
    <Header />
    <q-layout class="contact">
      <div class="contact-title">Contact</div>
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
.contact {
  width: 100%;
  height: 100%;
  position: relative;
}
.contact-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
</style>
