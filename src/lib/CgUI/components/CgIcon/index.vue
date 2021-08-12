<template>
    <span class="cg-icon"
        :style="{
            'color': color,
            'font-size': size + 'px'
        }"
        v-html="type"
    ></span>
</template>

<script>
export default {
  props: {
    // icon代码
    type: {
      type: String,
      require: true,
    },
    // 可选大小
    size: {
      type: Number,
      default: 16,
    },
    // 可选颜色
    color: {
      type: String,
      default: '#666',
    },
  },
};
</script>

<style scope>
@font-face {
  font-family: 'iconfont';  /* Project id 2734257 */
  src: url('//at.alicdn.com/t/font_2734257_76uqsjhdh23.woff2?t=1628572474197') format('woff2'),
       url('//at.alicdn.com/t/font_2734257_76uqsjhdh23.woff?t=1628572474197') format('woff'),
       url('//at.alicdn.com/t/font_2734257_76uqsjhdh23.ttf?t=1628572474197') format('truetype');
}
.cg-icon {
    font-family: 'iconfont';
    padding: 5px 5px;
}
</style>
