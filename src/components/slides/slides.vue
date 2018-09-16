<template>
  <div class="g-slides">
    <div class="window">
      <div ref="container" class="g-slides-inner" style="width: 100px;">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'G-Slides',
  created () {
    setTimeout(() => {
      this.$refs.container.style
        .transform =
        `translateX(-100px)`
    }, 3000)
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  display: inline-block;
  .window {
    overflow: hidden;
    .g-slides-inner {
      & > * { width: 100%; flex-shrink: 0; }
      display: flex; transition: all 1s;
    }
  }
}
</style>
