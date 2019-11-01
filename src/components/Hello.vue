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
      <p class="container-text-font">
        {{ meeting.summary }}
      </p>
    </div>
    <div class="section wedding-proposal">
      <h2>The Proposal</h2>
      <h3>{{ proposal.date }}</h3>
      <p class="container-text-font">{{ proposal.summary }}</p>
      <iframe class="wedding-proposal-video" v-bind:src='proposal.asset' width="640" height="480"></iframe>
    </div>
    <div class="section wedding-timeline">
      <h2>The Wedding Timeline</h2>
      <ul class="timeline-list container-text-font">
        <li class="timeline-item" v-for="item in timeline" v-bind:key="item.id">
          <span>{{ item.data().name }}  {{ getDate(item) | formatDateTime }}</span>
        </li>
        <li v-if="timeline.length === 0">
          <span>TBD</span>
        </li>
      </ul>   
    </div>
    <div class="section wedding-closing">
      <h2>We cant wait to celebrate our love with you all!</h2>
    </div>
     <h1>    
       <img class="cover-photo" src="static\img\KatherineKemariEngagement-71_websize.jpg" alt="Kemari and Katherine Engagement Pic">
    </h1>
  </div>
  
</template>

<script>
import { db } from '../App';

const indexOfMessage = (docId, _collection) => {
  // eslint isnt allowing me to use ++ which is dumb
  for (let i = 0; i < _collection.length; i += 1) {
    if (_collection[i].doc && _collection[i].doc.id === docId) {
      return i;
    }
  }
  return -1;
};
export default {
  name: 'hello',
  mounted() {
    this.getTimeline();
  },
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
      timeline: [],
    };
  },
  firestore() {
    return {
      timeline: db
        .collection('timeline')
        .orderBy('date', 'desc'),
    };
  },
  methods: {
    getTimeline() {
      const query = db.collection('timeline').orderBy('time', 'desc');
      query.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'removed') {
            console.debug('Entry removed', change.doc.id, change.doc.data());
            this.deleteMessage(change.doc.id, this.timeline);
            return change.doc.data();
          }
          const message = change.doc.data();
          console.debug('Entry changed', change.doc.id, message);
          this.displayMessage(change.doc, this.timeline);
          return change.doc.data();
        },
        );
      });
    },
    getDate(announcementDate) {
      if (announcementDate.data().time != null && announcementDate.data().time.seconds) {
        return new Date(announcementDate.data().time.seconds * 1000).toISOString();
      }
      return null;
    },
    deleteMessage(docId, collection) {
      const docIndex = indexOfMessage(docId, collection);
      if (docIndex > -1) {
        collection.splice(docIndex, 1);
      }
    },
    displayMessage(doc, collection) {
      const docIndex = indexOfMessage(doc.id, collection);
      if (docIndex > -1) {
        collection.splice(docIndex, 1, doc);
      } else {
        collection.unshift(doc);
      }
    },
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
  max-width: 100vw; height: auto;
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

.timeline-list {
  list-style-type: none;
  padding: 0;
  text-align: center;
  .timeline-item {
    display: block;
    padding: 1rem;

  }
}


</style>

