<template>
  <Carousel v-model="val" class="carousel-box"
    :dots="settings.dots"
    :arrow="settings.arrow"
    :autoplay-speed="settings.autoplaySpeed"
    :autoplay="settings.autoplay"
    loop
    >
    <CarouselItem v-for="(item, index) in pictures" :key="`carousel-${index}`" >
      <img :src="item" alt="" class="carousel-item">
    </CarouselItem>
  </Carousel>
</template>

<script>
export default {
  name: 'MallBanner',
  data () {
    return {
      val: 0,
      pictures: [
        'http://portal-bucket.nos.netease.com/c97433ffdeb50179295285c927642c84?Signature=%2BBiqsvhPH%2BMqnkrxAffOGQavh6446QdgiM3mxzQHHTo%3D&Expires=1848571967&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d',
        'http://portal-bucket.nos.netease.com/b69a8a7f1c40595830fe60cf8c780da1?Signature=31VxIL1WjY1WpC6OUKS4Q9729C3iF3ywiamwsbitKZ8%3D&Expires=1848571967&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d',
        'http://portal-bucket.nos.netease.com/bc31ccdf0cb627942519b70b01ff64ed?Signature=6klKhZ%2BaeanUwR6JX108qBGARMkyAdsc%2FEH2ZxEPpk8%3D&Expires=1848571967&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d',
        'http://portal-bucket.nos.netease.com/35e25a633fb08f50a31c280ebc2cc6e8?Signature=jCJ1I36LwLs09X73QwSsHmfcwvuch5qivpvW2mUhKpQ%3D&Expires=1849225301&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d',
        'http://portal-bucket.nos.netease.com/1bf4b8f5ca5cb67c9e0655a98c9a58d6?Signature=qNeMHxeaFdBTKbcdKKOGj3VkahPVSrF%2FJyGmMHbysg4%3D&Expires=1849225301&NOSAccessKeyId=7ff9674bca824697ad7c0b8e5a3b074d'
      ],
      settings: {
        dots: 'inside',
        arrow: 'never',
        autoplaySpeed: 2000,
        autoplay: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content-box {
  .carousel-box {
    width: 1160px; height: 420px; margin: 0 auto;
  }
  .carousel-item {
    display: inline-block; height: 420px;
  }
}
</style>
