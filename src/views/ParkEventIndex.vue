<template>
  <div class="park-events-index">
    <h1>Your Park Events</h1>
    <div v-for="park_event in park_events" v-bind:key="park_event.id">
      <h2>PARK NAME: {{ park_event.name }}</h2>
      <h3>FACILITY: {{ park_event.facility }}</h3>
      <h4>EVENT NAME: {{ park_event.event_name }}</h4>
      <p>DATE: {{ park_event.date }}</p>
      <p>TIME: {{ park_event.time }}</p>
      <p>ATTENDING: {{ park_event.attending }}</p>
      <router-link v-bind:to="`/park_events/${park_event.id}`">More Details</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park_events: [],
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
      });
    },
  },
};
</script>
