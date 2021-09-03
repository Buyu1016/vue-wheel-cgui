<template>
  <div class="cg-magnifier-container">
      <CgImage
        :url="url"
        :width="width"
        :height="height"
        :radius="10"
        />
  </div>
</template>

<script>
export default {
    name: 'CgMagnifier',
    props: {
        url: {
            type: String,
            required: true
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
        }
    }
}
</script>

<style scoped>
.cg-magnifier-container {
    display: inline-block;
}
</style>