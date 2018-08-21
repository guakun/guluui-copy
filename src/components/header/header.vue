<template>
  <header class="g-cf">
    <div class="content-box">
      <div class="slogan-box g-fl">
        <img src="./image/logo.png" alt="">
        <a href=""><span class="slogan">资产平台</span></a>
      </div>
      <ul class="nav-box g-fl">
        <li class="nav">
          <router-link to='/'>首页</router-link>
        </li>
        <li class="nav">
          <router-link to='/group'>我要申请</router-link>
        </li>
        <li class="nav">
          <router-link to='/task'>我的任务</router-link>
        </li>
        <li class="nav">
          <router-link to='/asset'>资产管理</router-link>
        </li>
        <li class="nav">
          <router-link to='/admin'>管理后台</router-link>
        </li>
      </ul>
      <div class="user-info-box g-fl">
        <a href="" class="order-icon"></a>
        <span class="superscript">3</span>
        <span class="desc">我的申请单</span>
        <span class="welcome">
          瓜坤，欢迎来到资产管理平台&emsp;|&emsp;<a href="">退出</a>
        </span>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

header {
  height: 60px; background: $header-background;
  display: flex; justify-content: center;
  min-width: 1160px;
  .content-box {
    .slogan-box {
      height: 100%;
      img {
        margin-right: 34px; margin-top: 18px; vertical-align: top;
      }
      .slogan {
        display: inline-block;
        color: $header-font-color; font-size: $font-size-large;
        margin-right: 31px; margin-top: 18px; font-weight: 700;
      }
    }
    .nav-box {
      height: 100%;
      margin-right: 94px;
      .nav {
        display: inline-block; padding-top: 20px; height: 100%;
        font-size: $font-size-big; padding-left: 9px; padding-right: 9px;
        a {
          color: $header-font-color;
          display: inline-block; height: 100%;
          &.router-link-exact-active {
            border-bottom: 4px solid $color-primary;
          }
        }
      }
    }
    .user-info-box {
      height: 60px; display: flex; align-items: center;
      position: relative; font-size: $font-size-small; color: $header-font-color;
      .order-icon {
        width: 17px; height: 20px; margin-right: 12px;
        background-image: url('./image/order-icon.png');
      }
      .superscript {
        position: absolute; background: $color-primary;
        width: 16px; height: 16px; border-radius: 50%;
        text-align: center; padding-top: 2px;
        left: 8px; top: 12px;
      }
      .desc { margin-right: 50px; }
      .welcome {
        color: $font-color-side;
        a {
          color: inherit;
        }
      }
    }
  }
}
</style>
