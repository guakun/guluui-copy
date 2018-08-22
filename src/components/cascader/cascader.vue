<template>
<div class="cascader">
  <div class="trigger" @click="popoverVisible = !popoverVisible">
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
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@style/var.scss';

.cascader {
  position: relative; background: #fff;
  .trigger {
    border: 1px solid $border-color;
    height: 32px; width: 308px;
  }
  .popover-wrapper {
    @extend .box-shadow;
    position: absolute; top: 100%; left: 0; background: white;
  }
}
</style>
