<template>
  <div class="main-content">
    <!-- <Cascader :source='source' :selected="selected" @update:selected="selected=$event"></Cascader> -->
    <Cascader :source='source' :selected.sync="selected"></Cascader>
  </div>
</template>

<script>
/* eslint-disable */
import Cascader from "@components/cascader/cascader";
export default {
  name: "AssetTask",
  components: {
    Cascader
  },
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                { name: "萧山区" },
                { name: "古荡区" },
                { name: "西湖区" },
                { name: "滨江区" }
              ]
            },
            {
              name: "宁波",
              children: [
                { name: "江东区" },
                { name: "江北区" },
                { name: "北仓区" }
              ]
            },
            {
              name: "温州",
              children: [
                { name: "市辖区" },
                { name: "瑞安区" },
                { name: "龙湾区" }
              ]
            }
          ]
        },
        {
          name: "山东",
          children: [
            {
              name: "济南",
              children: [
                { name: "历下区" },
                { name: "历城区" },
                { name: "高新区" },
                { name: "天桥区" }
              ]
            },
            {
              name: "青岛",
              children: [
                { name: "市南区" },
                { name: "黄岛区" },
                { name: "四方区" }
              ]
            }
          ]
        },
        {
          name: "北京",
          children: [{ name: "五道口" }, { name: "大兴" }]
        }
      ],
      selected: []
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  text-align: center; padding-top: 40px;
  .cascader {
    display: inline-block;
  }
}
</style>
