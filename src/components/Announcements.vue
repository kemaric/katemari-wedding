<template>
  <div class="view-header hello">
    <h1 class="component-head">{{ msg }}</h1>
    <!-- <h2>Latest announcements</h2> -->
    <ul class="announcement-list">
      <li class="announcement" v-for="announcement in announcements" v-bind:key="announcement.id">
        <span>{{ announcement.text }}</span>
      </li>
      <li v-if="announcements.length === 0">
        <span>{{ noAnnouncement }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../App';

export default {
  name: 'announcements',
  mounted() {
    // this.loadNews();
  },
  data() {
    return {
      msg: 'Latest announcements',
      noAnnouncement:
        'Stay tuned for upcoming #KatemariWedding Announcements...',
      announcements: [],
    };
  },
  firestore() {
    return {
      announcements: db
        .collection('announcements')
        .orderBy('date_made', 'desc'),
    };
  },
  methods: {
    loadNews() {
      if (!db) {
        return { announcements: [] };
      }
      // Create the query to load the last 12 messages and listen for new ones.
      const query = db
        .collection('announcements')
        .orderBy('date_made', 'desc')
        .limit(12);

      return query.onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'removed') {
            console.debug('Entry removed', change.doc.id, change.doc.data());
            this.deleteMessage(change.doc.id);
            return change.doc.data();
          }
          const message = change.doc.data();
          console.debug('Entry changed', change.doc.id, message);
          // this.displayMessage(change.doc);
          return change.doc.data();
          // displayMessage(change.doc.id, message.timestamp, message.name,
          //               message.text, message.profilePicUrl, message.imageUrl);
        },
        );
      });
    },
    deleteMessage(docId) {
      const docIndex = this.indexOfMessage(docId);
      if (docIndex > -1) {
        this.announcements.splice(docIndex, 1);
      }
    },
    displayMessage(doc) {
      const docIndex = this.indexOfMessage(doc.id);
      if (docIndex > -1) {
        // this.announcements[docIndex] = doc;
      } else {
        // this.announcements.push(doc);
      }
    },
    indexOfMessage(docId) {
      // eslint isnt allowing me to use ++ which is dumb
      for (let i = 0; i < this.announcements.length; i += 1) {
        if (this.announcements[i].doc && this.announcements[i].doc.id === docId) {
          return i;
        }
      }
      return -1;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
