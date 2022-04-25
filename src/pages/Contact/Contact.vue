<template>
  <div>
    <Header />
    <div class="contact row">
      <div class="contact-left col-md-6 col-xs-12">
        <h2 class="contact-title">CONTACT</h2>
        <div class="contact-txt">
          If you have any questions or inquiries, please contact the following
          contact information.
        </div>
        <div class="sns row">
          <div class="col-6 sns-left">
            <div
              v-for="(c, idx) in contact"
              :key="idx"
              class="link row"
              @click="linkHandler(c.url)"
            >
              <img
                :src="`assets/images/icon${idx + 1}.png`"
                :alt="c.name"
                class="col-2 cImg"
              />
              <p class="col-9">{{ c.name }}</p>
            </div>
          </div>
          <div class="col-6 sns-right">
            <div
              v-for="(c2, idx) in contact2"
              :key="idx"
              class="link row"
              @click="linkHandler(c2.url)"
            >
              <img
                :src="`assets/images/icon${idx + 4}.png`"
                :alt="c2.name"
                class="col-2 cImg"
                style="background-size: contain; background-position: center"
              />
              <p class="col-9">{{ c2.name }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-right col-md-6 col-xs-12">
        <div class="info-box">
          <table>
            <tr>
              <th>Address</th>
              <td>
                129, Seochojungang-ro 8-gil, Gangnam-gu, Seoul, Republic of
                Korea
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>+82 2 545 0265</td>
            </tr>
            <tr>
              <th>E-Mail</th>
              <td>erugo@erugoworld.com</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>+82 2 6008 0265</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="footer row-xs-12"></div>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
export default {
  data() {
    return {
      contact: [
        { name: "Telegram Channel", url: "https://www.securitywallet.co.kr/" },
        {
          name: "KaKaotalk Open Chatting",
          url: "https://open.kakao.com/o/gCeEqVzd",
        },
        {
          name: "Official Blog",
          url: "https://blog.naver.com/erugocoin_official",
        },
      ],
      contact2: [
        {
          name: "Telegram Community",
          url: "https://t.me/erugo",
        },
        { name: "Official Twitter", url: "https://twitter.com/ErugoWorldCoin" },
        {
          name: "Official Youtube Channel",
          url: "https://www.youtube.com/channel/UCj-Hyp1afwEgmSJ6gTYx4wA",
        },
      ],
    };
  },
  components: { Header },
  methods: {
    linkHandler(url) {
      window.open(url);
    },
  },
};
</script>
<style lang="scss" scope>
.contact {
  width: 85%;
  height: 100%;
  padding-top: 8%;
  margin: 0 auto;
}
.contact-title {
  font-family: "S-CoreDream8";
  font-size: 3vmax;
  margin-bottom: 5%;
  text-align: left;
  background-color: skyblue;
}
.contact-txt {
  font-family: "S-CoreDream7";
  font-size: 1.2vmax;
  margin-right: 5%;
}
.sns {
  background-color: violet;
  margin: 5% 0;
  margin-right: 20%;
}
.link {
  width: 100%;
  background-color: orange;
  display: flex;
  align-items: center;
}
.link > p {
  margin: 0;
}
.contact-left {
  background-color: tan;
}
.contact-right {
  background-color: tomato;
}
table {
  width: 100%;
}

// footer
.footer {
  background-color: yellowgreen;
}
</style>
