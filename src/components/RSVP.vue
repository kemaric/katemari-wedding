<template>
  <div class="view-header hello">
    <h1 class="component-head container-text-font">{{ msg }}</h1>
    <p>Please complete your RSVP(s) <a target="blank" href="https://www.zola.com/wedding/katemariwedding/rsvp">HERE. </a></p>
    <a target="blank" href="https://www.zola.com/wedding/katemariwedding/rsvp">
      <img src="/static/img/Wedding-Invitation-K-K.png" class="responsive-alt">
    </a>
  </div>
</template>

<script>
export default {
  name: 'rsvp',
  data() {
    return {
      msg: 'You\'re invited!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
</style>
