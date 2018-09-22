<template>
  <div>
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
      selected: undefined
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 200px; height: 150px; background: #ddd;
}
</style>
