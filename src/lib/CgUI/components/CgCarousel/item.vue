<template>
  <div class="cg-carousel-item-container" v-if="currentIndex == selfIndex">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: 'CgCarouselItem',
    data() {
      return {
        selfIndex: '',
        currentIndex: ''
      }
    },
    created() {
      this.selfIndex = this.$vnode.key
    },
    watch: {
      '$parent._data.currentIndex': {
        handler(newVal, oldVal) {
          this.currentIndex = this.$parent._data.currentIndex
        },
        immediate: true,
        deep: true
      }
    }
}
</script>

<style scoped>
.cg-carousel-item-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>