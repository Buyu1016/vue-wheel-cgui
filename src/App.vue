<template>
  <div id="app">
    <div v-for="(item, index) in url" :key="index" class="magnifier-box">
      <CgMagnifier
        :url="item"
        width="500px"
        height="300px" 
        :magnifierRegion="150" 
        :multiple="1.5"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: [
        'https://img1.baidu.com/it/u=2344733995,569157975&fm=26&fmt=auto&gp=0.jpg',
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
