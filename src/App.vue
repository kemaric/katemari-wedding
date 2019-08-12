<template>
  <div id="app">
    <div class="app-wrapper">
      <!-- <div class="login-head">
        <a  href="#" v-if="!activeUser" @click.prevent="login">Login</a>
        <div v-else>
          Welcome {{ activeUser.email }} - <a href="#" @click.prevent="logout">Logout</a>
        </div>
      </div> -->
      <header class="app-header">
          <div class="container wedding-header">
            <span class="left wedding-date">November 2, 2019 Annapolis, MD</span>
            <span class="right wedding-hashtag">#KATEMARIWEDDING</span>
          </div>
          <div class="couple center">
            <span class="bride-groom-name">Katherine and Kemari</span>
          </div>
              <navigation id="myHeader"></navigation>
      </header>
      <main class="content">
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
      </main>
      <footer>
          <div class="footer inline">
              <span class="">Made with love by Kemari</span>
              <div class="wedding-social right inline"> 
                <a class="social" target="_blank" href="https://www.instagram.com/explore/tags/katemariwedding/" aria-label="KatemariWedding Instagram">
                  <img src="https://image.flaticon.com/icons/svg/174/174855.svg">
                </a>
                <a class="social" target="_blank" href="https://www.facebook.com/hashtag/katemariwedding/" aria-label="KatemariWedding Instagram">
                  <img src="https://image.flaticon.com/icons/svg/174/174848.svg">
                </a>
                <a class="social" target="_blank" href="https://twitter.com/hashtag/katemariwedding/" aria-label="KatemariWedding Instagram">
                  <img src="https://image.flaticon.com/icons/svg/1409/1409937.svg">
                </a>
              </div>
              
              <span class="">
                Design heavily inspired from <a href="https://www.zola.com/wedding-planning/website/design/cricket-ivory" target="_blank">Zola</a>
              </span>
        </div>
      </footer>
	  </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import * as tools from './helpers';

export const db = tools.fbDBConnection.firestore();
// eslint-disable-next-line no-console
console.debug('Firebase initialized', db);


export default {
  name: 'app',
  components: {
    navigation: Navigation,
  },
  mounted() {
    function initNav() {
      const header = document.getElementById('myHeader');
      let sticky;
      if (header) {
        sticky = header.offsetTop;
      }
      function myFunction() {
        if (window.pageYOffset > sticky) {
          header.classList.add('sticky');
        } else {
          header.classList.remove('sticky');
        }
      }
      window.onscroll = () => myFunction();
    }

    initNav();
  },
  data() {
    return {
      activeUser: null,
    };
  },
  async created() {
    await this.refreshActiveUser();
  },
  watch: {
    // everytime a route is changed refresh the activeUser
    $route: 'refreshActiveUser',
  },
  methods: {
    login() {
      this.$auth.loginRedirect();
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser();
    },
    async logout() {
      await this.$auth.logout();
      await this.refreshActiveUser();
      this.$router.push('/');
    },
  },
};
</script>
<style lang="scss">
$fa-font-path : "~@fortawesome/fontawesome-free/webfonts";
    @import "./node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss";
    @import "./node_modules/@fortawesome/fontawesome-free/scss/solid.scss";
    @import url('~@/assets/css/styles.scss');
/* TODO: Move this to a Sass file */
body {
  margin: 0;
  background-color: #faebd785;
}

#app {
  font-family: "Majesti Banner Bold" "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  font-weight:normal;
font-style:normal;

  .app-wrapper {
     min-height: 100vh;
    position: relative;
    padding-bottom: 30px;
  }
}

main {
  /* text-align: center; */
  margin-top: 40px;
  .view-header {
    text-align: center;
  } 
}
 
header {
  margin: 0;
  /* padding: 0 16px 0 24px; */
  /* background-color: #35495e; */
  color:gray;
}

header span {
  display: block;
  position: relative;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.container {
  position: relative;
  bottom: 0;
  margin: 0 5px 5px 5px;
}
.login-head {
  margin: 0 5px 5px 5px;
}
.left {
  float: left;
}
.right {
  float: right;
}

.couple {
  padding-top: 1rem;
  font-size: 2rem;
}
.center {
  margin: auto;
  width: 21rem;
}

.wedding-header{
  font-size: .7rem;
}


/* Page content */
.content {
  /* padding: 16px; */
}

 /**
  * Stickey Header styles
  **/

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  opacity: 0.6;
  background: #000;
      padding-bottom: 1rem;
  
  /* Style the header */
  &.header-navigation {
    // color: red;
    &:hover {
    color: lavender;
    }
  }

}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}

.social img {
  width: 1.5rem;
}

.inline {
  display: inline-block;
}

.footer {
   position: absolute;
   bottom: 0;
}
</style>
