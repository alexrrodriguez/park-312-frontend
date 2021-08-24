<template>
  <div class="park-event-show">
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h1>Event Page</h1>
        <br />
        <br />
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-8 ps-md-4">
              <div class="entry-title title-sm">
                <h1>Park Event:</h1>
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
                <router-link v-bind:to="`/park_events/${park_event.id}/edit`">Update Park Event</router-link>
                |
                <button
                  v-on:click="destroyParkEvent(park_event)"
                  class="button button-3d button-large button-rounded button-red"
                >
                  Delete Park Event
                </button>
                |
                <router-link to="/park_events">Back to All Park Events</router-link>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>PARK:</h1>
    <h3>{{ park_event.name }}</h3>
    <h3>Park ID: {{ park_event.park_id }}</h3>
    <h2>EVENT NAME:</h2>
    <h3>{{ park_event.event_name }}</h3>
    <h2>FACILITY:</h2>
    <h3>{{ park_event.facility }}</h3>
    <h2>Date/Time:</h2>
    <p>{{ park_event.date }}</p>
    <p>{{ park_event.time }}</p>
    <p>Attending: {{ park_event.attending }}</p>
    <router-link v-bind:to="`/park_events/${park_event.id}/edit`">Edit Park Event</router-link>
    |
    <button v-on:click="destroyParkEvent(park_event)">Delete Park Event</button>
    |
    <router-link to="/park_events">Back to All Park Events</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park_event: {},
    };
  },
  created: function () {
    axios.get("/park_events/" + this.$route.params.id).then((response) => {
      console.log("park event show", response);
      this.park_event = response.data;
    });
  },
  methods: {
    destroyParkEvent: function (park_event) {
      axios.delete("/park_events/" + park_event.id).then((response) => {
        console.log("park event destroy", response);
        this.$router.push("/park_events");
      });
    },
  },
};
</script>
