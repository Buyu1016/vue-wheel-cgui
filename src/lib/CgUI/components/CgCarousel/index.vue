<template>
  <div class="cg-carousel-container" ref="cgCarousel">
      <div class="cg-carousel-content">
        <slot></slot>
      </div>
      <div class="cg-carousel-indexAll">
        <span
        v-for="item in $slots.default.length"
        :key="item"
        :style="{
          opacity: item - 1 == currentIndex ? '1' : '0.5',
          background: item - 1 == currentIndex ? indexColor : '#A1A1A1'
        }"
        @click="handleIndexClick(item-1)"
        ></span>
      </div>
      <div
      class="cg-carousel-switch"
      ref="cgCarouselSwitch"
      :style="{
        opacity: switchBtnShow === 'hover' ? '0' : '1'
      }"
      >
        <span class="cg-carousel-switch-left-button" @click="handleSwitchImage('prev')">
          <CgIcon type="&#xebd9;" :size="25"/>
        </span>
        <span class="cg-carousel-switch-right-button" @click="handleSwitchImage('next')">
          <CgIcon type="&#xebd9;" :size="25"/>
        </span>
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
      // 当前轮播图选中状态索引的颜色
      indexColor: {
        type: String,
        default: '#FFFFFF'
      },
      // 是否显示左右切换按钮
      ifShowSwitchBtn: {
        type: Boolean,
        default: true
      },
      // 左右切换按钮显示方式
      // hover 移动到轮播图显示
      switchBtnShow: {
        type: String
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
    watch: {
      'currentIndex': {
        handler(newVal, oldVal) {
          this.$emit('getCurrentIndex', this.currentIndex)
        },
        immediate: true,
        deep: true
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
    mounted() {
      // 鼠标移入停止轮播
      this.$refs.cgCarousel.addEventListener('mouseover', this.stopCarousel)
      this.$refs.cgCarousel.addEventListener('mouseout', this.stopCarousel)
      // 移入才会进行左右按钮的显示
      if (this.switchBtnShow === 'hover') {
        this.$refs.cgCarousel.addEventListener('mouseover', this.switchBtn)
        this.$refs.cgCarousel.addEventListener('mouseout', this.switchBtn)
      }
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
      },
      switchBtn(e) {
        if (e.type === 'mouseover') {
          this.$refs.cgCarouselSwitch.style.opacity = '1'
        } else if (e.type === "mouseout") {
          this.$refs.cgCarouselSwitch.style.opacity = '0'
        }
      },
      // 停止轮播
      stopCarousel(e) {
        if (e.type === 'mouseover') {
          // 清除定时器
          clearInterval(this.IntervalTimer)
          this.IntervalTimer = null
        } else if (e.type === "mouseout") {
          // 重新开启定时器
          if (this.automatic) {
            this.IntervalTimer = setInterval(() => {
              this.switchCarousel('next')
            }, this.intervalTime)
          }
        }
      },
      handleSwitchImage(type) {
        // 清除定时器
        clearInterval(this.IntervalTimer)
        this.IntervalTimer = null
        this.switchCarousel(type)
        // 重新开启定时器
        if (this.automatic) {
          this.IntervalTimer = setInterval(() => {
            this.switchCarousel('next')
          }, this.intervalTime)
        }
      },
      handleIndexClick(index) {
        if (index > this.currentIndex) {
          const diff = index-this.currentIndex
          for(let i = 0; i < diff; i++) {
            this.switchCarousel('next')
          }
        } else  if (index < this.currentIndex) {
          const diff = this.totalCarousel - this.currentIndex + index
          for(let i = 0; i < diff; i++) {
            this.switchCarousel('next')
          }
        }
      }
    },
    beforeDestroy() {
      clearInterval(this.IntervalTimer)
      this.IntervalTimer = null
      this.$refs.cgCarousel.removeEventListener('mouseover', this.stopCarousel)
      this.$refs.cgCarousel.removeEventListener('mouseout', this.stopCarousel)
      if (this.switchBtnShow === 'hover') {
        this.$refs.cgCarousel.removeEventListener('mouseover', this.switchBtn)
        this.$refs.cgCarousel.removeEventListener('mouseout', this.switchBtn)
      }
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
.cg-carousel-indexAll {
  padding: 3px 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,0);
  box-sizing: border-box;
}
.cg-carousel-indexAll span {
  width: 10px;
  height: 10px;
  margin: 3px 5px;
  opacity: 0.5;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
}
.cg-carousel-switch {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  transition: opacity 0.2s ease-in;
}
.cg-carousel-switch span {
  display: inline-block;
  cursor: pointer;
}
.cg-carousel-switch-left-button {
  transform: rotate(45deg);
  margin-left: 10px;
  user-select: none;
}
.cg-carousel-switch-right-button {
  transform: rotate(-135deg);
  margin-right: 10px;
  user-select: none;
}
</style>