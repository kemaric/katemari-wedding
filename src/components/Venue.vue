<template>
  <div class="view-header hello">
    <h1 class="component-head">{{ msg }}</h1>
    <div class="venue-info">
      <img src='https://www.aacounty.org/sebin/z/t/blue-heron-center-2.jpg'>
      <h2> About the Venue </h2>
      <p class="container-text-font">
        The Blue Heron Center At. Quiet Waters Park. 600 Quiet Waters Park Road. Annapolis, Maryland 21403
      </p>
    </div>
    <div class="venue-seating">
    </div>
  </div>
</template>

<script>
export default {
  name: 'venue',
  data() {
    return {
      msg: 'Quiet Waters Park: Blue Heron Center',
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
