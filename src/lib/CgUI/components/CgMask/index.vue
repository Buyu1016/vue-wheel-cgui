<template>
  <div class="cg-mask-container" v-if="show" @click="handleClick"></div>
</template>

<script>
export default {
    name: 'CgMask',
    props: {
        show: {
            type: Boolean,
            require: true
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>

<style scoped>
.cg-mask-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1000;
    opacity: 0.3;
    background: #000000;
}
</style>