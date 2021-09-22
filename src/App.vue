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
              <a href="/" class="standard-logo" data-dark-logo="images/logo-dark.png">Park 312</a>
              <a href="/" class="retina-logo" data-dark-logo="images/logo-dark@2x.png">Park 312</a>
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
                  <a class="menu-link" href="/login" v-if="!isLoggedIn()"><div>Login</div></a>
                </li>
                <li class="menu-item">
                  <a class="menu-link" href="/signup" v-if="!isLoggedIn()"><div>Signup</div></a>
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
    <router-view />
    <!-- Footer
		============================================= -->
    <footer id="footer" class="dark">
      <div class="container">
        <!-- Footer Widgets
				============================================= -->
        <div class="footer-widgets-wrap">
          <div class="row col-mb-50">
            <div class="col-md-6 col-lg-4">
              <div class="widget clearfix">
                <h1>Park 312</h1>

                <p>
                  A Website Built To Help User's
                  <strong>Search</strong>
                  For Park Facilities And
                  <strong>Find</strong>
                  And
                  <strong>Create</strong>
                  Park Events In The Wonderful City of Chicago.
                </p>

                <div style="background: url('images/world-map.png') no-repeat center center; background-size: 100%">
                  <address>
                    <strong>Headquarters:</strong>
                    <br />
                    312 Address St.
                    <br />
                    Chicago, IL 60645
                    <br />
                  </address>
                  <abbr title="Phone Number"><strong>Phone:</strong></abbr>
                  (1) 8547 632521
                  <br />
                  <abbr title="Fax"><strong>Fax:</strong></abbr>
                  (1) 11 4752 1433
                  <br />
                  <abbr title="Email Address"><strong>Email:</strong></abbr>
                  info@park312.com
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="widget clearfix">
                <br />
                <br />
                <h4>Client Testimonials</h4>

                <div
                  class="fslider testimonial no-image bg-transparent border-0 shadow-none p-0"
                  data-animation="slide"
                  data-arrows="false"
                >
                  <div class="flexslider">
                    <div class="slider-wrap">
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#"><img src="images/testimonials/3.jpg" alt="Customer Testimonails" /></a>
                        </div>
                        <div class="testi-content">
                          <p>Park 312 is the best app to schedule my basketball pickup games around the city!</p>
                          <div class="testi-meta">
                            Steve Anderson
                            <span>Naperville, Il</span>
                          </div>
                        </div>
                      </div>
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#"><img src="images/testimonials/2.jpg" alt="Customer Testimonails" /></a>
                        </div>
                        <div class="testi-content">
                          <p>
                            Everytime I travel to Chicago I always use Park 312 to schedule park events for my company.
                          </p>
                          <div class="testi-meta">
                            Kevin Johnson
                            <span>Denver, Colorado</span>
                          </div>
                        </div>
                      </div>
                      <div class="slide">
                        <div class="testi-image">
                          <a href="#"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
                        </div>
                        <div class="testi-content">
                          <p>I love using Park 312 to find a nice park facility when I am in Chicago!</p>
                          <div class="testi-meta">
                            Sakura Yamada
                            <span>Tokyo, Japan</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="widget clearfix">
                <a href="#" class="social-icon si-small si-rounded si-facebook">
                  <i class="icon-facebook"></i>
                  <i class="icon-facebook"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-twitter">
                  <i class="icon-twitter"></i>
                  <i class="icon-twitter"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-gplus">
                  <i class="icon-gplus"></i>
                  <i class="icon-gplus"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-pinterest">
                  <i class="icon-pinterest"></i>
                  <i class="icon-pinterest"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-vimeo">
                  <i class="icon-vimeo"></i>
                  <i class="icon-vimeo"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-github">
                  <i class="icon-github"></i>
                  <i class="icon-github"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-yahoo">
                  <i class="icon-yahoo"></i>
                  <i class="icon-yahoo"></i>
                </a>

                <a href="#" class="social-icon si-small si-rounded si-linkedin">
                  <i class="icon-linkedin"></i>
                  <i class="icon-linkedin"></i>
                </a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="widget quick-contact-widget form-widget clearfix">
                <h4>Send Message</h4>

                <div class="form-result"></div>

                <form
                  id="quick-contact-form"
                  name="quick-contact-form"
                  action="include/form.php"
                  method="post"
                  class="quick-contact-form mb-0"
                >
                  <div class="form-process">
                    <div class="css3-spinner">
                      <div class="css3-spinner-scaler"></div>
                    </div>
                  </div>

                  <div class="input-group mx-auto">
                    <div class="input-group-text"><i class="icon-user"></i></div>
                    <input
                      type="text"
                      class="required form-control"
                      id="quick-contact-form-name"
                      name="quick-contact-form-name"
                      value=""
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="input-group mx-auto">
                    <div class="input-group-text"><i class="icon-email2"></i></div>
                    <input
                      type="text"
                      class="required form-control email"
                      id="quick-contact-form-email"
                      name="quick-contact-form-email"
                      value=""
                      placeholder="Email Address"
                    />
                  </div>
                  <textarea
                    class="required form-control input-block-level short-textarea"
                    id="quick-contact-form-message"
                    name="quick-contact-form-message"
                    rows="4"
                    cols="30"
                    placeholder="Message"
                  ></textarea>
                  <input
                    type="text"
                    class="d-none"
                    id="quick-contact-form-botcheck"
                    name="quick-contact-form-botcheck"
                    value=""
                  />
                  <input type="hidden" name="prefix" value="quick-contact-form-" />
                  <button
                    type="submit"
                    id="quick-contact-form-submit"
                    name="quick-contact-form-submit"
                    class="btn btn-danger m-0"
                    value="submit"
                  >
                    Send Email
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- .footer-widgets-wrap end -->
      </div>

      <!-- Copyrights
			============================================= -->
      <div id="copyrights">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-12 col-lg-auto text-center text-lg-start">
              <p class="mb-3">Copyrights &copy; 2021</p>
              <p class="mb-3">
                Created by Alexander Rodriguez
                <a href="https://github.com/alexrrodriguez" class="social-icon si-small si-rounded si-github">
                  <i class="icon-github"></i>
                </a>
              </p>
            </div>

            <div class="col-12 col-lg-auto text-center text-lg-end">
              <div class="copyrights-menu copyright-links mb-0">
                <a href="/">Home</a>
                /
                <a href="/park_event/new" v-if="isLoggedIn()">Create Park Event</a>
                /
                <a href="/park_events" v-if="isLoggedIn()">Profile Page</a>
                /
                <a href="/about">About</a>
                /
                <a href="/signup" v-if="!isLoggedIn()">Signup</a>
                /
                <a href="/login" v-if="!isLoggedIn()">Login</a>
                /
                <a href="/logout" v-if="isLoggedIn()">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- #copyrights end -->
    </footer>
    <!-- #footer end -->
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
