<template>
  <el-row tag="section" class="gallery" type="flex" justify="center">
    <el-col :span="18">
      <el-row>
        <el-col class="headline" :span="15">
          <h1>THE GALLERY</h1>
        </el-col>
      </el-row>

      <el-row>
        <el-col class="picture" :span="8" tag="img" :src="pics.pic1"></el-col>
        <el-col :span="16">
          <el-row>
            <el-col class="picture" tag="img" :src="pics.pic2" :span="12"></el-col>
            <el-col class="picture" tag="img" :src="pics.pic3" :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col class="picture" tag="img" :src="pics.pic4" :span="12"></el-col>
            <el-col class="picture" tag="img" :src="pics.pic5" :span="12"></el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
	name: "Gallery",
	data() {
		return {
			pics: {
				"pic1": require("../../assets/gallery-pic-1.jpg"),
				"pic2": require("../../assets/gallery-pic-2.jpg"),
				"pic3": require("../../assets/gallery-pic-3.jpg"),
				"pic4": require("../../assets/gallery-pic-4.jpg"),
				"pic5": require("../../assets/gallery-pic-5.jpg")
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.gallery {
	margin-top: 177px;
	padding: 0 15px;
  .headline {
		margin-bottom: 55px;
    h1 {
      display: flex;
      font-family: "Aleo-Bold";
      font-size: 20px;
      letter-spacing: 2.3px;

      &::after {
        content: "";
        display: inline-block;
        margin: auto;
        margin-left: 19px;
        height: 0;
        width: 200px;
        outline: 1px solid #e3e1e1;
      }
    }
	}
}
</style>