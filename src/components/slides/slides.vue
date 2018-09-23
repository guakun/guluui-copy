<template>
  <div class="g-slides"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
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
      lastSelectedIndex: undefined,
      timerId: undefined
    }
  },
  computed: {
    names () {
      return this.$children.map(vm => vm.name)
    },
    selectedIndex () {
      return this.names.indexOf(this.getSelected()) || 0
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
    onMouseEnter () {
      this.pause()
    },
    onMouseLeave () {
      this.playAutomatically()
    },
    select (index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index])
    },
    playAutomatically () {
      if (this.timerId) { return }
      const names = this.names
      // setInterval(() => {
      //   if (index === names.length) { index = 0 }
      //   this.$emit('update:selected', names[index + 1])
      //   index++
      // }, 3000)
      // 用 setTimeout 模拟 setInterval
      let run = () => {
        // 反向
        // let newIndex = index - 1
        // index--
        // if (newIndex === -1) {
        //   newIndex = names.length - 1
        //   index = newIndex
        // }
        // this.select(newIndex)

        // 正向
        let index = names.indexOf(this.getSelected())
        let newIndex = index + 1
        if (newIndex === names.length) { newIndex = 0 }
        if (newIndex === -1) { newIndex = names.length - 1 }
        this.select(newIndex)
        this.timerId = setTimeout(run, 1500)
      }
      this.timerId = setTimeout(run, 1500)
    },
    pause () {
      window.clearTimeout(this.timerId)
      this.timerId = undefined
    },
    getSelected () {
      let first = this.$children[0]
      return this.selected || first.name
    },
    updateChildren () {
      this.$children.forEach(vm => {
        let reverse = this.selectedIndex < this.lastSelectedIndex
        if (this.timerId) {
          if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
            reverse = false
          }
          // if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
          //   reverse = true
          // }
        }
        vm.reverse = reverse
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
  position: relative;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    position: absolute;
    padding: 8px 0; bottom: 0px; left: calc(50% - 39px);
    // display: flex; justify-content: center; align-items: center;
    > span {
      // display: inline-flex; width: 20px; height: 20px;
      // justify-content: center; align-items: center;
      // border-radius: 50%;
      // background: #ddd; margin: 0 8px;
      // font-size: 12px;
      display: inline-block;
      opacity:0.3;
      background:#000000;
      width:4px;
      height:4px;
      border-radius:100%;
      margin: 0 5px;
      &:hover {
        cursor: pointer;
      }
      &.active {
        opacity: 1;
        background:#e3282d;
        border-radius:8px;
        width:10px;
        height:4px;
        // background: black;
        // color: white;
        &:hover {
          cursor: default;
        }
      }
    }
  }
}
</style>
