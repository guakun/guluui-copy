<template>
  <div class="wrapper">
    <g-slides
      :selected.sync="selected"
    >
      <g-slides-item name="你好">
        <div class="box">1</div>
      </g-slides-item>
      <g-slides-item name="hello">
        <div class="box">2</div>
      </g-slides-item>
      <g-slides-item name="world">
        <div class="box">3</div>
      </g-slides-item>
    </g-slides>
  </div>
</template>

<script>
import GSlides from '@components/slides/slides'
import GSlidesItem from '@components/slides/slides-item'

export default {
  name: 'PageAdmin',
  components: {
    GSlides,
    GSlidesItem
  },
  data () {
    return {
      selected: 'hello'
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.wrapper { margin: 40px }
.box {
  height: 350px; background: #ddd;
}
</style>
