<template>
  <div class="view-header hello">
    <h1>    
       <img class="cover-photo" src="static\img\engagement1.jpg" alt="Kemari and Katherine Engagement Pic">
    </h1>
     <div class="section wedding-couple-names">
       <span>
          <img class="logo floatLeft" src="static/img/plant-left.png">
          <img  class="logo floatRight" src="static/img/plant.png">
          <div class="main-name">
            <h1>Katherine Campanile</h1>
            <h3>AND</h3>
            <h1>Kemari Legg</h1>
          </div>     
       </span>      
    </div>
    <!-- TODO: Add Div for the Wedding Date, Hashtag, and location -->
    <div class="section wedding-meet">
      <h2>How We Met</h2>
      <h3> {{ meeting.date }} </h3>
      <p>
        {{ meeting.summary }}
      </p>
    </div>
    <div class="section wedding-proposal">
      <h2>The Proposal</h2>
      <h3>{{ proposal.date }}</h3>
      <p>{{ proposal.summary }}</p>
      <iframe class="wedding-proposal-video" v-bind:src='proposal.asset' width="640" height="480"></iframe>
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
      meeting: {
        date: 'August 13th, 2013',
        summary: 'It all started with an “About Me” and Firefly.  Katherine and Kemari originally met on a dating website (very modern), all because Kemari wanted to hear about Katherine’s time at the previous years Firefly Music Festival, and he might admit that he was a bit jealous.  They ended up hitting it off, went on their first date in August of 2013, and after a brief period of dating they decided to go steady and on September 18, 2013 they made it Facebook official.  As years passed Kemari and Katherine continued to share together their love of music, camping, and sharing adventures together.',
        asset: '',
      },
      proposal: {
        date: 'October 27th, 2017',
        summary: 'Months earlier Kemari contacted the band Misterwives for the plan of a lifetime. When Kemari knew it was the time to propose to Katherine, he reached out to the lead singer of Mistervives to help make the proposal happen. After Kemari met up with the band to hash out the plans, he took Katherine to the concert along with two of his friends in on the secret. As the band finhshed up the first encore of “I Love You Always Forever”, Kemari snunck backstage to surprise Katherine with the proposal.',
        asset: 'https://drive.google.com/file/d/1BaY8GKP1dmeUxVexJnqBmfjiASxRruSG/preview',
      },

    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
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
padding-top: 5rem;
padding-left: 1rem;
padding-right: 1rem;
}

 .logo {
        max-width: 27vw;
        z-index: -16;
    }
    
    .main-name {
        vertical-align: middle;
        text-align: center; 
    }
    
    .floatLeft { float: left; }
    
    .floatRight { float: right; }
    
    .wedding-proposal-video {
      max-width: 75vw;
    max-height: 50vw;
}



</style>

