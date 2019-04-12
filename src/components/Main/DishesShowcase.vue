<template>
  <section class="dishes-showcase">
    <div class="headline">
      <h1 class="title">FEATURED DISHES</h1>
      <ul class="dots-indicator">
        <li class="dot"></li>
        <li class="dot" :class="{active: true}"></li>
        <li class="dot"></li>
        <li class="dot"></li>
      </ul>
    </div>
    <el-card
      class="card"
      v-for="(card, index) in dishesCardsData"
      :key="'' + index"
      :body-style="{ padding: '0px' }"
      shadow="never"
    >
      <img :src="card.pic" class="picture">
      <span class="caption">
        <span>{{ card.caption }}</span>
        <span>{{ "$" + card.price }}</span>
      </span>
      <el-rate class="rate-bar" v-model="card.rating" :disabled="true"/>
    </el-card>
  </section>
</template>ы

<script>
export default {
  name: "DishesShowcase",
  computed: {
    dishesCardsData() {
      return this.$store.state.Static.dishesCards;
    }
  }
};
</script>

<style lang="scss" scoped>
.dishes-showcase {
  padding: 0 12.3%;
  & > * {
    margin: 0 15px;
  }

  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @include breakpoint("small") {
    justify-content: center;
  }
  .headline {
    flex: 0 0 100%;
    margin-bottom: 56px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    .title {
      flex: 0 2 415px;

      display: flex;
      font-family: "Aleo-Bold";
      font-size: 20px;
      letter-spacing: 1px;

      &::after {
        content: "";
        margin: auto;
        margin-left: 19px;
        height: 0;
        flex: 1;
        outline: 1px solid #e3e1e1;
      }
    }

    .dots-indicator {
      margin-right: 30px !important;

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
  .card {
    flex: 0 0 230px;
    height: 268px;
    border: none;
    margin-bottom: 56px;

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
</style>