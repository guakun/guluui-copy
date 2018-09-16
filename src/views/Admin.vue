<template>
  <div>
    管理后台
    <g-slides
    >
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </g-slides>
  </div>
</template>

<script>
import GSlides from '@components/slides/slides'

export default {
  name: 'PageAdmin',
  components: {
    GSlides
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px; height: 150px; background: #ddd; border: 1px solid red;
}
</style>
