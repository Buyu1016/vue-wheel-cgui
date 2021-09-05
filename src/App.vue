<template>
  <div id="app">
    <div v-for="(item, index) in url" :key="index" class="magnifier-box">
      <CgMagnifier
        :url="item"
        width="500px"
        height="300px" 
        :magnifierRegion="150" 
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-cef492aa2c7be6261b22d60a3e806789_r.jpg&refer=http%3A%2F%2Fpic4.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1632405993&t=adc51a5ac55a0b0a7bcd11033b7e6a45',
      ]
    }
  }
}
</script>

<style scoped>
#app {
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.magnifier-box {
  display: inline-block;
}
</style>
