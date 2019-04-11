<template>
  <el-main>
    <Billboard/>
		<DishesMenu/>
		<DishesShowcase/>
  </el-main>
</template>

<script>
import Billboard from "./Billboard.vue";
import DishesMenu from "./DishesMenu.vue";
import DishesShowcase from "./DishesShowcase.vue";

export default {
  name: "Main",
  components: {
		Billboard,
		DishesMenu,
		DishesShowcase
  }
};
</script>

<style scoped lang='scss'>
</style>

