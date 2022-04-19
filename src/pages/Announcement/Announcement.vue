<template>
  <div>
    <Header />
    <q-layout class="announcement">
      <div class="announcement-title">ANNOUNCEMENT</div>
      <div class="q-pa-md">
        <q-table
          :rows="rows"
          :columns="columns"
          row-key="name"
          card-class="bg-transparent"
          v-model:pagination="pagination"
          hide-pagination
          binary-state-sort
          flat
        />
        <div class="row justify-center q-mt-md">
          <q-pagination
            v-model="pagination.page"
            color="grey-9"
            :max="pagesNumber"
            size="lg"
          />
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import PageController from "../../components/PageController/PageController.vue";
import { ref, computed } from "vue";
let now = new Date();
let date = now.toLocaleDateString();
const columns = [
  {
    name: "NO",
    required: true,
    label: "No",
    align: "left",
    field: (row) => row.no,
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 10%;height: 3.5vw; font-size: 1vw",
  },
  {
    name: "Notice",
    align: "center",
    label: "Notice",
    field: (row) => row.notice,
    sortable: true,
    required: true,
    style: "width: 70%; font-size: 1vw",
  },

  {
    name: "Date",
    label: "Date",
    field: (row) => row.date,
    align: "right",
    sortable: true,
    required: true,
    style: "width: 20%; font-size: 1vw",
  },
];

const rows = [
  {
    no: 1,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 2,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 3,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 4,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 5,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 6,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 7,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 8,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 9,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 10,
    notice: "I'm a really great person.",
    date: date,
  },
  {
    no: 11,
    notice: "I'm a really great person.",
    date: date,
  },
];
export default {
  components: { Header, PageController },
  setup() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 3,
    });

    return {
      pagination,
      columns,
      rows,

      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
    };
  },
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
.q-table th {
  font-size: 1.3vw;
  border-bottom: 5px solid grey;
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
