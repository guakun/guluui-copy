<template>
  <div class="recommend-box" v-if="recommendItems">
    <div class="g-title">
      推荐配置
    </div>
    <ul class="recommend-item-box">
      <li class="recommend-item" :class="[recommendItems.length > 2 && 'small']" v-for="(item, index) in recommendItems" :key='`recommend-item-${index}`'>
        <div class="info-box">
          <div class="product-name">{{item.name}}</div>
          <div class="product-desc">{{item.desc}}</div>
          <div class="product-action">
            <Button class="add">加入申请单</Button>
            <Button class="apply" type="primary">立即申请</Button>
          </div>
        </div>
        <div class="picture-box">
          <img :src="item.picture" :alt="item.name">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MallRecommend',
  props: {
    recommendItems: {
      type: Array
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

.recommend-item-box {
  height: 272px;
  margin-top: 20px; background: #fff;
  display: flex; justify-content: center;
  .recommend-item + .recommend-item {
    border-left: 1px solid $border-color;
  }
  .recommend-item {
    &.small {
      flex-direction: column-reverse;
    }
    display: flex; flex-direction: row; flex: 1; justify-content: center; align-items: center;
    cursor: pointer; transition: all .2s;
    .info-box {
      padding: 8px 40px;
      text-align: center;
      .product-name {
        font-size: $font-size-big; color: $font-color-primary; line-height: 21px;
      }
      .product-desc {
        font-size: $font-size-normal; color: $font-color-side; line-height: 19px; margin-top: 10px;
      }
      .product-action {
        visibility: hidden; margin-top: -16px;
        .apply {
          margin-left: 10px;
        }
      }
    }
    .picture-box {
      font-size: 0; margin-left: 10px;
      img {width: 150px; height: 150px;}
    }
    &:hover {
      box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
      .info-box {
        .product-desc {
          visibility: hidden;
        }
        .product-action {
          visibility: visible;
        }
      }
    }
  }
}
</style>
