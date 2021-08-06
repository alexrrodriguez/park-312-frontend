<template>
  <div class="park-event-show">
    <h1>{{ park_event.name }}</h1>
    <h3>Park ID: {{ park_event.park_id }}</h3>
    <h2>{{ park_event.facility }}</h2>
    <p>{{ park_event.date }}</p>
    <p>{{ park_event.time }}</p>
    <p>Attending: {{ park_event.attending }}</p>
    <router-link v-bind:to="`/park_events/${park_event.id}/edit`">Edit Park Event</router-link>
    |
    <button v-on:click="destroyParkEvent(park_event)">Delete Park Event</button>
    |
    <router-link to="/park_events">Back to All Park Events</router-link>
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
