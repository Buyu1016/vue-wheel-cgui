<template>
  <transition>
      <div
        class="cg-dialog-container"
        v-if="ifShow"
        ref="cgDialog"
        >
        <div 
            class="cg-dialog-slot"
            :style="{
            'width': width + 'px',
            }"
        >
            <div class="cg-dialog-header">
                <slot name="header"></slot>
                <span @click="handleClose"><CgIcon type="&#xecaa;" :size="20"/></span>
            </div>
            <div class="cg-dialog-body">
                <slot></slot>
            </div>
            <div class="cg-dialog-footer">
                <slot name="footer"></slot>
            </div>
        </div>
        <CgMask :show="ifShow" @click="handleMaskClose"/>
    </div>
  </transition>
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
        // 点击空白处是否关闭
        blankClose: {
            type: Boolean,
            default: true
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
    },
    methods: {
        handleClose() {
            this.ifShow = false
        },
        handleMaskClose(e) {
            if (this.blankClose) {
                this.handleClose()
            }
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
    height: 30px;
    font-size: 20px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
}
.cg-dialog-header span {
    cursor: pointer;
    transform: rotate(0);
    transition: transform 0.3s ease-in;
}
.cg-dialog-header span:hover {
    transform: rotate(180deg);
}
.cg-dialog-body {
    width: 100%;
    height: calc(100% - 80px);
    padding: 5px;
}
.cg-dialog-footer {
    width: 100%;
    height: 30px;
    padding: 5px;
}
/* 过渡动画 */
.v-enter-active,
.v-leave-active {
    transition: all 0.3s;
}
.v-enter-active {
    opacity: 0;
}
.v-enter-to {
    opacity: 1;
}
.v-leave-active {
    opacity: 0;
}
</style>