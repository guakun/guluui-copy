<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluSlides',
  mounted () {
    // DOM API
    // console.log('child', this.$refs.window.children)
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  &-window {
    
  }
}
</style>
