<template>
  <div class="park-events-index">
    <br />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row col-mb-50">
            <div class="col-12">
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
<style scoped>
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
      name: "",
      email: "",
      image: "",
    };
  },
  created: function () {
    this.indexParkEvents();
  },
  methods: {
    indexParkEvents: function () {
      axios.get("/park_events").then((response) => {
        console.log("park events index", response);
        this.park_events = response.data;
        this.name = response.data[0]["user"]["name"];
        this.email = response.data[0]["user"]["email"];
        this.image = response.data[0]["user"]["image"];
      });
    },
  },
};
</script>
