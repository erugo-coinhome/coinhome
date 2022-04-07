<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",

  components: {},
  setup() {
    return {};
  },
};
</script>
<style>
@font-face {
  font-family: "racing";
  src: url("assets/font/RacingSansOne-Regular.ttf") format("truetype");
  font-weight: 400;
  font-style: normal;
}
* {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  -webkit-text-size-adjust: none;
}
/* li 장식 제거 */
li {
  list-style: none;
}
/* 이미지 와 글자의 정렬로 생기는 여백 제거 */
img {
  vertical-align: top;
}
/* i,em,address */
i,
em,
address {
  font-style: normal;
}
input,
button {
  vertical-align: bottom;
}
</style>
