<template>
  <div id="app">
    <CgInput :value.sync="v1" class="input"/>
    <CgInput :value.sync="v2" placeholder="请输入框架关键词" icon="&#xe7b1;" class="input"/>
    <CgInput :value.sync="v3" icon="&#xebc5;" class="input"/>
    <!-- <CgSelect :data="data" @selectValue="handleValue"></CgSelect> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      v1: '',
      v2: '',
      v3: 'Vue'
    }
  },
  methods: {
    handleValue(val) {
      console.log('当前值:', val)
    }
  }
}
</script>

<style>
#app {
  width: 300px;
}
.input {
  margin-top: 5px;
}
</style>
