<template>
  <div class="main-content">
    <!-- <Cascader :source='source' :selected="selected" @update:selected="selected=$event"></Cascader> -->
    <Cascader :source='source' :selected.sync="selected"></Cascader>
  </div>
</template>

<script>
/* eslint-disable */
import Cascader from '@components/cascader/cascader'
import db from './db'

function ajax(parentId = 0) {
  return db.filter((item) => item.parent_id == parentId)
}
console.log(ajax())

export default {
  name: 'AssetTask',
  components: {
    Cascader
  },
  data() {
    return {
      source: ajax(),
      selected: []
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  text-align: center;
  padding-top: 40px;
  .cascader {
    display: inline-block;
  }
}
</style>
