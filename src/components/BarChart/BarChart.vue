<template lang="">
  <div>
    <canvas id="staking-chart" width="100%" height="100%" />
    <!-- <canvas id="staking-line" width="100%" height="100%" /> -->
  </div>
</template>
<script>
export default {
  methods: {
    chart() {
      const ctx = document.querySelector("#staking-chart").getContext("2d");
      const stakingChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["6Months", "9Months", "12Months"],
          datasets: [
            {
              label: "Interest rate",
              data: [3, 4, 6],
              backgroundColor: [
                "rgba(225, 122, 24)",
                "rgba(225, 122, 24)",
                "rgba(225, 122, 24)",
              ],
              //   borderColor: [
              //     "rgb(225, 122, 24)",
              //     "rgb(225, 122, 24)",
              //     "rgb(225, 122, 24)",
              //   ],
              borderWidth: 1,
              barThickness: 60,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              min: 0,
              max: 7,
            },
          },
        },
      });
    },
    // line() {
    //   const line = document.querySelector("#staking-line").getContext("2d");
    //   const stakingLine = new Chart(line, {
    //     type: "line",
    //     data: {
    //       labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
    //       datasets: [
    //         {
    //           data: [65, 59, 80, 81, 56, 55, 40],
    //           borderColor: "rgb(75, 192, 192)",

    //           fill: false,
    //           pointStyle: "circle",
    //           pointRadius: 10,
    //           pointHoverRadius: 15,
    //           tension: 0.1,
    //           order: 1,
    //         },
    //       ],
    //     },
    //     options: {
    //       responsive: true,
    //       plugins: {
    //         title: {
    //           display: true,
    //         },
    //       },
    //     },
    //   });
    //   //line
    // },
  },
  mounted() {
    this.chart();
    // this.line();
  },
  data() {
    return {
      stakingChart: null,
      //   stakingLine: null,
    };
  },
};
</script>
<style lang=""></style>
