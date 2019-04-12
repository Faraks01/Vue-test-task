<template>
  <el-header height="110px">
    <el-row tag="nav" type="flex" justify="center" align="middle">
      <el-col :span="19">
        <img src="../../assets/logo.png" alt="Logotype">
        <NavMenu/>
      </el-col>
    </el-row>
  </el-header>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "Header",
  components: {
    NavMenu
  }
};
</script>

<style scoped lang='scss'>
.el-header {
  width: 100%;

  .el-row {
    width: inherit;
    height: inherit;
  }

  .el-col {
    display: flex;
		justify-content: space-between;
		@include breakpoint('medium') {
			justify-content: center;
		}
    padding: 0 18px 0 42px;
    align-items: center;
  }
}
</style>

