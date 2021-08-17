<template>
  <div class="park-show">
    <div>
      <h1>{{ park.name }}</h1>
      <h3>DISTRICT: {{ park.district }}</h3>
      <h4>Facility: {{ park.facility }}</h4>
      <p>Address: {{ park.address }}</p>
      <p>Indoor: {{ park.indoor }} | Outdoor: {{ park.outdoor }}</p>
      <p>Park Hours: {{ park.hours }}</p>
      <img v-bind:src="park.image" v-bind:alt="park.name" />
    </div>
    <router-link to="/">Back To All Parks</router-link>
    <hr />
    <h2>UPCOMING PARK EVENTS:</h2>
    <!-- <p>{{ park.park_events }}</p> -->
    <div v-for="event in events" :key="event.id">
      <h3>Event Name: {{ event.event_name }}</h3>
      <p>Date: {{ event.date }}</p>
      <p>Time: {{ event.time }}</p>
      <p>Attending: {{ event.attending }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park: {},
      users: [],
      events: [],
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      console.log("park show", response);
      this.park = response.data;
      this.events = response.data.park_events;
      this.users = response.data.users;
      console.log(response.data.park_events);
      console.log(response.data.users);
    });
  },
  methods: {},
};
</script>
