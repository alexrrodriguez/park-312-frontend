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
    <!-- <h1>{{ name }}</h1>
    <img class="profileimg" v-bind:src="image" v-bind:alt="name" />
    <h2>Email: {{ email }}</h2> -->
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Park Events:</h1>
      </div>
    </section>
    <hr />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-8 ps-md-4" v-for="park_event in park_events" v-bind:key="park_event.id">
              <div class="entry-title title-sm">
                <h2>
                  <a href="#">EVENT NAME: {{ park_event.event_name }}</a>
                </h2>
                <h3>
                  <a href="#">FACILITY: {{ park_event.facility }}</a>
                </h3>
                <h3>
                  <a href="#">PARK NAME: {{ park_event.name }}</a>
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
                <!-- <a href="#" class="btn btn-secondary" disabled="disabled">Buy Tickets</a> -->
                <router-link v-bind:to="`/park_events/${park_event.id}`">More Details</router-link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div v-for="park_event in park_events" v-bind:key="park_event.id">
      <h2>PARK NAME: {{ park_event.name }}</h2>
      <h3>FACILITY: {{ park_event.facility }}</h3>
      <h4>EVENT NAME: {{ park_event.event_name }}</h4>
      <p>DATE: {{ park_event.date }}</p>
      <p>TIME: {{ park_event.time }}</p>
      <p>ATTENDING: {{ park_event.attending }}</p>
      <router-link v-bind:to="`/park_events/${park_event.id}`">More Details</router-link>
      <hr />
    </div> -->
  </div>
</template>
<style scoped>
.profileimg {
  border-radius: 50%;
  max-width: 10%;
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
