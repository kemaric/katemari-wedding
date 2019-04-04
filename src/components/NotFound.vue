<template>
  <div class="view-header hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'notfound',
  data() {
    return {
      msg: 'Page Not Found! I think you made a mistake.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}
</style>
