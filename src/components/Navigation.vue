<template>
    <div class="header-navigation navigation">
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
              <ul>
                <li v-bind:class="[{'dropdown-hover': route.$children}, 'spacing']" v-for="route in links" v-bind:key="route.id" :to="route.page">
                  <router-link :to="`${route.page}`"> {{route.text}}  </router-link>
                  <ul class="dropdown-content" v-if="route.$children">
                    <li class="spacing" v-for="route in route.$children" v-bind:key="route.id" :to="route.page">
                      <router-link :to="`${route.page}`" @click.native="scrollTo(route.page)"> {{route.text}} </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
          </div>
</template>

<script>
let navIndex = 0;
const TIMEOUT = 10;

function addPage() {
  navIndex += 1;
  return navIndex;
}
export default {
  name: 'navigation',
  mounted() {
    // From testing, without a brief timeout, it won't work.
    // reference here https://stackoverflow.com/questions/45201014/how-to-handle-anchors-bookmarks-with-vue-router/45206192?noredirect=1#comment84019465_45206192
    if (this.$route.hash) {
      setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT);
    }
  },
  methods: {
    scrollTo: (hashtag) => {
      setTimeout(() => { location.href = hashtag; }, TIMEOUT);
    },
  },
  data() {
    return {
      links: [
        { id: addPage(), text: 'Home', page: '/' },
        { id: addPage(), text: 'Save The Date', page: '/date' },
        { id: addPage(), text: 'Wedding Party', page: '/party' },
        { id: addPage(), text: 'Photos', page: '/photos' },
        { id: addPage(), text: 'Registry', page: '/registry' },
        { id: addPage(), text: 'Song Requests', page: '/songs' },
        { id: addPage(), text: 'Venue', page: '/venue' },
        {
          id: addPage(),
          text: 'Travel',
          page: '/travel',
          $children: [
            { id: addPage(), text: 'Directions to DoubleTree', page: '/travel#Directions_To_Hotel' },
            { id: addPage(), text: 'Directions to Quiet Water Park', page: '/travel#Directions_To_Park' },
          ],
        },
        { id: addPage(), text: 'Annuncements', page: '/news' },
        { id: addPage(), text: 'FAQ', page: '/faq' },
        { id: addPage(), text: 'RSVP', page: '/rsvp' },
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

      .dropdown-content{
        padding-top: .5rem;
      }
    }
    .navigation li {
      display: inline-block;
      width: fit-content;
      cursor: pointer;
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
          // color: #9BA17B;
          color: #967BB6;
          font-weight: bolder;

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

     .dropdown-content {
        cursor:auto;
        // background-color:#fff;
        display:none;
        padding: .5rem;
        position: fixed;
        // min-width:160px;
        // margin:0;
        // padding:0;
        z-index: 4;
        background: #faebd785;
      }

      
    .dropdown-hover {
      position:relative;display:inline-block;cursor:pointer;

      &:hover {
        .dropdown-content {
          display:block;
          padding: .5rem;
          li {
              display: block;
          }
        }
      }
    }

 </style>
 