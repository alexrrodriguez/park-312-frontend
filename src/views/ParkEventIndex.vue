<template>
  <div class="park-events-index">
    <br />
    <section id="content">
      <div class="content-wrap profile-wrap">
        <div class="container clearfix">
          <div class="row col-mb-50">
            <div class="col-12 profile-header">
              <img
                v-bind:src="image"
                v-bind:alt="name"
                class="alignleft img-circle img-thumbnail my-0"
                style="max-width: 100px"
              />

              <div class="heading-block border-0">
                <h3>{{ name }}</h3>
                <span>Email: {{ email }}</span>
              </div>
              <button
                v-on:click="showProfile(users)"
                href="#myModal1"
                data-lightbox="inline"
                class="btn btn-primary mt-3 update-button"
              >
                Update Profile
              </button>
              <!-- Content
		============================================= -->
              <section id="content">
                <div class="content-wrap">
                  <div class="container clearfix">
                    <!-- <div class="center">
                      <a href="#myModal1" data-lightbox="inline" class="button button-large button-rounded">
                        Trigger Modal
                      </a>
                    </div> -->

                    <!-- <div class="modal-on-load" data-target="#myModal1"></div> -->

                    <!-- Modal -->
                    <div class="modal1 mfp-hide" id="myModal1">
                      <div class="block mx-auto" style="background-color: #fff; max-width: 500px">
                        <div class="center" style="padding: 50px">
                          <form v-on:submit.prevent="updateUser(currentUser)">
                            <h1>{{ name }}</h1>
                            <h5>Update Name:</h5>
                            <input type="text" v-model="currentUser.name" />
                            <br />
                            <br />
                            <h5>Update Email:</h5>
                            <input type="text" v-model="currentUser.email" />
                            <br />
                            <br />
                            <h5>Update IMG URL:</h5>
                            <input type="text" v-model="currentUser.image" />
                            <br />
                            <br />
                            <div>
                              <button class="btn btn-primary mt-3" type="submit" value="Update">Update</button>
                            </div>
                          </form>
                        </div>
                        <div class="section center m-0" style="padding: 30px">
                          <a href="/park_events" class="button" onClick="$.magnificPopup.close();return false;">
                            Close this Modal
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- #content end -->
              <!-- <dialog type="button" id="profile-details">
                <div class="modal-container">
                  <form method="dialog">
                    <form v-on:submit.prevent="updateUser(currentUser)">
                      <h1>{{ name }}</h1>
                      <h5>Update Name:</h5>
                      <input type="text" v-model="currentUser.name" />
                      <br />
                      <br />
                      <h5>Update Email:</h5>
                      <input type="text" v-model="currentUser.email" />
                      <br />
                      <br />
                      <h5>Update IMG URL:</h5>
                      <input type="text" v-model="currentUser.image" />
                      <br />
                      <button class="btn btn-primary mt-3" type="submit" value="Update">Update</button>
                    </form>
                    <button class="button button-3d button-small button-rounded button-red" v-on:click="closeUpdate()">
                      Close
                    </button>
                  </form>
                </div>
              </dialog> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h2>Your Park Events:</h2>
        <br />
      </div>
    </section>
    <hr />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-12 ps-md-4 park-event" v-for="park_event in park_events" v-bind:key="park_event.id">
              <div class="entry-title title-sm">
                <br />
                <h2>
                  <a href="#">EVENT NAME: {{ park_event.event_name }}</a>
                </h2>
                <h3>
                  <a href="#">PARK NAME: {{ park_event.name }}</a>
                </h3>
                <h3>
                  <a href="#">FACILITY: {{ park_event.facility }}</a>
                </h3>
              </div>
              <div class="entry-meta">
                <ul>
                  <li><span class="badge bg-warning text-dark px-1 py-1">Public</span></li>
                  <li>
                    <a href="#">
                      <i class="icon-time"></i>
                      {{ park_event.time }}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="icon-map-marker2"></i>
                      DATE: {{ park_event.date }}
                    </a>
                  </li>
                </ul>
              </div>
              <div class="entry-content">
                <h4>ATTENDING:</h4>
                <p>{{ park_event.attending }}</p>
                <router-link class="btn btn-secondary" v-bind:to="`/park_events/${park_event.id}`">
                  More Details
                </router-link>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.profile-wrap {
  padding-bottom: 0px !important;
}
.update-button {
  margin-bottom: 4px;
}
.modal-container {
  text-align: center;
}
.park-event:hover {
  background: #1abc9c;
}
.profileimg {
  border-radius: 50%;
  max-width: 20%;
  height: auto;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park_events: [],
      users: [],
      name: "",
      email: "",
      image: "",
      editUserParams: {},
      currentUser: {},
    };
  },
  created: function () {
    this.indexParkEvents();
    this.indexUsers();
  },
  methods: {
    indexParkEvents: function () {
      axios.get("/park_events").then((response) => {
        console.log("park events index", response);
        this.park_events = response.data;
      });
    },
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response);
        this.users = response.data;
        this.name = response.data.name;
        this.email = response.data.email;
        this.image = response.data.image;
      });
    },
    showProfile: function (users) {
      this.currentUser = users;
      console.log(this.currentUser);
      // document.querySelector("#profile-details").showModal();
    },
    updateUser: function (currentUser) {
      var editUserParams = currentUser;
      axios
        .patch("/users/" + currentUser.id, editUserParams)
        .then((response) => {
          console.log("update user", response);
          window.location.reload();
          this.$router.push("/park_events");
          document.querySelector("#profile-details").closeModal();
        })
        .catch((error) => {
          console.log("user update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    closeUpdate: function () {
      document.querySelector("#profile-details").closeModal();
    },
  },
};
</script>
