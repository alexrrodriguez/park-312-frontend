<template>
  <div class="park-event-show">
    <h2>Park ID: {{ park_event.park_id }}</h2>
    <p>{{ park_event.facility }}</p>
    <p>{{ park_event.date }}</p>
    <p>{{ park_event.time }}</p>
    <p>Attending: {{ park_event.attending }}</p>
    <router-link to="/park_events">Back to all Park Events</router-link>
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
  methods: {},
};
</script>
