<template>
  <el-footer tag="footer" height="317px">
    <div class="footer-content">
      <ul class="list" v-for="(row, key) in rows" :key="key">
        <li v-for="(item, index) in row" :key="index" :class="{ bold: item.bold }" class="item">
          <a v-if="item.url" :href="item.url">{{ item.content }}</a>
          <img v-else-if="item.logo" :src="item.logo">
          <template v-else>{{ item.content }}</template>
        </li>
      </ul>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      rows: {
        row1: [
          { content: "New York Restaurant", bold: true },
          { content: "3926 Anmoore Road" },
          { content: "New York, NY 10014" },
          { content: "718-749-1714", bold: true }
        ],
        row2: [
          { content: "France Restaurant", bold: true },
          { content: "68, rue de la Couronne" },
          { content: "75002 PARIS" },
          { content: "02.94.23.69.56", bold: true }
        ],
        row3: [
          { content: "Blog", url: "#", bold: true },
          { content: "Careers", url: "#", bold: true },
          { content: "Privacy Policy", url: "#", bold: true },
          { content: "Contact", url: "#", bold: true }
        ],
        row4: [
          { logo: require("../../assets/logo-white.png") },
          { content: "© All Rights Reserved 2014." },
          { content: "Find More at Pixelhint.com" }
        ]
      }
    };
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.el-footer {
	margin-top: 200px;
	@include breakpoint("small") {
    margin-top: 100px;
  }
  background-color: #3b3b3b;
  .footer-content {
    height: inherit;
    padding: 0 13.5%;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    @include breakpoint("small") {
      flex-direction: column;
      justify-content: space-evenly;
    }
    .list {
			flex: 0 0 max-content;
			margin: 0 10px !important;
      margin-top: -15px !important;
      position: relative;
      height: max-content;

      display: flex;
      flex-direction: column;

      &:nth-child(1) {
        @include breakpoint("medium") {
          display: none;
        }
      }
      &:nth-child(2) {
        @include breakpoint("medium") {
          display: none;
        }
      }
      &:nth-child(3) {
				margin-top: 0 !important;
        @include breakpoint("small") {
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: center;
          .item {
            margin: 0 10px;
          }
        }
        .item,
        a {
          line-height: 34px;
        }
      }
      &:nth-child(4) {
        @include breakpoint("small") {
          align-items: center;
        }
        .item {
          position: relative;
          top: 10px;
          letter-spacing: 1px;
          line-height: 30px;
          font-size: 14px;
          img {
            position: relative;
            top: -12px;
          }
        }
      }
      .item,
      a {
        display: inline-block;
        width: max-content;
        color: #fff;
        font-family: "Aleo-Light";
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 30px;

        &.bold {
          font-family: "Aleo-Bold";
        }
      }
    }
  }
}
</style>
