<template>
    <div class="header-navigation navigation">
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
              <ul>
                <li class="spacing" v-for="route in links" v-bind:key="route.id" :to="route.page">
                  <router-link :to="`${route.page}`"> {{route.text}} </router-link>
                </li>
              </ul>
          </div>
</template>

<script>
export default {
  name: 'navigation',
  data() {
    return {
      links: [
        { id: 0, text: 'Home', page: '/' },
        { id: 1, text: 'Save The Date', page: '/date' },
        { id: 2, text: 'Wedding Party', page: '/party' },
        { id: 3, text: 'Photos', page: '/photos' },
        { id: 4, text: 'Registry', page: '/registry' },
        { id: 5, text: 'Song Requests', page: '/songs' },
        { id: 6, text: 'Venue', page: '/venue' },
        { id: 6, text: 'Travel', page: '/travel' },
        { id: 7, text: 'Annuncements', page: '/news' },
        { id: 8, text: 'FAQ', page: '/faq' },
        { id: 9, text: 'RSVP', page: '/rsvp' },
      ],
    };
  },
};
</script>


 <style  scoped lang="scss">
//    @import url('./assets/css/styles.scss');
    .header-navigation ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    margin: auto;
    font-size: 1.25rem;
    text-align: center;
    padding-top: 2rem;
    }
    .navigation li {
    display: inline-block;
    width: fit-content;
    }
    .header-navigation li a {
    display: block;
    color: gray;
    text-align: center;
    text-decoration: none;
    
    &:hover {
        color:red
    }

    &.is-active {
        text-decoration: underline;
    }
    }

    .header-navigation li a:hover {
    /* background-color: #111111; */
    color:red
    }
    .header-navigation li a:active {
    /* color: blue; */
    text-decoration: underline;

    }
    /**
    * Stickey Header styles
    **/
    /* Style the header */
    .header-navigation {
    color: #f1f1f1;
    }

    .spacing { 
      Margin-right: 10px; 
    } 
    .router-link-active {
      font-weight: 500;
    }

 </style>
 