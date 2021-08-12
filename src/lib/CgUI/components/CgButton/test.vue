<template>
  <div class="test-container">
      <cg-button type="primary">Primary</cg-button>
      <cg-button>Default</cg-button>
      <cg-button type="dashed">Dashed</cg-button>
      <cg-button type="danger">Danger</cg-button>
      <cg-button type="link">Link</cg-button>
      <cg-button type="primary" :disabled="true">Primary</cg-button>
      <cg-button type="primary" :ghost="true">Primary</cg-button>
      <cg-button type="danger" :ghost="true">Danger</cg-button>
  </div>
</template>

<script>
import CgButton from './index.vue';

export default {
  components: {
    CgButton,
  },
};
</script>

<style scope>
.test-container {
    width: 500px;
    display: flex;
    flex-wrap: wrap;
}
</style>
