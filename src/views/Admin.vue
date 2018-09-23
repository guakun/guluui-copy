<template>
  <div class="wrapper">
    <g-slides
      :selected.sync="selected"
    >
      <g-slides-item name="1">
        <img
          width=280
          height=170
          src="https://p.qpic.cn/music_cover/ibSiagqKjw1zfTgxY7F8CfE9ajOzGwRhTNabx9icenQMgoUw7p9hKyQJQ/300?n=1"
          alt=""
        >
      </g-slides-item>
      <g-slides-item name="2">
        <img
          width=280
          height=170
          src="https://p.qpic.cn/music_cover/JBDCVgqXWXaYUvcsElqcicfLYQ2JnBtaKlMAiavzaSnEoSIlBZWQJmUw/300?n=1"
          alt=""
        >
      </g-slides-item>
      <g-slides-item name="3">
        <img
          width=280
          height=170
          src="https://p.qpic.cn/music_cover/9Z8sOjZdlvnYXGVPey9AnYGsra9OSDOJaybdyZ4HbE45f1KPxEOlHA/300?n=1"
          alt=""
        >
      </g-slides-item>
      <g-slides-item name="4">
        <img
          width=280
          height=170
          src="https:////p.qpic.cn/music_cover/FGnA54MquDhSLtenLYmIEHXAg6bUVQXa0Ciak27dNdc3nYwG95CQeug/300?n=1"
          alt=""
        >
      </g-slides-item>
      <g-slides-item name="5">
        <img
          width=280
          height=170
          src="https:////p.qpic.cn/music_cover/UCJDptU3vGgQt6PS5Hn6CzsmabvfRHe6tpbhQiby69Ux5OadBCX8iaAA/300?n=1"
          alt=""
        >
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
      selected: ''
    }
  },
  created () {
  }
}
</script>

<style lang="scss" scoped>
.wrapper { width: 280px; height: 170px; margin: 40px }
.box {
  background: #ddd; font-size: 30px;
  display: flex; justify-content: center; align-items: center;
}
</style>
