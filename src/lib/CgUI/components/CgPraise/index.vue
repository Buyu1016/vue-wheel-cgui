<template>
  <div class="cg-praise-container">
      <span
        v-for="item in 5"
        :key="item"
        :class="{
            'span': true,
            'disabled': disabled
        }"
        @click="handleClick(item)">
          <CgIcon
            :type="item <= currentQuantity ? '&#xec8e;' : '&#xec8c;'"
            :size="size"
            :color="item <= currentQuantity ? '#EF8F30' : '#B1B1B1'"/>
      </span>
  </div>
</template>

<script>
export default {
    name: 'CgPraise',
    props: {
        quantity: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 16
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            currentQuantity: this.quantity
        }
    },
    methods: {
        handleClick(i) {
            this.currentQuantity = i
            this.$emit('handleChangeSelect', i)
        }
    }
}
</script>

<style scope>
.cg-praise-container {
    box-sizing: border-box;
    display: inline-block;
    padding: 5px 10px;
}
.span {
    cursor: pointer;
}
.disabled {
    cursor: not-allowed;
    pointer-events:none;
}
</style>