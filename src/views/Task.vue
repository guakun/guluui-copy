<template>
  <div class="main-content">
    <!-- <Cascader :source='source' :selected="selected" @update:selected="selected=$event"></Cascader> -->
    <Cascader
      :source="source"
      :selected.sync="selected"
      :load-data="loadData"
      ></Cascader>
  </div>
</template>

<script>
/* eslint-disable */
import Cascader from '@components/cascader/cascader'
import db from './db'

function ajax(parentId = 0, success, fail) {
  let id = setTimeout(() => {
    let result = db.filter(item => item.parent_id == parentId)
    success(result)
  }, 3000)
  return id
}

function ajax2(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter(item => item.parent_id == parentId)
      success(result)
    }, 700)
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
  created() {
    // ajax(0, (ret) => {
    //   this.source = ret
    // })
    ajax2(0).then(ret => {
      this.source = ret
    })
  },
  methods: {
    loadData (node, fn) {
      let {name, id, parent_id} = node
      ajax2(id).then(ret => {
        fn(ret)
      })
    },
    xxx() {
      ajax2(this.selected[0].id).then(ret => {
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0]
        // lastLevelSelected.children = ret
        this.$set(lastLevelSelected, 'children', ret)
      })
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
