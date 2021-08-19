<template>
  <div id="app">
    <!-- Header
		============================================= -->
    <header id="header" class="full-header dark">
      <div id="header-wrap">
        <div class="container">
          <div class="header-row">
            <!-- Logo
						============================================= -->
            <div id="logo">
              <a href="index.html" class="standard-logo" data-dark-logo="images/logo-dark.png">
                Park 312
                <!-- <img src="images/logo.png" alt="Canvas Logo" /> -->
              </a>
              <a href="index.html" class="retina-logo" data-dark-logo="images/logo-dark@2x.png">
                Park 312
                <!-- <img src="images/logo@2x.png" alt="Canvas Logo" /> -->
              </a>
            </div>
            <!-- #logo end -->

            <div class="header-misc">
              <!-- Top Search
							============================================= -->
              <div id="top-search" class="header-misc-icon">
                <a href="#" id="top-search-trigger">
                  <i class="icon-line-search"></i>
                  <i class="icon-line-cross"></i>
                </a>
              </div>
            </div>

            <div id="primary-menu-trigger">
              <svg class="svg-trigger" viewBox="0 0 100 100">
                <path
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
                ></path>
                <path d="m 30,50 h 40"></path>
                <path
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
                ></path>
              </svg>
            </div>

            <!-- Primary Navigation
						============================================= -->
            <nav class="primary-menu">
              <ul class="menu-container">
                <li class="menu-item">
                  <a class="menu-link" href="/"><div>Home</div></a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="/park_event/new" v-if="isLoggedIn()"><div>Create Park Event</div></a>
                </li>
                <li class="menu-item mega-menu">
                  <a class="menu-link" href="/park_events" v-if="isLoggedIn()"><div>Profile Page</div></a>
                </li>
                <li class="menu-item mega-menu">
                  <a class="menu-link" href="/about"><div>About</div></a>
                </li>
                <li class="menu-item mega-menu">
                  <a class="menu-link" href="/signup" v-if="!isLoggedIn()"><div>Signup</div></a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="/login" v-if="!isLoggedIn()"><div>Login</div></a>
                </li>
                <li class="menu-item mega-menu">
                  <a class="menu-link" href="/logout" v-if="isLoggedIn()"><div>Logout</div></a>
                </li>
              </ul>
            </nav>
            <!-- #primary-menu end -->

            <form class="top-search-form" action="search.html" method="get">
              <input
                type="text"
                name="q"
                class="form-control"
                value=""
                placeholder="Type &amp; Hit Enter.."
                autocomplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <div class="header-wrap-clone"></div>
    </header>
    <!-- #header end -->
    <div id="nav">
      <router-link to="/">Park312</router-link>
      |
      <router-link to="/park_event/new" v-if="isLoggedIn()">Create Park Event</router-link>
      |
      <router-link to="/park_events" v-if="isLoggedIn()">Profile Page</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/signup" v-if="!isLoggedIn()">Signup</router-link>
      |
      <router-link to="/login" v-if="!isLoggedIn()">Login</router-link>
      |
      <router-link to="/logout" v-if="isLoggedIn()">Logout</router-link>
    </div>
    <router-view />
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
