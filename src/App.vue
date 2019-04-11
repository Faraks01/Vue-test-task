<template>
  <el-container id="app" direction="vertical">
    <Header/>
  </el-container>
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  }
};
</script>

<style lang='scss'>
body {
  margin: 0;
}

#app {
  width: 1500px;
  height: 3088px;
  & > * {
    padding: 0;
  }
	
	*
		a {
			text-decoration: none;
		}
}
</style>
