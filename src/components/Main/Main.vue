<template>
  <el-main>
    <Billboard></Billboard>
		<DishesMenu></DishesMenu>
  </el-main>
</template>

<script>
import Billboard from "./Billboard.vue";
import DishesMenu from "./DishesMenu.vue";

export default {
  name: "Main",
  components: {
		Billboard,
		DishesMenu
  }
};
</script>

<style scoped lang='scss'>
</style>

