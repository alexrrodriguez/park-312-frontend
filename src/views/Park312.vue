<template>
  <div class="parks-index">
    <h1>All Parks</h1>
    <div v-for="park in parks" v-bind:key="park.id">
      <p>{{ park.name }}|{{ park.district }}|{{ park.address }}|{{ park.facility }}|{{ park.hours }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      parks: [],
    };
  },
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
