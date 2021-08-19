<template>
  <div class="cg-input-container">
    <label ref="cgInputPlaceHolder" class="cg-input-placeholder">{{placeholder}}</label>
    <input
      type="text"
      ref="cgInput"
      class="cg-input"
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
      default: '请填写内容'
    },
    icon: {
      type: String
    }
  },
  mounted() {
    const oInput = this.$refs.cgInput
    const oLabel = this.$refs.cgInputPlaceHolder
    oInput.addEventListener('focus', () => {
      oLabel.style.display = 'none'
      oInput.classList.add("cg-input-active")
    })
    oInput.addEventListener('blur', () => {
      if (oInput.value) {
        console.log(oInput.value)
      } else {
        oLabel.style.display = 'inline-block'
      }
      oInput.className = 'cg-input'
    })
  },
  methods: {}
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
  box-sizing: border-box;
}
.cg-input-icon {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
}
.cg-input-active {
  border-color: #A1A1A1;
}
</style>