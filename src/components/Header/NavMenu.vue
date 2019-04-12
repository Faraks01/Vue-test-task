<template>
  <el-menu v-if="!mobile" mode="horizontal">
    <el-menu-item v-for="(item, index) in items" :key="index" :index="'' + index">
      <a :href="item.url">{{ item.link }}</a>
    </el-menu-item>
  </el-menu>
  <el-menu v-else :collapse="true" :class="{mobile: mobile}" menu-trigger="click" mode="horizontal">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-menu"></i>
      </template>
      <el-menu-item v-for="(item, index) in items" :key="index" :index="index + '-1'">
        <a :href="item.url">{{ item.link }}</a>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      items: [
        { link: "Our Story", url: "#" },
        { link: "Menu", url: "#" },
        { link: "Reservations", url: "#" },
        { link: "News", url: "#" },
        { link: "Rviews", url: "#" }
      ],
      mobile: false,
      clientWidth: 0
    };
  },
  beforeMount() {
    if (document.documentElement.clientWidth <= 992) {
      this.mobile = true;
    }
  }
};
</script>

<style scoped lang='scss'>
.el-menu {
  display: inline-block;
  border: none !important;

  * {
    font-family: "Aleo-Regular";
    font-weight: normal;
		font-style: normal;
		color: #3b3b3b;
		text-align: center;
		a {
			text-decoration: none;
		}
  }

  &.mobile {
    position: absolute;
    left: 5%;

    .el-icon-menu {
			position: relative;
			left: -6px;
			top: -4px;
      width: 30px;
      height: 30px;
      font-size: 34px;
    }
  }
  .el-menu-item {
    font-size: 16px;
    padding: 0 24px;
    margin-bottom: 10px;
  }
}
</style>

