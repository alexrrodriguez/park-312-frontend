<template>
  <div class="parks-index">
    <h1>Search for Parks:</h1>
    <input type="text" v-model="search" placeholder="search district or facility.." />
    <div v-for="park in filterBy(parks, search, 'district', 'facility')" v-bind:key="park.id">
      <p>
        {{ park.name }} | {{ park.district }} | {{ park.address }} | {{ park.facility }} | {{ park.hours }}
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
