<template>
  <div class="view-header hello">
    <h1 class="component-head">{{ msg }}</h1>
    <!-- <h2>Latest announcements</h2> -->
    <ul class="announcement-list">
      <li class="announcement" v-for='announcement in announcements' v-bind:key='announcement'>
        <span> {{ announcement }}</span>
      </li>
      <li v-if='announcements.length === 0'> 
        <span>
          {{ noAnnouncement }}
         </span> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'announcements',
  data() {
    return {
      msg: 'Latest announcements',
      noAnnouncement: 'Stay tuned for upcoming #KatemariWedding Announcements...',
      announcements: [
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.component-head {
  font-weight: normal;
}

.announcement-list {
  list-style-type: none;
  padding: 0;
}

/* li {
  display: inline-block;
  margin: 0 10px;
} */

/* a {
  color: #35495E;
} */

.announcement {
  display: block;
  padding: 1rem;
}
</style>
