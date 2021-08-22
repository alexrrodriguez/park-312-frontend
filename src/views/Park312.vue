<template>
  <div class="parks-index">
    <section
      id="page-title"
      class="page-title-parallax page-title-dark"
      style="background-image: url('images/parallax/8.jpg'); background-size: cover; padding: 120px 0"
      data-bottom-top="background-position:0px 0px;"
      data-top-bottom="background-position:0px -300px;"
    >
      <div class="container clearfix home-title">
        <section class="page-title-center">
          <div class="container clearfix">
            <br />
            <h1 class="park312-head-title">PARK 312</h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>

    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h5>
          <span>Search For Parks And Find Park Events In Chicago</span>
        </h5>
        <h5><span>Or</span></h5>
        <h5>
          <span>
            <router-link v-bind:to="`/signup`">Signup</router-link>
            To Create Your Own Park Events!
          </span>
          <br />
          <br />
        </h5>
        <hr />
        <br />
        <br />
        <br />
        <h1>Search For Parks By District, Facility, And Indoor/Outdoor</h1>
        <br />
        <br />
        <strong>District Map -</strong>
        <i>(Click for Full Image)</i>
        <div>
          <a href="https://wikitravel.org/upload/shared//b/b3/Chicago_neighborhoods_map.png" target="_blank">
            <img class="map element" src="../assets/Chicago_neighborhoods_map.png" alt="" />
          </a>
        </div>
        <br />
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
      </div>
      <br />
      <div>
        <button @click="searchFilter">Search</button>
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>District</th>
                  <th>Facility</th>
                  <th>Park ID</th>
                  <th>Address</th>
                  <th>Hours</th>
                  <th>Indoor</th>
                  <th>Outdoor</th>
                  <th>More Info</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="park in searchResult" :key="park.id">
                  <td>{{ park.name }}</td>
                  <td>{{ park.district }}</td>
                  <td>{{ park.facility }}</td>
                  <td>{{ park.id }}</td>
                  <td>{{ park.address }}</td>
                  <td>{{ park.hours }}</td>
                  <td>{{ park.indoor }}</td>
                  <td>{{ park.outdoor }}</td>
                  <td><router-link v-bind:to="`/parks/${park.id}`">Info</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <br />
    <!-- #page-title end -->
    <!-- <h1>PARK 312</h1>
    <hr />
    <h1>Search For Parks In Chicago!</h1>
    <h2>Or</h2>
    <h1>
      <router-link v-bind:to="`/signup`">Signup</router-link>
      to Create Your Own Park Event!
    </h1> -->
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Search by Park Name:</h1>
        <br />
        Search:
        <input class="home_id" type="text" v-model="search" placeholder="park name.." />
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>District</th>
                  <th>Facility</th>
                  <th>Park ID</th>
                  <th>Address</th>
                  <th>Hours</th>
                  <th>Indoor</th>
                  <th>Outdoor</th>
                  <th>More Info</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="park in filterBy(parks, search, 'name')" v-bind:key="park.id">
                  <td>{{ park.name }}</td>
                  <td>{{ park.district }}</td>
                  <td>{{ park.facility }}</td>
                  <td>{{ park.id }}</td>
                  <td>{{ park.address }}</td>
                  <td>{{ park.hours }}</td>
                  <td>{{ park.indoor }}</td>
                  <td>{{ park.outdoor }}</td>
                  <td><router-link v-bind:to="`/parks/${park.id}`">Info</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Chicago Interactive Park Map</h1>
        <br />
        <p>Click The Blue Arrow To Search By Address</p>
        <br />
        <div class="info">
          <div class="element">
            <p style="margin-bottom: 3px">
              <a
                href="https://data.cityofchicago.org/Parks-Recreation/Parks-Chicago-Park-District-Facilities-current-/5yyk-qt9y"
                target="_blank"
                style="font-size: 12px; font-weight: bold; text-decoration: none; color: #333333; font-family: arial"
              ></a>
            </p>
            <iframe
              width="400px"
              title="Parks - Chicago Park District Facilities (current)"
              height="600px"
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
      </div>
    </section>
    <!-- <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h1>Search by Park Name:</h1>
        <br />
        Search:
        <input class="home_id" type="text" v-model="search" placeholder="park name.." />
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
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
                <tr v-for="park in filterBy(parks, search, 'name')" v-bind:key="park.id">
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
          </div>
        </div>
      </div>
    </section> -->
    <!-- <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <h2>Or..</h2>
        <h1>Search For Parks By District, Facility, And Indoor/Outdoor!</h1>
        <br />
        <br />
        <strong>District Map -</strong>
        <i>(Click for Full Image)</i>
        <div>
          <a href="https://wikitravel.org/upload/shared//b/b3/Chicago_neighborhoods_map.png" target="_blank">
            <img class="map element" src="../assets/Chicago_neighborhoods_map.png" alt="" />
          </a>
        </div>
        <br />
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
      </div>
      <br />
      <div>
        <button @click="searchFilter">Search</button>
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>District</th>
                  <th>Facility</th>
                  <th>Park ID</th>
                  <th>Address</th>
                  <th>Hours</th>
                  <th>Indoor</th>
                  <th>Outdoor</th>
                  <th>More Info</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="park in searchResult" :key="park.id">
                  <td>{{ park.name }}</td>
                  <td>{{ park.district }}</td>
                  <td>{{ park.facility }}</td>
                  <td>{{ park.id }}</td>
                  <td>{{ park.address }}</td>
                  <td>{{ park.hours }}</td>
                  <td>{{ park.indoor }}</td>
                  <td>{{ park.outdoor }}</td>
                  <td><router-link v-bind:to="`/parks/${park.id}`">Info</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section> -->
    <br />
  </div>
</template>

<style>
.home-screen-title {
  margin: 0 0 0 0;
}
.home-title {
  text-align: center;
  text-shadow: 2px 2px 2px black;
}
.park312-title {
  width: 25%;
  margin: auto;
  display: inline-flex;
  background-color: white;
}
.park312-head-title {
  margin: 0;
}
.page-title-312 {
  background-color: #444;
}
.home_id {
  width: 400px;
}
.map {
  width: auto;
  height: 500px;
}
table {
  overflow-y: scroll;
  height: 450px;
  display: block;
  border: 1px solid;
  margin-top: 50px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background: white;
  /* position: sticky;
  top: 0;  */
}
/* .info {
  display: flex;
} */
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
      selectedDistrict: "",
      selectedFacility: "",
      selectedInOut: "",
      searchResult: [],
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
    searchFilter: function () {
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
    this.searchFilter();
  },
};
</script>
