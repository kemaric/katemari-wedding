<template>
  <div class="view-header hello">
    <!-- https://photos.google.com/share/AF1QipMDfEJLnSGnPU1rNlqHlWHlrWIam9Q4RF8uBo3cUGmaC8c-9Tce7kax8XsR2LacWg/photo/AF1QipOshjKKUEcaM_TWwAIGYAoBh7Sh6c03SOK21lZH?key=Q1VvdDZtSTZJVUJ2Tm9pNnk5SlU3ZkNhLVJoVmNR -->
    <h1>    
       <img class="cover-photo" src="static\img\engagement1.jpg" alt="Kemari and Katherine Engagement Pic">
    </h1>
     <div class="section wedding-couple-names">
      <h1>Katherine Campanile</h1>
      <h3>AND</h3>
      <h1>Kemari Legg</h1>
    </div>
    <!-- TODO: Add Div for the Wedding Date, Hashtag, and location -->
    <div class="section wedding-meet">
      <h2>How We Met</h2>
      <h3>August 13th, 2013</h3>
      <p>It all started with an "About Me" and Firefly...</p>
    </div>
    <div class="section wedding-proposal">
      <h2>The Proposal</h2>
      <h3>October 28th, 2017</h3>
      <p>Months earlier Kemari contacted the band Misterwives for the plan of a lifetime...</p>
    </div>
     <h1>    
       <img class="cover-photo" src="static\img\engagement-footer-1.jpg" alt="Kemari and Katherine Engagement Pic">
    </h1>
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
.cover-photo {
  max-width: 100%; height: auto;
}
.section {
padding: 5rem;
}
</style>
