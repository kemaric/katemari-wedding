<template>
  <div class='view-header hello party-container'>
    <div class='bridal-party-container'>
      <div class='party-member' v-for='member in party.bride' v-bind:key='member.name'>
        <div class="inline" v-if='member.images.length >= 1'>
          <img class="party-member-pic" v-for='pic in member.images' v-bind:key='pic' v-bind:src='pic' v-bind:alt='member.name'>
        </div>
        <div class='party-member-name'> {{ member.name }} </div>
        <div  class='party-member-details'> {{ member.details }} </div>

      </div>
    </div>
    <div class='groom-party-container'>
      <div class='party-member' v-for='member in party.groom' v-bind:key='member.name'>
        <div class="inline" v-if='member.images.length >= 1'>
          <img class="party-member-pic" v-for='pic in member.images' v-bind:key='pic' v-bind:src='pic' v-bind:alt='member.name'>
        </div>
        <div class='party-member-name'> {{ member.name }} </div>
        <div  class='party-member-details'> {{ member.details }} </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'party',
  mounted() {
    this.initBridalParty();
    this.initGroopParty();
  },
  data() {
    return {
      msg: 'Coming Soon!',
      party: {
        bride: [],
        groom: [],
      },
    };
  },
  methods: {
    partyMemberFactory(_id, _name, _details, _numImages = 0) {
      return {
        name: _name,
        details: _details,
        images: [...Array(_numImages).keys()].map(index => `static/img/party/${_id}-${index + 1}.jpg`),
      };
    },
    initBridalParty() {
      this.party.bride.push(
        this.partyMemberFactory('emily', 'Emily Fiumenero', 'Cousin of the bride', 2));
      this.party.bride.push(
        this.partyMemberFactory('rayley', 'Rayley Hunton', 'Childhood best friend of the bride', 2));
      this.party.bride.push(
        this.partyMemberFactory('aj', 'AJ Kiser', 'Best friend of the bride since college', 2));
    },
    initGroopParty() {
      this.party.groom.push(
        this.partyMemberFactory('husani', 'Husani Hylton', 'Brother of the groom', 2));
      this.party.groom.push(
        this.partyMemberFactory('jean', 'Jean Coo-Pay', 'Best friend of the groom since college', 2));
      this.party.groom.push(
        this.partyMemberFactory('philip', 'Philip Gebret', 'Best friend of the groom since high school', 2));
      this.party.groom.push(
        this.partyMemberFactory('cj', 'CJ B.', 'Best friend of the groom since high school', 2));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.party-container {
  * {
  box-sizing: border-box;
}
  padding-bottom: 2rem;
  
  .party-member {
    padding-top:2rem; 

    .party-member-name {
      font-weight: bold;
    }
    .party-member-pic {
      max-width: 20rem;
      height: auto;  width: 100%;
    }
  }
  
}
.bridal-party-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 4px;
}
</style>
