<template v-if="parseInt(localStorage.getItem('popup-close-time')) < 0">
  <div>
    <div id="popupWrapper">
      <div class="popupImg"></div>
      <div class="popupBottom">
        <input type="checkbox" @change="closeCheck" class="closeCheck" />
        오늘하루 그만 보기
        <q-btn @click="closePopup" class="closePopup">CLOSE</q-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
let now = new Date().getDate();
let endDay = new Date().getDate() + 1;
console.log(parseInt(localStorage.getItem("popup-close-time")));
export default {
  setup() {
    // const popUp = () => {
    //   localStorage.getItem("popup-close-time").length < 1;
    //   showPopup = ref(true);
    // };
    const closeCheck = (e) => {
      e.stopPropagation();
      e.preventDefault();
      var popupWrapper = document.querySelector("#popupWrapper");
      if (now < endDay) {
        localStorage.setItem("popup-close-time", new Date().getTime());
        popupWrapper.classList.add("hidden");
      }
    };
    const closePopup = (e) => {
      var popupWrapper = document.querySelector("#popupWrapper");
      e.stopPropagation();
      e.preventDefault();
      popupWrapper.classList.add("hidden");
    };
    return {
      closeCheck,
      // closePopup,
      showPopup: ref(false),
      // popUp,
    };
  },
};
</script>
<style lang="scss" scope>
$width: 300px;
$height: 520px;
$fontSize: 14px;
#popupWrapper {
  width: $width;
  height: $height;
  top: $height / 3;
  left: $width / 5;
  position: absolute;
  background: transparent;
  z-index: 1111111;
}
.popupImg {
  width: "100%";
  height: $height;
  background: url(popup-05.jpg) no-repeat center;
  background-size: cover;
  overflow: hidden;
}
.popupBottom {
  width: $width;
  height: $fontSize * 4;
  background-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: $fontSize;
  padding-right: 10px;
  gap: 10px;
}
.closeCheck {
  width: $fontSize * 1.5;
  height: $fontSize * 1.5;
  cursor: pointer;
}
.closePopup {
  font-size: $fontSize;
  padding: 0 4px;
  cursor: pointer;
}
.hidden {
  display: none;
}
.block {
  display: block;
}
</style>
