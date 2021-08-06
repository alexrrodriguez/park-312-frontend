<template>
  <div class="park-event-new">
    <h1>Create New Park Event!</h1>
    <hr />
    <div class="info">
      <div class="element">
        <p style="margin-bottom: 3px">
          <a
            href="https://data.cityofchicago.org/Parks-Recreation/Parks-Chicago-Park-District-Facilities-current-/5yyk-qt9y"
            target="_blank"
            style="font-size: 12px; font-weight: bold; text-decoration: none; color: #333333; font-family: arial"
          >
            Parks - Chicago Park District Facilities (current)
          </a>
        </p>
        <iframe
          width="700px"
          title="Parks - Chicago Park District Facilities (current)"
          height="500px"
          src="https://data.cityofchicago.org/w/5yyk-qt9y/3q3f-6823?cur=pBqSF35NdLs&from=root"
          frameborder="0"
          scrolling="no"
        >
          <a
            href="https://data.cityofchicago.org/Parks-Recreation/Parks-Chicago-Park-District-Facilities-current-/5yyk-qt9y"
            title="Parks - Chicago Park District Facilities (current)"
            target="_blank"
          >
            Parks - Chicago Park District Facilities (current)
          </a>
        </iframe>
        <p><a href="http://www.socrata.com/" target="_blank">Powered by Socrata</a></p>
      </div>
      <div>
        DISTRICTS:
        <img class="map element" src="../assets/Chicago_neighborhoods_map.png" alt="" />
      </div>
    </div>
    <hr />
    <h1>Add A New Park Event To Your Schedule!</h1>
    <form v-on:submit.prevent="createParkEvent()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <ul>
        <li>
          Park Name:
          <input type="text" v-model="newParkEventParams.name" />
        </li>
        <li>
          Park ID:
          <input type="text" v-model="newParkEventParams.park_id" />
        </li>
        <li>
          Facility:
          <input type="text" v-model="newParkEventParams.facility" />
        </li>
        <li>
          Date:
          <input type="text" v-model="newParkEventParams.date" />
        </li>
        <li>
          Time:
          <input type="text" v-model="newParkEventParams.time" />
        </li>
        <li>
          Attending:
          <input type="text" v-model="newParkEventParams.attending" />
        </li>
        <li>
          <input type="submit" value="Create" />
        </li>
      </ul>
    </form>
    <hr />
    <h2>Search by Park Name, District, or Facility:</h2>
    Search:
    <input type="text" v-model="search" placeholder="search name, district, facility" />
    <table>
      <thead>
        <tr>
          <th>Park Name</th>
          <th>Park ID</th>
          <th>District</th>
          <th>Facility</th>
          <th>Address</th>
          <th>Hours</th>
          <th>Info</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="park in filterBy(parks, search, 'name', 'district', 'facility', 'id')" v-bind:key="park.id">
          <td>{{ park.name }}</td>
          <td>{{ park.id }}</td>
          <td>{{ park.district }}</td>
          <td>{{ park.facility }}</td>
          <td>{{ park.address }}</td>
          <td>{{ park.hours }}</td>
          <td><router-link v-bind:to="`/parks/${park.id}`">More Info</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

export default {
  data: function () {
    return {
      newParkEventParams: {},
      errors: [],
      parks: [],
      search: "",
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
  },
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
    indexParks: function () {
      axios.get("/parks").then((response) => {
        console.log("parks index", response);
        this.parks = response.data;
      });
    },
  },
};
</script>
