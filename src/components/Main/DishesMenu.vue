<template>
  <el-container tag="section" class="dishes-menu" direction="vertical">
    <el-row class="figure-container" type="flex" justify="center">
      <el-col class="figure" v-bind:style="{'background-image': 'url(' + figure + ')'}">
        <span>The Menu</span>
      </el-col>
    </el-row>

    <el-row class="menu-container" :gutter="117" type="flex" justify="center">
      <el-col>
        <ul class="menu menu-left">
          <li class="item" v-for="(item, index) in leftColumnItems" :key="'' + index">
            <h4 class="headline">
              {{ item.headline }}
              <span class="spacing-line"/>
              {{ "$" + item.price }}
            </h4>
            <p class="note">{{ item.note }}</p>
          </li>
        </ul>
      </el-col>

      <el-col>
        <ul class="menu menu-right">
          <li class="item" v-for="(item, index) in rightColumnItems" :key="'' + index">
            <h4 class="headline">
              {{ item.headline }}
              <span class="spacing-line"/>
              {{ "$" + item.price }}
            </h4>
            <p class="note">{{ item.note }}</p>
          </li>
        </ul>
      </el-col>
    </el-row>

    <el-button @click="isActive = !isActive">
      load more<span>|</span>
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
  props: {},
  data: function() {
    return {
      figure: require("../../assets/billboard-figure.jpg"),
      isActive: false,
      leftColumnItems: [
        {
          headline: "Voluptate cillum fugiat.",
          note: "Cheese, tomato, mushrooms, onions.",
          price: 50
        },
        {
          headline: "Metus varius laoreet.",
          note: "Chicken, mozzarella cheese, onions.",
          price: 62
        },
        {
          headline: "Donec sodales magna.",
          note: "Tuna, Sweetcorn, Cheese.",
          price: 25
        },
        {
          headline: "Saugue velit cursus.",
          note: "Pineapple, Minced Beef, Cheese.",
          price: 30
        }
      ],
      rightColumnItems: [
        {
          headline: "Arcu pede enim justo.",
          note: "Tuna, Sweetcorn, Cheese.",
          price: 45
        },
        {
          headline: "Cras dapibussemper nisi.",
          note: "Pineapple, Minced Beef, Cheese.",
          price: 32
        },
        {
          headline: "Quam semper libero.",
          note: "Cheese, tomato, mushrooms, onions.",
          price: 15
        },
        {
          headline: "Nam eget dui Etiam.",
          note: "Chicken, mozzarella cheese, onions.",
          price: 35
        }
      ]
    };
  }
};
</script>

<style scoped lang='scss'>
.dishes-menu {
	min-height: 600px;
	margin-bottom: 172px;

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
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
  }

  .menu-container {
    margin-bottom: 86px;

    & > * {
      width: max-content;
    }

    .menu {
      width: 492px;

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
            margin: 12px 43px 0;
            outline: 1px solid #e3e1e1;
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

