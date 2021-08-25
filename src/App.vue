<template>
  <div id="app">
    <CgCarousel>
      <CgCarouselItem v-for="item in url" :key="item.id">
        <CgImage style="width:500px;height:300px;" :url="item.url"/>
      </CgCarouselItem>
    </CgCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        {
          id: '1',
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-cef492aa2c7be6261b22d60a3e806789_r.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632405993&t=adc51a5ac55a0b0a7bcd11033b7e6a45'
        },
        {
          id: '2',
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload-images.jianshu.io%2Fupload_images%2F12577968-f77d03da5d0e9cb2.jpg&refer=http%3A%2F%2Fupload-images.jianshu.io&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632406337&t=8875a4a50b966aa4c3e7e27d62b29878'
        },
        {
          id: '3',
          url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fv1cdn.imspm.com%2Fe%2Fcb67673f01ec4c42ba06bbf66507b260.jpeg&refer=http%3A%2F%2Fv1cdn.imspm.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632406374&t=40b95ce27980ec3c72fb3b6184ef75e3'
        },
        {
          id: '4',
          url: ''
        }
      ]
    }
  }
}
</script>

<style></style>
