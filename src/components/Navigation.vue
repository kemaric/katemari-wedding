<template>
    <div class="header-navigation navigation">
          <a class="mobile" href="#">&#9776;</a>
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
              <ul class="route-list">
                <li class="spacing" v-for="route in links" v-bind:key="route.id" :to="route.page">
                  <router-link :to="`${route.page}`"> {{route.text}} </router-link>
                </li>
              </ul>
          <div style="clear:both;"></div>
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
        { id: 7, text: 'Annuncements', page: '/news' },
        { id: 8, text: 'FAQ', page: '/faq' },
        { id: 9, text: 'RSVP', page: '/rsvp' },
      ],
    };
  },
  methods: {
    /* Toggle between adding and removing the "responsive" class to topnav
     when the user clicks on the icon */
    navToggle() {
      const x = document.getElementById('myTopnav');
      if (x.className === 'topnav') {
        x.className += ' responsive';
      } else {
        x.className = 'topnav';
      }
    },
  },
};
</script>

 <style  scoped lang="scss">

  //  @import url('./assets/css/styles.scss');
    .header-navigation {
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        margin: auto;
        font-size: 12px;
        text-align: center;
        padding-top: 2rem;
      }
      li {
        display: inline-block;
        width: fit-content;
        a {
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
      }

    } 
    /**
    * Stickey Header styles
    **/

    .spacing { 
      Margin-right: 10px; 
    } 
    .router-link-active {
      font-weight: 500;
    }

    .navigation .icon {
      display: none;
    }

    // @import "compass/css3";

/*********************
VARIABLES
**********************/
$link-color:white;
$link-hover:#00aedb;
$link-vertical-padding:15px;      //Controls Menu top & bottom padding
$link-horizontal-padding:20px;    //Contols Menu left & right padding
$menu-background: #353535;        //Control Menu Color Scheme

/*********************
RESPONSIVE BREAKPOINT
**********************/
@mixin breakpoint($point) {
  @if $point == 715 {
    @media (max-width: 715px) { @content; }
  }
  @else if $point == another-break-point {
    @media (max-width: 0) { @content; }
  }
}

/*********************
NAVIGATION STYLES
**********************/
nav {
  width:100%;
  background: linear-gradient(to bottom, $menu-background 0%, darken($menu-background,7%) 100%);
  box-shadow:0px 2px 2px rgba(0,0,0,.35);
  
  @include breakpoint(715) {
    margin:65px 0 0 0;
    max-height:0;
    overflow:hidden;
    transition: all 0.5s ease;
  }
}

nav ul {
  margin:0;
  list-style:none;
  
   @include breakpoint(715) {
	    margin:0;
      padding:0;
	    box-shadow:0px 1px 3px rgba(0,0,0,.7);
	    z-index:15;
    } 
  
  li {
    float:left;
    position:relative;
    z-index:1;
    
    @include breakpoint(715) {
      float:none;
      position:relative;
      margin:0;
    }
    
    a {
      display:block;
      padding: $link-vertical-padding $link-horizontal-padding;
      text-align:center;
      color:$link-color;
      text-decoration:none;
      border-right:1px solid darken($menu-background,10%);
      text-shadow:2px 2px 2px rgba(0,0,0,.8);
      // @include transition-duration(0.1s);
      
      &:hover {
        background:darken($menu-background,10%);
        color:$link-hover;
        // @include transition-duration(0.2s);
      }

      @include breakpoint(715) {
      	display:table;
      	margin:0;
    	  padding:15px 2px;
      	color:white;
      	border-top:1px solid rgba(0,0,0,.15);
        box-shadow:inset 0px 1px 3px rgba(255,255,255,.03);
      	text-shadow:none;
      	width:100%;
      }
    }
    
    &:hover ul {
      opacity:1;
      max-height:1000px;
      // @include transition-duration(0.3s);
      
      @include breakpoint(715) {
        max-height:0;
      } 
    }
    
    /******************
    SUBNAV
    ******************/
    
    ul {
      background:darken($menu-background,10%);
      list-style:none;
      padding:0;
      position:absolute;
      width:200px;
      max-height:0;
      z-index:0;
      opacity:0;
      overflow:hidden;
      font-size:.9em;
      box-shadow:0px 2px 2px rgba(0,0,0,.5);
      // @include transition-duration(0.3s);
      
      @include breakpoint(715) {
        max-height:0;
        opacity:1;
        width:100%;
        position:relative;
        overflow:hidden;
        box-shadow:inset 0px 2px 2px rgba(0,0,0,.5);
        // @include transition-duration(2s);
      }
      
      li {
        float:none;
        margin:0;

        @include breakpoint(715) {
          margin:0;
        }
        
        a {
          display:block;
          text-align:left;
          padding:$link-vertical-padding/1.5 $link-horizontal-padding/1.5;
          margin:0;
          border-right:none;
          border-top:1px solid darken($menu-background,12%);
          box-shadow:inset 0px 1px 3px rgba(255,255,255,.03);
          text-transform:none;
          text-shadow:none;
          // @include transition-duration(0.2s);
          
          &:hover {
          	color:$link-hover;
            background:lighten($menu-background,5%);
            // @include transition-duration(0.5s);
          }

          @include breakpoint(715) {
          	color:white;
          	padding-left:20px;
          	background:none;
          }
        }
      }
    }
  }
}


/***************************
MOBILE NAV STYLES
***************************/
.mobile {
  display:none;
  margin:0;
  padding:20px 15px;
  background: linear-gradient(to bottom, #353535 0%,#262626 100%);
  position:absolute;
  color:white;
  text-decoration:none;
  top:15px;
  right:15px;
  line-height:0;
  box-shadow:0px 2px 2px rgba(0,0,0,.35);
  
  @include breakpoint(715) {
    display:table;
  }
}

.active {
  max-height:9000px !important;
  // @include transition-duration(1s);
 }

@include breakpoint(715) {
  .arrow {
    display:block;
    background:url(http://www.jasonkinney.me/images/arrow.png) no-repeat;
    float:right;
    height:30px;
    width:30px;
    position:absolute;
    right:25px;
    top:10px;
    // @include transition-duration(0.3s);
  
    &:hover {
      cursor:pointer;
    }
  }

  .rotate {
	  // @include transition-duration(0.3s);
	  -webkit-transform:rotate(-180deg);
      -moz-transform:rotate(-180deg);
       -o-transform:rotate(-180deg);
          transform:rotate(-180deg);
  }
}



 </style>
 