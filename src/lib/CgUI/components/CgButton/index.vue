<template>
  <span class="button-container" :style="{
    'cursor': disabled ? 'not-allowed' : 'pointer'
  }">
      <button :class="{
          'cg-button': true,
          'cg-button-primary': type === 'primary',
          'cg-button-dashed': type === 'dashed',
          'cg-button-danger': type === 'danger',
          'cg-button-link': type === 'link',
          'cg-button-blue-ghost': ghost,
          'cg-button-red-ghost': ghost && type === 'danger',
          'cg-button-disabled': disabled
      }"
      >
        <slot></slot>
      </button>
  </span>
</template>

<script>
export default {
  name: 'CgButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'nothing',
    },
    // 是否禁用按钮
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否背景透明化
    ghost: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scope>
.button-container{
    margin: 5px;
    display: inline-block;
}
.cg-button {
    width: 100%;
    height: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
    color: #595959;
    cursor: pointer;
    background: #fff;
}
.cg-button-primary {
    border: none;
    background: #1690FF;
    color: #fff;
}
.cg-button-dashed {
    border: 1px dashed #D9D9D9;
}
.cg-button-danger {
    background: #FF4D4F;
    color: #fff;
}
.cg-button-link {
    border: none;
    color: #319CFF;
}
/* 背景透明化 */
.cg-button-blue-ghost {
    border: 1px solid #319CFF;
    color: #319CFF;
    background: transparent;
}
.cg-button-red-ghost {
    border: 1px solid #FF4D4F;
    color: #FF4D4F;
    background: transparent;
}
/* 点击样式 */
.cg-button:active{
    box-shadow: inset 0px 0px 5px 1px rgba(255, 255, 255, 0.836);
}
/* 禁止样式 */
.cg-button-disabled{
    color: #979595;
    background: #ddd;
    pointer-events:none;
}
</style>
