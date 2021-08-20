<template>
  <div class="cg-select-container">
      <CgInput :icon="icon" @inputOpenShow="handleOpen" @inputCloseShow="handleClose"/>
      <div class="cg-select-list" ref="cgSelectList">
        <p
          v-for="(item, index) in data"
          :key="index"
        >
        {{ item.text }}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'CgSelect',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      icon: '&#xeb6d;'
    }
  },
  methods: {
    handleOpen() {
      this.$refs.cgSelectList.style.display = 'inline-block'
      this.icon = '&#xeb6e;'
    },
    handleClose() {
      this.$refs.cgSelectList.style.display = 'none'
      this.icon = '&#xeb6d;'
    }
  }
}
</script>

<style scope>
.cg-dropdown-container {
  width: 100%;
}
.cg-select-list {
  width: 100%;
  display: none;
  margin-top: 3px;
  border-radius: 5px;
  border: 1px solid #D1D1D1;
  box-sizing: border-box;
  max-height: 212px;
  overflow-y: scroll;
}
.cg-select-list p {
  margin: 0;
  padding: 10px 0 10px 15px;
  background: #ffffff;
  transition: background 0.5s;
  cursor: pointer;
}
.cg-select-list p:hover {
  background: #D1D1D1;
}
</style>