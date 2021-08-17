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
  name: 'CgIcon',
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
  src: url('//at.alicdn.com/t/font_2734257_fwrgo4k13b.woff2?t=1629210987867') format('woff2'),
       url('//at.alicdn.com/t/font_2734257_fwrgo4k13b.woff?t=1629210987867') format('woff'),
       url('//at.alicdn.com/t/font_2734257_fwrgo4k13b.ttf?t=1629210987867') format('truetype');
}
.cg-icon {
    font-family: 'iconfont';
    padding: 5px 5px;
    transition: color 0.3s;
}
</style>
