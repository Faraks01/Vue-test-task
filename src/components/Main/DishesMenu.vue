<template>
  <el-container tag="section" class="dishes-menu" direction="vertical">
    <el-row class="figure-container" type="flex" justify="center">
      <el-col class="figure" v-bind:style="{'background-image': 'url(' + figure + ')'}">
        <span>The Menu</span>
      </el-col>
    </el-row>

    <div class="menu-container" :class="{expand: isActive}">
      <ul class="menu" v-for="(value, key) in dishesData" :key="'' + key">
        <li class="item" v-for="(item, index) in value" :key="'' + index">
          <h4 class="headline">
            {{ item.headline }}
            <span class="spacing-line"/>
            {{ "$" + item.price }}
          </h4>
          <p class="note">{{ item.note }}</p>
        </li>
      </ul>

    </div>

    <el-button @click="isActive = !isActive">
      load more
      <span>|</span>
      <i
        class="el-icon-right"
        :class="{'el-icon-arrow-down': !isActive, 'el-icon-arrow-up': isActive}"
      />
    </el-button>
  </el-container>
</template>

<script>
export default {
  name: "DishesMenu",
  data: function() {
    return {
      figure: require("../../assets/billboard-figure.jpg"),
      isActive: false
    };
  },
  computed: {
    dishesData() {
			console.log(this.$store.state.Static);
      return this.$store.state.Static.dishesMenu;
    }
  }
};
</script>

<style scoped lang='scss'>
.dishes-menu {
  min-height: 600px;
  margin-bottom: 172px;
  @include breakpoint("small") {
    margin-bottom: 90px;
  }

  .figure-container {
    margin-bottom: 74px;

    .figure {
      background-attachment: scroll;
      background-repeat: no-repeat;
      background-size: cover;

      position: relative;
      top: -4px;
      width: 155px;
      height: 75px;
      background-color: #fff;

      display: flex;

      span {
        display: inline-block;
        margin: 20px auto;

        color: #fff;
        font-family: "AleoBold";
        font-weight: normal;
        font-style: normal;
        font-size: 22px;
        letter-spacing: 1px;
      }
    }
  }

  .menu-container {
		max-height: calc(323px + 56px);
    margin: 0 auto;
		margin-bottom: 30px;
		padding: 0 5%;

    display: flex;
		flex-flow: row wrap;
		overflow-y: hidden;
		justify-content: center;
		
		&.expand {
			max-height: initial;
		}

    @include breakpoint("medium") {
      flex-wrap: wrap;
    }

    & > * {
      margin: 0 calc(117px / 2) 56px !important;
      flex: 0 0 492px;
      @include breakpoint("small") {
        flex-basis: 300px;
      }
    }

    .menu {
      .item {
        margin-bottom: 57px;
        &:last-child {
          margin-bottom: 0;
        }

        & > * {
          margin: 0;
          padding: 0;
        }

        .headline {
          font-family: "Aleo-Regular";
          font-weight: normal;
          font-style: normal;
          font-size: 16px;
          letter-spacing: 0.8px;

          margin-bottom: 7px;

          display: flex;

          .spacing-line {
            display: inline-block;
            flex: 1 0 0;
            height: 0px;
            outline: 1px solid #e3e1e1;
            margin: 12px 43px 0;
            @include breakpoint("small") {
              margin: 12px 20px 0;
            }
          }
        }

        .note {
          font-family: "Aleo-LightItalic";
          font-weight: normal;
          font-style: normal;
          font-size: 12px;
          word-spacing: 6px;
          letter-spacing: -0.1px;
        }
      }
    }
  }

  .el-button {
    width: 133px;
    height: 34px;
    margin: auto;
    padding: 0;
    border-radius: 0;
    color: #b7b7b7;

    font-family: "Aleo-Regular";
    font-weight: normal;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 0.5px;
    word-spacing: 2px;

    span {
      padding: 0 10px;
    }
  }
}
</style>

