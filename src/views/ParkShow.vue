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
    <div v-if="park.park_events.length > 2">
      <div>
        <h3>Event Name: {{ park.park_events[0]["event_name"] }}</h3>
        <h4>Event Creator: {{ park.users[0]["name"] }}</h4>
        <p>Email: {{ park.users[0]["email"] }}</p>
        <p>Date: {{ park.park_events[0]["date"] }}</p>
        <p>Time: {{ park.park_events[0]["time"] }}</p>
        <p>Attending: {{ park.park_events[0]["attending"] }}</p>
      </div>
      <div>
        <h3>Event Name: {{ park.park_events[1]["event_name"] }}</h3>
        <h4>Event Creator: {{ park.users[1]["name"] }}</h4>
        <p>Email: {{ park.users[1]["email"] }}</p>
        <p>Date: {{ park.park_events[1]["date"] }}</p>
        <p>Time: {{ park.park_events[1]["time"] }}</p>
        <p>Attending: {{ park.park_events[1]["attending"] }}</p>
      </div>
      <div>
        <h3>Event Name: {{ park.park_events[2]["event_name"] }}</h3>
        <h4>Event Creator: {{ park.users[2]["name"] }}</h4>
        <p>Email: {{ park.users[2]["email"] }}</p>
        <p>Date: {{ park.park_events[2]["date"] }}</p>
        <p>Time: {{ park.park_events[2]["time"] }}</p>
        <p>Attending: {{ park.park_events[2]["attending"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park: {},
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      console.log("park show", response);
      this.park = response.data;
    });
  },
  methods: {},
};
</script>
