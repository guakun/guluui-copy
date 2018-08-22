<template>
  <div id="app">
    <Header />
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
#app {
  height: 100vh; width: 100vw; background: $color-background;
}
</style>
