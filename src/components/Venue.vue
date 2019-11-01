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
      <h2>Reception Table Assignments </h2>
      <img src="/static/img/weddingSeatingChart.png" class="responsive-alt">
    </div>
  </div>
</template>

<script>
import * as $ from 'gojs';

import { db } from '../App';

export default {
  name: 'venue',
  mounted() {
    // console.log('Mounted');
    // this.initDiagram();
  },
  data() {
    return {
      msg: 'Quiet Waters Park: Blue Heron Center',
      venue: { seatingDiagram: null },
      venueData: {},
    };
  },
  firestore() {
    // console.log('Firestore');
    return {
      // venueData: this.fetchDiagramSimple(),
    };
  },
  methods: {
    fetchDiagram() {
      if (!db) {
        return { };
      }
      const query = db.collection('venue');
      if (query && 'onSnapshot' in query) {
        return query.onSnapshot(
          (snapshot) => {
            console.log('Got data', snapshot.docChanges());
            snapshot.docChanges().forEach(
              (change) => {
                if (change.type === 'removed') {
                  console.debug('Entry removed', change.doc.id, change.doc.data());
                  return change.doc.data();
                }
                const doc = change.doc.data();
                console.debug('Entry changed', change.doc.id, doc);
                this.venue[change.doc.id] = doc;
                return this.venue;
              },
            );
          },
          (error) => {
            console.log('Encountered error', error);
          },
        );
      }
      return { };
    },
    fetchDiagramSimple() {
      return db.collection('venue').doc('seatingchart');
    },
    initDiagram() {
      console.log('Got gojs', $);
      this.venueData = this.fetchDiagramSimple();
      this.venueData.onSnapshot((doc) => {
        console.log('Got venue data', doc);
        const model = doc.valueOf().data();
        if (model && model.data) {
          // let _data = JSON.parse(model.data);
        }
      });
      // this.venueData.onSnapshot(
      //   (snapshot) => {
      //     snapshot.docChanges().forEach(
      //       (change) => {
      //         if (change.type === 'removed') {
      //           console.debug('Entry removed', change.doc.id, change.doc.data());
      //           return change.doc.data();
      //         }
      //         const doc = change.doc.data();
      //         console.debug('Entry changed', change.doc.id, doc);
      //         this.venue[change.doc.id] = doc;
      //         return doc;
      //       },
      //     );
      //   },
      //   (error) => {
      //     console.log('Encountered error', error);
      //   },
      // );
    },
    setUpTables() {

    },
    searchForSeat() {
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped lang="scss">
.responsive {
  max-width: 100%;
  height: auto; }
</style>
