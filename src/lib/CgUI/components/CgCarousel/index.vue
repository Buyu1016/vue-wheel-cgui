<template>
  <div class="cg-carousel-container">
      <div class="cg-carousel-content">
        <slot></slot>
      </div>
      <CgButton type="primary" @click="currentIndex++">点击</CgButton>
  </div>
</template>

<script>
export default {
    name: 'CgCarousel',
    props: {
      // 是否自动轮播
      automatic: {
        type: Boolean,
        default: true
      },
      // 自动轮播切换间隔 3000ms
      intervalTime: {
        type: Number,
        default: 3000
      },
      // 初始显示第几张图片的索引
      initialIndexes: {
        required: true
      },
      // 是否显示索引
      ifShowIndexes: {
        type: Boolean,
        default: true
      },
      // 索引显示方式
      // hover 触摸
      // click 点击
      indexesShow: {
        type: String,
        default: ''
      },
      // 是否显示左右切换按钮
      ifShowSwitchBtn: {
        type: Boolean,
        default: true
      },
      // 左右切换按钮显示方式
      // hover 移动到轮播图显示
      switchBtnShow: {
        type: String,
        default: 'hover'
      }
    },
    data() {
      return {
        currentIndex: this.initialIndexes
      }
    }
}
</script>

<style scoped>
.cg-carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.cg-carousel-content {
  width: 100%;
  height: 100%;
}
</style>