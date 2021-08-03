<template>
  <div class="park-show">
    <h1>{{ park.name }}</h1>
    <h3>{{ park.district }}</h3>
    <p>{{ park.address }}</p>
    <p>{{ park.facility }}</p>
    <p>Indoor: {{ park.indoor }} | Outdoor: {{ park.outdoor }}</p>
    <img v-bind:src="park.image" v-bind:alt="park.name" />
    <router-link to="/">Back To All Parks</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park: {},
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      console.log("park show", response);
      this.park = response.data;
    });
  },
  methods: {},
};
</script>
