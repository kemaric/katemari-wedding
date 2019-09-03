<template>
  <div class="view-header hello">
    <h1 class="component-head">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'travel',
  data() {
    return {
      msg: 'Coming Soon!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.responsive {
  max-width: 100%;
  height: auto; }
</style>
