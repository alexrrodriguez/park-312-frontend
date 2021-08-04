<template>
  <div class="park-event-new">
    <h1>New Park Event</h1>
    <form v-on:submit.prevent="createParkEvent()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Park Name:
      <input type="text" v-model="newParkEventParams.name" />
      Park ID:
      <input type="text" v-model="newParkEventParams.park_id" />
      Facility:
      <input type="text" v-model="newParkEventParams.facility" />
      Date:
      <input type="text" v-model="newParkEventParams.date" />
      Time:
      <input type="text" v-model="newParkEventParams.time" />
      Attending:
      <input type="text" v-model="newParkEventParams.attending" />
      |
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newParkEventParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createParkEvent: function () {
      axios
        .post("/park_events", this.newParkEventParams)
        .then((response) => {
          console.log("park event create", response);
          this.$router.push("/park_events");
        })
        .catch((error) => {
          console.log("park event create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
