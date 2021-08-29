<template>
  <div class="cg-carousel-container">
      <div class="cg-carousel-content">
        <slot></slot>
      </div>
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
      // 走马灯/渐变
      // carousel/opacity
      playType: {
        type: String,
        default: 'carousel'
      },
      // 初始显示第几张图片的索引
      initialIndexes: {
        type: Number,
        default: 0,
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
        currentIndex: this.initialIndexes,
        IntervalTimer: null,
        // 轮播图总量
        totalCarousel: 0
      }
    },
    created() {
      if (this.automatic) {
        this.IntervalTimer = setInterval(() => {
          this.switchCarousel('next')
        }, this.intervalTime)
      }
      this.totalCarousel = this.$slots.default.length
    },
    methods: {
      switchCarousel(dir) {
        if (dir === 'prev') {
          this.currentIndex-=1
          // 界限
          if (this.currentIndex < 0) {
            this.currentIndex = this.$slots.default[this.totalCarousel-1].key
          }
        } else if (dir === 'next') {
          this.currentIndex+=1
          // 界限  需要看现在的位置是否已经到达最后一张轮播图则需要重置到最先的位置
          if (this.currentIndex >= this.totalCarousel) {
            this.currentIndex = this.$slots.default[0].key
          }
        }
      }
    },
    destroyed() {
      clearInterval(this.IntervalTimer)
      this.IntervalTimer = null
    }
}
</script>

<style scoped>
.cg-carousel-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.cg-carousel-content {
  width: 100%;
  height: 100%;
}
</style>