<template>
  <el-container id="app" direction="vertical">
    <Header/>
    <Main/>
    <Footer/>
  </el-container>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>

<style lang='scss'>
body {
  margin: 0;
}

#app {
  max-width: 1500px;
  height: 3088px;
  & > * {
    padding: 0;
  }
	
	*
		ul {
			margin: 0;
			padding: 0;
			list-style-type: none;
		}

		a {
			text-decoration: none;
		}
}
</style>
