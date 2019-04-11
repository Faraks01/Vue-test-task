<template>
  <el-row tag="section" class="dishes-showcase" type="flex" justify="center" direction="vertical">
    <el-col :span="18">
      <el-row type="flex" align="middle" class="headline">
        <el-col :span="22">
          <h1 class="title">FEATURED DISHES</h1>
        </el-col>
        <el-col :span="2" type="flex">
          <ul class="dots-indicator">
            <li class="dot"></li>
            <li class="dot" :class="{active: true}"></li>
            <li class="dot"></li>
            <li class="dot"></li>
          </ul>
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="60" justify="center" class="gallery" direction="horizontal">
        <el-col class="card-wrapper" :span="6" v-for="(card, index) in cards" :key="'' + index">
          <el-card class="card" :body-style="{ padding: '0px' }" shadow="never">
            <img :src="card.pic" class="picture">
            <span class="caption">
              <span>{{ card.caption }}</span>
              <span>{{ "$" + card.price }}</span>
            </span>
            <el-rate class="rate-bar" v-model="card.rating" :disabled="true"/>
          </el-card>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "DishesShowcase",
  data() {
    return {
      cards: [
        {
          caption: "Fugiat nulla sint",
          price: 30,
          rating: 4,
          pic: require("../../assets/dish-1.jpg")
        },
        {
          caption: "Daute irure dolor",
          price: 30,
          rating: 3,
          pic: require("../../assets/dish-2.jpg")
        },
        {
          caption: "Officia deserunt mollit",
          price: 30,
          rating: 5,
          pic: require("../../assets/dish-3.jpg")
        },
        {
          caption: "Pim minim veniam",
          price: 30,
          rating: 4,
          pic: require("../../assets/dish-4.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.dishes-showcase {
  padding: 0 15px;
  .headline {
    margin-bottom: 56px;
    .title {
      display: flex;
      font-family: "Aleo-Bold";
      font-size: 20px;
      letter-spacing: 1px;

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

    .dots-indicator {
			margin-left: auto !important;
			width: max-content;
      display: flex;
      .dot {
        background-color: #dedede;
        border-radius: 50%;
        margin-left: 11.4px;
        width: 9px;
				height: 9px;
				
				&.active {
					background-color: #9b9b9b;
				}
      }
    }
  }
  .card-wrapper {
    .card {
      margin: auto;
      width: 230px;
      height: 268px;
      border: none;

      .picture {
        display: block;
        width: 100%;
      }
      .caption {
        font-family: "Aleo-Light";
        font-size: 16px;
        letter-spacing: 0.8px;

        display: flex;
        justify-content: space-between;

        margin-top: 28.4px;
      }

      .el-rate {
        margin-top: 6px;
        display: inline-block;
        transform: scale(0.7) translateX(-25px);
      }
    }
  }
}
</style>