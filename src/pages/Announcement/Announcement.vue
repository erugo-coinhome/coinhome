<template>
  <div id="app">
    <Header />
    <q-layout class="container announcement">
      <div id="media-list">
        <div class="announcement-title">ANNOUNCEMENT</div>
        <ul>
          <li>
            <div class="announcement-list title row text-right">
              <span class="col-1" style="text-align: left">NO</span>
              <span class="col-9" style="text-align: center">Notice</span>
              <span class="col-2">Date</span>
            </div>
          </li>
          <li
            v-show="type === '' || type === a.type"
            v-for="(a, i) in announcement"
            :key="i"
            v-on:click="toggleDetail(a)"
          >
            <div class="announcement-list row text-right">
              <span class="col-1" style="text-align: left">{{ i + 1 }}</span>
              <span class="col-9" style="text-align: center">{{
                a.title
              }}</span>
              <span class="col-2">{{ a.date }}</span>
            </div>
            <div v-show="a.showDetail" class="announcement-detail">
              <p>{{ a.summary }}</p>
            </div>
          </li>
        </ul>
        <div class="row q-pa-md flex flex-center">
          <q-pagination
            class="announcement_page"
            v-model="pagination.page"
            color="grey-6"
            active-color="black"
            :max="pagesNumber"
            size="2vmin"
            direction-links
            flat
            padding="1vmax"
            icon-prev="img:assets/images/announcement_btn_01.png"
            icon-next="img:assets/images/announcement_btn_02.png"
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
    label: "NO",
    align: "center",
    field: (row) => row.no,
    format: (val) => `${val}`,
    sortable: true,
    style: "width: 10%; height: 5vmax; font-size: 1.2vmax",
  },
  {
    name: "Notice",
    align: "center",
    label: "Notice",
    field: (row) => row.notice,
    sortable: true,
    required: true,
    style: "font-size: 1.2vmax",
  },
  {
    name: "Date",
    label: "Date",
    field: (row) => row.date,
    align: "center",
    sortable: true,
    required: true,
    style: "width: 10%; font-size: 1.2vmax;",
  },
];
const rows = [
  {
    no: 1,
    notice: "Announcement",
    date: date,
  },
  {
    no: 2,
    notice: "I'm a really great person.2",
    date: date,
  },
  {
    no: 3,
    notice: "I'm a really great person.3",
    date: date,
  },
  {
    no: 4,
    notice: "I'm a really great person.4",
    date: date,
  },
];
console.log(now);
export default {
  components: { Header, PageController },
  data() {
    return {
      type: "",
      announcement: [
        {
          title: "I'm a great person",
          date: date,
          summary:
            "In the first volume of his presidential memoirs, Barack Obama offers personal reflections on his formative years and pivotal moments through his first term. In the first volume of his presidential memoirs, Barack Obama offers personal reflections on his formative years and pivotal moments through his first term.",
          type: "nonfiction",
          contributor: "Barack Obama",
          showDetail: false,
        },
        {
          title: "I'm a great person",
          date: date,
          summary:
            "The activist and public speaker describes her journey of listening to her inner voice.",
          type: "nonfiction",
          contributor: "Glennon Doyle",
          showDetail: false,
        },
        {
          title: "I'm a great person",
          date: date,
          summary:
            "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years.",
          type: "nonfiction",
          contributor: "Matthew McConaughey",
          showDetail: false,
        },
      ],
    };
  },
  methods: {
    toggleDetail(a) {
      a.showDetail = !a.showDetail;
    },
    filterList() {
      this.type = event.target.value;
    },
  },
  computed: {
    uniqueItemsList: function () {
      var types = [];
      this.announcement.forEach((item) => {
        if (!types.includes(item.type)) {
          types.push(item.type);
        }
      });

      return types;
    },
  },
  setup() {
    const pagination = ref({
      sortBy: "desc",
      descending: false,
      page: 1,
      rowsPerPage: 3,
    });
    const isTogglePage = ref(false);
    const modal = ref(false);
    return {
      pagination,
      columns,
      rows,
      isTogglePage,
      modal,
      pagesNumber: computed(() =>
        Math.ceil(rows.length / pagination.value.rowsPerPage)
      ),
    };
  },
};
</script>
<style lang="scss" scope>
#app {
  font-family: "S-CoreDream4";
  text-align: center;
  margin: 3vmax auto;
}
.announcement {
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("images/announcement_bg.png") 100% no-repeat;
  animation: gradient 4s ease-in-out infinite;
}
.announcement-title {
  font-family: "S-CoreDream9";
  font-size: 6vmax;
  margin: 10% auto;
  margin-bottom: 3%;
  text-align: center;
}
.title > span {
  font-family: "S-CoreDream6";
  font-size: 1.5vmax;
}
.announcement-list,
.announcement-detail {
  position: relative;
  height: 3vmax;
  font-size: 1vmax;
  line-height: 0.2vmax;
  font-size: 1.2vmax;
  padding: 3%;
  border-bottom: 1px solid grey;
  width: 90%;
  margin: 0 auto;
  font-family: "S-CoreDream5";
}

.announcement-detail {
  font-size: 1.5vmin;
  font-family: "S-CoreDream4";
  line-height: 1.5vmax;
  padding: 6% 0;
}

li {
  border: none;
  margin: 1% 3%;
  text-align: left;
}
.announcement_page {
  position: absolute;
  left: 48%;
  margin-bottom: -5%;
  transform: translateX(-50%);
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
@media screen and (max-width: 1024px) {
  .announcement-title {
    font-size: 5vmax;
    margin-top: 10%;
  }

  @media screen and (max-width: 768px) {
    .announcement-title {
      font-size: 4vmax;
      margin-top: 20%;
    }
  }
  @media screen and (max-width: 440px) {
    .announcement-title {
      font-size: 3vmax;
      margin-top: 20%;
    }
  }
}
</style>

<!--<template>
  <div>
    <Header />
    <q-layout class="announcement">
      <div class="announcement-title">ANNOUNCEMENT</div>
      <div class="q-pa-md announcement-table">
        <div class="container">
          <div id="media-list">
            <h1>{{ title }}</h1>
            <select v-on:change="filterList">
              <option value="">Select Media Type...</option>
              <option v-for="(item, i) in uniqueItemsList" :key="i">
                {{ item }}
              </option>
            </select>
            <ul>
              <li
                v-show="type === '' || type === media.type"
                v-for="(media, i) in announcement"
                :key="i"
                v-on:click="toggleDetail(media)"
              >
                <h3>{{ media.title }}</h3>
                <div v-show="media.showDetail">
                  <p class="byline" v-if="media.contributor">
                    By: {{ media.contributor }}
                  </p>
                  <p>{{ media.summary }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>




   

        <div class="row q-pa-md flex flex-center">
          <q-pagination
            class="announcement_page"
            v-model="pagination.page"
            color="grey-6"
            active-color="black"
            :max="pagesNumber"
            size="1.5vmax"
            direction-links
            flat
            padding="1vmax"
            icon-prev="img:assets/images/announcement_btn_01.png"
            icon-next="img:assets/images/announcement_btn_02.png"
          />
        </div>
      </div>
      <PageController />
    </q-layout>
  </div>
</template> -->
<!--<script>
// import Header from "../../components/Header/Header.vue";
// import PageController from "../../components/PageController/PageController.vue";
// import { ref, computed } from "vue";
// let now = new Date();
// let date = now.toLocaleDateString();
// const columns = [
//   {
//     name: "NO",
//     required: true,
//     label: "NO",
//     align: "center",
//     field: (row) => row.no,
//     format: (val) => `${val}`,
//     sortable: true,
//     style: "width: 10%; height: 5vmax; font-size: 1.2vmax",
//   },
//   {
//     name: "Notice",
//     align: "center",
//     label: "Notice",
//     field: (row) => row.notice,
//     sortable: true,
//     required: true,
//     style: "font-size: 1.2vmax",
//   },

//   {
//     name: "Date",
//     label: "Date",
//     field: (row) => row.date,
//     align: "center",
//     sortable: true,
//     required: true,
//     style: "width: 10%; font-size: 1.2vmax;",
//   },
// ];

// const rows = [
//   {
//     no: 1,
//     notice: "Announcement",
//     date: date,
//   },
//   {
//     no: 2,
//     notice: "I'm a really great person.2",
//     date: date,
//   },
//   {
//     no: 3,
//     notice: "I'm a really great person.3",
//     date: date,
//   },
//   {
//     no: 4,
//     notice: "I'm a really great person.4",
//     date: date,
//   },
//   {
//     no: 5,
//     notice: "I'm a really great person.5",
//     date: date,
//   },
//   {
//     no: 6,
//     notice: "I'm a really great person.6",
//     date: date,
//   },
//   {
//     no: 7,
//     notice: "I'm a really great person.7",
//     date: date,
//   },
//   {
//     no: 8,
//     notice: "I'm a really great person.",
//     date: date,
//   },
//   {
//     no: 9,
//     notice: "I'm a really great person.",
//     date: date,
//   },
//   {
//     no: 10,
//     notice: "I'm a really great person.",
//     date: date,
//   },
//   {
//     no: 11,
//     notice: "I'm a really great person.",
//     date: date,
//   },
// ];
// export default {
//   data() {
//     return {
//       data() {
//         return {
//          
//         };
//       },
//       methods: {
//         toggleDetail(media) {
//           media.showDetail = !media.showDetail;
//         },
//         filterList() {
//           this.type = event.target.value;
//         },
//       },
//       computed: {
//         uniqueItemsList: function () {
//           var types = [];
//           this.announcement.forEach((item) => {
//             if (!types.includes(item.type)) {
//               types.push(item.type);
//             }
//           });
//           return types;
//         },
//       },
//     };
//   },
//   components: { Header, PageController },
 
// };
</script>-->
<!--<style lang="scss" scope>
// .table tr {
//   cursor: pointer;
// }
// .announcement {
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   background: url("images/announcement_bg.png") 100% 100% no-repeat;
//   animation: gradient 4s ease-in-out infinite;
// }

// .announcement-title {
//   font-family: "S-CoreDream9";
//   font-size: 6vmax;
//   margin: 10% auto;
//   margin-bottom: 3%;
//   text-align: center;
// }
// .q-table th {
//   font-size: 1.4vw;
//   border-bottom: 5px solid grey;
//   padding-bottom: 0.5%;
//   position: relative;
// }
// .q-table th.sortable {
//   padding: 2vw;
// }
// .q-table th::after {
//   content: "";
//   display: block;
//   position: absolute;
//   left: 0;
//   bottom: -8%;
//   width: 100%;
//   border-bottom: 3px solid #6b6b6b;
//   margin-bottom: 1vw;
// }
// .q-icon > img {
//   position: absolute;
//   width: 5vmin;
//   height: 5vmin;
// }
// .announcement-table {
//   position: relative;
//   margin: 1% 10%;
// }
// .announcement_page {
//   position: absolute;
//   left: 50%;
//   transform: translateX(-50%);
// }
// @keyframes gradient {
//   0% {
//     background-position: 0% 50%;
//   }
//   50% {
//     background-position: 100% 50%;
//   }
//   100% {
//     background-position: 0% 50%;
//   }
// }
// @media screen and (max-width: 1024px) {
//   .announcement-title {
//     font-size: 5vmax;
//     margin-top: 10%;
//   }
//   .q-table {
//     tbody tr {
//       height: 10vmax;
//     }
//     th {
//       font-size: 3vmin;
//     }
//     td::after {
//       font-size: 5vmin;
//     }
//   }
//   .announcement-table {
//     margin: 1% 5%;
//   }
//   .announcement_page {
//     bottom: -10%;
//   }
//   @media screen and (max-width: 768px) {
//     .announcement-title {
//       font-size: 4vmax;
//       margin-top: 20%;
//     }
//     .announcement-table {
//       margin: 10% 2%;
//     }
//     .announcement_page {
//       bottom: 0;
//     }
//   }
//   @media screen and (max-width: 440px) {
//     .announcement-title {
//       font-size: 3vmax;
//       margin-top: 20%;
//     }
//   }
// }
</style>-->
