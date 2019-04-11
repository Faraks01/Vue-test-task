<template>
  <el-menu mode="horizontal">
		<el-menu-item v-for="(item, index) in items" :key="index" :index="'' + index">
			<a :href="item.url">{{ item.link }}</a>
		</el-menu-item>
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
			]
		};
  }
};
</script>

<style scoped lang='scss'>
.el-menu {
  display: inline-block;
  border: none !important;
  .el-menu-item {
    font-family: "Aleo-Regular";
    font-weight: normal;
    font-style: normal;
    font-size: 16px;
    padding: 0 24px;
		margin-bottom: 10px;
  }
}
</style>

