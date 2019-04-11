<template>
  <el-main>
    <Billboard/>
		<DishesMenu/>
		<DishesShowcase/>
		<Gallery/>
  </el-main>
</template>

<script>
import Billboard from "./Billboard.vue";
import DishesMenu from "./DishesMenu.vue";
import DishesShowcase from "./DishesShowcase.vue";
import Gallery from "./Gallery.vue";

export default {
  name: "Main",
  components: {
		Billboard,
		DishesMenu,
		DishesShowcase,
		Gallery
  }
};
</script>

<style scoped lang='scss'>
</style>

