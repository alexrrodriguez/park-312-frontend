<template>
  <div class="login">
    <section id="content">
      <div class="content-wrap py-0">
        <div
          class="section p-0 m-0 h-100 position-absolute"
          style="background: url('images/parallax/home/1.jpg') center center no-repeat; background-size: cover"
        ></div>

        <div class="section bg-transparent min-vh-100 p-0 m-0">
          <div class="vertical-middle">
            <div class="container-fluid py-5 mx-auto">
              <div class="center">
                <a href="/">
                  <h1 class="login-title">Park 312</h1>
                </a>
              </div>

              <div
                class="card mx-auto rounded-0 border-0"
                style="max-width: 400px; background-color: rgba(255, 255, 255, 0.93)"
              >
                <div class="card-body" style="padding: 40px">
                  <form
                    id="login-form"
                    name="login-form"
                    class="mb-0"
                    action="#"
                    method="post"
                    v-on:submit.prevent="submit()"
                  >
                    <h3>Login to your Account</h3>

                    <ul>
                      <li class="text-danger" v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>

                    <div class="row">
                      <div class="col-12 form-group">
                        <label for="login-form-username">Email:</label>
                        <input
                          type="email"
                          id="login-form-username"
                          name="login-form-username"
                          value=""
                          placeholder="enter email.."
                          class="form-control not-dark"
                          v-model="newSessionParams.email"
                        />
                      </div>
                      <small>Login as Tom with email: "tom@example.com" and password: "password" to demo app!</small>
                      <br />
                      <br />

                      <div class="col-12 form-group">
                        <label for="login-form-password">Password:</label>
                        <input
                          type="password"
                          id="login-form-password"
                          name="login-form-password"
                          placeholder="enter password.."
                          value=""
                          class="form-control not-dark"
                          v-model="newSessionParams.password"
                        />
                      </div>

                      <div class="col-12 form-group">
                        <button
                          class="button button-3d button-black m-0"
                          id="login-form-submit"
                          name="login-form-submit"
                          type="submit"
                          value="Submit"
                        >
                          Login
                        </button>
                        <a href="#" class="float-end">Forgot Password?</a>
                      </div>
                    </div>
                  </form>

                  <div class="line line-sm"></div>

                  <div class="w-100 text-center">
                    <h4 style="margin-bottom: 15px">or Login with:</h4>
                    <a href="#" class="button button-rounded si-facebook si-colored">Facebook</a>
                    <span class="d-none d-md-inline-block">or</span>
                    <a href="#" class="button button-rounded si-twitter si-colored">Twitter</a>
                  </div>
                  <hr />
                  <br />
                  <h3>
                    Don't Have An Account?
                    <router-link v-bind:to="`/signup`">Signup Now!</router-link>
                  </h3>
                </div>
              </div>

              <div class="text-center dark mt-3">
                <small>Copyrights &copy; Created By Alexander Rodriguez</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.login-title {
  color: white;
}
</style>
<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/park_event/new");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
