<template>
  <div class="park-event-edit">
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h1>Update Park Event</h1>
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
                <br />
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
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="row gutter-40 col-mb-80">
            <div class="postcontent col-lg-9">
              <h2>Update Park Event:</h2>
              <form v-on:submit.prevent="updateParkEvent(park_event)" style="max-width: 25rem">
                <ul>
                  <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                </ul>
                <div class="form-group">
                  <label for="exampleInputEmail1">Event Name:</label>
                  <br />
                  <input class="form-control" type="text" v-model="park_event.event_name" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Date:</label>
                  <br />
                  <input class="form-control" type="text" v-model="park_event.date" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Time:</label>
                  <br />
                  <input class="form-control" type="text" v-model="park_event.time" />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Attending:</label>
                  <br />
                  <input class="form-control event-update" type="text" v-model="park_event.attending" />
                </div>
                <button type="submit" value="Update" class="btn btn-primary mt-3">Update</button>

                <!-- <input type="submit" value="Update" /> -->
              </form>
              <router-link to="/park_events">Back To Your Park Events</router-link>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>

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
