<template>
  <div class="parks-index">
    <h1>Search For Parks In Chicago!</h1>
    <h5>search by park name, district, facility, or park id:</h5>
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
