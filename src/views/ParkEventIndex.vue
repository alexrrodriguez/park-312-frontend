<template>
  <div class="park-events-index">
    <br />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row col-mb-50">
            <div class="col-12">
              <img
                v-bind:src="image"
                v-bind:alt="name"
                class="alignleft img-circle img-thumbnail my-0"
                style="max-width: 100px"
              />

              <div class="heading-block border-0">
                <h3>{{ name }}</h3>
                <span>Email: {{ email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <h1>{{ name }}</h1>
    <img class="profileimg" v-bind:src="image" v-bind:alt="name" />
    <h2>Email: {{ email }}</h2> -->
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Park Events:</h1>
      </div>
    </section>
    <hr />
    <div v-for="park_event in park_events" v-bind:key="park_event.id">
      <h2>PARK NAME: {{ park_event.name }}</h2>
      <h3>FACILITY: {{ park_event.facility }}</h3>
      <h4>EVENT NAME: {{ park_event.event_name }}</h4>
      <p>DATE: {{ park_event.date }}</p>
      <p>TIME: {{ park_event.time }}</p>
      <p>ATTENDING: {{ park_event.attending }}</p>
      <router-link v-bind:to="`/park_events/${park_event.id}`">More Details</router-link>
      <hr />
    </div>
  </div>
</template>
<style scoped>
.profileimg {
  border-radius: 50%;
  max-width: 10%;
  height: auto;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park_events: [],
      name: "",
      email: "",
      image: "",
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
        this.name = response.data[0]["user"]["name"];
        this.email = response.data[0]["user"]["email"];
        this.image = response.data[0]["user"]["image"];
      });
    },
  },
};
</script>
