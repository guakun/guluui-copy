<template>
<div class="cascader">
  <div class="trigger" @click="popoverVisible = !popoverVisible">
    {{this.result || '&nbsp;'}}
  </div>
  <div class="popover-wrapper" v-if="popoverVisible">
    <cascader-items :items="source" class="popover" :class="popoverClassName" @update:selected="onUpdateSelected" :selected="selected"></cascader-items>
  </div>
</div>
</template>

<script>
import CascaderItems from './cascader-items'
export default {
  name: 'GuluCascader',
  components: {CascaderItems},
  props: {
    source: {
      type: Array
    },
    popoverClassName: {
      type: String
    },
    selected: {
      type: Array,
      default: () => { return [] }
    },
    loadData: {
      type: Function
    }
  },
  data () {
    return {
      popoverVisible: false
    }
  },
  updated () {},
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      // 简单的分治法
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) {
            return found
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
      }

      let updateSource = (ret) => {
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        // this.$set(toUpdate, 'children', ret) // 修改 source 垃圾
        toUpdate.children = ret
        this.$emit('update:source', copy)
      }
      this.loadData(lastItem, updateSource) // callback: call function other send
      // 掉回调的时候传一个函数，这个函数理论上应该被调用
    }
  },
  computed: {
    result () {
      return this.selected.map(item => item.name).join('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

.cascader {
  position: relative; background: #fff;
  .trigger {
    border: 1px solid $border-color; min-width: 20em; border-radius: $border-radius;
    height: $input-height; display: inline-flex; align-items: center;
    padding: 0 1em;
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute; top: 100%; left: 0; background: white;
    margin-top: 4px;
  }
}
</style>
