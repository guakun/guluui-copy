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

function ajax(parentId = 0, success, fail) {
  let id = setTimeout(() => {
    let result = db.filter((item) => item.parent_id == parentId)
    success(result)
  }, 3000)
  return id
}

function ajax2 (parentId = 0) {
  return new Promise((success, fail) => {
    let result = db.filter((item) => item.parent_id == parentId)
    success(result)
  })
}

export default {
  name: 'AssetTask',
  components: {
    Cascader
  },
  data() {
    return {
      source: [],
      selected: []
    }
  },
  created () {
    // ajax(0, (ret) => {
    //   this.source = ret
    // })
    ajax2(0).then((ret) => {
      this.source = ret
    })
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
