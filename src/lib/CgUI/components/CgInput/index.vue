<template>
  <div class="cg-input-container">
    <label v-show="!value" ref="cgInputPlaceHolder" class="cg-input-placeholder">{{placeholder}}</label>
    <input
      type="text"
      ref="cgInput"
      :class="{
        'cg-input': true,
        'cg-input-disabled': disabled
        }"
      v-model="data"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <CgIcon
      v-if="icon"
      :type="icon"
      color="#D1D1D1"
      class="cg-input-icon"/>
  </div>
</template>

<script>
export default {
  name: 'CgInput',
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    icon: {
      type: String
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: this.value
    }
  },
  watch: {
    'value'(newVal) {
      this.data = newVal
    },
    'data'(newVal) {
      this.$emit('update:value', newVal)
    }
  },
  methods: {
    handleFocus() {
      const oInput = this.$refs.cgInput
      const oLabel = this.$refs.cgInputPlaceHolder
      oLabel.style.display = 'none'
      oInput.classList.add("cg-input-active")
      this.$emit('inputOpenShow')
    },
    handleBlur() {
      const oInput = this.$refs.cgInput
      const oLabel = this.$refs.cgInputPlaceHolder
      if (!oInput.value) {
        oLabel.style.display = 'inline-block'
      }
      oInput.className = 'cg-input'
      this.$emit('inputCloseShow')
    }
  }
}
</script>

<style scoped>
.cg-input-container {
  width: 100%;
  display: inline-block;
  position: relative;
}
.cg-input-placeholder {
  position: absolute;
  left: 18px;
  top: 50%;
  color: #D1D1D1;
  transform: translateY(-50%);
  pointer-events: none;
}
.cg-input {
  width: 100%;
  height: 36px;
  border-radius: 5px;
  padding: 2px 25px 2px 15px;
  font-size: 16px;
  border: 1px solid #DCDFE6;
  outline: none;
  color: #A1A1A1;
  box-sizing: border-box;
}
.cg-input-disabled {
  background: #F1F1F1;
  pointer-events: none;
}
.cg-input-icon {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
}
.cg-input-active {
  color: #515151;
  border-color: #A1A1A1;
}
</style>