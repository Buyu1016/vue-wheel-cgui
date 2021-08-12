<template>
  <div class="icon-test">
      <!-- type传递值请查询 https://www.iconfont.cn/collections/detail?cid=12507 -->
      <cg-icon type="&#xec9f;"/>
      <cg-icon type="&#xeca0;" :size="20"/>
      <cg-icon type="&#xeca1;" color="#abcdef"/>
      <cg-icon type="&#xeca2;" :size="25" color="#abcdef"/>
      <cg-icon type="&#xeca4;" :size="30" color="#aaa"/>
      <cg-icon type="&#xeca5;" :size="35" color="red"/>
      <cg-icon type="&#xeca7;" :size="40" color="blue"/>
      <cg-icon type="&#xeca8;" :size="45" color="green"/>
  </div>
</template>

<script>
import CgIcon from './index.vue';

export default {
  components: {
    CgIcon,
  },
};
</script>

<style scope>
.icon-test {
    width: 500px;
    height: 500px;
}
</style>
