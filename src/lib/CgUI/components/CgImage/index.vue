<template>
    <div class="cg-image-container">
        <img
            v-if="url"
            :src="url"
            :alt="alt"
            :style="{
                'width': width ? width : '100%',
                'height': height ? height : '100%',
                'border-radius': radius + 'px'
            }"
        >
        <span
            v-if="!url"
            class="cg-image-notImage"
        >
            <CgIcon type="&#xeba2;" :size="100" color="#F5F7FA"/>
        </span>
    </div>
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
            type: String
        },
        height: {
            type: String
        },
        radius: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style scoped>
.cg-image-container {
    width: 100%;
    height: 100%;
    display: inline-block;
}
.cg-image-notImage {
    width: 100%;
    height: 100%;
    background: #D1D1D1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>