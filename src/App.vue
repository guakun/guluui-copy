<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Demo</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from '@components/header/header'

export default {
  name: 'Assets-Index',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import '@style/var.scss';
</style>
