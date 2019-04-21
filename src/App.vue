<template>
  <div id="app">
    <div>
      <a href="#" v-if="!activeUser" @click.prevent="login">Login</a>
      <div v-else>
        Welcome {{ activeUser.email }} - <a href="#" @click.prevent="logout">Logout</a>
      </div>
      <header>
          <div class="container wedding-header">
            <span class="left wedding-date">November 2, 2019</span>
            <span class="right wedding-hashtag">#KATEMARIWEDDING</span>
          </div>
          <div class="couple center">
            <span class="bride-groom-name">Katherine and Kemari</span>
          </div>
          <div id="myHeader" class="header-navigation navigation">
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/party">Wedding Party</router-link></li>
                <li><router-link to="/photos">Photos</router-link></li>
                <li><router-link to="/registry">Registry</router-link></li>
                <li><router-link to="/songs">Song Requests</router-link></li>
                <li><router-link to="/venue">Venue</router-link></li>
                <li><router-link to="/news">Annuncements</router-link></li>
                <li><router-link to="/faq">FAQ</router-link></li>
                <li><router-link to="/rsvp">RSVP</router-link></li>
              </ul>
          </div>
        </header>
        <main class="content">
          <!-- <img src="./assets/logo.png" alt="Vue.js PWA"> -->
          <!-- route outlet -->
          <!-- component matched by the route will render here -->
          <router-view></router-view>
        </main>
        <footer>
          Made with love by Kemari
          Design heavily inspired from <a href="https://www.zola.com/wedding-planning/website/design/cricket-ivory" target="_blank">Zola</a>
        </footer>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
<style>
/* TODO: Move this to a Sass file */
body {
  margin: 0;
  background-color: #faebd7;
}

#app {
  font-family: "Majesti Banner Bold" "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  font-weight:normal;
font-style:normal;
}

main {
  /* text-align: center; */
  margin-top: 40px;
}
main .view-header {
    text-align: center;
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

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 75%;
  margin: auto;
  font-size: 12px;
  text-align: center;
  padding-top: 2rem;
}
.navigation li {
}
.navigation li a {
  display: block;
  color: gray;
  text-align: center;
  /* padding: 16px; */
  text-decoration: none;
}

.navigation li a:hover {
  /* background-color: #111111; */
  color:red
}

/**
* Stickey Header styles
**/
/* Style the header */
.header-navigation {
  color: #f1f1f1;
}

/* Page content */
.content {
  /* padding: 16px; */
}

/* The sticky class is added to the header with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  opacity: 0.6;
  background: #000;
      padding-bottom: 1rem;

}

/* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
.sticky + .content {
  padding-top: 102px;
}
</style>
