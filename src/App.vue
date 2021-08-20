<template>
  <div id="app">
    <!-- <CgInput/>
    <CgInput placeholder="请搜索商品" icon="&#xe7b1;" style="margin-top:10px;"/> -->
    <CgSelect :data="data"></CgSelect>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [{
          id: 1,
          text: 'Vue'
        }, {
          id: 2,
          text: 'uniapp'
        }, {
          id: 3,
          text: 'React'
        }, {
          id: 1,
          text: 'Vue'
        }, {
          id: 2,
          text: 'uniapp'
        }, {
          id: 3,
          text: 'React'
        }]
    }
  }
}
</script>

<style>
#app {
  width: 300px;
  height: 30px;
}
</style>
