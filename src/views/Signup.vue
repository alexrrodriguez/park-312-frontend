<template>
  <div class="signup">
    <div id="wrapper" class="clearfix">
      <!-- Slider
		============================================= -->
      <section id="slider" class="slider-element slider-parallax min-vh-100 dark include-header">
        <div class="slider-inner" style="background-image: url('images/chicago-park.jpg')">
          <div class="row position-absolute position-lg-relative w-100 h-100 m-0" style="z-index: 3">
            <div class="offset-md-7 col-md-5" style="background-color: rgba(0, 0, 0, 0.45)">
              <div class="vertical-middle col-padding slider-element-fade">
                <div class="heading-block border-bottom-0 bottommargin-sm">
                  <h1 style="font-size: 22px">Signup To Create Your Account</h1>

                  <span style="font-size: 16px" class="fw-light text-capitalize ls1 mt-0">
                    Or
                    <router-link v-bind:to="`/login`">Login</router-link>
                    if already registered!
                  </span>
                </div>
                <form class="row" style="max-width: 300px" v-on:submit.prevent="submit()">
                  <div class="col-12 form-group">
                    <label for="" class="text-capitalize fw-semibold">Username</label>
                    <input
                      type="text"
                      id="template-op-form-email"
                      name="template-op-form-email"
                      class="form-control not-dark"
                      v-model="newUserParams.name"
                    />
                    <small>{{ 50 - newUserParams.name.length }} characters remaining</small>
                  </div>
                  <div class="col-12 form-group">
                    <label for="" class="text-capitalize fw-semibold">Email</label>
                    <input
                      type="email"
                      id="template-op-form-email"
                      name="template-op-form-email"
                      class="form-control not-dark"
                      v-model="newUserParams.email"
                    />
                  </div>
                  <div class="col-12 form-group">
                    <label for="" class="text-capitalize fw-semibold">Image URL</label>
                    <input
                      type="text"
                      id="template-op-form-email"
                      name="template-op-form-email"
                      class="form-control not-dark"
                      v-model="newUserParams.image"
                    />
                  </div>
                  <div class="col-12 form-group">
                    <label for="" class="text-capitalize fw-semibold">Choose Password</label>
                    <input
                      type="password"
                      id="template-op-form-password"
                      name="template-op-form-password"
                      class="form-control not-dark"
                      v-model="newUserParams.password"
                    />
                    <small
                      v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6"
                      class="text-danger"
                    >
                      Password must be 6 characters
                    </small>
                    <small v-if="newUserParams.password.length > 20" class="text-danger">
                      Password cannot exceed 20 characters
                    </small>
                  </div>
                  <div class="col-12 form-group">
                    <label for="" class="text-capitalize fw-semibold">Password Confirmation</label>
                    <input
                      type="password"
                      id="template-op-form-password"
                      name="template-op-form-password"
                      class="form-control not-dark"
                      v-model="newUserParams.password_confirmation"
                    />
                    <small v-if="newUserParams.password_confirmation !== newUserParams.password" class="text-danger">
                      Must match Password!
                    </small>
                  </div>
                  <div class="col-12 form-group">
                    <button
                      type="submit"
                      class="fw-normal text-capitalize button button-border button-light button-circle m-0"
                      value="submit"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
                <p class="mb-0">
                  <small class="fw-light"><em>* No Credit Card Required</em></small>
                </p>
              </div>
              <a
                href="#"
                data-scrollto="#section-about"
                data-easing="easeInOutExpo"
                data-speed="1250"
                data-offset="65"
                class="one-page-arrow dark"
              >
                <i class="icon-angle-down infinite animated fadeInDown"></i>
              </a>
            </div>
          </div>

          <div class="video-wrap">
            <div class="video-overlay" style="background: rgba(0, 0, 0, 0.2)"></div>
          </div>
        </div>
      </section>
      <!-- #slider end -->
    </div>
    <!-- #wrapper end -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: { name: "", password: "", password_confirmation: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
