<template>
  <div class="cg-empty-container">
      <div class="cg-empty-flex">
            <CgIcon type="&#xe6cc6;" :size="70" color="#DDDDDD" />
            <p class="cg-empty-word">{{ title }}</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CgEmpty',
    props: {
        title: {
            type: String,
            default: 'Not Data'
        }
    }
}
</script>

<style scoped>
.cg-empty-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cg-empty-word {
    font-size: 20px;
    color: #DDDDDD;
}
p {
    margin: 10px 0 0 0;
    text-align: center;
}
</style>