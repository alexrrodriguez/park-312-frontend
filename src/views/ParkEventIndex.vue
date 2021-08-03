<template>
  <div class="park-events-index">
    <h1>Your Park Events</h1>
    <div v-for="park_event in park_events" v-bind:key="park_event.id">
      <h2>Park ID: {{ park_event.park_id }}</h2>
      <p>{{ park_event.facility }}</p>
      <p>{{ park_event.date }}</p>
      <p>{{ park_event.time }}</p>
      <p>Attending: {{ park_event.attending }}</p>
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
