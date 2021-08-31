<template>
  <div
  class="cg-dialog-container"
  v-if="ifShow"
  >
      <div class="cg-dialog-slot"
      :style="{
      'width': width + 'px',
      'height': height + 'px'
      }"
      >
          <div class="cg-dialog-header">
              <slot name="header"></slot>
          </div>
          <div class="cg-dialog-body">
              <slot></slot>
          </div>
          <div class="cg-dialog-footer">
              <slot name="footer"></slot>
          </div>
      </div>
      <CgMask :show="ifShow"/>
  </div>
</template>

<script>
export default {
    name: 'CgDialog',
    props: {
        show: {
            type: Boolean,
            require: true
        },
        width: {
            type: Number,
            default: 600
        },
        height: {
            type: Number,
            default: 400
        }
    },
    data() {
        return {
            ifShow: false
        }
    },
    watch: {
        'show': {
            handler(newVal, oldVal) {
                this.ifShow = newVal
            },
            immediate: true,
            deep: true
        },
        'ifShow': {
            handler(newVal, oldVal) {
                this.$emit('update:show', newVal)
            },
            immediate: true,
            deep: true
        }
    }
}
</script>

<style scoped>
.cg-dialog-slot {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1001;
    transform: translate(-50%,-50%);
    background: #FFFFFF;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
}
.cg-dialog-header {
    width: 100%;
    min-height: 30px;
    font-size: 20px;
    padding: 5px 0;
}
.cg-dialog-body {
    width: 100%;
    padding: 5px 0;
}
.cg-dialog-footer {
    width: 100%;
    
    padding: 5px 0;
}
</style>