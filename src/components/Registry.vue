<template>
  <div class="view-header hello">
    <h2 class="component-head">{{ msg }}</h2>
        <div class='view-header registry-container'>
          <div class='registry' v-for='registry in registries' v-bind:key='registry.name'>
            <a v-bind:href='registry.uri'>
              <div class="inline">
                <img class="registry-pic" v-bind:src='registry.pic' v-bind:alt='registry.name'>
              </div>
              <div class='registry-name'> {{ registry.name }} </div>
              <!-- <div  class='registry-details'> {{ registry.uri }} </div> -->
            </a>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'registry',
  mounted() {
  },
  data() {
    return {
      msg: 'Access our Bed Bath & Beyond and Zola registries here!',
      registries: [
        {
          name: 'Zola',
          uri: 'https://www.zola.com/registry/katemariwedding',
          pic: 'https://theme.zdassets.com/theme_assets/391437/f130fe46a6be787d2dd22ef2d138965d7848f47b.png',
        },
        {
          name: 'Bed Bath & Beyond',
          uri: 'https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547736021?eventType=Wedding',
          pic: 'https://seeklogo.com/images/B/Bed_Bath__and__Beyond-logo-61E5DF1BDF-seeklogo.com.png',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.registry-container {
  * {
  box-sizing: border-box;
  }
  padding-bottom: 2rem;
  
  .registry {
    // padding-top:2rem; 
    padding: 5rem; 

    .registry-name {
      font-weight: bold;
    }
    .registry-pic {
      max-width: 15rem;
      height: auto;  width: 100%;
    }
  }
  
}
.component-head {
  font-weight: normal;
}

.announcement-list {
  list-style-type: none;
  padding: 0;
}

.registry-container {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
  padding: 0 1rem;
  // justify-content: space-between;
  justify-content: space-evenly;
}

</style>
