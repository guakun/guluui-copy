<template>
  <div>
    管理后台
    <Slides
    >
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </Slides>
  </div>
</template>

<script>
import Slides from '@components/slides/slides'

export default {
  name: 'PageAdmin',
  components: {
    Slides
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px; height: 100px; background: #ddd; border: 1px solid red;
}
</style>
