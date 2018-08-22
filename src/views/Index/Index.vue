<template>
  <div class="content-box">
    <Banner />
    <Recommend :recommendItems='recommendItems'/>
  </div>
</template>

<script>
import Banner from '@components/mall-banner/mall-banner'
import Recommend from './components/recommend/recommend'
export default {
  name: 'AssetMallIndex',
  components: {
    Banner,
    Recommend
  },
  data () {
    return {
      recommendItems: [
        {
          name: '13寸MacBook Pro',
          desc: 'I5/16G/256G SSD',
          picture: 'http://portal-bucket.nos.netease.com/07282a1c96866d0948e99668384fa4d5?Signature=zGizS7dZe9UNwHxZw9uIvJ6qmIbpJkh2xIhrin3lZSQ%3D&Expires=1844060840&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d'
        },
        {
          name: '13寸MacBook Pro',
          desc: 'I5/16G/256G SSD',
          picture: 'http://portal-bucket.nos.netease.com/07282a1c96866d0948e99668384fa4d5?Signature=zGizS7dZe9UNwHxZw9uIvJ6qmIbpJkh2xIhrin3lZSQ%3D&Expires=1844060840&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d'
        },
        {
          name: '13寸MacBook Pro',
          desc: 'I5/16G/256G SSD',
          picture: 'http://portal-bucket.nos.netease.com/07282a1c96866d0948e99668384fa4d5?Signature=zGizS7dZe9UNwHxZw9uIvJ6qmIbpJkh2xIhrin3lZSQ%3D&Expires=1844060840&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d'
        },
        {
          name: '13寸MacBook Pro',
          desc: 'I5/16G/256G SSD',
          picture: 'http://portal-bucket.nos.netease.com/07282a1c96866d0948e99668384fa4d5?Signature=zGizS7dZe9UNwHxZw9uIvJ6qmIbpJkh2xIhrin3lZSQ%3D&Expires=1844060840&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d'
        }
      ],
      groups: []
    }
  }
}
</script>

<style lang="scss" scoped>
.content-box {
  width: 1160px; margin: 0 auto;
}
</style>
