<template>
  <div class="cascaderItem">
    <div>
      selected: {{ selected && selected[level] && selected[level].name }}
      level: {{ level }}
    </div>
    <div class="left">
      <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
        {{item.name}}
        <Icon v-if="item.children" name="right" class="icon"></Icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <gulu-cascader-items :items="rightItems" :selected="selected" :level="level+1"></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from '@components/icon/icon'

export default {
  name: 'GuluCascaderItems',
  components: {Icon},
  props: {
    items: {
      type: Array
    },
    selected: {
      type: Array,
      default: () => {
        return []
      }
    },
    level: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      leftSelected: null
    }
  },
  computed: {
    rightItems () {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children
      } else {
        return null
      }
    }
  },
  methods: {
    onClickLabel (item) {
      // 违反了单向数据流
      // 子组件修改 props 垃圾！
      // this.$set(this.selected, this.level, item)
      // this.selected.push(item)
      let copy = JSON.parse(JSON.stringify(this.selected)) // 深拷贝
      copy[this.level] = item
      this.$emit('update:selected', copy)
    }
  }
}
</script>

<style lang="scss">
@import '@style/var.scss';

.cascaderItem {
  display: flex; align-items: flex-start; justify-content: flex-start;
  .left {
    height: 100%; padding: .3em 0;
    height: 110px; overflow: auto;
  }
  .right {
    border-left: 1px solid $border-color-light;
  }
  .label {
    cursor: pointer; padding: 0.3em 1em;
    display: flex; align-items: center;
    .icon {
      margin-left: 1em; transform: scale(.5);
    }
  }
}
</style>
