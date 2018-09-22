<template>
  <transition name="slide">
    <div class="g-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GuluSlidesItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    visible () {
      return this.selected === this.name
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides-item {
  // position: absolute; left: 0; top: 0;
}
.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}
.slide-leave-active {
  position: absolute; left: 0; top: 0;
}
.slide-enter {
  transform: translateX(100%);
  position: absolute;
}
.slide-leave-to {
  transform: translateX(-100%);
}

</style>
