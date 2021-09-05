<template>
  <div
    v-magnifier="true"
    class="cg-magnifier-container"
    >
    <CgImage
        :url="url"
        :alt="alt"
        :width="width"
        :height="height"
        :radius="10"
        />
    <div
        class="cg-magnifier-image"
            :style="{
                width: magnifierRegion + 'px',
                height: magnifierRegion + 'px',
                display: 'none'
            }"
        >
        <CgImage
        :url="url"
        :alt="alt"
        :width="width"
        :height="height"
        :style="{
            transform: `scale(${ multiple })`
        }"
        />
    </div>
  </div>
</template>

<script>
import '@/lib/CgUI/directives'

export default {
    name: 'CgMagnifier',
    props: {
        url: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ''
        },
        width: {
            type: String,
            default: '500px'
        },
        height: {
            type: String,
            default: '300px'
        },
        // 放大镜大小
        magnifierRegion: {
            type: Number,
            default: 100
        },
        // 放大倍率
        multiple: {
            type: Number,
            default: 1.2
        }
    }
}
</script>

<style scoped>
.cg-magnifier-container {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    /* overflow: hidden; */
}
.cg-magnifier-image {
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;
    box-shadow: 0 0 0 1px #AAA;
    cursor: move;
    overflow: hidden;
}
</style>