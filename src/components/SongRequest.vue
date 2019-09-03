<template>
  <div class="view-header hello">
    <!-- <img src="/static/img/Katherine-and-Kemari-Save-the-Date.jpg" class="responsive"> -->
    <div>
      <h1 class="component-head">{{ msg }}</h1>
      <iframe src="https://open.spotify.com/embed/user/123065350/playlist/43m55d0CXL3GVkkktQskkV" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>    </div>
  </div>
</template>

<script>
export default {
  name: 'songs',
  data() {
    return {
      msg: 'Current Requests',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.responsive {
  max-width: 100%;
  height: auto; }

  .component-head {
  font-weight: normal;
      font-family: "Avenir";

}
</style>
