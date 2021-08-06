<template>
  <div class="parks-index">
    <h1>Filter Search For Parks By District, Facility, Indoor/Outdoor!</h1>
    Search District:
    <select v-model="selectedDistrict">
      <option value="">--Select a District--</option>
      <option value="FAR NORTH SIDE">FAR NORTH SIDE</option>
      <option value="NORTHWEST SIDE">NORTHWEST SIDE</option>
      <option value="NORTH SIDE">NORTH SIDE</option>
      <option value="CENTRAL CHICAGO">CENTRAL CHICAGO</option>
      <option value="WEST SIDE">WEST SIDE</option>
      <option value="SOUTHWEST SIDE">SOUTHWEST SIDE</option>
      <option value="SOUTH SIDE">SOUTH SIDE</option>
      <option value="FAR SOUTHWEST SIDE">FAR SOUTHWEST SIDE</option>
      <option value="FAR SOUTHEAST SIDE">FAR SOUTHEAST SIDE</option>
    </select>
    Search Facility:
    <select v-model="selectedFacility">
      <option value="">--Select a Facility--</option>
      <option value="BASEBALL">BASEBALL</option>
      <option value="BASKETBALL">BASKETBALL</option>
      <option value="BEACH">BEACH</option>
      <option value="BOXING">BOXING</option>
      <option value="COMMUNITY GARDEN">COMMUNITY GARDEN</option>
      <option value="FITNESS CENTER">FITNESS CENTER</option>
      <option value="FOOTBALL">FOOTBALL</option>
      <option value="GYMNASIUM">GYMNASIUM</option>
      <option value="HANDBALL">HANDBALL</option>
      <option value="HORSESHOE">HORSESHOE</option>
      <option value="ICESKATING">ICESKATING</option>
      <option value="PLAYGROUND">PLAYGROUND</option>
      <option value="POOL">POOL</option>
      <option value="ROLLER COURT">ROLLER COURT</option>
      <option value="SOCCER">SOCCER</option>
      <option value="SOFTBALL">SOFTBALL</option>
      <option value="TENNIS">TENNIS</option>
      <option value="TRACK">TRACK</option>
      <option value="TURF FIELD">TURF FIELD</option>
      <option value="VOLLEYBALL">VOLLEYBALL</option>
    </select>
    Indoor/Outdoor:
    <select>
      <option value="">--Select Indoor/Outdoor--</option>
      <option value="YES">INDOOR</option>
      <option value="YES">OUTDOOR</option>
    </select>
    <div>
      <button @click="search">Search</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>Park Name</th>
          <th>Park ID</th>
          <th>District</th>
          <th>Facility</th>
          <th>Address</th>
          <th>Hours</th>
          <th>Indoor</th>
          <th>Outdoor</th>
          <th>More Info</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="park in searchResult" :key="park.id">
          <td>Name: {{ park.name }}</td>
          <td>Park ID: {{ park.id }}</td>
          <td>District: {{ park.district }}</td>
          <td>Facility: {{ park.facility }}</td>
          <td>Address: {{ park.address }}</td>
          <td>Hours: {{ park.hours }}</td>
          <td>Indoor: {{ park.indoor }}</td>
          <td>Outdoor: {{ park.outdoor }}</td>
          <td><router-link v-bind:to="`/parks/${park.id}`">Info</router-link></td>
        </tr>
      </tbody>
    </table>

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
    <!-- <div class="list-item" v-for="park in searchResult" :key="park.id">
      <div class="card">
        <h3>Name: {{ park.name }}</h3>
        <p>District: {{ park.district }}</p>
        <p>Facility: {{ park.facility }}</p>
        <p>Address: {{ park.address }}</p>
        <p>Hours: {{ park.hours }}</p>
        <p>Indoor: {{ park.indoor }}</p>
        <p>Outdoor: {{ park.outdoor }}</p>
      </div>
    </div> -->
  </div>
</template>

<style>
.map {
  width: auto;
  height: 520px;
}
table {
  overflow-y: scroll;
  height: 400px;
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
import axios from "axios";

export default {
  data: function () {
    return {
      parks: [],
      selectedDistrict: "",
      selectedFacility: "",
      selectedInOut: "",
      searchResult: [],
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
    search: function () {
      let filterDistrict = this.selectedDistrict,
        filterFacility = this.selectedFacility;
      this.searchResult = this.parks.filter(function (park) {
        let filtered = true;
        if (filterDistrict && filterDistrict.length > 0) {
          filtered = park.district == filterDistrict;
        }
        if (filtered) {
          if (filterFacility && filterFacility.length > 0) {
            filtered = park.facility == filterFacility;
          }
        }
        return filtered;
      });
    },
  },
  mounted() {
    this.search();
  },
};
</script>
