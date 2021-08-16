<template>
  <div class="park-event-edit">
    <h1>Edit Park Event</h1>
    <form v-on:submit.prevent="updateParkEvent(park_event)">
      <h2>PARK:</h2>
      <h3>{{ park_event.name }}</h3>
      <h2>FACILITY:</h2>
      <h3>{{ park_event.facility }}</h3>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Event Name:
      <input type="text" v-model="park_event.event_name" />
      Date:
      <input type="text" v-model="park_event.date" />
      Time:
      <input type="text" v-model="park_event.time" />
      Attending:
      <input type="text" v-model="park_event.attending" />
      <input type="submit" value="Update" />
    </form>
    <router-link to="/park_events">Back To Your Park Events</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park_event: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/park_events/" + this.$route.params.id).then((response) => {
      console.log("park event show", response);
      this.park_event = response.data;
    });
  },
  methods: {
    updateParkEvent: function (park_event) {
      var editParkEventParams = park_event;
      axios
        .patch("/park_events/" + park_event.id, editParkEventParams)
        .then((response) => {
          console.log("park event update", response);
          this.$router.push("/park_events");
        })
        .catch((error) => {
          console.log("park event update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
