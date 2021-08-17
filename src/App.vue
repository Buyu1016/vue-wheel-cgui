<template>
  <div id="app">
    <CgPraise :quantity="num" :size="25" @handleChangeSelect="handleClick"/>
    <CgPraise :quantity="num" :size="25" :disabled="true" @handleChangeSelect="handleClick"/>
  </div>
</template>

<script>

export default {
  data() {
    return {
      num: 3
    }
  },
  methods: {
    handleClick (i) {
      console.log(i)
    }
  }
}
</script>

<style>
</style>
