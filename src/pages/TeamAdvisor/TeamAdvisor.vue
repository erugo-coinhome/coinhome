<template>
  <div>
    <Header />
    <q-layout class="teamadvisor">
      <div class="teamadvisor-title">TEAM</div>

      <TACard v-for="(t, i) in card" :key="i">
        <template #title>
          <p class="tacard-title">{{ t.title }}</p>
        </template>
        <template #content>
          <p class="tacard-content">{{ t.name }}</p>
        </template>
      </TACard>

      <div class="teamadvisor-title">ADVISOR</div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import TACard from "../../components/TACard/TACard.vue";
export default {
  components: { Header, PageController, TACard },
  data() {
    return {
      card: [
        { title: "CEO", name: "Jung su Kim" },
        { title: "DESIGN TEAM", name: "" },
        { title: "DEVELOPMENT TEAM", name: "" },
        { title: "TECH ADVISER", name: "Gyeong su Ham" },
        { title: "TECH ADVISER", name: "Kwang je Cho" },
      ],
    };
  },
  mounted() {
    this.emitter.on("flipcard", (e) => {
      console.log("클릭" + e);
    });
  },
};
</script>
<style lang="scss" scope>
.teamadvisor {
  width: 100%;
  height: 100%;
  position: relative;
}
.teamadvisor-title {
  font-family: "S-CoreDream9";
  font-size: 6rem;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
</style>
