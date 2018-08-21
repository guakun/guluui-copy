<template>
  <div class="header-box">
    <div class="header-content-box g-cf">
      <ul class="nav-box g-fl g-cf">
        <li class="nav g-fl">
          <a href="https://baidu.com" class="logo"><img src="./image/logo.png" alt="It服务台的Logo"></a>
        </li>
        <li class="nav proName g-fl">
          <router-link to="/">资产平台</router-link>
        </li>
        <li class="nav g-fl">
          <router-link to="/about">首页</router-link>
        </li>
        <li class="nav g-fl">我要申请</li>
        <li class="nav g-fl active">任务中心</li>
        <li class="nav g-fl">资产管理</li>
        <li class="nav g-fl">管理后台</li>
      </ul>
      <div class="order-box g-fl">
        <router-link to="/">
          <img src="./image/order-icon.png" alt="订单的logo" class="icon-order">
          <i class="superscript">3</i>
          <span>我的申请单</span>
        </router-link>
      </div>
      <div class="user-info-box g-fl">瓜坤,欢迎来到资管平台&emsp;|&emsp;退出</div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "@style/var.scss";

.header-box {
  background: $header-background; height: 60px; text-align: center; min-width: 1160px;
  .header-content-box {
    display: inline-block; color: $header-font-color;
    a {
      color: $header-font-color;
    }
    .nav-box {
      margin-right: 103px;
      .nav {
        display: inline; line-height: 21px; font-size: $font-size-big;
        padding-top: 20px; padding-left: 9px; padding-right: 9px;
        &.active {
          position: relative;
        }
        &.active::after {
          content: "";
          display: block;
          position: absolute;
          left: 5px;
          bottom: -19px;
          width: 90%;
          border-bottom: 3px solid $color-primary;
        }
        &.proName {
          font-size: $font-size-large; line-height: 26px; font-weight: bold;
          padding-left: 0; padding-right: 0; padding-top: 16px; margin-right: 40px;
        }
        .logo {
          img {
            margin-top: -2px; margin-right: 34px;
          }
        }
      }
    }
    .order-box {
      padding-top: 20px; position: relative;
      a, img, span {
        display: inline-block;
      }
      .icon-order {
        margin-right: 17px; vertical-align: middle;
      }
      .superscript {
        position: absolute; left: 7px; bottom: 10px; background: $red; width: 16px; height: 16px; border-radius: 50%;
        font-size: $font-size-small; padding: 2px; font-style: normal;
      }
      span {
        margin-bottom: 4px; margin-right: 50px; vertical-align: middle;
      }
    }
    .user-info-box {
      margin-top: 22px; line-height: 16px; color: $font-color-side;
    }
  }
}
</style>
