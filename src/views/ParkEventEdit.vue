<template>
  <div class="park-event-edit">
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Edit Park Event</h1>
      </div>
    </section>
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row">
            <div class="col-md-8 ps-md-4">
              <div class="entry-title title-sm">
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
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>Edit Park Event</h1>
    <h2>PARK:</h2>
    <h3>{{ park_event.name }}</h3>
    <h2>FACILITY:</h2>
    <h3>{{ park_event.facility }}</h3> -->
    <form v-on:submit.prevent="updateParkEvent(park_event)">
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
