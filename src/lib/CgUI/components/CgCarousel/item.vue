<template>
  <transition :name="transitionType">
    <div class="cg-carousel-item-container" v-if="currentIndex === selfIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'CgCarouselItem',
    data() {
      return {
        selfIndex: '',
        currentIndex: '',
        transitionType: ''
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
      },
      '$parent.playType': {
        handler(newVal, oldVal) {
          this.transitionType = this.$parent.playType
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
  opacity: 1;
}
/* carousel */
.carousel-enter-active,
.carousel-leave-active {
  transition: all 0.3s linear;
}
.carousel-enter-active {
  left: 100%;
}
.carousel-enter-to {
  left: 0;
}
.carousel-leave-active {
  left: 0
}
.carousel-leave-to {
  left: -100%;
}
/* opacity */
.opacity-enter-active,
.opacity-leave-active {
  transition: all 0.5s ease-in;
}
.opacity-enter-active {
  opacity: 0;
}
.opacity-enter-to {
  opacity: 1;
}
.opacity-leave-active {
  opacity: 1;
}
.opacity-leave-to {
  opacity: 0;
}
</style>