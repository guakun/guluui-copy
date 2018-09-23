<template>
  <div class="g-slides">
    <div class="g-slides-window" ref="window">
      <div class="g-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="g-slides-dots">
      <span v-for="n in childrenLength"
       :key="n"
       :class="{active : selectedIndex === n - 1}"
       @click="select(n-1)"
      >
        {{ n-1 }}
      </span>
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
  data () {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined
    }
  },
  computed: {
    names () {
      return this.$children.map(vm => vm.name)
    },
    selectedIndex () {
      return this.names.indexOf(this.selected) || 0
    }
  },
  mounted () {
    // DOM API
    // console.log('child', this.$refs.window.children)
    this.updateChildren()
    this.playAutomatically()
    this.childrenLength = this.$children.length
    this.lastSelectedIndex = this.selectedIndex
  },
  updated () {
    this.updateChildren()
  },
  methods: {
    select (index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    playAutomatically () {
      const names = this.names
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
        this.select(newIndex)
        index--

        // if (index === names.length) { index = 0 }
        // this.$emit('update:selected', names[index + 1])
        // index++
        setTimeout(run, 3000)
      }
      // setTimeout(run, 3000)
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren () {
      this.$children.forEach(vm => {
        vm.reverse = this.selectedIndex < this.lastSelectedIndex
        this.$nextTick(() => {
          vm.selected = this.getSelected()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.g-slides {
  border: 1px solid black;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background: red;
      }
    }
  }
}
</style>
