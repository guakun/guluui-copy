<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluSlides',
  props: {
    selected: {
      type: String
    },
    autoPlay: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    // DOM API
    // console.log('child', this.$refs.window.children)
    this.updateChildren()
    this.playAutomatically()
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    playAutomatically () {
      const names = this.$children.map(vm => vm.name)
      let index = names.indexOf(this.getSelected())
      // setInterval(() => {
      //   if (index === names.length) { index = 0 }
      //   this.$emit('update:selected', names[index + 1])
      //   index++
      // }, 3000)
      // 用 setTimeout 模拟 setInterval
      let run = () => {
        let newIndex = index - 1
        console.log('new index', index)
        if (newIndex === -1) { newIndex = names.length - 1 }
        this.$emit('update:selected', names[newIndex])
        index--

        // if (index === names.length) { index = 0 }
        // this.$emit('update:selected', names[index + 1])
        // index++
        setTimeout(run, 3000)
      }
      setTimeout(run, 3000)
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren () {
      this.$children.forEach(vm => {
        vm.selected = this.getSelected()
        const names = this.$children.map(vm => vm.name)
        let newIndex = names.indexOf(vm.selected)
        let oldIndex = names.indexOf(vm.name)
        vm.reverse =  newIndex > oldIndex ? false : true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  display: inline-block;
  border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
}
</style>
