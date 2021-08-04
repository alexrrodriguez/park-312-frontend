<template>
  <div class="parks-index">
    <h1>Search For Parks In Chicago!</h1>
    <div class="info">
      <!-- <img class="map" src="Chicago_neighborhoods_map.png" alt="" /> -->
      <div>
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
          width="600px"
          title="Parks - Chicago Park District Facilities (current)"
          height="400px"
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
    </div>

    <h2>Search by park name, district, facility, or park id:</h2>
    <input type="text" v-model="search" placeholder="search..." />
    <div v-for="park in filterBy(parks, search, 'name', 'district', 'facility', 'id')" v-bind:key="park.id">
      <p>
        PARK NAME: {{ park.name }} | PARK ID: {{ park.id }} | DISTRICT: {{ park.district }} | FACILITY:
        {{ park.facility }} |
      </p>
      <p>
        ADDRESS: {{ park.address }} | HOURS: {{ park.hours }}
        <router-link v-bind:to="`/parks/${park.id}`">More Info</router-link>
      </p>
    </div>
  </div>
</template>

<style>
.map {
  width: 200px;
  height: 200px;
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
