<template>
  <el-container id="app" direction="vertical">
  </el-container>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "app",
  components: {
    HelloWorld
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
}
</style>
