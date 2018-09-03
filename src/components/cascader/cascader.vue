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
  methods: {
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let updateSource = (ret) => {
        let toUpdate = this.source.filter(item => item.id === lastItem.id)[0]
        this.$set(toUpdate, 'children', ret)
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
