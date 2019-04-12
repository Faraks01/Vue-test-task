<template>
  <el-container class="billboard-wrapper" direction="vertical">
    <el-row
      type="flex"
      class="billboard"
      v-bind:style="{'background-image': 'url(' + bgImage + ')'}"
    >
      <el-col class="caption">
        <h1>This Template Is Awesome</h1>
        <p>resto restaurant home page website template</p>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "Billboard",
  data: function() {
    return {
      bgImage: require("../../assets/billboard-background.jpg")
    };
  }
};
</script>

<style scoped lang='scss'>
.billboard-wrapper {
  height: 574px;

  .billboard,
  .figure {
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .billboard {
    height: 574px;
    background-color: #3f3f3f;
    border-bottom: 4px solid #f34949;

    .caption {
      color: #fff;
      width: max-content;
      height: max-content;
      margin: auto;
      text-align: center;

      * {
        padding: 0;
        margin: 0;
      }

      h1 {
        font-family: "WCManoNegraBtaRegular";
        font-weight: normal;
        font-style: normal;
        font-size: 100px;

        position: relative;
        left: -5px;
        letter-spacing: -9px;
      }

      p {
        font-family: "Aleo-Regular";
        font-weight: normal;
        font-style: normal;
        font-size: 16px;

        position: relative;
        top: -8px;
        word-spacing: 5px;

        &::before,
        &::after {
          content: "————";
          letter-spacing: -2px;
          margin: 0 30px;
        }
      }

      @include breakpoint("small") {
        h1 {
          font-size: 70px;
          letter-spacing: -4px;
        }

        p {
					font-size: 14px;
          &::before,
          &::after {
            display: none;
          }
        }
      }
    }
  }
}
</style>

