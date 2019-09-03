<template>
  <div class="view-header hello">
    <h1 class="component-head container-text-font">{{ msg }}</h1>
    <div class="hotel">
      <p> Double Tree by Hilton Hotel Annapolis</p>
      <div class="container-text-font">
        <br>
        410-224-3150
        <br>
        <p> We are in the process of blocking rooms off under Katherine and Kemari.</p>
        <br>
        <a href="https://doubletree3.hilton.com/en/hotels/maryland/doubletree-by-hilton-hotel-annapolis-ANPDTDT/index.html"
        target="_blank">  <button class="button"> Book a Room</button></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travel',
  data() {
    return {
      msg: 'Guest Accommodations',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.responsive {
  max-width: 100%;
  height: auto; }

  .button {
  border: none;
  border-radius: 2px;
  color: #fff!important;
  background-color: #616161!important;
}
.component-head {
  font-weight: normal;
      font-family: "Avenir";

}
</style>
