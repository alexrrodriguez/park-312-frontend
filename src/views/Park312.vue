<template>
  <div class="parks-index">
    <h1>PARK 312</h1>
    <h1>Search For Parks And Create Park Events In Chicago!</h1>
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
    <h2>Search by Park Name, District, or Facility:</h2>
    Search:
    <input type="text" v-model="search" placeholder="search name, district, facility" />
    <table>
      <thead>
        <tr>
          <th>Park Name</th>
          <th>District</th>
          <th>Facility</th>
          <th>Park ID</th>
          <th>Address</th>
          <th>Hours</th>
          <th>More Info</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="park in filterBy(parks, search, 'name', 'district', 'facility')" v-bind:key="park.id">
          <td>{{ park.name }}</td>
          <td>{{ park.district }}</td>
          <td>{{ park.facility }}</td>
          <td>{{ park.id }}</td>
          <td>{{ park.address }}</td>
          <td>{{ park.hours }}</td>

          <td><router-link v-bind:to="`/parks/${park.id}`">Info</router-link></td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>
</template>

<style>
.map {
  max-width: 100%;
  width: auto;
  height: 520px;
}
table {
  overflow-y: scroll;
  height: 350px;
  display: block;
  border: 1px solid;
  margin-top: 50px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background: white;
  position: sticky;
  top: 0; /* Don't forget this, required for the stickiness */
}
.info {
  display: flex;
}
</style>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

import axios from "axios";
export default {
  data: function () {
    return {
      parks: [],
      search: "",
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
  },
  methods: {
    indexParks: function () {
      axios.get("/parks").then((response) => {
        console.log("parks index", response);
        this.parks = response.data;
      });
    },
  },
};
</script>
