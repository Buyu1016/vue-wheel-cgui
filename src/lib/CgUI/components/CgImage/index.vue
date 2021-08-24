<template>
    <img
        :src="url"
        :alt="alt"
        class="cg-image-container"
        :style="{
            'width': width + 'px',
            'height': height + 'px',
            'border-radius': radius + 'px'
        }"
    >
</template>

<script>
export default {
    name: 'CgImage',
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
            type: Number,
            default: 500 
        },
        height: {
            type: Number,
            default: 300
        },
        radius: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
</style>